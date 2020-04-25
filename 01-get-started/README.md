# Debugging Node.js
* JavaScript can also be debugged with Node.js:
    * Open Terminal
    * In Terminal, navigate to the folder of the file to debug
    * A browser opens with the code, and it can be debugged
        ```zsh
        ihor.ostapchuk@ihorostapchuk:~$ npm install -g node-inspector
        node-inspect FILE_TO_DEBUG
        ```

* JavaScript `console` Object

The console object exists only if there is a debugging tool that supports it. `Used to write log messages at runtime`

Methods of the console object:
1. console.debug(message)
2. console.info(message)
3. console.log(message)
3. console.warn(message)
4. console.error(message)
5. and so on... https://developer.mozilla.org/en-US/docs/Web/API/Console

---

# Data Types and Variables
JavaScript is weakly typed language:
 - allows most operations on values without regards to their types
 - values have types, variables don't
 - variables can hold any type of value
 - all variables are declared with the keywords var, let or const
 
The syntax is the following:
```javascript
<var | let | const> <identifier> [= <initialization>];
```

```javascript
var count = 5; 
count = 'five';
var name = 'Ihor Ostapchuk';
```
```javascript
let mark = 5.25;
mark = true;
```
```javascript
const MAX_COUNT = 250;
MAX_COUNT = 0; // Error - Attempt to assign to const or readonly variable
```

# Operators by categories in JavaScript
|        Category      |                                  Operators                                    |
|:-------------------- |:----------------------------------------------------------------------------- |
| Arithmetic           | `+` `-` `*` `/` `%` `++` `--`                                                 |
| Logical              | `&&` <code>&#124;&#124;</code> `^` `!`                                        |
| Binary               | `&` <code>&#124;</code> `^` `~` `<<` `>>` `>>>`                               |
| Comparison           | `==` `!=` `<` `>` `<=` `>=` `===` `!==`                                       |
| Assignment           | `=` `+=` `-=` `*=` `/=` `%=` <code>&#124;=</code> `^=` `<<=` `>>=`            |
| Concatenation        | `+`                                                                           |
| Other                | `.` `[]` `()` `?:` `new` `in` `,` `delete` `void` `typeof` `instanceof` `...` |

These values are falsy
- `false`, `0`, `""` / `''`, `null`, `undefined`, `NaN`

All other values are truthy

https://www.sitepoint.com/javascript-truthy-falsy/


Nice to read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
