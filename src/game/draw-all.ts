import { drawBall } from "@/drawings/draw-ball";
import { drawAllBars } from "@/drawings/draw-bar";
import { drawPlayer } from "@/drawings/draw-player";
import { MyCanvas, TwoDCanvas } from "@/types/html-types";
import hitHandler from "./hit-handler";
import drawText from "@/drawings/draw-text";

export function drawAll(
    canvas: MyCanvas, 
    ctx: TwoDCanvas, 
    round: number, 
    score: number,
    highestScore: number,
    passRound: ()=>number,
    addScore: ()=>number
): boolean {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hitHandler(canvas, round, score, highestScore, passRound, addScore);
    drawPlayer(canvas, ctx);
    drawAllBars(ctx);
    drawText(canvas, ctx, round, score, highestScore);
    return drawBall(canvas, ctx);
};