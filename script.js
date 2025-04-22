document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Hero slider
    const heroSlider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.hero-slider .slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    const slideIndicators = document.querySelector('.slide-indicators');
    let currentSlide = 0;
    
    // Create indicators
    slides.forEach((slide, index) => {
        const indicator = document.createElement('span');
        indicator.addEventListener('click', () => goToSlide(index));
        slideIndicators.appendChild(indicator);
    });
    
    const indicators = document.querySelectorAll('.slide-indicators span');
    indicators[0].classList.add('active');
    
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            indicators[index].classList.remove('active');
        });
        
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    function goToSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        updateSlider();
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide change
    let slideInterval = setInterval(nextSlide, 5000);
    
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Facilities slider
    const facilitySlider = document.querySelector('.facilities-slider');
    const facilitySlides = document.querySelectorAll('.facility-slide');
    const facilityIndicators = document.querySelector('.facility-indicators');
    let currentFacilitySlide = 0;
    
    // Create indicators
    facilitySlides.forEach((slide, index) => {
        const indicator = document.createElement('span');
        indicator.addEventListener('click', () => goToFacilitySlide(index));
        facilityIndicators.appendChild(indicator);
    });
    
    const facilityIndicatorsList = document.querySelectorAll('.facility-indicators span');
    facilityIndicatorsList[0].classList.add('active');
    
    function updateFacilitySlider() {
        facilitySlides.forEach((slide, index) => {
            slide.classList.remove('active');
            facilityIndicatorsList[index].classList.remove('active');
        });
        
        facilitySlides[currentFacilitySlide].classList.add('active');
        facilityIndicatorsList[currentFacilitySlide].classList.add('active');
    }
    
    function goToFacilitySlide(index) {
        currentFacilitySlide = (index + facilitySlides.length) % facilitySlides.length;
        updateFacilitySlider();
    }
    
    // Auto slide change for facilities
    let facilitySlideInterval = setInterval(() => {
        goToFacilitySlide(currentFacilitySlide + 1);
    }, 6000);
    
    facilitySlider.addEventListener('mouseenter', () => {
        clearInterval(facilitySlideInterval);
    });
    
    facilitySlider.addEventListener('mouseleave', () => {
        facilitySlideInterval = setInterval(() => {
            goToFacilitySlide(currentFacilitySlide + 1);
        }, 6000);
    });

    // Testimonials slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialIndicators = document.querySelector('.testimonial-indicators');
    let currentTestimonialSlide = 0;
    
    // Create indicators
    testimonialSlides.forEach((slide, index) => {
        const indicator = document.createElement('span');
        indicator.addEventListener('click', () => goToTestimonialSlide(index));
        testimonialIndicators.appendChild(indicator);
    });
    
    const testimonialIndicatorsList = document.querySelectorAll('.testimonial-indicators span');
    testimonialIndicatorsList[0].classList.add('active');
    
    function updateTestimonialSlider() {
        testimonialSlides.forEach((slide, index) => {
            slide.classList.remove('active');
            testimonialIndicatorsList[index].classList.remove('active');
        });
        
        testimonialSlides[currentTestimonialSlide].classList.add('active');
        testimonialIndicatorsList[currentTestimonialSlide].classList.add('active');
    }
    
    function goToTestimonialSlide(index) {
        currentTestimonialSlide = (index + testimonialSlides.length) % testimonialSlides.length;
        updateTestimonialSlider();
    }
    
    // Auto slide change for testimonials
    let testimonialSlideInterval = setInterval(() => {
        goToTestimonialSlide(currentTestimonialSlide + 1);
    }, 7000);

    // Program tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Stats counter animation
    const statCards = document.querySelectorAll('.stat-card');
    
    function animateStats() {
        statCards.forEach(card => {
            const numberElement = card.querySelector('.stat-number');
            const target = parseInt(numberElement.getAttribute('data-count'));
            const duration = 2000; // Animation duration in ms
            const start = 0;
            const increment = target / (duration / 16); // 60fps
            
            let current = start;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                numberElement.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats-section')) {
                    animateStats();
                }
                
                // Initialize AOS (Animate On Scroll)
                AOS.init({
                    duration: 800,
                    easing: 'ease-in-out',
                    once: true
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections that need animation
    document.querySelectorAll('.stats-section, .section').forEach(section => {
        observer.observe(section);
    });

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
});