import { HitBar } from "@/types/game-types";
import { MyCanvas, TwoDCanvas } from "@/types/html-types";


export const barList: HitBar[] = [];

export function createBars (canvas: MyCanvas,round: number) {
    const barInLine = round+2;
    const xPaddingPercentage = 5;
    const barXSpace = canvas.width / barInLine;
    const xPadding = barXSpace * xPaddingPercentage/100;
    const barWidth = barXSpace * (100-(1.5*xPaddingPercentage))/100;

    const defaultYPadding = canvas.height / 10
    const barInColumn = Math.ceil(round/2) + 2;
    const verticalSpace = Math.min(50, 30);
    const yPaddingPercentage = 4;
    const barYSpace = canvas.width * verticalSpace/100;
    const yPadding = (barYSpace * yPaddingPercentage/100) + defaultYPadding;
    const barHeight = barYSpace * 16 / 100; 

    const barNumber = barInLine*barInColumn;
    
    for(let i = 1; i <= barInColumn; i++ ){

        for(let j = 1; j <= barInLine; j++){
            barList.push({
                x: ((xPadding + barWidth)*j) - barWidth,
                y: ((yPadding + barHeight)*i) - barHeight,
                width: barWidth,
                height: barHeight
                
            })
        };
    };
}

export function drawAllBars (ctx: TwoDCanvas) {
    barList.forEach(drawBar(ctx))
};

export function eraseBar (id: number) {
    barList.splice(id, 1);
};

function drawBar (ctx: TwoDCanvas) {
    return (barProps:HitBar) => {
        ctx.beginPath();
        ctx.rect(barProps.x, barProps.y, barProps.width, barProps.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    };
};