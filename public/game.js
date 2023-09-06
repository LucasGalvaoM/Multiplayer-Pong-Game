const socket = io();

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        c.fillStyle = this.color;
        c.fillRect(x, y, width, height);
    }
}

class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.fill();
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.fillRect(0, 0, canvas.width, canvas.height);
}