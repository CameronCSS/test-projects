let n = 5;

 export function fizzBuzz(n) {
    if (n % 5 === 0 && n % 3 === 0) return ('FizzBuzz');
 else if (n % 5 === 0) return ('Buzz');
 else if (n % 3 === 0) return ('Fizz');
 else return ('Error');
 }

 fizzBuzz(n);
 console.log(fizzBuzz(n));