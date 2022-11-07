# 내일의 집

## 1. Reponsive Class

| Mobile | Tablet | Deskop | class        |
| ------ | ------ | ------ | ------------ |
| O      | X      | X      | `.sm-only`   |
| O      | O      | X      | `.lg-hidden` |
| X      | O      | X      | `.md-only`   |
| X      | O      | O      | `.sm-hidden` |
| X      | X      | O      | `.lg-only`   |
| O      | X      | O      | `.md-hidden` |


## 2. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    class="gnb-icon-button is-cart"
    aria-label="장바구니, 5개의 상품이 담겨있습니다"
  >
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>

    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 한 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기"
  >
    <i class="ic-search"></i>
  </button>

  <a href="/" class="gnb-icon-button sm-hidden" aria-label="스크랩북">
    <i class="ic-bookmark"></i>
  </a>

  <a href="/" class="gnb-icon-button sm-hidden" aria-label="내소식">
    <i class="ic-bell"></i>
  </a>

  <a
    href="/"
    class="gnb-icon-button is-cart"
    aria-label="장바구니, 5개의 상품이 담겨있습니다"
  >
    <i class="ic-cart"></i>
    <strong class="count">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 열기"
  >
    <div class="avatar-32">
      <img src="./assets/img/img-user-01.jpg" alt="사달라 아저씨" />
    </div>
  </button>
</div>
```

## 3. SIDEBAR

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a href="/" class="btn-outlined btn-40"> 로그인 </a>
  <a href="/" class="btn-fill-primary btn-40"> 회원가입 </a>
</div>
```

- 로그인을 한 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/img/img-user-01.jpg" alt="사달라 아저씨" />
    </div>
    <strong class="username">사달라</strong>
  </a>
</div>
```

## 4. Product Review

- 리뷰가 0개일 경우

```html
<section
  class="product-section product-review"
  id="product-review"
  role="tabpanel"
>
  <header class="product-section-header">
    <h3 class="title">리뷰</h3>
    <strong class="count" aria-label="0개">0</strong>
    <a class="text-button" href="/">리뷰쓰기</a>
  </header>
  <div class="product-section-content">
    <p class="review-empty">
      첫 리뷰를 남겨주세요!<br />
      최대 <strong>500P</strong>를 드립니다.
    </p>
  </div>
</section>
```
