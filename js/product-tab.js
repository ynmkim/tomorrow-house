const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')
const TOP_HEADER_PC = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

// console.log(productTabButtonList)

let currentActiveTab = productTab.querySelector('.is-active')
let disabledUpdating = false

// 탭 활성화
function toggleActiveTab() {
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    disabledUpdating = true
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
    // console.log(currentActiveTab)

    setTimeout(() => {
      disabledUpdating = false
    }, 1000)
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

// 스크롤 이벤트
// 사전 정보: 각 tabPanel의 y축 위치 (문서의 시작점에서부터 얼마나 아래에 있는지)
// 요소의 y축 위치 = window.scrollY + element.getBoundingClientRect().top

const productTabPanelIdList = [
  'product-description',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = productTabPanelIdList.map((panelID) => {
  const tabPanel = document.querySelector(`#${panelID}`)

  return tabPanel
})

const productTabPanelPositionMap = {}

// console.log(productTabPanelList)

function detectTabPanelPosition() {
  // 각각의 tabPanel의 y축 위치를 찾는다
  // producTabPanelPositionMap에 그 값을 없데이트
  // ex
  // {
  //   'product-description': 1000,
  //   'product-review': 3000,
  //    ...
  // }

  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id') // 패널의 id 값
    const position = window.scrollY + panel.getBoundingClientRect().top // y축 위치

    productTabPanelPositionMap[id] = position
  })

  // console.log(productTabPanelPositionMap)
  updateActiveTabOnScroll()
}

window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', detectTabPanelPosition)
window.addEventListener('scroll', updateActiveTabOnScroll)

function updateActiveTabOnScroll() {
  if (disabledUpdating) {
    return
  }
  // 스크롤 위치에 따라서 activeTab 업데이트
  // 1. 현재 유저가 얼만큼 스크롤를 했는지 -> window.scrollY
  // 2. 각 tabPanel y축 위치 -> productTabPanelPositionMap

  const scrollAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_PC + 80 : TOP_HEADER_MOBILE + 8)

  let newActiveTab
  if (scrollAmount >= productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabButtonList[4]
  } else if (scrollAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabButtonList[3]
  } else if (scrollAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabButtonList[2]
  } else if (scrollAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabButtonList[1]
  } else {
    newActiveTab = productTabButtonList[0]
  }

  // 추가: 페이지 끝까지 스크롤을 한 경우 newActiveTab = productTabButtonList[4]
  // window.scrollY + window.innerHeight === body의 전체 height와 같은 경우
  // window.innerWidth < 1200 product-floating 때문에 생긴 margin-bottom 56px

  const bodyHeight =
    document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0)
  if (window.scrollY + window.innerHeight === bodyHeight) {
    newActiveTab = productTabButtonList[4]
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active')
      if (currentActiveTab !== null) {
        currentActiveTab.classList.remove('is-active')
      }
      currentActiveTab = newActiveTab
    }
  }
}
