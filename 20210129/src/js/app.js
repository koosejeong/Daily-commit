
import { WaveGroup } from './wavegroup.js';

const sec = document.querySelector('section');

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    sec.appendChild(this.canvas); //canvas 생성

    this.WaveGroup = new WaveGroup();

    window.addEventListener('resize', this.resize.bind(this), false); 
    this.resize(); //resize 이벤트

    requestAnimationFrame(this.animate.bind(this)); //애니메이션 시작

  }

  resize() {
    this.stageWidth = sec.clientWidth;
    this.stageHeight = sec.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2); //캔버스를 더블사이즈로 지정하여 Retina display 대응

    this.WaveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(timing) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.WaveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));  //canvas clear 기능 animate() 함수에 추가


  }

}

window.onload = () => {
  new App();
} //브라우저 로드 시 app 생성