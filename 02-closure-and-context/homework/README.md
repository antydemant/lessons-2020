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

# Let's reinvent jQuery: Mini Edition :) ("this" + Closure)

UPD: Please take a look at the similar task here https://javascript.info/task/chain-calls 
UPD: Here is the archive with initial project: [Homework-Archive.zip](Homework-Archive.zip)

Please copy file content from here: [index.html](index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Including script below -->
    <script src="script.js"></script>
    <style>
        .custom-class {
            background-color: aqua;
        }

        .redundant-custom-class {
            
        }
    </style>
</head>
<body>
    <div id="my-element" class="redundant-custom-class">
        <img src="cat.jpg"/>
    </div>
</body>
</html>
```

and one more file which is also located near the index.html: [script.js](script.js)
```javascript
function jQueryMini(element) {
    let initializedElement = document.querySelector(element);

    // Use your imagination below :)
    return {
        css: /* ...some magic... */,
        addClass: /* ...some magic... */,
        removeClass: /* ...some magic... */,
        html: /* ...some magic... */,
    }
}


window.onload = function() { // will code after page loaded
    // Usage
    const myElement = jQueryMini('#my-element')
        .css('padding', '150px')
        .css('margin', '150px')
        .css('border', '2px')
        .css('border-color', 'black')
        .css('border-style', 'solid')
        .removeClass('redundant-custom-class')
        .addClass('custom-class')
        .css('text-align', 'center');

    console.log(myElement.html()); /* Output:   <div id="my-element" class="custom-class" style="padding: 150px; margin: 150px; border: 2px solid black; text-align: center;">
                                                    <img src="cat.jpg">
                                                </div>
                                    */
}
```

Result:
![https://i.imgur.com/lK7hBs7.png](https://i.imgur.com/lK7hBs7.png)