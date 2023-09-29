# Small MessageGenerator
Random Mesage Generate automatically 
## About the project

- Program is used to generate random messages
- The messages generated are not true
- 5 data sources are combined to generate these messages
- The function which is used to generate the messages returns a value without displaying it, console.log() is used to display the return value

```javascript
console.log(MessageGenerator())
```
Run the program to view the random message in your js support editor
```bash
node index.js
```
## Random generation

The random property of Math object is used to generation random value used in the program

```javascript
Math.random()
```
The output Message are different each time the program are execute
### Fisrt execution
```text
Bonsoir John, Google a été créée en 2004 par Larry Page et compte aujourd'hui plus de 4 milliards d'utilisateurs .
Il a été conçu par des passionnés de|d' Developement Web.
Vous retrouverez toute l'histoire dans le livre -The Giant Story- de Steve Jobs qui est à moins 450 Pages.
```
### Second execution
```bash
Hey Emma, Pinterest a été créée en 1967 par Elon Musk et compte aujourd'hui +45M d'utilisateurs .
Il a été conçu par des passionnés de|d' Ux Design.
Vous retrouverez toute l'histoire dans le livre -Dev Strory- de Natan  Spenser qui est à moins 1245 Pages.
```
? The messages generated are not necessarily true but they make sense

## Documentation
- More about [Math.ramdon()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) on Mdn javascript Global Object
- More about dataSource [Array storage](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [Object storage](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
