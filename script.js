// Enhanced scroll effects and animations
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const messageSection = document.querySelector('#message');
    
    if (scrollIndicator && messageSection) {
        scrollIndicator.addEventListener('click', function() {
            messageSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Add fade-in animation on scroll for message section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    const messageText = document.querySelector('.message-text');
    if (messageText) {
        messageText.style.opacity = '0';
        messageText.style.transform = 'translateY(30px)';
        messageText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        observer.observe(messageText);
    }
    
    // Video error handling
    const video = document.querySelector('#bg-video');
    if (video) {
        video.addEventListener('error', function() {
            console.log('Video failed to load, showing fallback background');
            const videoContainer = document.querySelector('.video-container');
            if (videoContainer) {
                videoContainer.innerHTML = '<div class="video-fallback"></div>';
            }
        });
        
        // Ensure video is properly muted for autoplay
        video.muted = true;
        video.playsInline = true;
    }
});