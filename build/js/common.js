// ===== Common Navigation & Utility Functions =====

/**
 * Navigate to a different page
 * @param {string} page - Page filename (e.g., 'home.html', 'about.html')
 */
function goTo(page) {
    window.location.href = page;
}

/**
 * Toggle accordion item
 * @param {HTMLElement} headerElement - The accordion header element
 * @param {string} contentId - The id of the content element
 */
function toggleAccordion(headerElement, contentId) {
    const content = document.getElementById(contentId);

    if (!content) return;

    const isActive = headerElement.classList.contains('active');

    // Toggle active state
    if (isActive) {
        headerElement.classList.remove('active');
        content.classList.remove('active');
    } else {
        headerElement.classList.add('active');
        content.classList.add('active');
    }
}

/**
 * Close all accordions in a container
 * @param {string} containerId - The id of the accordion container
 */
function closeAllAccordions(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const headers = container.querySelectorAll('.accordion-header');
    const contents = container.querySelectorAll('.accordion-content');

    headers.forEach(header => header.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
}

/**
 * Initialize page on load
 */
document.addEventListener('DOMContentLoaded', function () {
    initializePageScroll();
    initializeAnimations();
});

/**
 * Initialize scroll to top button
 */
function initializePageScroll() {
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 300) {
            showScrollToTopButton();
        } else {
            hideScrollToTopButton();
        }
    });
}

/**
 * Show scroll to top button
 */
function showScrollToTopButton() {
    let scrollBtn = document.getElementById('scrollTop');

    if (!scrollBtn) {
        scrollBtn = document.createElement('button');
        scrollBtn.id = 'scrollTop';
        scrollBtn.innerHTML = '↑';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--bs-secondary) 0%, #e01a47 100%);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.5rem;
            z-index: 999;
            box-shadow: 0 4px 15px rgba(240, 37, 88, 0.3);
            transition: all 0.3s ease;
            font-weight: bold;
        `;
        scrollBtn.onclick = scrollToTop;
        document.body.appendChild(scrollBtn);
    }

    scrollBtn.style.display = 'block';
    scrollBtn.style.opacity = '1';
}

/**
 * Hide scroll to top button
 */
function hideScrollToTopButton() {
    const scrollBtn = document.getElementById('scrollTop');
    if (scrollBtn) {
        scrollBtn.style.display = 'none';
        scrollBtn.style.opacity = '0';
    }
}

/**
 * Scroll to top of page
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Initialize page animations
 */
function initializeAnimations() {
    // Fade in elements on page load
    const elements = document.querySelectorAll('main section');
    elements.forEach((element, index) => {
        element.style.animation = `fadeIn 0.5s ease-in ${index * 0.1}s both`;
    });
}

/**
 * Format phone number
 * @param {string} phone - Phone number string
 * @returns {string} Formatted phone number
 */
function formatPhoneNumber(phone) {
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length === 10) {
        return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
    }
    return phone;
}

/**
 * Validate email
 * @param {string} email - Email string
 * @returns {boolean} True if email is valid
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Show notification
 * @param {string} message - Notification message
 * @param {string} type - Notification type (success, error, info)
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideInUp 0.5s ease-out;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;

    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #f44336 0%, #da190b 100%)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #2196F3 0%, #0b7dda 100%)';
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeIn 0.5s ease-out reverse';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

/**
 * Debounce function for performance
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 */
function smoothScrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Format date to readable format
 * @param {Date} date - Date object
 * @returns {string} Formatted date
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

/**
 * Get URL parameters
 * @param {string} param - Parameter name
 * @returns {string} Parameter value
 */
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * Local storage helper - Set item
 * @param {string} key - Storage key
 * @param {any} value - Value to store
 */
function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

/**
 * Local storage helper - Get item
 * @param {string} key - Storage key
 * @returns {any} Stored value
 */
function getLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
}

/**
 * Local storage helper - Remove item
 * @param {string} key - Storage key
 */
function removeLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing from localStorage:', error);
    }
}

/**
 * Add keyboard shortcut handler
 * @param {string} key - Key to listen for
 * @param {Function} callback - Function to call
 */
function addKeyboardShortcut(key, callback) {
    document.addEventListener('keydown', function (event) {
        if (event.key === key || event.code === key) {
            callback(event);
        }
    });
}

/**
 * Hide element
 * @param {string} elementId - Element ID
 */
function hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    }
}

/**
 * Show element
 * @param {string} elementId - Element ID
 */
function showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'block';
    }
}

/**
 * Toggle element visibility
 * @param {string} elementId - Element ID
 */
function toggleElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        goTo,
        toggleAccordion,
        closeAllAccordions,
        scrollToTop,
        formatPhoneNumber,
        validateEmail,
        showNotification,
        smoothScrollToElement,
        isInViewport,
        formatDate,
        getUrlParam,
        setLocalStorage,
        getLocalStorage,
        removeLocalStorage,
        addKeyboardShortcut,
        hideElement,
        showElement,
        toggleElement
    };
}