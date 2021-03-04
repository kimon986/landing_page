const burgerElement = document.querySelector('.burger__container')

const handleOpenMenu = () => {
  const nav = document.querySelector('.desktop_nav_wrapper')
  nav.classList.toggle('desktop_nav_wrapper--active')
}

burgerElement.addEventListener('click', handleOpenMenu)


/*testing*/
const dropdownHeaders = document.querySelectorAll('span.dropdown__header')
const dropdownContents = document.querySelectorAll('.dropdown__content')

for (let i = 0; i < dropdownHeaders.length; i++) {
  dropdownHeaders[i].addEventListener('click', () => {
    dropdownContents[i].classList.toggle('dropdown__content--active')
  })
}

