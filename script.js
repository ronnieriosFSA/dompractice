//DOCUMENT OBJECT MODEL
const data = [
    { id: 1, name: 'momo', hobbies: 'run around' },
    { id: 2, name: 'jaxon', hobbies: 'being chubby' },
    { id: 3, name: 'bizkit', hobbies: 'sunbathing' },
]

//use some elements
//hold my button element
const button = document.getElementById('display-btn')

//hold my list
const todoList = document.getElementById('to-do')


function displayData(data) {
    data.forEach(catObj => {
        //creating the element that will hold the data
        let catNameElement = document.createElement('h1')
        //put the data in the h1 that i created <h1>name will be the obj.name</h1>
        catNameElement.innerText = `Name: ${catObj.name}`

        //append add it to that section (append allows for more than one)
        //adding an ELEMENT, adding the h1
        todoList.append(catNameElement)
    });
}

//button has an eventListner, "click", function callback
button.addEventListener("click",() => displayData(data))
