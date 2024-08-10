import { addControls } from "@/game/controls";
import { startGame } from "@/game/game";
import { initializeAll } from "@/game/initialize";
import { MyCanvas, TwoDCanvas } from "@/types/html-types";



const canvas = document.getElementById("myCanvas") as MyCanvas;
const ctx = canvas.getContext("2d") as TwoDCanvas;

initializeAll(canvas);
addControls(document, canvas);

const runButton = document.getElementById("runButton") as HTMLButtonElement;

runButton.addEventListener("click", (e: MouseEvent): any=>{
    startGame(document, canvas, ctx);
    (e.target as HTMLButtonElement).disabled = true;
});