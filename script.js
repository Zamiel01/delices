// Loading Spinner - Hide when page loads
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800); // Show loader for at least 800ms
    }
});

// Translation Data
const langData = {
    fr: {
        home: "Accueil",
        menu: "Menu",
        story: "Notre Histoire",
        gallery: "Galerie",
        reservations: "Réservations",
        order: "Commander",
        "hero-sub": "Vivez l'Art Culinaire",
        "hero-title": "Savourez l'Excellence <span class='highlight'>Dorée</span>",
        "hero-desc": "Plongez dans une fusion de saveurs traditionnelles et d'élégance moderne, préparée avec passion et servie avec âme.",
        "btn-book": "Réserver une Table",
        "btn-menu": "Explorer le Menu",
        "menu-sub": "Sélection Exclusive",
        "menu-title": "Notre Carte Signature",
        "dish1-name": "Le Ndolé Royal",
        "dish1-desc": "L'emblème du Cameroun : feuilles de ndolé, arachides fraîches et crevettes, servi avec plantains mûrs.",
        "dish2-name": "L'Omelette Signature",
        "dish2-desc": "Une envolée de saveurs aux fines herbes, glacée au vinaigre balsamique et sa tuile croustillante.",
        "dish3-name": "Poisson Braisé du Littoral",
        "dish3-desc": "Poisson frais braisé aux épices locales, accompagné de ses tourbillons de miondo et légumes croquants.",
        "dish4-name": "Capitaine Grillé aux Herbes",
        "dish4-desc": "Entier et savoureux, grillé lentement et servi avec des pommes de terre rissolées au romarin.",
        "dish5-name": "Pasta à la Bolognaise",
        "dish5-desc": "Une sauce riche mijotée pendant 6 heures, basilic frais et parmesan pour une touche d'Italie.",
        "about-sub": "Notre Histoire",
        "about-title": "Une Passion Héritée,<br>Un Savoir-Faire D'exception",
        "about-desc1": "Depuis plus de deux décennies, Saveur Le Delices incarne l'excellence de la gastronomie camerounaise revisitée. Notre chef exécutif, formé dans les plus grandes maisons de Paris et Lyon, a façonné une cuisine qui honore les traditions tout en embrassant l'innovation.",
        "about-desc2": "Chaque plat raconte une histoire — celle des marchés locaux de Douala, des épices ancestrales transmises de génération en génération, et d'une vision audacieuse qui place le Cameroun sur la carte culinaire mondiale. Nous croyons que la gastronomie est un art, et chaque repas chez nous est une œuvre d'art.",
        "about-cta": "Découvrir Notre Histoire",
        "gallery-sub": "Nos Moments",
        "gallery-title": "Galerie d'Excellence",
        "gallery-all": "Tout",
        "gallery-dishes": "Plats",
        "gallery-ambiance": "Ambiance",
        "gallery-events": "Événements",
        "gallery-cta": "Voir Plus de Photos",
        "reservation-sub": "Réservations",
        "reservation-title": "Réservez Votre Expérience",
        "reservation-desc": "Réservez votre table pour une soirée mémorable dans notre établissement. Nous vous recommandons de réserver au moins 48 heures à l'avance pour les week-ends.",
        "reservation-img-title": "Réservez Votre Table",
        "reservation-img-desc": "Une expérience gastronomique inoubliable vous attend",
        "form-name": "Nom Complet",
        "form-email": "Email",
        "form-phone": "Téléphone",
        "form-guests": "Nombre de Personnes",
        "form-date": "Date",
        "form-time": "Heure",
        "form-occasion": "Occasion Spéciale",
        "form-message": "Demandes Spéciales",
        "form-submit": "Confirmer la Réservation",
        "occasion-anniversary": "Anniversaire",
        "occasion-date": "Rendez-vous Romantique",
        "occasion-business": "Dîner d'Affaires",
        "occasion-family": "Réunion de Famille",
        "occasion-other": "Autre",
        "watch-video": "Découvrir Notre Univers",
        "video-title": "L'Excellence en Mouvement",
        "video-desc": "Découvrez l'art culinaire qui fait la renommée de Saveur Le Delices",
        "location": "Nous Trouver",
        "location-sub": "Notre Adresse",
        "location-title": "Nous Trouver",
        "location-address-title": "Adresse",
        "location-address": "SAVEUR LES DÉLICES<br>Douala, Cameroun",
        "location-phone-title": "Téléphone",
        "location-phone": "+237 697 093 XXX",
        "location-hours-title": "Horaires",
        "location-hours": "Lun - Dim<br>12:00 - 23:00",
        "btn-directions": "Obtenir l'Itinéraire"
    },
    en: {
        home: "Home",
        menu: "Menu",
        story: "Our Story",
        gallery: "Gallery",
        reservations: "Reservations",
        order: "Order Now",
        "hero-sub": "Experience Culinary Art",
        "hero-title": "Savor the <span class='highlight'>Yellow</span> Standard",
        "hero-desc": "Indulge in a fusion of traditional flavors and modern elegance, crafted with passion and served with soul.",
        "btn-book": "Book A Table",
        "btn-menu": "Explore Menu",
        "menu-sub": "Exclusive Selection",
        "menu-title": "Our Signature Menu",
        "dish1-name": "Royal Ndolé",
        "dish1-desc": "Cameroon's emblem: ndolé leaves, fresh peanuts, and shrimp, served with ripe fried plantains.",
        "dish2-name": "Signature Omelette",
        "dish2-desc": "A burst of fine herb flavors, glazed with balsamic vinegar and a crispy lace garnish.",
        "dish3-name": "Littoral Braised Fish",
        "dish3-desc": "Fresh fish braised with local spices, served with miondo swirls and crunchy vegetables.",
        "dish4-name": "Herb-Grilled Captain Fish",
        "dish4-desc": "Whole and flavorful, slow-grilled and served with rosemary-roasted potatoes.",
        "dish5-name": "Pasta Bolognese",
        "dish5-desc": "A rich sauce simmered for 6 hours, fresh basil, and parmesan for a touch of Italy.",
        "about-sub": "Our Story",
        "about-title": "A Heritage of Passion,<br>Exceptional Craftsmanship",
        "about-desc1": "For over two decades, Saveur Le Delices has embodied the excellence of reimagined Cameroonian gastronomy. Our executive chef, trained in the finest houses of Paris and Lyon, has crafted a cuisine that honors traditions while embracing innovation.",
        "about-desc2": "Every dish tells a story — that of the local markets of Douala, ancestral spices passed down through generations, and a bold vision that places Cameroon on the world culinary map. We believe gastronomy is an art, and every meal with us is a masterpiece.",
        "about-cta": "Discover Our Story",
        "gallery-sub": "Our Moments",
        "gallery-title": "Gallery of Excellence",
        "gallery-all": "All",
        "gallery-dishes": "Dishes",
        "gallery-ambiance": "Ambiance",
        "gallery-events": "Events",
        "gallery-cta": "See More Photos",
        "reservation-sub": "Reservations",
        "reservation-title": "Book Your Experience",
        "reservation-desc": "Book your table for a memorable evening at our establishment. We recommend booking at least 48 hours in advance for weekends.",
        "reservation-img-title": "Reserve Your Table",
        "reservation-img-desc": "An unforgettable culinary experience awaits you",
        "form-name": "Full Name",
        "form-email": "Email",
        "form-phone": "Phone",
        "form-guests": "Number of Guests",
        "form-date": "Date",
        "form-time": "Time",
        "form-occasion": "Special Occasion",
        "form-message": "Special Requests",
        "form-submit": "Confirm Reservation",
        "occasion-anniversary": "Anniversary",
        "occasion-date": "Romantic Date",
        "occasion-business": "Business Dinner",
        "occasion-family": "Family Gathering",
        "occasion-other": "Other",
        "watch-video": "Discover Our World",
        "video-title": "Excellence in Motion",
        "video-desc": "Discover the culinary art that makes Saveur Le Delices renowned",
        "location": "Find Us",
        "location-sub": "Our Location",
        "location-title": "Find Us",
        "location-address-title": "Address",
        "location-address": "SAVEUR LES DÉLICES<br>Douala, Cameroon",
        "location-phone-title": "Phone",
        "location-phone": "+237 697 093 XXX",
        "location-hours-title": "Hours",
        "location-hours": "Mon - Sun<br>12:00 - 23:00",
        "btn-directions": "Get Directions"
    }
};

