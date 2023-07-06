export const closeMenu = () => {
    const mark = document.querySelector('.mark')
    mark.addEventListener('click', () => {
      if (document.querySelector('.menu-active')) {
        const pageContainer = document.querySelector('.page-container');
        const cart = document.querySelector('.cart')
        const searchBlock = document.querySelector('.search-block')
        const menuSearchMark = document.querySelector('.menu-search-mark')
        pageContainer.classList.remove('menu-active');
        cart.classList.remove('menu-active');
        mark.classList.remove('active');
        searchBlock.classList.remove('menu-active');
        menuSearchMark.classList.remove('active');
      } else if (document.querySelector('.cart-active')) {
        const pageContainer = document.querySelector('.page-container');
        const menu = document.querySelector('.menu');
          pageContainer.classList.remove('cart-active');
          menu.classList.remove('cart-active');
          mark.classList.remove('active');
      }
    })
}