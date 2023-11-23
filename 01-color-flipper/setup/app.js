const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// document.getElementById
// 웹 페이지에서 특정 ID를 가진 HTML 요소를 찾는 Javascript 메서드
// DOM을 사용하여 HTML 문서의 요소에 접근하는데 사용됨.

// document.querySelector
// css 선택자를 사용하여 문서 내에서 특정 요소를 선택하는 데에 쓰임
// 해당하는 첫 번째 요소를 반환하며, 일치하는 요소가 없을 경우 null을 반환

// addEventListener
// 웹 페이지에서 사용자 상호 작용이나 다양한 이벤트가 발생할 때, 이벤트에 대응하는 동작을 정의

// textContent
// DOM에서 특정 요소의 텍스트 콘텐츠를 나타내는 속성
