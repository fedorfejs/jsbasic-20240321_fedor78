function factorial(n) {
  result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
