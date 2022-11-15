const sectionHeaderIconButton = document.querySelector(
  '.product-shipment .product-section-header.sm-only .icon-button'
)

// sectionHeaderIconButton.addEventListener('click', function () {
//   const section = this.parentNode.parentNode
//   section.classList.add('is-open')
// })

function expandSection() {
  const section = this.parentNode.parentNode
  section.classList.add('is-open')
}

sectionHeaderIconButton.addEventListener('click', expandSection)
