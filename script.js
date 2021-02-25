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

const counter = document.querySelector('.counter_item')
const increment = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')

let state = 0

increment.addEventListener('click', () => {
    state++
    render()
})

decrement.addEventListener('click', () => {
    state--
    render()
})

function render() {
    counter.textContent = state
}
render()