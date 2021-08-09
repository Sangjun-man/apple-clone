function draw() {
  // var ctx = document.getElementById("canvas").getContext("2d");

  ctx.fillRect(0, 0, 150, 150); // 기본 설정으로 사각형을 그리기
  ctx.save(); // 기본 상태를 저장하기
  //검정 150 150 박스   0번

  setTimeout(() => {
    ctx.fillStyle = "#09F"; // 설정 변경하기
    ctx.fillRect(15, 15, 120, 120); // 새로운 설정으로 사각형 그리기
  }, 2000);
  //파랑 120 120 박스   1번

  setTimeout(() => {
    ctx.save(); // 현재 상태 저장하기
    ctx.fillStyle = "#FFF"; // 설정 변경하기
    ctx.globalAlpha = 0.5;
    ctx.fillRect(30, 30, 90, 90); // 새로운 설정으로 사각형 그리기
  }, 4000); //2번

  setTimeout(() => {
    ctx.restore(); // 이전 상태 복원하기
    ctx.fillRect(45, 45, 60, 60); // 복원된 설정으로 사각형 그리기})
  }, 6000); //1번

  setTimeout(() => {
    ctx.restore(); // 초기 상태를 복원하기
    ctx.fillRect(60, 60, 30, 30); // 복원된 설정으로 사각형 그리기})
  }, 8000); //0번
}

// 순차적으로 사각형 그리느방법