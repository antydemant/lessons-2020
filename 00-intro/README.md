# Installation

* Official website - https://nodejs.org/en/

![Image](https://nimbus-screenshots.s3.amazonaws.com/s/d404c40261ff6d4be5e1ec49437beac4.png)

* Check installed version of Node.js

Terminal:
```zsh
ihor.ostapchuk@ihorostapchuk:~$ node -v
v12.16.2
```

* Check installed version of Node Package Manager (NPM)

Terminal:
```zsh
ihor.ostapchuk@ihorostapchuk:~$ npm -v
6.14.4
```

* First Hello World

File: [hello.js](hello.js)
```javascript
console.log('Hello', process.argv[2]);
```

Terminal:
```zsh
ihor.ostapchuk@ihorostapchuk:~$ node hello.js World!
Hello World!
```

---

#### *80lvl: Node.js version management - (https://github.com/nvm-sh/nvm) or https://github.com/tj/n

Terminal:
```zsh
ihor.ostapchuk@ihorostapchuk:~$ nvm use stable
Now using node v12.16.2 (npm v6.14.4)
ihor.ostapchuk@ihorostapchuk:~$ nvm use v10.18.1
Now using node v10.18.1 (npm v6.13.4)
```

