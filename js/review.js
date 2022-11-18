const reviewLikeButtonList = document.querySelectorAll(
  '.review-card-footer button'
)
const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'
// const iconCheck = '<i class="ic-check"></i>'

// console.log(reviewLikeButtonList)

function toggleReviewLikeButton() {
  // 1. btn의 클래스 변경 btn-outlined <=> btn-fill-primary
  // 2. 텍스트 변경 도움됨 <=> 도움이 돼요
  // 3. count: N명에게 도움이 되었습니다

  this.classList.toggle('btn-fill-primary')
  this.classList.toggle('btn-outlined')

  const isLiked = this.classList.contains('btn-fill-primary')
  const checkIcon = document.createElement('i')
  const reviewCardFooter = this.parentNode

  if (isLiked) {
    this.innerHTML = HELPFUL
    this.prepend(checkIcon) //반대 appendChild
  } else {
    this.innerHTML = NOT_HELPFUL
  }

  checkIcon.classList.add('ic-check')
  checkIcon.setAttribute('aria-hidden', true)

  const textElement = this.nextElementSibling

  if (textElement) {
    // N명 값을 업데이트
    const countElement = textElement.querySelector('strong')
    const count = Number(countElement.innerHTML.replaceAll(',', ''))

    let newCount = count

    if (isLiked) {
      newCount = newCount + 1
      countElement.innerHTML = newCount.toLocaleString()
    } else {
      newCount = newCount - 1
      if (newCount === 0) {
        // textElement 삭제
        reviewCardFooter.removeChild(textElement)
      } else {
        countElement.innerHTML = newCount.toLocaleString()
      }
    }
    console.log(newCount)
  } else {
    if (isLiked) {
      // 1명에게 도움이 되었습니다
      const newTextElement = document.createElement('div')

      newTextElement.classList.add('vote-text')
      newTextElement.innerHTML = '<strong>1</strong>명에게 도움이 되었습니다. '
      reviewCardFooter.appendChild(newTextElement)
    }
  }
}

reviewLikeButtonList.forEach((button) => {
  button.addEventListener('click', toggleReviewLikeButton)
})
