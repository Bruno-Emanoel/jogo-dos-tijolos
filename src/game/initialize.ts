import { setInitialBallValues } from "@/drawings/draw-ball";
import { createBars } from "@/drawings/draw-bar";
import { setInitialPlayerValues } from "@/drawings/draw-player";
import { MyCanvas } from "@/types/html-types";

export function initializeAll(canvas: MyCanvas) {
    setInitialBallValues(canvas);
    setInitialPlayerValues(canvas);
    createBars(canvas, 1);
};