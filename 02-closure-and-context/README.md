# JavaScript Closures

```javascript
const counter = function() {
    let count = 0;

    return {
        increment: function() {
            return count++;
        },
        decrement: function() {
            return count--;
        }
    }
}

const count1 = counter();
const count2 = counter();

count1.increment(); // Output: 0
count1.increment(); // Output: 1
count2.increment(); // Output: 0

count1.decrement(); // Output: 2
count2.decrement(); // Output: 1
```

Nice to read: 
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [https://medium.com/@sshambir/%D0%BE%D1%81%D0%B2%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-5b83267ef7d1](https://medium.com/@sshambir/%D0%BE%D1%81%D0%B2%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-5b83267ef7d1)


# Context

Nice to read:
- [https://learn.javascript.ru/object-methods](https://learn.javascript.ru/object-methods)
- [http://ryanmorr.com/understanding-scope-and-context-in-javascript/](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
- [https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c](https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c)