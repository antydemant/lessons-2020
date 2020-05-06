# Memoize function (closure). 
![javaScript closure meme](https://miro.medium.com/max/400/1*d0wE93HI4MWHXPRIchr_Kg.jpeg)

Let's imagine that you have a function (e.g. factorial ) that executes too often with the same arguments and it takes much time to do the redundant calculations.

```javascript
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(20)); // Output: 2432902008176640000
console.log(factorial(20)); // Output: 2432902008176640000
console.log(factorial(20)); // Output: 2432902008176640000
console.log(factorial(20)); // Output: 2432902008176640000
```

You decided to cache the results of previous function executions by argument:
```javascript
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

function memoize(fn) {
    // Description: 
    // if cache hit then print console.log('Fetching from cache without calculation, yeah!');
    // else print console.log('Calculating result, wait a sec!')
    
    // ... Use your imagination here :) ... 
}

const memoizedFactorial = memoize(factorial);


console.log(memoizedFactorial(20)); /* Output: Calculating result, wait a sec!
                                       Output: 2432902008176640000
                                    */

console.log(memoizedFactorial(20)); /* Output: Fetching from cache without calculation, yeah!
                                       Output: 2432902008176640000
                                    */ 
console.log(memoizedFactorial(20)); /* Output: Fetching from cache without calculation, yeah!
                                       Output: 2432902008176640000
                                    */ 
console.log(memoizedFactorial(20)); /* Output: Fetching from cache without calculation, yeah!
                                       Output: 2432902008176640000
                                    */ 
```

Your turn :)

![Shia LaBeouf](https://i.imgur.com/i4Ve3If.png)

# One more task - TBD tomorrow, sorry for inconvenience :)