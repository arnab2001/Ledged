function encodeRFC5987ValueChars(str) {
  return encodeURIComponent(str)
    .replace(/['()]/g, escape)
    .replace(/\*/g, "%2A")
    .replace(/%(?:7C|60|5E)/g, unescape);
}

export default encodeRFC5987ValueChars;
