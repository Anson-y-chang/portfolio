function closeSearchBlock() {

  const menuSearchMark = document.querySelector('.menu-search-mark')
  menuSearchMark.addEventListener('click', () => {
    const searchBlock = document.querySelector('.search-block')
    searchBlock.classList.remove('menu-active')
    menuSearchMark.classList.remove('active')
  })

}

export default closeSearchBlock;