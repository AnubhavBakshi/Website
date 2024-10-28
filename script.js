// Create Scroll-to-Top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerText = '↑ Top';
scrollTopButton.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopButton);

// Show button when scrolled down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Scroll to top on button click
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Select the element to zoom (e.g., combined-section)
const zoomElement = document.querySelector('.combined-section');

// Adjust zoom level near the bottom of the page
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    
    // Calculate how far the user has scrolled (as a percentage of total page height)
    const scrollPercent = (scrollTop + winHeight) / docHeight;
    
    // Only start zooming when user reaches 80% of the page height
    if (scrollPercent > 0.8) {
        const zoomScale = 1 + (scrollPercent - 0.8) * 0.5; // Adjust multiplier for effect intensity
        zoomElement.style.transform = `scale(${zoomScale})`;
        zoomElement.style.transition = 'transform 0.2s ease-out';
    } else {
        // Reset zoom if above trigger point
        zoomElement.style.transform = 'scale(1)';
    }
});
// JavaScript for artwork swiping functionality
const artworkContent = document.getElementById('artworkContent');
const artworkItems = document.querySelectorAll('.artwork-item');
const prevArtworkBtn = document.getElementById('prevArtworkBtn');
const nextArtworkBtn = document.getElementById('nextArtworkBtn');
let artworkIndex = 0;

function updateArtwork() {
    artworkContent.style.transform = `translateX(-${artworkIndex * 100}%)`;
}

nextArtworkBtn.addEventListener('click', () => {
    if (artworkIndex < artworkItems.length - 1) {
        artworkIndex++;
    } else {
        artworkIndex = 0; // Loop back to the first item
    }
    updateArtwork();
});

prevArtworkBtn.addEventListener('click', () => {
    if (artworkIndex > 0) {
        artworkIndex--;
    } else {
        artworkIndex = artworkItems.length - 1; // Loop back to the last item
    }
    updateArtwork();
});
// Add event listener for scroll
window.addEventListener('scroll', () => {
    const combinedSection = document.querySelector('.combined-section');
    
    // Calculate the scroll position
    const rect = combinedSection.getBoundingClientRect();

    // Zoom effect for Combined Section
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        const scrollY = window.innerHeight - rect.top; // How far the user has scrolled into the section
        const maxScroll = 300; // Maximum scroll distance to apply zoom
        const scale = 1 + (Math.min(scrollY, maxScroll) / maxScroll) * 0.2; // Scale factor, adjust the zoom limit here (0.2 = 20%)
        combinedSection.style.transform = `scale(${scale})`;
    } else {
        combinedSection.style.transform = 'scale(1)'; // Reset scale when not in view
    }
});