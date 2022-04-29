const COLORS = {
  FgYellow: "\x1b[33m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
};

function logColorizedText(text, color) {
  const resetColorCode = "\x1b[0m";
  console.log(`${color}%s${resetColorCode}`, text);
}

function isArrayEquals(arrA, arrB) {
  return (
    arrA.length === arrB.length &&
    arrA.every((value, index) => value === arrB[index])
  );
}

function isEqual(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return isArrayEquals(a, b);
  }

  return a === b;
}

export function runTests(name, func, testSet) {
  logColorizedText(name, COLORS.FgYellow);

  testSet.forEach(({ input, output }) => {
    const result = func(input);
    const isCorrect = isEqual(result, output);

    const statusText = isCorrect ? "PASS" : "FAIL";
    const textColor = isCorrect ? COLORS.FgGreen : COLORS.FgRed;

    logColorizedText(
      `${statusText}: input: ${input}, output: ${result}`,
      textColor
    );

    if (!isCorrect) {
      console.log("Expected: ", output);
    }
  });
}
