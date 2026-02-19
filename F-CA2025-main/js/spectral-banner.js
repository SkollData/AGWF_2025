document.addEventListener('DOMContentLoaded', () => {
    // Remove is-preload class after a short delay to trigger CSS transitions
    setTimeout(() => {
        document.body.classList.remove('is-preload');
    }, 100);

    // Custom Smooth Scroll Function
    const smoothScroll = (target, duration) => {
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        let startTime = null;

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    // Smooth scroll for 'more' button with custom duration (e.g., 2000ms = 2s)
    const moreBtn = document.getElementById('learn-more-btn');
    if (moreBtn) {
        moreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(moreBtn.getAttribute('href'));
            if (target) {
                smoothScroll(target, 2000); // Duración de 2 segundos para "ese efecto de animación"
            }
        });
    }

    // Initialize only carousel logic if needed
    if (typeof startCarousel === 'function') {
        startCarousel();
    }
});
