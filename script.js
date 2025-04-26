const button = document.getElementById('my-button')
const myDiv = document.getElementById('my-div')

button.addEventListener('mouseenter', () => {
    myDiv.style.color = 'red'
    myDiv.innerHTML = `
    <div>
        Mouse entered
    </div>`
})

//  functions - keywords, indents
//  variable scope - Set / UpdateContext
//  switch / match
//  lists - tables
//  lambda - filter, maybe map?
//  classes and objects
//  enums

//  exception handling?
//  SQL?
