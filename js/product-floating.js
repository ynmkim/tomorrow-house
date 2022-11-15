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

function toggleOrderBookmark() {
  // 1. 버튼 is-active 클래스 추가
  // 2. icon 클래스 변경 => ic-bookmark vs. ic-bookmark-filled
  // 3. 카운트 숫자 값 변경

  // console.log(icon, count)
  // console.log(this.classList.contains('is-active'))
  // console.log(count.innerHTML)
  // console.log(typeof countNumber, countNumber)

  const [icon, count] = this.children
  const countNumber = Number(count.innerHTML.replaceAll(',', ''))

  let newCount = countNumber

  if (this.classList.contains('is-active')) {
    // NOTE: 활성화가 된 상태 => 비활성화 (ic-bookmark)
    // 앞으로 비활성화 -1
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')

    newCount = newCount - 1
  } else {
    // NOTE: 비활성화가 된 상태 => 활성화 (ic-bookmark-filled)
    // 앞으로 비활성화 +1s
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')

    newCount = newCount + 1
  }

  this.classList.toggle('is-active')
  count.innerHTML = newCount.toLocaleString()
  count.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
}

orderFloatingBookmarkButton.addEventListener('click', toggleOrderBookmark)
