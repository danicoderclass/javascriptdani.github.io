// Initialize score
let score = 0;

// Get elements
const scoreBoard = document.getElementById('score');
const targetImage = document.getElementById('targetImage');
const gameArea = document.getElementById('gameArea');

// Function to get a random position within the game area
function getRandomPosition() {
    const gameAreaRect = gameArea.getBoundingClientRect();
    const maxX = gameAreaRect.width - targetImage.offsetWidth;
    const maxY = gameAreaRect.height - targetImage.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
}

// Function to move the image to a random position
function moveImage() {
    const { x, y } = getRandomPosition();
    targetImage.style.left = `${x}px`;
    targetImage.style.top = `${y}px`;
}

// Add click event listener to the image
targetImage.addEventListener('click', () => {
    // Increment score
    score++;
    // Update score board
    scoreBoard.textContent = score;
    // Move the image to a new random position
    moveImage();
});

// Initial placement of the image
moveImage();
