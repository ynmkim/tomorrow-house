const orderFloating = document.querySelector('.product-floating')
// const orderFloatingBookmarkButton = orderFloating.children[0]
// const orderFloatingBuyButton = orderFloating.children[1]

const [orderFloatingBookmarkButton, orderFloatingBuyButton] =
  orderFloating.children

// console.log(orderFloating.children)

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

// orderFloatingBuyButton.addEventListener('click', function () {
//   orderModal.classList.add('is-open')
//   orderModalOverlay.classList.add('is-active')
// })

// orderModalOverlay.addEventListener('click', function () {
//   orderModal.classList.remove('is-open')
//   orderModalOverlay.classList.remove('is-active')
// })

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderFloatingBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)
