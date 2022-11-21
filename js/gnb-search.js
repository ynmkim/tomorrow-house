const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  '.search-history-list'
)
const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button')

// 반복 작업 리팩토링 함수
function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeSearchHistoryOnClickOutside)
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.removeEventListener('click', closeSearchHistoryOnClickOutside)
  }

  gnbSearchHistory.classList.add('is-active')

  // if (gnbSearchHistoryList.children.length !== 0) {
  //   gnbSearchHistory.classList.add('is-active')
  // }
}

function closeSearchHistoryOnClickOutside(e) {
  // console.log('close!')
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function deleteAllSearchHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

function deleteSearchHistoryItem(e) {
  // console.log('delete!')
  const itemToDelete = this.parentNode

  gnbSearchHistoryList.removeChild(itemToDelete)

  e.stopPropagation()

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

window.addEventListener('click', closeSearchHistoryOnClickOutside)

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)

deleteButtonList.forEach(function (button) {
  button.addEventListener('click', deleteSearchHistoryItem)
})
