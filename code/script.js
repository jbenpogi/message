function throwConfetti() {
	const confettiColors = ['#ff69b4', '#ffd700', '#ffb6c1', '#ffe4e1', '#d6336c'];
	const emojis = ['🎉', '🌸', '🎂', '💖', '🎀'];
	for (let i = 0; i < 30; i++) {
		const confetti = document.createElement('span');
		confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
		confetti.style.position = 'fixed';
		confetti.style.left = Math.random() * 100 + 'vw';
		confetti.style.top = '-2em';
		confetti.style.fontSize = (Math.random() * 1.5 + 1.5) + 'em';
		confetti.style.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
		confetti.style.zIndex = 9999;
		confetti.style.pointerEvents = 'none';
		confetti.style.transition = 'all ' + (3 + Math.random() * 2) + 's ease-in';
		confetti.style.opacity = '1';
		document.body.appendChild(confetti);
		
		// Trigger smooth fall animation
		setTimeout(() => {
			confetti.style.top = '120vh';
			confetti.style.transform = 'rotate(' + (Math.random() * 360 - 180) + 'deg)';
		}, 10);
		
		// Remove after animation completes
		setTimeout(() => {
			confetti.remove();
		}, 5500);
	}
}
