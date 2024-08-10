"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawAll = void 0;
const draw_ball_1 = require("@/drawings/draw-ball");
function drawAll(canvas, ctx) {
    (0, draw_ball_1.drawBall)(canvas, ctx);
}
exports.drawAll = drawAll;
;
