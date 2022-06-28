module.exports = function reverse(n) {
  let strN = String(Math.abs(n));
  let L = strN.length;
  let N = [];
  let result = '';

  for (let i = 0; i < L; i++) {
    N[i] = strN[L - 1 - i];
  };

  result = N.join('');

  for (let i = 0; i < L; i++) {
    if ((result[0] === '0') && (result.length > 1)) {
      result = result.slice(1);
    };
  };

  return result;
}