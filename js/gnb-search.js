const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  '.search-history-list'
)

function openGnbSearchHistory() {
  // if (gnbSearchHistoryList.children.length !== 0) {
  //   gnbSearchHistory.classList.add('is-active')
  // }

  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  gnbSearchHistory.classList.add('is-active')

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.removeEventListener('click', closeSearchHistoryOnClickOutside)
  }
}

function closeSearchHistoryOnClickOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
  }
}

function deleteAllSearchHistoryItem() {
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchHistory.classList.remove('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

window.addEventListener('click', closeSearchHistoryOnClickOutside)

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItem)
