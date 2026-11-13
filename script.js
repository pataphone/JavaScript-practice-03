const display = document.getElementById("display")
const buttons = document.getElementById("buttons")

function createButton(text, type, className, id) {
    const element = document.createElement(type);
    if (className) {element.classList.add(className)}
    if (id) {element.id = id}
    element.innerText = text;
    return element
}



for (i = 0, j = 0; i <= 9; i++) {
    buttons.appendChild(createButton(i, 'button', 'btn'))
}

const other = ['=', 'X', '+', '-', '*', '/', 'AC']
for (i of other) {
    buttons.appendChild(createButton(i, 'button', 'operator', i))
}



const numbers = /\d/
const operators = /[-+*/]/
buttons.addEventListener('click', () => {
    let data = event.target.innerText
    console.log(data)
    if (numbers.test(data)) {
        display.value === '0' ? display.value = data : display.value += data
    }
    else if (operators.test(data) && !operators.test(display.value[display.value.length - 1])) {
        display.value += data
    }
    else if (data === '=') {
        display.value = eval(display.value)
    }
    else if (data === 'AC') {
        display.value = '0'
    }
    else if (data === 'X') {
        display.value = display.value.slice(0, -1)
    }

})

display.addEventListener('keydown', () => {
    let data
    data = event.key

    if (!numbers.test(data) && !(operators.test(data) && !operators.test(display.value[display.value.length - 1])) && !(data === 'Backspace')) {
        event.preventDefault()
        return
    }

    if (data === '=') {
        display.value = eval(display.value)
    }
})