import { MyCanvas, TwoDCanvas } from "@/types/html-types";
import { drawAll } from "./draw-all";

export let interval: NodeJS.Timeout;

let round = 1;
let score = 0;

let scoreFromStorage: number = parseInt(localStorage.getItem("highestScore") || "0");
let highestScore = scoreFromStorage;

const passRound = ()=>round++;
const addScore = ()=>score++;

export function startGame(docs: Document, canvas: MyCanvas, ctx: TwoDCanvas) {
    const frames = ()=>{
        if(!drawAll(canvas, ctx, round, score, highestScore, passRound, addScore)){
            gameOver(docs);
        }};
    interval = setInterval(frames, 5)
}

export function gameOver(docs: Document){
    alert("GAME OVER");
    docs.location.reload();
    clearInterval(interval);
}