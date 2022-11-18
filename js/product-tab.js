const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

// console.log(productTabButtonList)

let currentActiveTab = productTab.querySelector('.is-active')

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
})