// Slider Logic
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Translation Logic
const frBtn = document.getElementById('lang-fr');
const enBtn = document.getElementById('lang-en');

function changeLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerHTML = langData[lang][key];
    });

    // Update active button state
    if (lang === 'fr') {
        frBtn.classList.add('active');
        enBtn.classList.remove('active');
    } else {
        enBtn.classList.add('active');
        frBtn.classList.remove('active');
    }
}

frBtn.addEventListener('click', () => changeLanguage('fr'));
enBtn.addEventListener('click', () => changeLanguage('en'));

// Gallery Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');

let currentImageIndex = 0;
const visibleItems = () => Array.from(galleryItems).filter(item => item.style.display !== 'none');

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const titleEl = item.querySelector('h3') || item.querySelector('.gallery-content h3');
        const title = titleEl ? titleEl.textContent : '';
        
        lightboxImg.src = img.src;
        lightboxCaption.textContent = title;
        lightbox.classList.add('active');
        
        // Update current index based on visible items
        const visible = visibleItems();
        currentImageIndex = visible.indexOf(item);
        
        document.body.style.overflow = 'hidden';
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

function showImage(index) {
    const visible = visibleItems();
    
    if (index < 0) {
        currentImageIndex = visible.length - 1;
    } else if (index >= visible.length) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = index;
    }
    
    const item = visible[currentImageIndex];
    const img = item.querySelector('img');
    const title = item.querySelector('h3').textContent;
    
    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = title;
        lightboxImg.style.opacity = '1';
    }, 200);
}

