function drawCircles(canvas) {
    const circleColor = "rgba(255, 255, 255, 0.2)";
    const circleSize = 5;
    const circleSpacing = 30;

    const ctx = canvas.getContext("2d");
    const circles = [];

    function init() {
        circles.length = 0;
        const radius = circleSize / 2;
        const spacingX = circleSpacing + circleSize;
        const spacingY = circleSpacing + circleSize;
        const columns = Math.floor(canvas.width / spacingX);
        const rows = Math.floor(canvas.height / spacingY);
        const offsetX = (canvas.width - columns * spacingX + circleSpacing) / 2;
        const offsetY = (canvas.height - rows * spacingY + circleSpacing) / 2;

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                const cx = offsetX + x * spacingX + radius;
                const cy = offsetY + y * spacingY + radius;
                circles.push({ x: cx, y: cy, baseX: cx, baseY: cy });
            }
        }
    }

    function draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        circles.forEach((circle) => {
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circleSize / 2, 0, 2 * Math.PI);
            ctx.fillStyle = circleColor;
            ctx.fill();
        });
    }

    window.onresize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        init();
        draw();
    };

    onresize();
}

let canvas = document.getElementById("background");
let navbar = document.querySelector(".navbar");
drawCircles(canvas);

// Loading
window.onload = () => {
    const loading = document.querySelector(".loading");
    loading.classList.add("loaded");
}

// Navbar
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
}