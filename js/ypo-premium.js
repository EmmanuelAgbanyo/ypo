/**
 * ═══════════════════════════════════════════════════════
 *  YPO PREMIUM INTERACTIVE ENGINE
 *  Youth Path Organisation — Award-winning interactive layer
 *  Features: Scroll progress, counters, cursor, particles,
 *  tilt, form validation, lazy loading, typed text,
 *  back-to-top, smooth nav, notification bar & more.
 * ═══════════════════════════════════════════════════════
 */
'use strict';

/* ─── 0. READY ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    YPO.init();
});

const YPO = {

    init() {
        this.readingProgress();
        this.smartNav();
        this.counterAnimation();
        this.typedHero();
        this.particleCanvas();
        this.tiltCards();
        this.smoothScroll();
        this.lazyImages();
        this.formEnhancer();
        this.activeNavLink();
        this.impactReveal();
        this.announcementBar();
        this.donationCalculator();
        this.cookieNotice();
        this.pageTransition();
        this.stickyDonate();
        this.imageLightbox();
        this.tabAnimation();
        this.fixedNavUpdate();
    },

    /* ─── 1. READING / SCROLL PROGRESS BAR ─────────── */
    readingProgress() {
        const bar = document.getElementById('ypo-progress-bar');
        if (!bar) return;
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = `${Math.min((scrollTop / docHeight) * 100, 100)}%`;
        }, { passive: true });
    },

    /* ─── 2. SMART NAVBAR ────────────────────────────── */
    smartNav() {
        const nav = document.querySelector('.fixed-top');
        if (!nav) return;
        let lastY = 0;
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            if (y > 80) {
                nav.classList.add('nav-scrolled');
                nav.classList.remove('nav-top');
            } else {
                nav.classList.remove('nav-scrolled');
                nav.classList.add('nav-top');
            }
            // Hide navbar on rapid scroll down, show on scroll up
            if (y > lastY + 8 && y > 200) {
                nav.classList.add('nav-hidden');
            } else if (y < lastY - 8) {
                nav.classList.remove('nav-hidden');
            }
            lastY = y;
        }, { passive: true });
    },

    /* ─── 3. COUNTER ANIMATION ──────────────────────── */
    counterAnimation() {
        const counters = document.querySelectorAll('[data-counter]');
        if (!counters.length) return;

        const easeOutQuart = t => 1 - Math.pow(1 - t, 4);

        const animateCounter = (el) => {
            const target = parseInt(el.getAttribute('data-counter'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            const duration = 2200;
            const start = performance.now();

            const step = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const value = Math.floor(easeOutQuart(progress) * target);
                el.textContent = value.toLocaleString() + suffix;
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.4 });
            counters.forEach(c => obs.observe(c));
        } else {
            counters.forEach(animateCounter);
        }
    },

    /* ─── 4. TYPED HERO TEXT ─────────────────────────── */
    typedHero() {
        const el = document.getElementById('ypo-typed');
        if (!el) return;

        const phrases = [
            'Youth Leadership',
            'Community Development',
            'Environmental Sustainability',
            'Social Innovation',
            'Peace & Human Rights'
        ];

        let phraseIdx = 0, charIdx = 0, isDeleting = false;

        const type = () => {
            const current = phrases[phraseIdx];
            if (isDeleting) {
                el.textContent = current.substring(0, charIdx - 1);
                charIdx--;
            } else {
                el.textContent = current.substring(0, charIdx + 1);
                charIdx++;
            }

            let delay = isDeleting ? 60 : 100;

            if (!isDeleting && charIdx === current.length) {
                delay = 2000;
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                delay = 400;
            }
            setTimeout(type, delay);
        };
        setTimeout(type, 800);
    },

    /* ─── 5. AMBIENT PARTICLE CANVAS ────────────────── */
    particleCanvas() {
        const canvas = document.getElementById('ypo-particles');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let W = canvas.offsetWidth, H = canvas.offsetHeight;
        canvas.width = W; canvas.height = H;

        const particles = Array.from({ length: 28 }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 3 + 1,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
            alpha: Math.random() * 0.5 + 0.15
        }));

        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(107,43,125,${p.alpha})`;
                ctx.fill();
                // Connect nearby particles
                particles.forEach(q => {
                    const dist = Math.hypot(p.x - q.x, p.y - q.y);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(0,163,255,${0.08 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                });
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0 || p.x > W) p.dx *= -1;
                if (p.y < 0 || p.y > H) p.dy *= -1;
            });
            requestAnimationFrame(draw);
        };
        draw();

        window.addEventListener('resize', () => {
            W = canvas.offsetWidth; H = canvas.offsetHeight;
            canvas.width = W; canvas.height = H;
        });
    },

    /* ─── 6. 3D TILT CARDS ───────────────────────────── */
    tiltCards() {
        const cards = document.querySelectorAll('.tilt-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(10px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)';
                card.style.transition = 'transform 0.5s ease';
            });
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s ease';
            });
        });
    },

    /* ─── 7. SMOOTH SCROLL ───────────────────────────── */
    smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', e => {
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    const top = target.getBoundingClientRect().top + window.scrollY - 90;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            });
        });
    },

    /* ─── 8. LAZY IMAGE LOADING ──────────────────────── */
    lazyImages() {
        const imgs = document.querySelectorAll('img[data-src]');
        if (!imgs.length) return;
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('img-loaded');
                    obs.unobserve(img);
                }
            });
        }, { rootMargin: '200px' });
        imgs.forEach(img => obs.observe(img));
    },

    /* ─── 9. FORM ENHANCER ──────────────────────────── */
    formEnhancer() {
        const forms = document.querySelectorAll('.ypo-form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');

            inputs.forEach(input => {
                input.addEventListener('focus', () => {
                    input.closest('.form-group, .form-floating, .col-12')?.classList.add('focused');
                });
                input.addEventListener('blur', () => {
                    input.closest('.form-group, .form-floating, .col-12')?.classList.remove('focused');
                    if (input.value.trim()) {
                        input.classList.add('has-value');
                    } else {
                        input.classList.remove('has-value');
                    }
                });
            });

            form.addEventListener('submit', e => {
                e.preventDefault();
                let valid = true;
                inputs.forEach(input => {
                    if (input.hasAttribute('required') && !input.value.trim()) {
                        valid = false;
                        input.classList.add('is-invalid');
                    } else {
                        input.classList.remove('is-invalid');
                    }
                });

                if (valid) {
                    const btn = form.querySelector('[type="submit"]');
                    if (btn) {
                        btn.disabled = true;
                        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending…';
                        setTimeout(() => {
                            btn.disabled = false;
                            btn.innerHTML = '✓ Message Sent!';
                            btn.classList.add('btn-success');
                            setTimeout(() => {
                                btn.innerHTML = btn.getAttribute('data-original') || 'Send Message';
                                btn.classList.remove('btn-success');
                            }, 3000);
                        }, 1800);
                    }
                }
            });
        });
    },

    /* ─── 10. ACTIVE NAV LINK ────────────────────────── */
    activeNavLink() {
        const current = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === current || (current === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    /* ─── 11. IMPACT SECTION REVEAL ─────────────────── */
    impactReveal() {
        const items = document.querySelectorAll('.reveal-on-scroll');
        if (!items.length) return;
        const obs = new IntersectionObserver(entries => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, (entry.target.dataset.delay || 0) * 120);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        items.forEach(item => obs.observe(item));
    },

    /* ─── 12. ANNOUNCEMENT BAR ──────────────────────── */
    announcementBar() {
        const bar = document.getElementById('ypo-announcement');
        if (!bar) return;
        const closeBtn = bar.querySelector('.ann-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                bar.style.maxHeight = bar.scrollHeight + 'px';
                requestAnimationFrame(() => {
                    bar.style.transition = 'max-height 0.4s ease, opacity 0.4s ease';
                    bar.style.maxHeight = '0';
                    bar.style.opacity = '0';
                });
                setTimeout(() => bar.remove(), 500);
                sessionStorage.setItem('ypo-ann-closed', '1');
            });
        }
        if (sessionStorage.getItem('ypo-ann-closed')) bar.style.display = 'none';
    },

    /* ─── 13. DONATION CALCULATOR ───────────────────── */
    donationCalculator() {
        const calc = document.getElementById('donation-impact');
        if (!calc) return;
        const slider = calc.querySelector('#donation-slider');
        const display = calc.querySelector('#donation-display');
        const impact = calc.querySelector('#donation-impact-text');

        const getImpact = (val) => {
            if (val < 25) return `${Math.round(val / 5)} school meal${Math.round(val / 5) > 1 ? 's' : ''} for a child`;
            if (val < 100) return `${Math.round(val / 20)} youth in a leadership workshop`;
            if (val < 500) return `${Math.round(val / 45)} community health checks`;
            return `${Math.round(val / 200)} youth trained in climate resilience`;
        };

        const update = () => {
            display.textContent = '$' + parseInt(slider.value).toLocaleString();
            impact.textContent = getImpact(parseInt(slider.value));
            const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
            slider.style.background = `linear-gradient(to right, #6B2B7D ${pct}%, #e0d6f5 ${pct}%)`;
        };

        slider.addEventListener('input', update);
        update();
    },

    /* ─── 14. COOKIE NOTICE ─────────────────────────── */
    cookieNotice() {
        if (localStorage.getItem('ypo-cookie-ok')) return;
        const notice = document.getElementById('ypo-cookie');
        if (!notice) return;
        notice.style.display = 'flex';
        notice.querySelector('.cookie-accept')?.addEventListener('click', () => {
            notice.style.opacity = '0';
            setTimeout(() => notice.remove(), 400);
            localStorage.setItem('ypo-cookie-ok', '1');
        });
    },

    /* ─── 15. PAGE TRANSITION ───────────────────────── */
    pageTransition() {
        const overlay = document.getElementById('ypo-page-transition');
        if (!overlay) return;
        // Fade out overlay on page load
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.style.display = 'none', 600);
        }, 100);

        // Fade in on internal link click
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || link.target === '_blank') return;
            link.addEventListener('click', e => {
                e.preventDefault();
                overlay.style.display = 'flex';
                overlay.style.opacity = '0';
                requestAnimationFrame(() => {
                    overlay.style.transition = 'opacity 0.4s ease';
                    overlay.style.opacity = '1';
                });
                setTimeout(() => { window.location = href; }, 420);
            });
        });
    },

    /* ─── 16. STICKY DONATE CTA ─────────────────────── */
    stickyDonate() {
        const cta = document.getElementById('ypo-sticky-cta');
        if (!cta) return;
        let shown = false;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600 && !shown) {
                cta.classList.add('visible');
                shown = true;
            } else if (window.scrollY < 200 && shown) {
                cta.classList.remove('visible');
                shown = false;
            }
        }, { passive: true });
        cta.querySelector('.sticky-cta-close')?.addEventListener('click', () => {
            cta.remove();
        });
    },

    /* ─── 17. IMAGE LIGHTBOX ─────────────────────────── */
    imageLightbox() {
        const images = document.querySelectorAll('[data-lightbox]');
        if (!images.length) return;

        const box = document.createElement('div');
        box.id = 'ypo-lightbox';
        box.innerHTML = `<div class="lb-overlay"><button class="lb-close" aria-label="Close">✕</button><img class="lb-img" src="" alt=""><p class="lb-caption"></p></div>`;
        document.body.appendChild(box);

        const img = box.querySelector('.lb-img');
        const caption = box.querySelector('.lb-caption');

        images.forEach(el => {
            el.style.cursor = 'zoom-in';
            el.addEventListener('click', () => {
                img.src = el.getAttribute('data-lightbox') || el.src;
                caption.textContent = el.getAttribute('alt') || '';
                box.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        [box, box.querySelector('.lb-close')].forEach(el => {
            el.addEventListener('click', e => {
                if (e.target === box || e.target === box.querySelector('.lb-close')) {
                    box.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') { box.classList.remove('active'); document.body.style.overflow = ''; }
        });
    },

    /* ─── 18. TAB ANIMATION ─────────────────────────── */
    tabAnimation() {
        document.querySelectorAll('[data-bs-toggle="pill"], [data-bs-toggle="tab"]').forEach(btn => {
            btn.addEventListener('shown.bs.tab', e => {
                const pane = document.querySelector(e.target.getAttribute('data-bs-target'));
                if (!pane) return;
                pane.querySelectorAll('.col-lg-3, .col-md-6').forEach((col, i) => {
                    col.style.opacity = '0';
                    col.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        col.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        col.style.opacity = '1';
                        col.style.transform = 'translateY(0)';
                    }, i * 80);
                });
            });
        });
    },

    /* ─── 19. FIXED NAV — REMOVE BG-DARK CLASS ─────── */
    fixedNavUpdate() {
        // The old main.js adds 'bg-dark' on scroll — override to light
        const nav = document.querySelector('.fixed-top');
        if (!nav) return;
        const observer = new MutationObserver(() => {
            if (nav.classList.contains('bg-dark')) {
                nav.classList.remove('bg-dark');
                nav.classList.add('nav-scrolled');
            }
        });
        observer.observe(nav, { attributes: true, attributeFilter: ['class'] });
    }
};

/* ─── PROGRESS BAR STYLES (injected) ────────────── */
(function injectProgressBar() {
    if (document.getElementById('ypo-progress-bar')) return;
    const bar = document.createElement('div');
    bar.id = 'ypo-progress-bar';
    bar.setAttribute('role', 'progressbar');
    bar.setAttribute('aria-label', 'Page reading progress');
    document.body.prepend(bar);
})();
