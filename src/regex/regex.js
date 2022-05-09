const Quantifier = {
  ExactlyOne: 'exactlyOne',
  ZeroOrMore: 'zeroOrMore',
  ZeroOrOne: 'zeroOrOne',
};

const StateType = {
  Element: 'element',
  GroupElement: 'groupElement',
  Wildcard: 'wildcard',
};

function last(stack) {
  return stack[stack.length - 1];
}

function parse(re) {
  const stack = [[]];
  let i = 0;

  while (i < re.length) {
    const next = re[i];
    switch (next) {
      case '.': {
        last(stack).push({
          type: StateType.Wildcard,
          quantifier: Quantifier.ExactlyOne,
        });
        i++;
        continue;
      }

      case '?': {
        const lastElement = last(last(stack));
        if (!lastElement || lastElement.quantifier !== Quantifier.ExactlyOne) {
          throw new Error('Quantifier must follow an unquantified element or group', { index: i, symbol: next });
        }
        lastElement.quantifier = Quantifier.ZeroOrOne;
        i++;
        continue;
      }

      case '*': {
        const lastElement = last(last(stack));
        if (!lastElement || lastElement.quantifier !== Quantifier.ExactlyOne) {
          throw new Error('Quantifier must follow an unquantified element or group', { index: i, symbol: next });
        }
        lastElement.quantifier = Quantifier.ZeroOrMore;
        i++;
        continue;
      }

      case '+': {
        const lastElement = last(last(stack));
        if (!lastElement || lastElement.quantifier !== Quantifier.ExactlyOne) {
          throw new Error('Quantifier must follow an unquantified element or group', { index: i, symbol: next });
        }
        const zeroOrMoreCopy = { ...lastElement, quantifier: Quantifier.ZeroOrMore };
        last(stack).push(zeroOrMoreCopy);
        i++;
        continue;
      }

      case '(': {
        stack.push([]);
        i++;
        continue;
      }

      case ')': {
        if (stack.length <= 1) {
          throw new Error('No group to close', { index: i });
        }

        const states = stack.pop();
        last(stack).push({
          type: StateType.GroupElement,
          states,
          quantifier: Quantifier.ExactlyOne,
        });
        i++;
        continue;
      }

      case '\\': {
        if (i + 1 >= re.length) {
          throw new Error('Bad escape character', { index: i });
        }

        last(stack).push({
          type: StateType.Element,
          value: re[i + 1],
          quantifier: Quantifier.ExactlyOne,
        });

        i += 2;
        continue;
      }

      default: {
        last(stack).push({
          type: StateType.Element,
          value: next,
          quantifier: Quantifier.ExactlyOne,
        });
        i++;
        continue;
      }
    }
  }

  if (stack.length !== 1) {
    throw new Error('Unmatched groupd in regular expression');
  }

  return stack[0];
}

function stateMatchesStringAtIndex(state, str, i) {
  if (i >= str.length) {
    return [false, 0];
  }

  if (state.type === StateType.Wildcard) {
    return [true, 1];
  }

  if (state.type === StateType.Element) {
    const match = state.value === str[i];
    return [match, match ? 1 : 0];
  }

  if (state.type === StateType.GroupElement) {
    return test(state.states, str.slice(i));
  }

  throw new Error('Unsupported element type', { index: i, symbol: str[i] });
}

function test(states, str) {
  const queue = states.slice();
  const backtrackStack = [];

  let i = 0;
  let currentState = queue.shift();

  function backtrack() {
    queue.unshift(currentState);
    let couldBacktrack = false;

    while (backtrackStack.length) {
      const { isBacktrackable, state, consumptions } = backtrackStack.pop();

      if (isBacktrackable) {
        if (consumptions.length === 0) {
          queue.unshift(state);
          continue;
        }

        const n = consumptions.pop();
        i -= n;
        backtrackStack.push({ isBacktrackable, state, consumptions });
        couldBacktrack = true;
        break;
      }

      queue.unshift(state);
      consumptions.forEach((n) => {
        i -= n;
      });
    }

    if (couldBacktrack) {
      currentState = queue.shift();
    }

    return couldBacktrack;
  }

  while (currentState) {
    switch (currentState.quantifier) {
      case Quantifier.ExactlyOne: {
        const [isMatch, consumed] = stateMatchesStringAtIndex(currentState, str, i);

        if (!isMatch) {
          const indexBeforeBacktracking = i;
          const couldBacktrack = backtrack();

          if (!couldBacktrack) {
            return [false, indexBeforeBacktracking];
          }

          continue;
        }

        backtrackStack.push({
          isBacktrackable: false,
          state: currentState,
          consumptions: [consumed],
        });

        i += consumed;
        currentState = queue.shift();
        continue;
      }

      case Quantifier.ZeroOrOne: {
        if (i >= str.length) {
          backtrackStack.push({
            isBacktrackable: false,
            state: currentState,
            consumptions: [0],
          });

          currentState = queue.shift();
          continue;
        }

        const [isMatch, consumed] = stateMatchesStringAtIndex(currentState, str, i);
        i += consumed;

        backtrackStack.push({
          isBacktrackable: isMatch && consumed > 0,
          state: currentState,
          consumptions: [consumed],
        });

        currentState = queue.shift();
        continue;
      }

      case Quantifier.ZeroOrMore: {
        const backtrackState = {
          isBacktrackable: true,
          state: currentState,
          consumptions: [],
        };

        while (true) {
          if (i >= str.length) {
            if (backtrackState.consumptions.length === 0) {
              backtrackState.consumptions.push(0);
              backtrackState.isBacktrackable = false;
            }
            backtrackStack.push(backtrackState);

            currentState = queue.shift();
            break;
          }

          const [isMatch, consumed] = stateMatchesStringAtIndex(currentState, str, i);
          if (!isMatch || consumed === 0) {
            if (backtrackState.consumptions.length === 0) {
              backtrackState.consumptions.push(0);
              backtrackState.isBacktrackable = false;
            }
            backtrackStack.push(backtrackState);

            currentState = queue.shift();
            break;
          }

          backtrackState.consumptions.push(consumed);
          i += consumed;
        }
        continue;
      }

      default: {
        throw new Error('Unsupported operation', { index: i });
      }
    }
  }

  return [true, i];
}

function match(text, template) {
  const states = parse(template);
  const [isMatch] = test(states, text);
  return isMatch;
}

const regex = '.*bc';
const exampleStr = 'aaabc';

console.log(match(exampleStr, regex));
