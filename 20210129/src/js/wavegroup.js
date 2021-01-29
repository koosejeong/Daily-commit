import { Wave } from './wave.js';

export class WaveGroup {
  constructor() {
    this.totalWaves = 3;
    this.totalPoints = 6;

    this.color = [ 'rgba(0, 199, 235, .4)', 'rgba(0, 146, 199, .4)', 'rgba(0, 87, 158, .4)'];
    this.waves = [];

    for (let i =0; i < this.totalWaves; i++) {
      const wave = new Wave(
        i,
        this.totalPoints,
        this.color[i],
      ); //totalWaves 수만큼 Wave 생성
      this.waves[i] = wave;
    }
  }
  resize(stageWidth, stageHeight) {
    for(let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for(let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
