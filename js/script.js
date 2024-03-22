document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.menu');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });

    // Configura el botón de Omegle Music para que no haga nada al hacer clic
    const omegleMusicBtn = document.getElementById('omegleMusicBtn');
    if (omegleMusicBtn) {
        omegleMusicBtn.addEventListener('click', function(event) {
            event.preventDefault();
        });
    }
});
/* JavaScript to toggle classes based on scroll position */
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.menu');
    const omegleMusicH1 = document.getElementById('omegleMusicBtn'); // Ensure this is the correct ID
    const omegleMusicLink = document.getElementById('omegleMusicLink'); // Ensure this is the correct ID

    window.addEventListener('scroll', function() {
        // Check if the page has been scrolled down
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
            omegleMusicH1.style.display = 'block';
            omegleMusicLink.style.display = 'none';
        } else {
            header.classList.remove('scrolled');
            omegleMusicH1.style.display = 'none';
            omegleMusicLink.style.display = 'block';
        }
    });
});

