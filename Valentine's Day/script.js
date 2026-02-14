document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const interactionContainer = document.getElementById('interaction-container');
    const resultContainer = document.getElementById('result-container');
    const resetBtn = document.getElementById('reset-btn');
    const container = document.querySelector('.container');

    // Runaway No Button Logic
    noBtn.addEventListener('mouseenter', moveButton);
    // For mobile touch, optional but good to have
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent clicking
        moveButton();
    });

    function moveButton() {
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();

        // Calculate maximum allowed positions
        // We subtract the button size to keep it inside
        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        
        // Add a funny rotation
        const randomRotate = Math.random() * 360;
        noBtn.style.transform = `rotate(${randomRotate}deg)`;

        // Make Yes button grow slightly every time No is attempted
        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = `${currentSize + 2}px`;
        yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) + 2}px ${parseFloat(window.getComputedStyle(yesBtn).paddingRight) + 5}px`;
    }

    // Success Interaction
    yesBtn.addEventListener('click', () => {
        interactionContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        
        // Trigger celebrations
        createFloatingHearts();
        createConfetti();
        
        // Reset No button styles if played again
        noBtn.style.position = 'static';
        noBtn.style.transform = 'none';
    });

    // Reset Game
    resetBtn.addEventListener('click', () => {
        resultContainer.style.display = 'none';
        interactionContainer.style.display = 'block';
        
        // Reset Yes button size
        yesBtn.style.fontSize = '';
        yesBtn.style.padding = '';
    });

    // Floating Hearts Animation (reused/enhanced)
    function createFloatingHearts() {
        const heartCount = 30; // More hearts!
        for (let i = 0; i < heartCount; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = '❤️';
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '100vh';
                heart.style.fontSize = Math.random() * 30 + 10 + 'px';
                heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear forwards`;
                heart.style.opacity = Math.random();
                heart.style.zIndex = '1000';
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, i * 100);
        }
    }

    // Simple textual confetti
    function createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
        const shapes = ['square', 'triangle', 'circle'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10vh';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            confetti.style.zIndex = '999';
            
            document.body.appendChild(confetti);

             setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
});

// Use JS to inject new keyframes to ensure they exist
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes floatUp {
    to {
        transform: translateY(-110vh) rotate(360deg);
    }
}
@keyframes fall {
    to {
        transform: translateY(110vh) rotate(720deg);
    }
}
`;
document.head.appendChild(styleSheet);
