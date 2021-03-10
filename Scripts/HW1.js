/*burger*/
const burgerElement = document.querySelector('.burger__container')
const closeElement = document.querySelector('.close__wrapper')

const handleOpenMenu = () => {
  const nav = document.querySelector('.desktop_nav_wrapper')
  nav.classList.toggle('desktop_nav_wrapper--active')
}

burgerElement.addEventListener('click', handleOpenMenu)
closeElement.addEventListener('click', handleOpenMenu)



/*drop down text*/
const dropdownHeaders = document.querySelectorAll('span.dropdown__header')

for (let i = 0; i < dropdownHeaders.length; i++) {
  dropdownHeaders[i].addEventListener('click', () => showText(i)) //function, not return
}

const showText = (i) =>
{
  const dropdownContents = document.querySelectorAll('.dropdown__content')
  dropdownContents[i].classList.toggle('dropdown__content--active')
}

/*slider*/
const images = ["../images/castlebeckett.jpg", "../images/castlebeckett2.jpg",
"../images/castlebeckett3.jpg"]

let imgPosition = 0

const changeImage = (position) => {
  const imageElement = document.querySelector('.demo_wrapper > div:last-child > div')
  
  if (position > (images.length - 1)) {
    imageElement.style.backgroundImage = `url("${images[0]}")`
    imgPosition = 0
    return
  } else if (position < 0) {
    const lastImage = images.length - 1
    imageElement.style.backgroundImage = `url("${images[lastImage]}")`
    imgPosition = lastImage
    return
  }
  images.map((item, key) => {
    if (key === position) {
      imgPosition = position
      imageElement.style.backgroundImage = `url("${item}")`
    }
  })
}

const left = document.getElementById('left-arrow')
const right = document.getElementById('right-arrow')

left.addEventListener('click', () => changeImage(imgPosition - 1))
right.addEventListener('click', () => changeImage(imgPosition + 1))