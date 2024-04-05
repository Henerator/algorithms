function romanToIntV1(s) {
  const romanIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanDigits = s.split('');
  let sum = 0;
  let prevIntValue = 0;

  while (romanDigits.length) {
    const romanValue = romanDigits.pop();
    const intValue = romanIntMap[romanValue];

    if (intValue < prevIntValue) {
      sum -= intValue;
    } else {
      sum += intValue;
    }

    prevIntValue = intValue;
  }

  return sum;
}

function romanToIntV2(s) {
  const romanIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return s.split('').reduceRight(
    (acc, item) => {
      const value = romanIntMap[item];
      return value < acc.prev ? (acc.sum -= value) : (acc.sum += value), (acc.prev = value), acc;
    },
    { sum: 0, prev: 0 }
  ).sum;
}

exports.romanToIntV1 = romanToIntV1;
exports.romanToIntV2 = romanToIntV2;
