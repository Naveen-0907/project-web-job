const slider = document.querySelector('.trusted-slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentPosition = 0;
let intervalId; // Store the interval ID

function showSlide(position) {
    slider.style.transform = `translateX(-${position * 340}px)`; // 300 + 20 + 20
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPosition);
    });
}

function startAutoSlide() {
    intervalId = setInterval(() => {
        currentPosition = (currentPosition + 1) % 3; // Loop through 0, 1, 2
        showSlide(currentPosition);
    }, 3000); // Change slide every 3 seconds (adjust as needed)
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentPosition = index;
        showSlide(currentPosition);
        stopAutoSlide(); // Stop auto-sliding on dot click
        startAutoSlide(); // Restart auto-sliding
    });
});

startAutoSlide(); // Start auto-sliding on page load
showSlide(currentPosition); // Initial display

// ... (rest of the JavaScript remains the same)

function showSlide(position) {
    const slideWidth = slides[0].offsetWidth + 40; // Calculate slide width dynamically
    slider.style.transform = `translateX(-${position * slideWidth}px)`;
    updateDots();
}

// ... (rest of the JavaScript remains the same)