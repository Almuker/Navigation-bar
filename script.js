const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav_links')
    const navLinks = document.querySelectorAll('.nav_links li')
    
    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav_active')

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
            }
        })
        // Burger animation
        burger.classList.toggle('toggle')
    })

}
navSlide()


// Counter
const counter = document.querySelector('.counter_item')
const increment = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')
const async = document.querySelector('.async')
const doubleIncrement = document.querySelector('.double_increment')
const reset = document.querySelector('.reset')

let state = 0

increment.addEventListener('click', () => {
    state++
    render()
})

decrement.addEventListener('click', () => {
    state--
    render()
})

async.addEventListener('click', () => {
    setTimeout(() => {
       state++
       render() 
    }, 2000);
})

doubleIncrement.addEventListener('click', () => {
    state += 2
    render()
})

reset.addEventListener('click', () => {
    state = 0
    render()
})

// Randomizer
const randomItem = document.querySelector('.random_item')
const randomBtn = document.querySelector('.random')
const inputFrom = document.querySelector('.input_from')
const inputTo = document.querySelector('.input_to')
const randomReset = document.querySelector('.random_reset')
let stateRandom = 0

randomBtn.addEventListener('click', () => {
    if (inputTo.value === '' || inputFrom.value === '') {
        stateRandom = Math.floor(Math.random() * (100 - 1) + 1)
    } else {
        stateRandom = Math.floor(Math.random() * (inputTo.value - inputFrom.value) + inputFrom.value)
    }
    render()
})

randomReset.addEventListener('click', () => {
    stateRandom = 0
    inputTo.value = ''
    inputFrom.value = ''
    render()
})

function render() {
    counter.textContent = state
    randomItem.textContent = stateRandom
}
render()