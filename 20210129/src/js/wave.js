import { Point } from "./point.js";

export class Wave {
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];

  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth; //내가 그릴 애니메이션 크기(너비, 높이) 가져오기
    this.stageHeight = stageHeight; //애니메이션을 그릴 시 크기를 아는 게 굉장히 중요!

    this.centerX = stageWidth / 2; //브라우저의 정 중앙에다가 캔버스를 나타낼 것이므로 너비의 반에 해당되는 값 지정
    this.centerY = stageHeight / 2; //브라우저의 정 중앙에다가 캔버스를 나타낼 것이므로 높이의 반에 해당되는 값 지정

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    this.points = [];

    for(let i = 0; i < this.totalPoints; i++){
      const point = new Point(
        this.index + i,
        this.pointGap * i,
        this.centerY,
      );
      this.points[i] = point;
    }
    
    //Point.js를 import하여 initialize 함수 실행 시 point를 생성하여 애니메이션(곡선으로 연결된 x와 y)을 해당 위치에 배치 시켜준다.
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

   let prevX = this.points[0].x;
   let prevY = this.points[0].y;

   ctx.moveTo(prevX, prevY);

   for(let i = 1; i < this.totalPoints; i++) { 
    if(i < this.totalPoints -1 ) {//totalPoints -1 : totalPoints의 마지막 수(-1은 마지막을 뜻 함)보다 크지 않으면
      this.points[i].update();
    }
  

    const cx = (prevX + this.points[i].x) / 2;
    const cy = (prevY + this.points[i].y) / 2;

    ctx.quadraticCurveTo(prevX, prevY, cx, cy);

    prevX = this.points[i].x;
    prevY = this.points[i].y;

  }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();

   
  }

}
