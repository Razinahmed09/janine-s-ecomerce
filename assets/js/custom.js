 // Dot navigation animation
    const dots = document.querySelectorAll('.dot');
    let currentDot = 0;

    function animateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentDot].classList.add('active');
      currentDot = (currentDot + 1) % dots.length;
    }

    setInterval(animateDots, 3000);

    // Book hover effects
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
        this.style.animation = 'pulse 0.9s ease-in-out';
      });

      item.addEventListener('mouseleave', function () {
        this.style.animation = 'pulse 0.9s ease-in-out';
      });
    });

    // Add to cart button animation
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', function () {
      this.innerHTML = '✓ Added!';
      this.style.background = '#10b981';
      setTimeout(() => {
        this.innerHTML = 'Add to Cart';
        this.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
      }, 2000);
    });




// Add parallax scrolling effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.modern-portfolio-wrapper .floating-elements');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.modern-portfolio-wrapper .image-container, .modern-portfolio-wrapper .large-image').forEach(el => {
            observer.observe(el);
        });

        // Add dynamic color changes on scroll
        let colorIndex = 0;
        const colors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        ];

        setInterval(() => {
            const circles = document.querySelectorAll('.modern-portfolio-wrapper .floating-circle');
            circles.forEach((circle, index) => {
                circle.style.background = colors[(colorIndex + index) % colors.length];
            });
            colorIndex = (colorIndex + 1) % colors.length;
        }, 3000);




        //swiper js



        // showcase section js

  // Scroll-triggered animations
        document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.jaded-showcase .product-card').forEach(card => {
        observer.observe(card);
    });

    // Scroll progress indicator
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const progressBar = document.querySelector('.jaded-showcase .scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    }

    window.addEventListener('scroll', updateScrollProgress);

    // Floating particles
    function createParticle() {
        const particleContainer = document.querySelector('.jaded-showcase .floating-particles');
        if (!particleContainer) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 8000);
    }

    setInterval(createParticle, 500);

    // Add to cart functionality
    document.querySelectorAll('.jaded-showcase .add-to-cart').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.height, rect.width);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'jaded-ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes jaded-ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Smooth hover effects
    document.querySelectorAll('.jaded-showcase .product-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

        // showcase section js