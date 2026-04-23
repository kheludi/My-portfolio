// Profile upload functionality
const profileContainer = document.getElementById('profileContainer');
const profileUploadInput = document.getElementById('profileUpload');
const profileImage = document.getElementById('profileImage');

profileContainer.addEventListener('click', (e) => {
  e.stopPropagation();
  profileUploadInput.click();
});

profileUploadInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profileImage.src = e.target.result;
      showFloatingMessage('Profile picture updated!', '#10b981');
    };
    reader.readAsDataURL(file);
  } else {
    showFloatingMessage('Please upload a valid image (JPEG/PNG)', '#ef4444');
  }
});

// Toast notification helper
function showFloatingMessage(msg, bgColor) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.position = 'fixed';
  toast.style.bottom = '24px';
  toast.style.right = '24px';
  toast.style.backgroundColor = bgColor;
  toast.style.color = 'white';
  toast.style.padding = '12px 20px';
  toast.style.borderRadius = '40px';
  toast.style.fontWeight = '600';
  toast.style.fontSize = '0.9rem';
  toast.style.zIndex = '9999';
  toast.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
  toast.style.fontFamily = 'Inter, sans-serif';
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// Contact links
document.getElementById('emailLink').addEventListener('click', () => {
  window.location.href = "mailto:kheludi64@gmail.com?subject=Hello%20Khalid!&body=I%20saw%20your%20portfolio...";
});
document.getElementById('githubLink').addEventListener('click', () => {
  window.open("https://github.com/kheludi", "_blank");
});
document.getElementById('instagramLink').addEventListener('click', () => {
  window.open("https://instagram.com/kheludi34", "_blank");
});
document.getElementById('phoneLink').addEventListener('click', () => {
  window.location.href = "tel:+251964655165";
});
document.getElementById('linkedinLink').addEventListener('click', () => {
  window.open("https://linkedin.com/in/kheludi", "_blank");
});

// Footer social links
document.getElementById('footerGithub')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.open("https://github.com/kheludi", "_blank");
});
document.getElementById('footerLinkedin')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.open("https://linkedin.com/in/kheludi", "_blank");
});
document.getElementById('footerInstagram')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.open("https://instagram.com/kheludi34", "_blank");
});
document.getElementById('footerTwitter')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.open("https://twitter.com/kheludi", "_blank");
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinksMenu = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinksMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinksMenu.classList.remove('active');
  });
});

// Typing animation for hero role
const roles = ["full-stack dev", "AI researcher", "open source lover", "UI craftsman", "code artist"];
let roleIndex = 0, charIndex = 0, currentText = "";
const dynamicSpan = document.getElementById("dynamicRole");
function typeRole() {
  if (!dynamicSpan) return;
  if (charIndex < roles[roleIndex].length) {
    currentText += roles[roleIndex][charIndex];
    dynamicSpan.innerText = currentText;
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}
function eraseRole() {
  if (charIndex > 0) {
    currentText = currentText.slice(0, -1);
    dynamicSpan.innerText = currentText;
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 400);
  }
}
setTimeout(typeRole, 800);

// Skills data and rendering
const skillsList = [
  { name: "Python", icon: "fab fa-python" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React", icon: "fab fa-react" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "Java", icon: "fab fa-java" },
  { name: "C++", icon: "fas fa-code" },
  { name: "SQL", icon: "fas fa-database" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "TensorFlow", icon: "fas fa-brain" },
  { name: "TailwindCSS", icon: "fab fa-css3-alt" }
];

const skillsContainer = document.getElementById('skillsGrid');
function renderSkills() {
  skillsContainer.innerHTML = "";
  skillsList.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill-item';
    skillDiv.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
    skillsContainer.appendChild(skillDiv);
  });
}
renderSkills();

// Projects data and rendering
const projectsData = [
  { title: "DevMind AI", desc: "AI-powered coding assistant using LLMs. Built with Python, FastAPI, and React.", tags: ["Python", "FastAPI", "React", "OpenAI"], icon: "fas fa-robot" },
  { title: "ByteMart", desc: "Full-stack e-commerce with secure auth, cart, real-time inventory. (MERN stack)", tags: ["MongoDB", "Express", "React", "Node"], icon: "fas fa-store" },
  { title: "LeetLog", desc: "Competitive programming tracker — visualizes DSA progress. (Next.js + Firebase)", tags: ["Next.js", "Firebase", "Tailwind"], icon: "fas fa-chart-line" },
  { title: "Portfolio 4.0", desc: "This portfolio — fully responsive, glassmorphism, and interactive.", tags: ["HTML/CSS", "JS", "Glassmorphism"], icon: "fas fa-laptop-code" }
];

const projectsGrid = document.getElementById('projectsGrid');
function renderProjects() {
  projectsGrid.innerHTML = "";
  projectsData.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-img"><i class="${proj.icon}" style="font-size: 3.5rem;"></i></div>
      <div class="project-info">
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
        <div class="project-tags">${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        <a href="#" class="project-link">Live demo →</a>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}
renderProjects();

// EmailJS contact form
const contactForm = document.getElementById('contactForm');
const feedbackPara = document.getElementById('formFeedback');
const submitBtn = document.getElementById('submitBtn');

(function() {
  emailjs.init("ZQeLHigq39ppsFny2");
})();

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const message = document.getElementById('msgInput').value.trim();
  
  if (!name || !email || !message) {
    feedbackPara.style.color = "#dc2626";
    feedbackPara.innerHTML = "❌ Please fill all fields before sending.";
    return;
  }
  if (!email.includes('@') || !email.includes('.')) {
    feedbackPara.style.color = "#dc2626";
    feedbackPara.innerHTML = "📧 Please enter a valid email address.";
    return;
  }
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Sending...';
  
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    to_email: "kheludi64@gmail.com",
    reply_to: email
  };
  
  try {
    const response = await emailjs.send(
      "service_vm5rn6i",
      "template_x3wn8zc",
      templateParams
    );
    
    feedbackPara.style.color = "#10b981";
    feedbackPara.innerHTML = "✅ Message sent successfully! I'll get back to you soon.";
    contactForm.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
    feedbackPara.style.color = "#dc2626";
    feedbackPara.innerHTML = "❌ Failed to send message. Please try again or email me directly.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    setTimeout(() => {
      if (feedbackPara.innerHTML.includes("successfully")) {
        feedbackPara.innerHTML = "";
      }
    }, 5000);
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === "#" || targetId === "") return;
    const targetElem = document.querySelector(targetId);
    if (targetElem) {
      e.preventDefault();
      targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Demo coming soon for project links
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showFloatingMessage("✨ Full demo version coming soon! This is a showcase portfolio.", "#3b82f6");
  });
});

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.project-card, .skill-item, .contact-container, .hero-text, .hero-image');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});