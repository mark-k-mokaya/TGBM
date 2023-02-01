window.addEventListener('scroll', function(){
    const header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0)
})

// setup navigation
const logo = document.querySelector('.logo')
const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.navigation')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
})

logo.addEventListener('click', function(){
    menuBtn.classList.remove('active')
    navigation.classList.remove('active')
})

for (let i = 0; i < navigation.getElementsByTagName('li').length; i++) {
    navigation.getElementsByTagName('li')[i].addEventListener('click', function(){
        menuBtn.classList.remove('active')
        navigation.classList.remove('active')
    })
    
}

console.log(navigation.getElementsByTagName('li')[0])