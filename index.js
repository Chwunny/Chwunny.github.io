
let menuAbout = document.getElementById('menuAbout')
let menuSkills = document.getElementById('menuSkills')
let menuProjects = document.getElementById('menuProjects')
let menuContact = document.getElementById('menuContact')

menuAbout.addEventListener('click', () => {
    window.scrollTo({
        top: 100,
        behavior: 'smooth'
    })
})

menuSkills.addEventListener('click', () => {
    window.scrollTo({
        top: 700,
        behavior: 'smooth'
    })
})

menuProjects.addEventListener('click', () => {
    window.scrollTo({
        top: 1300,
        behavior: 'smooth'
    })
})

menuContact.addEventListener('click', () => {
    window.scrollTo({
        top: 2000,
        behavior: 'smooth'
    })
})