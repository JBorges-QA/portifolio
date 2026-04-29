// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateToggleButton(savedTheme);
} else {
    // Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
        updateToggleButton('dark');
    }
}

// Function to update toggle button icon
function updateToggleButton(theme) {
    if (theme === 'dark') {
        darkModeToggle.innerHTML = '☀️';
        darkModeToggle.setAttribute('aria-label', 'Alternar modo claro');
    } else {
        darkModeToggle.innerHTML = '🌙';
        darkModeToggle.setAttribute('aria-label', 'Alternar modo escuro');
    }
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleButton(newTheme);
    
    // Add animation feedback
    darkModeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        darkModeToggle.style.transform = '';
    }, 300);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        }
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Dynamic year in footer
const footerYear = document.querySelector('footer p');
if (footerYear) {
    footerYear.innerHTML = `© ${new Date().getFullYear()} José Borges - DevOps Júnior | Construindo o futuro com automação 🚀`;
}

// Console welcome message with theme info
console.log('%c🚀 DevOps Júnior | José Borges', 'color: #7c3aed; font-size: 16px; font-weight: bold;');
console.log('%cPortfólio profissional - Em busca da primeira oportunidade em DevOps', 'color: #06b6d4; font-size: 12px;');
console.log('%c✨ Dark Mode disponível! Clique no botão 🌙/☀️ no canto superior direito', 'color: #8b5cf6; font-size: 12px;');

// Tooltip for skills
const skillBadges = document.querySelectorAll('.skill-badge');
skillBadges.forEach(badge => {
    badge.addEventListener('click', () => {
        const skill = badge.textContent.trim();
        console.log(`Habilidade selecionada: ${skill}`);
        
        // Optional: Add a small animation feedback
        badge.style.transform = 'scale(0.95)';
        setTimeout(() => {
            badge.style.transform = '';
        }, 200);
    });
});

// Optional: Add keyboard shortcut (Ctrl/Cmd + Shift + D) to toggle dark mode
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        darkModeToggle.click();
        console.log('%c🌓 Dark mode toggled via keyboard shortcut!', 'color: #06b6d4; font-size: 12px;');
    }
});

// Optional: Add transition for smooth theme switching
window.addEventListener('load', () => {
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
});