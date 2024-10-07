// Wait for the DOM content to fully load
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('main input');
    const features = document.querySelectorAll('.feature');
    const logo = document.querySelector('.logo img');

    // Animate the input field on focus
    searchInput.addEventListener('focus', function () {
        searchInput.style.width = '350px';
        searchInput.style.transition = 'width 0.5s ease';
    });

    // Return to normal size when not in focus
    searchInput.addEventListener('blur', function () {
        searchInput.style.width = '300px';
    });

    // Updated logo hover animation with more dynamic effects
    logo.addEventListener('mouseenter', function () {
        logo.style.transform = 'scale(1.2) rotate(5deg)';  // Slightly rotate and enlarge
        logo.style.filter = 'brightness(1.2)';             // Make it brighter
        logo.style.transition = 'transform 0.5s ease, filter 0.5s ease';  // Smooth transition
    });

    logo.addEventListener('mouseleave', function () {
        logo.style.transform = 'scale(1) rotate(0deg)';  // Reset to normal
        logo.style.filter = 'brightness(1)';             // Reset brightness
    });

    // Scroll animations for the feature cards
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY + window.innerHeight;

        features.forEach((feature) => {
            const featurePosition = feature.offsetTop + feature.offsetHeight / 2;
            if (scrollPosition > featurePosition) {
                feature.style.transform = 'translateY(0)';
                feature.style.opacity = '1';
                feature.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
            }
        });
    });

    // Initially hide the features for the scroll animation
    features.forEach((feature) => {
        feature.style.transform = 'translateY(50px)';
        feature.style.opacity = '0';
    });
});
