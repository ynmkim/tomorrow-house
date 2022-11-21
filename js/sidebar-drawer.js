const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)

// drawerMenuButton.addEventListener('click', function () {
//   // drawerMenuButton의 drawerMenu에 is-open 클래스 토글
//   const drawerMenu = this.parentNode

//   drawerMenu.classList.toggle('is-open')
// })

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

// drawerMenuButtonList[0].addEventListener('click', toggleDrawerMenu)
// drawerMenuButtonList[1].addEventListener('click', toggleDrawerMenu)
// drawerMenuButtonList[2].addEventListener('click', toggleDrawerMenu)

drawerMenuButtonList.forEach(function (button) {
  button.addEventListener('click', toggleDrawerMenu)
})
