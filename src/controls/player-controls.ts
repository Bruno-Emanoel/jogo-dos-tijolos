import { movePlayer } from "@/drawings/draw-player";
import { MyCanvas } from "@/types/html-types";

export let playerMovingLeft: boolean = false;
export let playerMovingRight: boolean = false;

export function playerMove(e: KeyboardEvent): void {
    if(e.key === 'Left' || e.key === 'ArrowLeft'){
        playerMovingLeft = true;
    };
    if(e.key === 'Right' || e.key === 'ArrowRight'){
        playerMovingRight = true;
    };
};


export function playerStop (e: KeyboardEvent): void {
        if(e.key === 'Left' || e.key === 'ArrowLeft'){
            playerMovingLeft = false;
        };
        if(e.key === 'Right' || e.key === 'ArrowRight'){
            playerMovingRight = false;
        };
};