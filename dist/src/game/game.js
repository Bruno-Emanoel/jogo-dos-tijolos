"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGame = void 0;
const draw_all_1 = require("./draw-all");
function startGame(canvas, ctx) {
    (0, draw_all_1.drawAll)(canvas, ctx);
}
exports.startGame = startGame;
