# Create a string variable with quoted text in it. 
For example: `'How you doin'?', Joey said'.`

# Parsing numbers

| str                    | parseInt(str) | parseFloat(str) | Number(str) | +str | str &#124; 0 |
|:---------------------- |:-------------:|:---------------:|:-----------:|:----:|:------------:|
| '1234'                 | ?             | ?               | ?           | ?    | ?            |
| '1238abc'              | ?             | ?               | ?           | ?    | ?            |
| '0.15'                 | ?             | ?               | ?           | ?    | ?            |
| '3.14ivan'             | ?             | ?               | ?           | ?    | ?            |
| 'Infinity'             | ?             | ?               | ?           | ?    | ?            |
| '99999999999999999999' | ?             | ?               | ?           | ?    | ?            |

# Use all `console` methods 

1. console.debug(message)
2. console.info(message)
3. console.log(message)
3. console.warn(message)
4. console.error(message)
5 and so on.

# Create function to sort odd numbers in array

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

```javascript
const arr = [2, 3, 7, 4, 6, 1, 5, 8, 9];
const sorted = sortOdd(arr);
console.log(sorted); // [2, 1, 3, 4, 6, 5, 7, 8, 9] ¯\_(ツ)_/¯

function sortOdd(arr) {
 // some code...
}
```

#### Tips: try use the following functions
1. [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) (to create new array of odd numbers from original "arr" array)
2. [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) (to sort array of odd numbers created above)
3. [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) (iterate the original "arr" array )


# Create function to generate random colors in HEX format (e.g. #90d2d8, #7c0724, #0049ff)

Your task is to generate random HEX color.
HEX color is a 6-digit, 24 bit, hexidecimal number.

```javascript
getRandomHexColor(); // #0f19ab
getRandomHexColor(); // #e99064
getRandomHexColor(); // #7c0724

function getRandomHexColor(arr) {
 // some code...
}
```

#### Tips:
1. [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) (try to generate 2^24 random number)
2. [Number.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) (try to convert random number to 16-bit number) (to add some zeros at the beginning of the string, e.g #f724 -> #00f724, #7d2d8 -> #07d2d8 )
3. [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) (iterate the original "arr" array )
4. [String.prototype.padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)


