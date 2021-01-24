const PI2 = Math.PI * 2;
const COLORS = [
    '#4b45ab',
    '#554fb8',
    '#605ac7',
    '#2a91a8',
    '#2e9ab2',
    '#32a5bf',
    '#81b144',
    '#85b944',
    '#8fc549',
    '#e0af27',
    '#eeba2a',
    '#fec72e',
    '#bf342d',
    '#ca3931',
    '#d7453a',
];

export class Polygon {
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.sides = sides;
        this.rotate = 0;
    }

    animate(ctx, moveX) {
        ctx.save();
        // ctx.fillStyle = '#000';
        // ctx.beginPath();

        const angle = PI2 / this.sides;
        const angle2 = PI2 / 4;

        ctx.translate(this.x, this.y);

        this.rotate += moveX * 0.008;
        ctx.rotate(this.rotate);

        for(let i = 0; i<this.sides; i++) {
            const x = this.r * Math.cos(angle * i);
            const y = this.r * Math.sin(angle * i);

            // (i == 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);

            ctx.save();
            ctx.fillStyle = COLORS[i];
            ctx.translate(x, y);
            ctx.rotate(((360 / this.sides) * i + 45) * Math.PI / 180);
            ctx.beginPath();
            for(let j = 0; j< 4; j++) {
                const x2 = 160 * Math.cos(angle2 * j);
                const y2 = 160 * Math.sin(angle2 * j);
                (j == 0) ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);

            }
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        }

        // ctx.fill();
        // ctx.closePath();
        ctx.restore();
    }
}