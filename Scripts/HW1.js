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
