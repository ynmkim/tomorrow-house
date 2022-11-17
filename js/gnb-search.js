const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

function openGnbSearchHistory() {
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

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

window.addEventListener('click', closeSearchHistoryOnClickOutside)
