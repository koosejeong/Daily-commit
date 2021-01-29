
export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = index; //현재 point가 몇 번째 point인지를 정의하기 위한 index (포인트가 각기 다른 Y 포지션을 가져야 움직이는 곡선 효과처럼 보이므로)
    this.max = Math.random() * 100 + 150;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + (Math.sin(this.cur) * this.max);
  } //update 함수 실행 시 x축, y축이 위 아래로 움직임(웨이브 효과)
}

//Point라는 클래스를 생성하여 x와 y를 일정 좌표로 연결하여 일정 속도로 랜덤하게 움직이게 하여 웨이브 효과를 준 듯한 로직