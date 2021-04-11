const inputsBox = document.querySelectorAll(`.box__inputs`)

const inputTop = document.querySelector(`#box--top`)
const inputBottom = document.querySelector(`#box--bottom`)
const inputLeft = document.querySelector(`#box--left`)
const inputRight = document.querySelector(`#box--right`)

const box = document.querySelector(`.box`)

// ==================================================================

inputsBox.forEach((input) => {
    input.addEventListener(`keydown`, collectInfo)
})

function collectInfo() {
    console.log(`hi`)
}