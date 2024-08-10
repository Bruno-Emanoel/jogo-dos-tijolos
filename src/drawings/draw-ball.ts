import { MyCanvas, TwoDCanvas } from "@/types/html-types";
import { playerHeight, playerWidth, playerX } from "./draw-player";

export const ballRadius = 10;
export let x: number = 0;
export let y: number = 0;
export let dx: number = .75;
export let dy: number = -.75;

export const revertDy = ()=>{
    dy *= -1;
};

export const revertDx = ()=>{
    dx *= -1;
};


export function setInitialBallValues (canvas: MyCanvas): void {
    x = canvas.width / 2;
    y = canvas.height -30
}

export function drawBall (canvas: MyCanvas, ctx: TwoDCanvas): boolean {
    draw(ctx);
    return move(canvas);
}

function draw (ctx: TwoDCanvas) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

}

function move (canvas: MyCanvas) {
    if (y + dy > canvas.height - ballRadius - playerHeight
        && dy > 0
        && x + dx > playerX - ballRadius
        && x + dx < playerX + playerWidth + ballRadius
    ){
        dy = -dy;
    }
    if (y + dy > canvas.height - ballRadius) {
        return false;
    }
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
      x += dx;
      y += dy;
    
      return true
}
