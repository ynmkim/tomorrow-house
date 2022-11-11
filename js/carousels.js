const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const galleryMobile = tns({
  container: '.product-gallery.is-mobile .slider-list',
  controls: false,
  navContainer: '.product-gallery.is-mobile .thumbnail-list',
  navAsThumbnails: true,
  gutter: 4,
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const galleryDesktop = tns({
  container: '.product-gallery.is-desktop .slider-list',
  controls: true,
  navContainer: '.product-gallery.is-desktop .thumbnail-list',
  navAsThumbnails: true,
  controlsContainer: '.product-gallery.is-desktop .gallery-controls',
  gutter: 6,
  edgePadding: 75,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})
