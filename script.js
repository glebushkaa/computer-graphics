const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

let rotationAngle = 0;
let rotationSpeed = 0.005;
let isRotating = true;

function drawCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw yellow circle at the center
    ctx.beginPath();
    ctx.arc(centerX - 100, centerY + 20, 40, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // Draw orbit-like ellipse
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, 180, 120, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // Draw small blue circle
    ctx.beginPath();
    const smallCircleX = centerX + Math.cos(rotationAngle) * 180;
    const smallCircleY = centerY + Math.sin(rotationAngle) * 120;
    ctx.arc(smallCircleX, smallCircleY, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // Rotate the small circle
    if (isRotating) {
        rotationAngle += rotationSpeed;
    }

    requestAnimationFrame(drawCircles);
}

// Event listener for click on the small circle
canvas.addEventListener('click', function(event) {
    if (isSmallCircleClicked(event)) rotationSpeed *= -1;
});

// Event listener for double-click on the small circle
canvas.addEventListener('dblclick', function(event) {
    if (isSmallCircleClicked(event)) isRotating = !isRotating;
});

function isSmallCircleClicked(event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const smallCircleX = centerX + Math.cos(rotationAngle) * 180;
    const smallCircleY = centerY + Math.sin(rotationAngle) * 120;

    const distance = Math.sqrt((clickX - smallCircleX) ** 2 + (clickY - smallCircleY) ** 2);

    return distance <= 20;
}

drawCircles();