const borderRadius = document.querySelector(`.btn__radius`)

const box = document.querySelector(`.box`)

// ==================================================================

borderRadius.addEventListener(`click`, function (e) {
    e.preventDefault()

    let selectRadius = document.querySelector(`.select__radius`).value
    let inputRadius = document.querySelector(`.input__radius`).value
    let userInput = inputRadius + selectRadius

    
    console.log(userInput)
})