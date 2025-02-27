// Scroll Progress Indicator
const initScrollProgress = () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = 
            document.documentElement.scrollHeight - 
            document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;
        
        scrollProgress.style.transform = `scaleX(${scrolled})`;
    });
};

// Loading Spinner
const initLoadingSpinner = () => {
    const loader = document.querySelector('.loading-overlay');
    
    // Hide loader when page is loaded
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    });
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initLoadingSpinner();
}); 