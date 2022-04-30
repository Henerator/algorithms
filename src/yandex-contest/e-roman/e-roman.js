function convertToArabic(romanNumber) {
  const romanRegExp =
    /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  if (!romanRegExp.test(romanNumber)) {
    return -1;
  }

  const romanIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return romanNumber.split("").reduceRight(
    (acc, item) => {
      const value = romanIntMap[item];
      return (
        value < acc.prev ? (acc.sum -= value) : (acc.sum += value),
        (acc.prev = value),
        acc
      );
    },
    { sum: 0, prev: 0 }
  ).sum;
}

exports.convertToArabic = convertToArabic;
