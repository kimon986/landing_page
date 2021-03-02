const burgerElement = document.querySelector('.burger__container')

const handleOpenMenu = () => {
  const nav = document.querySelector('.desktop_nav_wrapper')
  nav.classList.toggle('desktop_nav_wrapper--active')
}

burgerElement.addEventListener('click', handleOpenMenu)