const compose = (...pipes) => {
  return (...initialParams) => {
    return pipes.reduceRight((params, pipe) => {
      const pipeParams = Array.isArray(params) ? params : [params];
      return pipe(...pipeParams);
    }, initialParams);
  };
};

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

const calc = compose(square, times2, sum);

calc(3, 4); // 196
calc(5, 6); // 484
