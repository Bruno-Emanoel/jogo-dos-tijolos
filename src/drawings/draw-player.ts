import { playerMovingLeft, playerMovingRight } from "@/controls/player-controls";
import { MyCanvas, TwoDCanvas } from "@/types/html-types";

export const playerWidth = 50;
export const playerHeight = 20;
export let playerX: number = 0;
export let playerY: number = 0;
export let dx: number = 2;


export function setInitialPlayerValues (canvas: MyCanvas): void {
    playerX = (canvas.width / 2) - 9;
    playerY = canvas.height -6;
}

export function drawPlayer (canvas: MyCanvas, ctx: TwoDCanvas){
    draw(ctx);
    movePlayer(canvas)
}

export function draw (ctx: TwoDCanvas) {
    ctx.beginPath();
    ctx.rect(playerX, playerY - (playerHeight/2), playerWidth, playerHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

export function movePlayer (canvas: MyCanvas) {
    if(playerMovingLeft){
        playerX -= (playerX > 0) ? dx : 0
    }
    if(playerMovingRight) {
        playerX += (playerX < (canvas.width - playerWidth)) ? dx : 0
    }
    
}
