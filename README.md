# the DOM
- stands for Document object model
- the document is how your organize all of your HTML elements

## a couple things to keep in mind

###  create the varaibales of the elements you want to use
```js
const button = document.getElementById('display-btn')
```
- store that element and what i can do with the element in a variable

### what you want to do with that variable
- do you want to overwrite the text of it?
- do you want to use it as a reference to add more HTML elements to it?
- do you need to use it as a button for example? etc.

### if you make new elements. . .
- you have to append it somewhere, in other words attach it to one of the existing DOM elements
`
```js
 //append add it to that section (append allows for more than one)
//adding an ELEMENT, adding the h1
todoList.append(catNameElement)
```

