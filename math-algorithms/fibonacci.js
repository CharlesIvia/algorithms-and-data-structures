//Problem: Given a number n, find the first n elements of the fibonacci sequence

function fibonacci(n) {
  let fib = [0, 1]; //first two values of a fibonacci sequence ar 0 and 1
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(3));
console.log(fibonacci(7));
