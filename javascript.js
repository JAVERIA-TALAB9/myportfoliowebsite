document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('nav a[href^="#"]');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

           
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }

                   
                    if (mobileMenu.classList.contains('flex')) {
                        mobileMenu.classList.remove('flex');
                        mobileMenu.classList.add('hidden');
                    }
                });
            });

           
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
            });


          
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        
                        
                        if (target.classList.contains('reveal-on-scroll-card-left')) {
                            target.classList.add('animate-slide-in-left');
                        } else if (target.classList.contains('reveal-on-scroll-card-right')) {
                            target.classList.add('animate-slide-in-right');
                        } else {
                            target.classList.add('animate-fade-in');
                        }

                       
                        observer.unobserve(target);
                    }
                });
            }, observerOptions);

           
            document.querySelectorAll('.reveal-on-scroll, .reveal-on-scroll-card-left, .reveal-on-scroll-card-right').forEach(element => {
                observer.observe(element);
            });
        });
