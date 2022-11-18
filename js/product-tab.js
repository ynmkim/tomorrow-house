const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')
const TOP_HEADER_PC = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

// console.log(productTabButtonList)

let currentActiveTab = productTab.querySelector('.is-active')

// 탭 활성화
function toggleActiveTab() {
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
    // console.log(currentActiveTab)
  }
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPanel)
})

// 탭 패널로 이동
function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_PC : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}