lightboxPrev.addEventListener('click', () => {
    showImage(currentImageIndex - 1);
});

lightboxNext.addEventListener('click', () => {
    showImage(currentImageIndex + 1);
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    } else if (e.key === 'ArrowLeft') {
        showImage(currentImageIndex - 1);
    } else if (e.key === 'ArrowRight') {
        showImage(currentImageIndex + 1);
    }
});

// Reservation Form Logic
const reservationForm = document.getElementById('reservationForm');

if (reservationForm) {
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(reservationForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        const btn = reservationForm.querySelector('.btn-submit');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<span>Réservation Confirmée!</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
        btn.style.background = '#22c55e';
        
        // Reset form after 2 seconds
        setTimeout(() => {
            reservationForm.reset();
            btn.innerHTML = originalText;
            btn.style.background = '';
            
            // Show confirmation alert (in production, this would be a modal)
            alert('Votre réservation a été reçue! Nous vous contacterons bientôt pour la confirmation.');
        }, 2000);
        
        // Log reservation data (in production, send to server)
        console.log('Reservation Data:', data);
    });
}

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (href === '#' || !href) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            // Calculate offset for fixed navbar
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveNavLink() {
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // If at the top of the page, set home as active
    if (scrollPos < 100) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('a[href="#home"]')?.classList.add('active');
    }
}

// Throttled scroll event listener
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            setActiveNavLink();
            ticking = false;
        });
        ticking = true;
    }
});

// Handle "Commander" button - show popup for demo
document.querySelector('.btn-nav')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Service de commande en ligne - Disponible prochainement!\n\nPour le moment, veuillez nous appeler au: +237 6XX XXX XXX');
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(18, 18, 18, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.05)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinksContainer) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
        document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close mobile menu when clicking on a link
    navLinksContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navLinksContainer.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Handle window resize - close mobile menu on large screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && navLinksContainer.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Video Modal Functionality
const playVideoBtn = document.getElementById('playVideoBtn');
const videoModal = document.getElementById('videoModal');
const closeVideoModal = document.getElementById('closeVideoModal');
const heroVideo = document.getElementById('heroVideo');

if (playVideoBtn && videoModal && heroVideo) {
    // Open video modal
    playVideoBtn.addEventListener('click', () => {
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Auto-play video when modal opens
        heroVideo.play().catch(error => {
            console.log('Auto-play prevented:', error);
        });
    });
    
    // Close video modal function
    const closeVideo = () => {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        heroVideo.pause();
        heroVideo.currentTime = 0;
    };
    
    // Close button click
    closeVideoModal.addEventListener('click', closeVideo);
    
    // Click outside video to close
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideo();
        }
    });
    
    // Keyboard escape to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideo();
        }
    });
    
    // Handle video ended
    heroVideo.addEventListener('ended', () => {
        // Optional: close modal when video ends
        // closeVideo();
    });
}