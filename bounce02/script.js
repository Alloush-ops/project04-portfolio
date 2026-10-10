// --- Exercise 00: Theme Switcher ---
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// --- Bounce 01: Profile Photo Switcher ---
const profileImg = document.getElementById('profile-img');
const photoToggleBtn = document.getElementById('photo-toggle');
let isDefaultPhoto = true;

photoToggleBtn.addEventListener('click', () => {
    profileImg.style.opacity = 0; 
    setTimeout(() => {
        if (isDefaultPhoto) {
            profileImg.src = "assets/profile2.jpg";
            profileImg.alt = "Secondary Photo";
        } else {
            profileImg.src = "assets/profile1.jpg";
            profileImg.alt = "Primary Photo";
        }
        profileImg.style.opacity = 1;
        isDefaultPhoto = !isDefaultPhoto;
    }, 300);
});

// --- Bounce 02: Language Switcher ---
const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = "en";

const translations = {
    en: {
        "brand-name": "Ali Al-Saraireh",
        "nav-about": "About", "nav-skills": "Skills", "nav-projects": "Projects", 
        "nav-contact": "Contact",
        "btn-theme": "Toggle Theme", "btn-photo": "Switch Avatar",
        "about-title": "Detail-Oriented Cyber Security Professional",
        "about-desc": "Based in Zarqa, Jordan. I am a 24-year-old Cybersecurity graduate from Hashemite University. I specialize in SOC analysis and GRC, with experience managing SIEM solutions like Splunk and ELK for network monitoring and incident triage.",
        "skills-title": "Skills",
        "skill-1": "Security Operations: SIEM (Splunk, ELK), MITRE ATT&CK, Incident Response",
        "skill-2": "GRC: ISO 27001, NIST CSF, GDPR, HIPAA, Risk Management",
        "skill-3": "Networking & VAPT: Burp Suite, Metasploit, Wireshark, Firewalls",
        "skill-4": "Programming: Python, Django, HTML, CSS, JS, Bash",
        "projects-title": "Project Showcase",
        "proj-0-title": "Project 00: HTML & Structure", "proj-0-desc": "Built semantic webpage structures and forms.",
        "proj-1-title": "Project 01: CSS & Flexbox", "proj-1-desc": "Styled web pages using responsive Flexbox architectures.",
        "proj-2-title": "Project 02: Visual Presentation", "proj-2-desc": "Implemented interactive keyframe animations and color models.",
        "proj-3-title": "Project 03: JS & Interactivity", "proj-3-desc": "Developed dynamic logic and live DOM manipulation.",
        "contact-title": "Contact Me", "contact-send": "Send Message",
        "ph-name": "Your Name", "ph-email": "Your Email", "ph-msg": "Your Message",
        "footer-text": "© 2026 Ali Al-Saraireh. Built from scratch."
    },
    ar: {
        "brand-name": "علي الصرايرة",
        "nav-about": "حول", "nav-skills": "المهارات", "nav-projects": "المشاريع", 
        "nav-contact": "اتصل بي",
        "btn-theme": "تبديل المظهر", "btn-photo": "تغيير الصورة",
        "about-title": "متخصص دقيق في الأمن السيبراني",
        "about-desc": "مقيم في الزرقاء، الأردن. أنا خريج أمن سيبراني من الجامعة الهاشمية أبلغ من العمر 24 عاماً. أتخصص في تحليل مركز العمليات الأمنية (SOC) وإدارة الحوكمة والمخاطر والامتثال (GRC)، مع خبرة في إدارة حلول SIEM مثل Splunk و ELK لمراقبة الشبكات وتحليل الحوادث.",
        "skills-title": "المهارات",
        "skill-1": "عمليات الأمن: SIEM (Splunk, ELK)، إطار MITRE ATT&CK، الاستجابة للحوادث",
        "skill-2": "الحوكمة والمخاطر والامتثال (GRC): ISO 27001, NIST CSF, GDPR, HIPAA",
        "skill-3": "الشبكات واختبار الاختراق: Burp Suite, Metasploit, Wireshark, Firewalls",
        "skill-4": "البرمجة: Python, Django, HTML, CSS, JS, Bash",
        "projects-title": "معرض المشاريع",
        "proj-0-title": "المشروع 00: HTML والهيكلة", "proj-0-desc": "بناء هياكل صفحات الويب الدلالية والنماذج.",
        "proj-1-title": "المشروع 01: CSS و Flexbox", "proj-1-desc": "تنسيق صفحات الويب باستخدام بنية Flexbox المتجاوبة.",
        "proj-2-title": "المشروع 02: العرض المرئي", "proj-2-desc": "تنفيذ حركات تفاعلية ونماذج ألوان.",
        "proj-3-title": "المشروع 03: JS والتفاعل", "proj-3-desc": "تطوير منطق ديناميكي ومعالجة DOM حية.",
        "contact-title": "اتصل بي", "contact-send": "إرسال رسالة",
        "ph-name": "الاسم", "ph-email": "البريد الإلكتروني", "ph-msg": "رسالتك",
        "footer-text": "© 2026 علي الصرايرة. تم بناؤه من الصفر."
    }
};

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    
    // Update HTML attributes for bidirectional layout
    if (currentLang === "ar") {
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", "ar");
        langToggleBtn.textContent = "English";
    } else {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.setAttribute("lang", "en");
        langToggleBtn.textContent = "عربي";
    }

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update form placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });
});
