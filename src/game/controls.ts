import { playerMove, playerStop } from "@/controls/player-controls";
import { MyCanvas } from "@/types/html-types";


export function addControls (doc: Document, canvas: MyCanvas) {
    doc.addEventListener('keydown', playerMove);
    doc.addEventListener('keyup', playerStop);
};