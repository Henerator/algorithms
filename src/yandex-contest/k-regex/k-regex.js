const Quantifier = {
  ExactlyOne: 'exactlyOne',
  ZeroOrMore: 'zeroOrMore',
};

const StateType = {
  Element: 'element',
  Wildcard: 'wildcard',
};

function parse(re) {
  const stack = [];
  let i = 0;

  while (i < re.length) {
    const next = re[i];
    switch (next) {
      case '?': {
        stack.push({
          type: StateType.Wildcard,
          quantifier: Quantifier.ExactlyOne,
        });
        break;
      }

      case '*': {
        stack.push({
          type: StateType.Wildcard,
          quantifier: Quantifier.ZeroOrMore,
        });
        break;
      }

      default: {
        stack.push({
          type: StateType.Element,
          value: next,
          quantifier: Quantifier.ExactlyOne,
        });
      }
    }

    i++;
    continue;
  }

  return stack;
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

function stringMatchesTemplate(stringToCheck, template) {
  const states = parse(template);
  const [isMatch, consumed] = test(states, stringToCheck);
  return isMatch && consumed === stringToCheck.length;
}

exports.stringMatchesTemplate = stringMatchesTemplate;
