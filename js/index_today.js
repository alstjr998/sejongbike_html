let date = new Date();
let today = document.getElementById("today");

today.innerHTML = date.getFullYear() + "년 " + parseInt(date.getMonth() + 1) + "월 " + date.getDate() + "일";
today.style.lineHeight = "64px";
today.style.fontFamily = "'NanumSquareRound',sans-serif";
today.style.fontSize = "13px";
today.style.fontWeight = "700";
today.style.color = "rgba(0, 0, 0, 0.46);"