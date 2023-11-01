const fibsRec = (n) => n < 2 ? n : (fibsRec(n - 1) + fibsRec(n - 2))

console.log(fibsRec(13))


