import { MyCanvas, TwoDCanvas } from "@/types/html-types";


export default function drawText (
    canvas: MyCanvas,
    ctx: TwoDCanvas, 
    round: number, 
    score: number,
    highestScore: number
) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Round: ${round}`, 8, 20);
    
    ctx.fillText(`Score: ${score}`, canvas.width*2/5, 20);

    ctx.fillText(`Maior score: ${highestScore}`, canvas.width*2/3, 20);
}