// Translation Dictionary
const translations = {
    pt: {
        // Navbar
        navAbout: "Sobre",
        navProjects: "Projetos",
        navLearning: "Aprendizado",
        navContact: "Contato",
        
        // Hero
        heroGreeting: "👋 Olá, eu sou",
        heroTitle: "DevOps Júnior",
        educationLabel: "Formação:",
        educationValue: "Segurança da Informação",
        lookingLabel: "Buscando:",
        lookingValue: "Primeira oportunidade em DevOps",
        studyingLabel: "Estudando:",
        studyingValue: "AWS, Docker e Terraform",
        differentialLabel: "Diferencial:",
        differentialValue: "Segurança aplicada a Devops",
        viewProjectsBtn: "Ver Projetos",
        contactBtn: "Contato",
        
        // About
        aboutTitle: "Minha Jornada",
        timeline1Title: "Estudos em DevOps",
        timeline1Desc: "Focado em AWS, Docker e CI/CD. Realizando laboratórios práticos e projetos pessoais.",
        timeline2Title: "Formação em Segurança da Informação",
        timeline2Desc: "Fundamentos de segurança da informação e Cyber Sec, segurança de servidores e conceitos desenvolvimento seguro.",
        timeline3Title: "Curso Técnico em Desenvolvimento de Sistemas",
        timeline3Desc: "Fundamentos de programação, banco de dados e redes.",
        techSkillsTitle: "Habilidades Técnicas",
        softSkillsTitle: "Soft Skills",
        skill1: "🤝 Trabalho em equipe",
        skill2: "📚 Aprendizado rápido",
        skill3: "🔍 Resolução de problemas",
        skill4: "📢 Comunicação",
        skill5: "💡 Proatividade",
        
        // Projects
        projectsTitle: "Projetos Práticos",
        project1Title: "Infraestrutura AWS para App Web",
        project1Desc: "Configurei ambiente EC2 e RDS para aplicação web.",
        project2Title: "Pipeline docker com Github Actions",
        project2Desc: "Pipeline de CI com Github Actions. Visando testes e build em multiplas versões Ubuntu com utilização do docker",
        project3Title: "Pipeline CI/CD Simples",
        project3Desc: "Pipeline com GitHub Actions para build, teste e deploy automático em uma instância AWS EC2 e em comunicação com um RDS.",
        viewOnGithub: "Ver no GitHub →",
        
        // Roadmap
        roadmapTitle: "Roadmap de Estudos",
        roadmap1: "Linux & Shell",
        roadmap2: "Git & GitHub",
        roadmap3: "Docker",
        roadmap4: "AWS Cloud",
        roadmap5: "Kubernetes",
        roadmap6: "Terraform",
        statusDone: "Concluído",
        statusProgress: "Em andamento",
        statusNext: "Próximo",
        
        // Contact
        contactTitle: "Vamos Conversar?",
        contactSubtitle: "Estou em busca da primeira oportunidade como DevOps Júnior",
        github: "GitHub",
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
        
        // Footer
        footer: "© 2026 José Borges - DevOps Júnior | Construindo o futuro com automação 🚀"
    },
    en: {
        // Navbar
        navAbout: "About",
        navProjects: "Projects",
        navLearning: "Learning",
        navContact: "Contact",
        
        // Hero
        heroGreeting: "👋 Hello, I'm",
        heroTitle: "Junior DevOps",
        educationLabel: "Education:",
        educationValue: "Information Security",
        lookingLabel: "Looking for:",
        lookingValue: "First opportunity in DevOps",
        studyingLabel: "Studying:",
        studyingValue: "AWS, Docker & Terraform",
        differentialLabel: "Differential:",
        differentialValue: "Security applied to DevOps",
        viewProjectsBtn: "View Projects",
        contactBtn: "Contact",
        
        // About
        aboutTitle: "My Journey",
        timeline1Title: "DevOps Studies",
        timeline1Desc: "Focused on AWS, Docker and CI/CD. Doing hands-on labs and personal projects.",
        timeline2Title: "Information Security Degree",
        timeline2Desc: "Foundations of Information Security and Cyber Security, server security and secure development concepts.",
        timeline3Title: "Systems Development Technical Course",
        timeline3Desc: "Programming fundamentals, databases and networking.",
        techSkillsTitle: "Technical Skills",
        softSkillsTitle: "Soft Skills",
        skill1: "🤝 Teamwork",
        skill2: "📚 Fast Learning",
        skill3: "🔍 Problem Solving",
        skill4: "📢 Communication",
        skill5: "💡 Proactivity",
        
        // Projects
        projectsTitle: "Practical Projects",
        project1Title: "AWS Infrastructure for Web App",
        project1Desc: "Set up EC2 and RDS environment for web application.",
        project2Title: "Docker pipeline with Github Actions",
        project2Desc: "CI pipeline with Github Actions. Aiming for testing and building on multiple Ubuntu versions using Docker",
        project3Title: "Simple CI/CD Pipeline",
        project3Desc: "Pipeline with GitHub Actions for automatic build, test and deploy on an AWS EC2 instance communicating with RDS.",
        viewOnGithub: "View on GitHub →",
        
        // Roadmap
        roadmapTitle: "Study Roadmap",
        roadmap1: "Linux & Shell",
        roadmap2: "Git & GitHub",
        roadmap3: "Docker",
        roadmap4: "AWS Cloud",
        roadmap5: "Kubernetes",
        roadmap6: "Terraform",
        statusDone: "Completed",
        statusProgress: "In Progress",
        statusNext: "Next",
        
        // Contact
        contactTitle: "Let's Talk?",
        contactSubtitle: "Looking for my first opportunity as a Junior DevOps",
        github: "GitHub",
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
        
        // Footer
        footer: "© 2026 José Borges - Junior DevOps | Building the future with automation 🚀"
    }
};

