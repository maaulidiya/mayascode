function changeText() {
    var button = document.querySelector('.button');
    if (button.innerHTML === 'How was your day?') {
        button.innerHTML = 'Have a good day!';
        triggerConfetti();
        button.classList.add('active');
    } else {
        button.innerHTML = 'How was your day?';
        button.classList.remove('active');
    }
}

function triggerConfetti() {
    confetti({
        particleCount: 300,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffa072', '#ff6347'],
    });
}
