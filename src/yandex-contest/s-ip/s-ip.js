const IPV4 = 'IPv4';
const IPV6 = 'IPv6';
const ERROR = 'Error';

function checkIpAddress(ip) {
  function isValidIP(
    ip,
    disableLeadingZero,
    partsCount,
    partMinLength,
    partMaxLength,
    partSeparator,
    charRanges,
    minValue,
    maxValue
  ) {
    function isCorrectPart(part) {
      if (disableLeadingZero && part[0] === '0' && part.length > 1) return false;
      if (part.length < partMinLength || part.length > partMaxLength) return false;

      const chars = part.split('');
      const inRange = chars.every((char) => charRanges.some((range) => char >= range.min && char <= range.max));
      if (!inRange) return false;

      if (minValue !== undefined && maxValue !== undefined) {
        const value = Number(part);
        if (isNaN(value) || value < minValue || value > maxValue) return false;
      }

      return true;
    }

    const parts = ip.split(partSeparator);
    if (parts.length !== partsCount) return false;
    return parts.every(isCorrectPart);
  }

  const isValidV4 = isValidIP(ip, true, 4, 1, 3, '.', [{ min: '0', max: '9' }], 0, 255);
  const isValidV6 = isValidIP(ip, false, 8, 1, 4, ':', [{ min: '0', max: '9' }, { min: 'a', max: 'f' },{ min: 'A', max: 'F' }]);

  if (isValidV4) return IPV4;
  if (isValidV6) return IPV6;

  return ERROR;
}

exports.checkIpAddress = checkIpAddress;
