const searchModal = document.querySelector('.search-modal')
const searchOverlay = document.querySelector('.overlay')
const searchButton = document.querySelector('.gnb-icon-button.is-search')
const searchModalCloseButton = searchModal.querySelector(
  '.search-modal-form .btn-ghost'
)

// console.log(searchModalCloseButton.textContent)

// searchButton.addEventListener('click', function () {
//   searchOverlay.classList.add('is-active')
//   searchModal.classList.add('is-active')
// })

// searchModalCloseButton.addEventListener('click', function () {
//   searchOverlay.classList.remove('is-active')
//   searchModal.classList.remove('is-active')
// })

function openSearchModal() {
  searchOverlay.classList.add('is-active')
  searchModal.classList.add('is-active')
}

function closeSearchModal() {
  searchOverlay.classList.remove('is-active')
  searchModal.classList.remove('is-active')
}

searchButton.addEventListener('click', openSearchModal)
searchModalCloseButton.addEventListener('click', closeSearchModal)
