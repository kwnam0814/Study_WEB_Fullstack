console.log(window);

// 윈도우 객체
window.alert("안녕하세요"); // alert : 알림
window.confirm("반가워요"); // confirm : 사용자의 확인
window.prompt("오늘 기분 어때요?"); // prompt : 사용자 입력받기

// DOM 
// 이 문서내에서 body태그 선택 -> style 속성 -> background 속성을 red로 설정
document.body.style.background = "red";

// BOM
// navigator
console.log(navigator.userAgent);

// location
console.log(location.href); // 현재 URL 전체
console.log(location.pathname); // URI 부분만