// Current language
let currentLanguage = 'pt';

// Function to update page language
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            // Check if element is an input or has innerHTML
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
    
    // Update button text
    const langToggle = document.getElementById('languageToggle');
    if (lang === 'pt') {
        langToggle.innerHTML = '🇧🇷 PT';
        langToggle.setAttribute('aria-label', 'Mudar para inglês');
    } else {
        langToggle.innerHTML = '🇺🇸 EN';
        langToggle.setAttribute('aria-label', 'Switch to Portuguese');
    }
    
    // Add animation class to body for smooth transition
    document.body.classList.add('language-changing');
    setTimeout(() => {
        document.body.classList.remove('language-changing');
    }, 300);
    
    // Save to localStorage
    localStorage.setItem('language', lang);
}

// Language toggle function
function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    updateLanguage(currentLanguage);
    
    // Console feedback
    console.log(`%c🌐 Language changed to ${currentLanguage === 'pt' ? 'Português' : 'English'}`, 'color: #06b6d4; font-size: 12px;');
}

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

// Language toggle event
const languageToggle = document.getElementById('languageToggle');
languageToggle.addEventListener('click', toggleLanguage);

// Load saved language preference
const savedLanguage = localStorage.getItem('language');
if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
    currentLanguage = savedLanguage;
    updateLanguage(currentLanguage);
}

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
if (footerYear && !footerYear.hasAttribute('data-translate')) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
}

// Console welcome message with theme info
console.log('%c🚀 DevOps Júnior | José Borges', 'color: #7c3aed; font-size: 16px; font-weight: bold;');
console.log('%cPortfólio profissional - Em busca da primeira oportunidade em DevOps', 'color: #06b6d4; font-size: 12px;');
console.log('%c✨ Dark Mode disponível! Clique no botão 🌙/☀️ no canto superior direito', 'color: #8b5cf6; font-size: 12px;');
console.log('%c🌐 Site bilíngue! Clique em PT/EN para mudar o idioma', 'color: #10b981; font-size: 12px;');

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
    
    // Add keyboard shortcut for language (Ctrl/Cmd + Shift + L)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        languageToggle.click();
        console.log('%c🌐 Language toggled via keyboard shortcut!', 'color: #10b981; font-size: 12px;');
    }
});

// Optional: Add transition for smooth theme switching
window.addEventListener('load', () => {
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
});