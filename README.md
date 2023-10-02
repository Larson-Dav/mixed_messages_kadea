# Small MessageGenerator

Random Mesage Generate automatically

## About the project

- The purpose of the program is to generate random messages.
- These generated messages are not necessarily true
- Five data sources are mixed to generate the messages
- Function returns message without display, console.log() is used for display

```javascript
console.log(MessageGenerator());
```

Run the program in a browser or text editor that supports javascript, for node use the following command

```bash
node index.js
```

## Random generation

The random property of Math object is used to generation random value used in the program

```javascript
Math.random();
```

The random property of the Math javascript object is used to randomly generate the values used by the generation function.

### Fisrt run

```text
Bonsoir John, Google a été créée en 2004 par Larry Page et compte aujourd'hui plus de 4 milliards d'utilisateurs .
Il a été conçu par des passionnés de|d' Developement Web.
Vous retrouverez toute l'histoire dans le livre -The Giant Story- de Steve Jobs qui est à moins 450 Pages.
```

### Second run

```text
Hey Emma, Pinterest a été créée en 1967 par Elon Musk et compte aujourd'hui +45M d'utilisateurs .
Il a été conçu par des passionnés de|d' Ux Design.
Vous retrouverez toute l'histoire dans le livre -Dev Strory- de Natan  Spenser qui est à moins 1245 Pages.
```

? The messages generated are not necessarily true but they do make sense

## Documentation

- More about [Math.ramdon()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) on Mdn javascript Global Object
- More about dataSource [Array storage](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [Object storage](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
