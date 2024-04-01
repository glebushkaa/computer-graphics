function drawSign() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    drawBackgroundTriangle(context)
    drawInclinedTriangle(context)
    drawInclinedText(context, canvas)
    drawBorderTriangle(context)
}

function drawInclinedText(context, canvas) {
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(Math.PI / 8);
    context.font = "bold 48px Arial";
    context.fillStyle = "black"
    context.fillText("10 %", -28, 54);
    context.restore();
}

function drawBorderTriangle(context) {
    context.strokeStyle = "red";
    context.lineJoin = "round";
    context.lineWidth = 50;
    context.beginPath();
    context.lineTo(450, 375);
    context.lineTo(300, 125);
    context.lineTo(150, 375);
    context.closePath();
    context.stroke();
}

function drawInclinedTriangle(context) {
    context.fillStyle = "black";
    context.beginPath();
    context.lineTo(200, 280);
    context.lineTo(400, 350);
    context.lineTo(150, 375);
    context.closePath();
    context.fill();
}

function drawBackgroundTriangle(context) {
    context.fillStyle = "white";
    context.beginPath();
    context.lineTo(450, 375);
    context.lineTo(300, 125);
    context.lineTo(150, 375);
    context.closePath();
    context.fill();
}