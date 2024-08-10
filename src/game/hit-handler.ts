import { barList, createBars, eraseBar } from "@/drawings/draw-bar";
import * as ball from "@/drawings/draw-ball";
import { MyCanvas } from "@/types/html-types";

export default function hitHandler (
    canvas: MyCanvas,
    round: number,
    score: number,
    highestScore: number,
    passRound: ()=>number,
    addScore: ()=>number
){
    let i = 0
    const ballNextX = ball.x+ball.dx;
    const ballNextY = ball.y+ball.dy;

    for (let bar of barList) {
        if (
            ballNextX-ball.ballRadius < bar.x+bar.width 
            && ballNextX+ball.ballRadius > bar.x
            && ballNextY-ball.ballRadius < bar.y+bar.height 
            && ballNextY+ball.ballRadius > bar.y
        ) {
            const hitFromRight = ball.x - ball.ballRadius <= bar.x + bar.width;
            const hitFromLeft = ball.x + ball.ballRadius >= bar.x;

            const hitFromBot = ball.y - ball.ballRadius <= bar.y + bar.width;
            const hitFromTop = ball.y + ball.ballRadius >= bar.y;

            const ballIsInMiddleX = ball.x > bar.x && ball.x < bar.x + bar.width;
            const ballIsInMiddleY = ball.y > bar.y && ball.y < bar.y + bar.height

            if (ballIsInMiddleX && (hitFromTop || hitFromBot)) ball.revertDy();
            else if (ballIsInMiddleY && (hitFromRight || hitFromLeft)) ball.revertDx();
            else ball.revertDy();

            eraseBar(i);
            if (barList.length === 0){
                passRound();
                createBars(canvas, round);
            }
            addScore();
            if (score > highestScore) localStorage.setItem("highestScore", `${score}`)
            break;
        };
        i++;
    };
};