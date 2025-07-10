const container = document.getElementById('bubbles-container');
const numBubbles = 20;

for (let i = 0; i < numBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.floor(Math.random() * 20) + 10; // size: 10px to 30px
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 5; // random animation delay
    const duration = 5 + Math.random() * 4; // duration: 5–9s

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.top = `${top}%`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDelay = `${delay}s`;
    bubble.style.animationDuration = `${duration}s`;

    container.appendChild(bubble);
}
