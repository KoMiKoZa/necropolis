/**
 * Necropolis Modding Hub - Shared JavaScript
 * Common functionality used across all pages
 */

// ========================================
// Theme Colors Configuration
// ========================================
const themeColors = [
    '#7FFFD4', // Cyan (default)
    '#FF6B6B', // Light Red
    '#87CEEB', // Light Blue
    '#DDA0DD', // Light Purple
    '#F0E68C', // Light Yellow
    '#90EE90', // Light Green
    '#E8E8E8', // Light Gray
    '#FFB6C1'  // Light Pink
];

const faviconUrls = {
    '#7FFFD4': 'https://i.imgur.com/TNk3bFj.png',  // Cyan
    '#FF6B6B': 'https://i.imgur.com/AokFtxY.png',  // Light Red
    '#87CEEB': 'https://i.imgur.com/bwMR7E6.png',  // Light Blue
    '#DDA0DD': 'https://i.imgur.com/DC4WWtl.png',  // Light Purple
    '#F0E68C': 'https://i.imgur.com/qkrs6Mj.png',  // Light Yellow
    '#90EE90': 'https://i.imgur.com/KqMSJHE.png',  // Light Green
    '#E8E8E8': 'https://i.imgur.com/wH3kU7J.png',  // Light Gray
    '#FFB6C1': 'https://i.imgur.com/9bHhcRu.png'   // Light Pink
};

// ========================================
// Utility Functions
// ========================================

/**
 * Convert hex color to RGB object
 */
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Apply random color theme to the page
 */
function applyRandomTheme() {
    const randomColor = themeColors[Math.floor(Math.random() * themeColors.length)];
    const rgb = hexToRgb(randomColor);
    const rgbString = `${rgb.r}, ${rgb.g}, ${rgb.b}`;

    // Set CSS custom properties
    document.documentElement.style.setProperty('--primary-cyan', randomColor);
    document.documentElement.style.setProperty('--primary-rgb', rgbString);

    // Update favicon
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon && faviconUrls[randomColor]) {
        favicon.href = faviconUrls[randomColor];
    }

    return randomColor;
}

// ========================================
// Mobile Menu
// ========================================

/**
 * Toggle mobile navigation menu
 */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// ========================================
// Footer Year
// ========================================

/**
 * Update footer copyright year
 */
function updateFooterYear() {
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.innerHTML = footer.innerHTML.replace(/© \d{4}/, `© ${new Date().getFullYear()}`);
    }
}

// ========================================
// Scroll Reveal Animation
// ========================================

/**
 * Initialize scroll reveal animations for elements
 */
function initScrollReveal(selectors = '.step, .mod-card, .faq-item') {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll(selectors).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// Initialize Common Features
// ========================================

/**
 * Initialize all common features on page load
 */
function initCommon() {
    applyRandomTheme();
    updateFooterYear();
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCommon);
} else {
    initCommon();
}

// Export for use in page-specific scripts
window.NecroHub = {
    themeColors,
    faviconUrls,
    hexToRgb,
    applyRandomTheme,
    toggleMenu,
    updateFooterYear,
    initScrollReveal
};
