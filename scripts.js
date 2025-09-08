// Modern Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    initNavigation();
    // Smooth scrolling
    initSmoothScrolling();
    // Scroll animations
    initScrollAnimations();
    // Skills progress bars
    initSkillsBars();
    // Mobile menu
    initMobileMenu();
    // Scroll indicator
    initScrollIndicator();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Update active nav link based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Animate skill bars when skills section comes into view
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
                
                // Animate stats when about section comes into view
                if (entry.target.id === 'about') {
                    animateStats();
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe individual elements for staggered animations
    document.querySelectorAll('.project-card, .timeline-item, .skill-category, .stat').forEach(el => {
        observer.observe(el);
    });
}

// Animate skill progress bars
function initSkillsBars() {
    // This will be triggered by the intersection observer
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// Animate statistics counters
function animateStats() {
    const stats = document.querySelectorAll('.stat h3');
    
    // Check if animation has already been executed
    if (stats[0] && stats[0].hasAttribute('data-animated')) {
        return;
    }
    
    stats.forEach(stat => {
        // Mark as animated to prevent re-animation
        stat.setAttribute('data-animated', 'true');
        
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        const suffix = finalValue.replace(/[0-9]/g, '');
        
        let currentValue = 0;
        const increment = numericValue / 50;
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                currentValue = numericValue;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(currentValue) + suffix;
        }, 30);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Scroll indicator functionality
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Hide scroll indicator after scrolling down
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-text');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Add scroll to top functionality
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    document.body.appendChild(scrollBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top functionality
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effects
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-2px)';
        scrollBtn.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
    });

    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0)';
        scrollBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });
}

// Initialize scroll to top button
createScrollToTop();

// Add parallax effect to hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Uncomment to enable parallax effect
// initParallax();

// Add typing animation to hero title
function initTypingAnimation() {
    const titleElement = document.querySelector('.hero-title');
    if (titleElement) {
        const titleText = titleElement.textContent;
        titleElement.textContent = '';
        titleElement.style.borderRight = '2px solid white';
        
        let i = 0;
        const typeTimer = setInterval(() => {
            if (i < titleText.length) {
                titleElement.textContent += titleText.charAt(i);
                i++;
            } else {
                clearInterval(typeTimer);
                titleElement.style.borderRight = 'none';
            }
        }, 100);
    }
}

// Form validation (if contact form is added)
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Add form validation logic here
            const formData = new FormData(form);
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Enviado!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }
}

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images have data-src attribute
initLazyLoading();