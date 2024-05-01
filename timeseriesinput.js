// Basic code to turn a drawn line into a time series vector.

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let isDrawing = false;
let timeSeriesData = [];

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    // Start a new line
    ctx.beginPath();
});

canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    timeSeriesData.push({time: x, value: y});
    // Draw a line to the new point
    ctx.lineTo(x, y);
    ctx.stroke();
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    // End the line
    ctx.closePath();
});
