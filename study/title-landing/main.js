let target = document.querySelector('#dynamic');


function randomString()
 {
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
 }

// 타이핑 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}


// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if(randomArr.length > 0) {
    // +=왼쪽의 피연산자에 오른쪽의 피연산자를 더한 후, 그 결괏값을 왼쪽의 피연산자에 대입함.
    // target.textContent = target.textContent + randomArr.shift();
    target.textContent += randomArr.shift();
    // 재귀함수의 원리를 이용해서 randomArr이 0보다 크면 다시 호출
    // 0.08초의 간격으로
    setTimeout(function() {
      dynamic(randomArr);
    },80);
  } else {
    setTimeout(resetTyping, 3000);
  } 
}

dynamic(randomString());

//커서 깜빡임 효과
function blink() {
  target.classList.toggle('active');
}

// blink함수를 0.5초 간격으로 실행
setInterval(blink, 500);