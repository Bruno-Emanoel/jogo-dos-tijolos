"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeAll = void 0;
const draw_ball_1 = require("@/drawings/draw-ball");
function initializeAll(canvas) {
    (0, draw_ball_1.setInitialBallValues)(canvas);
}
exports.initializeAll = initializeAll;
;
