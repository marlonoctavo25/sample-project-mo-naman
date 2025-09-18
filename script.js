// --- Page Navigation Logic ---
const pages = document.querySelectorAll('.page');
const navbarCollapse = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false
});

function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    // Show the selected page
    document.getElementById(pageId).classList.add('active');

    // Hide the mobile menu after a link is clicked
    if (navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
    }
}

// --- Smooth Scrolling for Anchor Links ---
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = document.querySelector('.header-container').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20; // Added 20px buffer

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// --- Animated Background Canvas Logic ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height;

const drawHexagon = (x, y, size) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        ctx.lineTo(x + size * Math.cos(angle), y + size * Math.sin(angle));
    }
    ctx.closePath();
    ctx.stroke();
};

const drawGrid = () => {
    if (!ctx) return;
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(118, 196, 75, 0.1)';
    ctx.lineWidth = 1;

    const size = 60;
    const h = Math.sqrt(3) * size;
    const w = 2 * size;

    for (let y = -h; y < height + h; y += h / 2) {
        for (let x = -w, i = 0; x < width + w; x += w * 0.75, i++) {
            const hexY = y + (i % 2) * (h / 2);
            drawHexagon(x, hexY, size);
        }
    }
};

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    drawGrid();
});

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(drawGrid, 100);
});