const skillData = [
  { title: 'Frontend Craft', tools: ['React', 'Next.js', 'TypeScript', 'Framer Motion'] },
  { title: 'Design Systems', tools: ['Design tokens', 'Storybook', 'Tailwind', 'Styled Components'] },
  { title: 'Full-stack Delivery', tools: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL'] },
  { title: 'Testing & Quality', tools: ['Playwright', 'Jest', 'Vitest', 'Cypress'] },
  { title: 'Cloud & DevOps', tools: ['AWS', 'Vercel', 'Docker', 'CI/CD pipelines'] },
  { title: 'Product Strategy', tools: ['User research', 'Analytics', 'Roadmapping', 'Growth experiments'] }
];

const projectData = [
  {
    title: 'Pulse Analytics Platform',
    period: '2024',
    description:
      'A real-time analytics dashboard and collaboration suite helping growth teams respond to changing customer behaviour.',
    tech: ['React', 'TypeScript', 'WebSockets', 'Serverless'],
    link: 'https://example.com/pulse'
  },
  {
    title: 'Nova Finance Studio',
    period: '2023',
    description:
      'Crafted an interactive marketing site with immersive 3D canvases and conversion-focused storytelling for a fintech launch.',
    tech: ['Next.js', 'Three.js', 'GSAP', 'Sanity'],
    link: 'https://example.com/nova'
  },
  {
    title: 'Atlas Design System',
    period: '2022',
    description:
      'Led the creation of a modular design system powering cohesive UX across mobile and web with production-ready components.',
    tech: ['React', 'Storybook', 'Figma', 'Chromatic'],
    link: 'https://example.com/atlas'
  }
];

const experienceData = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Lumen Labs',
    period: '2022 — Present',
    description:
      'Owning the core web experience for a VC-backed SaaS product. Transitioned legacy stack to modern TypeScript architecture and boosted retention by 18% through UX overhauls.'
  },
  {
    role: 'Product Engineer',
    company: 'Studio North',
    period: '2019 — 2022',
    description:
      'Shipped performance-centric marketing sites and complex dashboards for clients in fintech, climate, and creator economy. Achieved repeat engagements by improving delivery velocity.'
  },
  {
    role: 'Developer & Designer',
    company: 'Freelance',
    period: '2016 — 2019',
    description:
      'Partnered with startups and agencies to design, build, and launch digital products end-to-end with a focus on brand storytelling and interaction.'
  }
];

const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const timeline = document.getElementById('timeline');
const yearEl = document.getElementById('current-year');
const body = document.body;
const modeToggle = document.querySelector('.mode-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const scrollProgress = document.querySelector('.scroll-progress');

const htmlFromArray = (items) => items.join('');

const renderSkills = () => {
  const markup = skillData.map(
    ({ title, tools }) => `
      <article class="skill-card reveal">
        <h3 class="skill-card__title">${title}</h3>
        <p class="skill-card__tools">${tools.join(' · ')}</p>
      </article>
    `
  );
  skillsGrid.innerHTML = htmlFromArray(markup);
};

const renderProjects = () => {
  const markup = projectData.map(
    ({ title, period, description, tech, link }) => `
      <article class="project-card reveal">
        <div class="project-card__content">
          <span class="project-card__period">${period}</span>
          <h3 class="project-card__title">${title}</h3>
          <p class="project-card__description">${description}</p>
          <div class="project-card__meta">
            ${tech.map((tool) => `<span class="tech-tag">${tool}</span>`).join('')}
          </div>
        </div>
        <div class="project-card__footer">
          <span>Case study</span>
          <a class="project-card__cta" href="${link}" target="_blank" rel="noreferrer">
            View project
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    `
  );
  projectsGrid.innerHTML = htmlFromArray(markup);
};

const renderExperience = () => {
  const markup = experienceData.map(
    ({ role, company, period, description }) => `
      <article class="timeline-item reveal">
        <header class="timeline-item__header">
          <h3 class="timeline-item__role">${role}</h3>
          <span class="timeline-item__period">${period}</span>
        </header>
        <p class="timeline-item__company">${company}</p>
        <p class="timeline-item__description">${description}</p>
      </article>
    `
  );
  timeline.innerHTML = htmlFromArray(markup);
};

const setCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
};

const applyStoredTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored === 'light') body.classList.add('light');
};

const toggleTheme = () => {
  body.classList.toggle('light');
  const theme = body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
};

const toggleNavigation = () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('is-open');
};

const closeNavigation = () => {
  navToggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
};

const manageNavOnResize = () => {
  if (window.innerWidth > 900) {
    closeNavigation();
  }
};

const handleScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = docHeight === 0 ? 0 : (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
};

const registerRevealAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
};

const registerSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        closeNavigation();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

const init = () => {
  applyStoredTheme();
  renderSkills();
  renderProjects();
  renderExperience();
  setCurrentYear();
  registerRevealAnimations();
  registerSmoothScroll();
  handleScrollProgress();
};

init();

modeToggle.addEventListener('click', toggleTheme);
navToggle.addEventListener('click', toggleNavigation);
window.addEventListener('resize', manageNavOnResize);
window.addEventListener('scroll', handleScrollProgress);
