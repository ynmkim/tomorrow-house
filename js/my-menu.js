const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

myMenuButton.addEventListener('click', toggleMyMenu)

function toggleMyMenu() {
  myMenu.classList.toggle('is-active')

  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickOutside)
  }
}

function closeMyMenuOnClickOutside(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickOutside)
  }

  console.log('WINDOW!!!')
  // console.log(e.target)
  // console.log(myMemu.contains(e.target))

  // 1. 내가 클릭한 요소가 무엇이지? => e.target
  // 2. myMenu가 요소를 포함하고 있는지를 알 수 있는 방법 => contains
  // 3. myMenu가 e.target을 포함하고 있지 않은 경우 myMenu 에서 is-active 제거
}
