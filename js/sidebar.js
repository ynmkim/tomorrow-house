const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

// sidebarMenuButton.addEventListener('click', function () {
//   sidebar.classList.add('is-active')
//   sidebarOverlay.classList.add('is-active')
// })

function openSidebar() {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarMenuButton.addEventListener('click', openSidebar)
sidebarOverlay.addEventListener('click', closeSidebar)
