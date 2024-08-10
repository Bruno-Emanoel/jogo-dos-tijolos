"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawBall = exports.setInitialBallValues = exports.dy = exports.dx = exports.y = exports.x = exports.ballRadius = void 0;
exports.ballRadius = 10;
exports.x = 0;
exports.y = 0;
exports.dx = 1.5;
exports.dy = -1.5;
function setInitialBallValues(canvas) {
    exports.x = canvas.width / 2;
    exports.y = canvas.height - 30;
}
exports.setInitialBallValues = setInitialBallValues;
function drawBall(canvas, ctx) {
    draw(ctx);
    move(canvas);
}
exports.drawBall = drawBall;
function draw(ctx) {
    ctx.beginPath();
    ctx.arc(exports.x, exports.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill;
    ctx.closePath();
}
function move(canvas) {
    if (exports.x + exports.dx > canvas.width - exports.ballRadius || exports.x + exports.dx < exports.ballRadius) {
        exports.dx = -exports.dx;
    }
    if (exports.y + exports.dy > canvas.height - exports.ballRadius || exports.y + exports.dy < exports.ballRadius) {
        exports.dy = -exports.dy;
    }
    exports.x += exports.dx;
    exports.y += exports.dy;
}
