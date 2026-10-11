import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Sparkles,
  Braces,
  Database,
  Wrench,
} from "lucide-react";
import "./styles.css";

function GithubIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19.05 4.7 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1a5.07 5.07 0 0 0-.14 3.7A5.44 5.44 0 0 0 2.5 7.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 17.13V22" />
    </svg>
  );
}
function LinkedinIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const links = {
  linkedin: "https://www.linkedin.com/in/ridhima-sharma27/",
  github: "https://github.com/Ridhimaa0827",
  email: "mailto:ridhimasharma21150@gmail.com",
  aiCreator: "https://ai-creator-hub-client.vercel.app",
  fooddelivery: "https://food-del-frontend-liart-kappa.vercel.app/",
  portfolio: "https://portfolio-ridhima.vercel.app",
};

const projects = [
  {
    number: "01",
    category: "AI · FULL-STACK DEVELOPMENT",
    title: "AI Creator Hub",
    description:
      "An AI-powered web application for generating content through a simple, intuitive interface.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/ai-creator-hub.png",
    visual: (
      <div className="ai-mock">
        <div className="mock-top">
          <span className="mock-dot"></span>
          <span className="mock-dot"></span>
          <span className="mock-dot"></span>
          <span className="mock-top-label">CREATOR STUDIO</span>
        </div>
        <div className="mock-sidebar">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="mock-main">
          <span className="mock-eyebrow">YOUR CREATIVE SPACE</span>
          <strong>
            Make something
            <br />
            <em>remarkable.</em>
          </strong>
          <div className="mock-input">
            What would you like to create? <span>↗</span>
          </div>
          <div className="mock-pills">
            <i>✳ Content</i>
            <i>✦ Ideas</i>
            <i>↗ Copy</i>
          </div>
        </div>
      </div>
    ),
    live: links.aiCreator,
    source: links.github,
  },
  {
    number: "02",
    category: "E-COMMERCE · FULL-STACK",
    title: "Food Delivery",
    description:
      "A full-stack food ordering experience with customer and admin flows, order management, and Stripe payment integration.",
    stack: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
    image: "/projects/food-delivery.png",
    visual: (
      <div className="food-mock">
        <div className="food-nav">
          <b>
            fresh<span>ly.</span>
          </b>
          <span>Discover&nbsp;&nbsp; Menu&nbsp;&nbsp; Orders</span>
          <small>Cart (2)</small>
        </div>
        <div className="food-hero">
          <div>
            <small>GOOD FOOD, GOOD MOOD</small>
            <strong>
              Your next
              <br />
              favourite <em>meal.</em>
            </strong>
            <p>Fresh picks made for your cravings.</p>
            <button>Explore menu ↗</button>
          </div>
          <div className="food-orbit">
            <div className="food-plate">
              <span>🥗</span>
            </div>
            <b>
              FRESH
              <br />
              DAILY
            </b>
          </div>
        </div>
        <div className="food-bottom">
          <span>POPULAR TODAY</span>
          <i>●&nbsp; Fresh ingredients</i>
          <i>●&nbsp; Made with care</i>
        </div>
      </div>
    ),
    live: links.fooddelivery,
    source: links.github,
  },
  {
    number: "03",
    category: "FITNESS · TRACKING",
    title: "Fitness Hub",
    description:
      "A fitness companion with BMI calculation, personalised workout and diet plans, and progress tracking.",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    image: "/projects/fitness-hub.png",
    visual: (
      <div className="fitness-mock">
        <div className="fit-head">
          <span>
            FITNESS<span className="fit-gold">/HUB</span>
          </span>
          <span>YOUR WEEK ↗</span>
        </div>
        <div className="fit-greeting">
          A LITTLE BETTER,
          <br />
          <em>EVERY DAY.</em>
        </div>
        <div className="fit-stats">
          <div>
            <small>WEEKLY ACTIVITY</small>
            <b>
              4.5 <small>hrs</small>
            </b>
            <div className="fit-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div>
            <small>DAILY GOAL</small>
            <b>
              78<span>%</span>
            </b>
            <div className="fit-ring">✓</div>
          </div>
        </div>
        <div className="fit-footer">
          MOVE WITH PURPOSE <span>→</span>
        </div>
      </div>
    ),
    live: "#contact",
    source: links.github,
  },
];

const skillGroups = [
  {
    icon: <Code2 size={19} />,
    title: "Frontend",
    items: [
      "React.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive UI",
    ],
  },
  {
    icon: <Braces size={19} />,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "PHP"],
  },
  {
    icon: <Database size={19} />,
    title: "Databases",
    items: ["MongoDB", "Oracle SQL"],
  },
  {
    icon: <Wrench size={19} />,
    title: "Tools & workflow",
    items: [
      "Git & GitHub",
      "Vite",
      "Postman",
      "Vercel",
      "Render",
      "Cloudinary",
      "Figma",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const label =
              id === "home"
                ? "Home"
                : id === "about"
                  ? "About"
                  : id === "work"
                    ? "Work"
                    : id === "skills"
                      ? "Skills"
                      : id === "experience"
                        ? "Experience"
                        : "Contact";
            setActive(label);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    ["Home", "home"],
    ["About", "about"],
    ["Work", "work"],
    ["Skills", "skills"],
    ["Experience", "experience"],
    ["Contact", "contact"],
  ];

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Ridhima Sharma home">
          r<span>.</span>s
        </a>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {navItems.map(([label, id]) => (
            <a
              key={id}
              className={active === label ? "nav-link active" : "nav-link"}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-resume"
            href="/Ridhima-Sharma-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle light and dark theme"
          >
            <span>{dark ? "☼" : "◐"}</span>
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot"></span> OPEN TO OPPORTUNITIES{" "}
              <span className="eyebrow-line"></span>
            </div>
            <h1>
              Hi, I'm Ridhima Sharma<span className="accent-dot">.</span>
              <br />
              <em>I build for the web.</em>
            </h1>
            <p className="hero-description">
              MCA student and full-stack web developer creating thoughtful,
              responsive digital experiences with React and the MERN stack.
            </p>
            <div className="hero-buttons">
              <a className="button button-dark" href="#work">
                Explore my work <ArrowUpRight size={16} />
              </a>
              <a className="button button-plain" href="#contact">
                Let's connect <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-socials">
              <a href={links.github} target="_blank" rel="noreferrer">
                <GithubIcon size={16} /> GitHub
              </a>
              <span className="social-divider"></span>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <span className="social-divider"></span>
              <a href={links.email}>
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="/ridhima.jpg"
                alt="Ridhima Sharma"
                className="portrait"
              />
              <div className="portrait-label">
                <span>BASED IN</span>
                <b>Jalandhar, India</b>
                <span className="label-spark">✳</span>
              </div>
            </div>
            <div className="floating-note note-top">
              <span className="note-icon">
                <Code2 size={16} />
              </span>
              <div>
                <b>Building & learning</b>
                <small>One project at a time</small>
              </div>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-star">✳</span>
              <div>
                <b>Curious by nature.</b>
                <small>Developer by choice.</small>
              </div>
            </div>
            <span className="hero-outline"></span>
          </div>
          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
          <div className="hero-index">PORTFOLIO — 2026</div>
        </section>

        <section id="about" className="about-section section-wrap">
          <div className="section-kicker">
            <span>01</span> A LITTLE ABOUT ME
          </div>
          <div className="about-grid">
            <h2>
              Good design catches the eye.
              <br />
              <em>Good code makes it work.</em>
            </h2>
            <div className="about-text">
              <p>
                I'm an MCA student at DAVIET with a growing focus on frontend
                and full-stack web development. I enjoy turning ideas into
                useful, polished web experiences—from building responsive
                interfaces to connecting them with APIs and databases.
              </p>
              <p>
                I learn best by building, experimenting, and improving projects
                one detail at a time. I'm currently deepening my skills across
                the JavaScript ecosystem and the MERN stack.
              </p>
              <a
                className="text-link"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                A little more on LinkedIn <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="about-facts">
            <div>
              <span className="fact-number">01</span>
              <b>Build with purpose</b>
              <p>Useful, responsive experiences with details that matter.</p>
            </div>
            <div>
              <span className="fact-number">02</span>
              <b>Keep learning</b>
              <p>Exploring tools and techniques through hands-on work.</p>
            </div>
            <div>
              <span className="fact-number">03</span>
              <b>Think end-to-end</b>
              <p>From the user interface to APIs, data, and deployment.</p>
            </div>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="section-kicker">
                  <span>02</span> SELECTED WORK
                </div>
                <h2>
                  Things I've <em>built.</em>
                </h2>
              </div>
              <p>
                A few projects where I've been learning, solving problems, and
                bringing ideas to life.
              </p>
            </div>
            <div className="project-list">
              {projects.map((p, i) => (
                <article
                  className={`project-card project-${i + 1}`}
                  key={p.number}
                >
                  <div className="project-visual">
                    <img
                      src={p.image}
                      alt={`${p.title} project screenshot`}
                      className="project-screenshot"
                    />
                    <span className="visual-index">{p.number} / 03</span>
                  </div>
                  <div className="project-details">
                    <div className="project-meta">
                      <span>{p.category}</span>
                      <span className="project-number">{p.number}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="tech-list">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        href={p.live}
                        target={
                          p.live.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noreferrer"
                      >
                        Live preview <ArrowUpRight size={15} />
                      </a>
                      <a href={p.source} target="_blank" rel="noreferrer">
                        Source code <GithubIcon size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="github-banner">
              <div className="github-banner-icon">
                <GithubIcon size={22} />
              </div>
              <div>
                <b>More experiments, code & commits</b>
                <p>
                  Explore my GitHub for more projects and what I'm learning.
                </p>
              </div>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                Visit GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section id="skills" className="skills-section section-wrap">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>03</span> MY TOOLKIT
              </div>
              <h2>
                Tools of the <em>trade.</em>
              </h2>
            </div>
            <p>
              Technologies I use, practice with, and continue to grow through
              real projects.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((g, i) => (
              <article className="skill-card" key={g.title}>
                <div className="skill-card-top">
                  <span className="skill-icon">{g.icon}</span>
                  <span className="skill-index">0{i + 1}</span>
                </div>
                <h3>{g.title}</h3>
                <div className="skill-tags">
                  {g.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="learning-strip">
            <Sparkles size={17} />
            <span>
              <b>Currently growing:</b> React patterns, full-stack architecture,
              and building better user experiences.
            </span>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="section-wrap">
            <div className="section-kicker">
              <span>04</span> THE JOURNEY SO FAR
            </div>
            <div className="experience-grid">
              <div>
                <h2>
                  Learning by
                  <br />
                  <em>doing.</em>
                </h2>
                <p className="experience-intro">
                  A foundation in computer applications, practical project work,
                  and my first steps into professional development.
                </p>
              </div>
              <div className="timeline">
                <article className="timeline-item">
                  <span className="timeline-date">JUN — JUL 2026</span>
                  <div>
                    <h3>
                      Web Developer Intern <span>↗</span>
                    </h3>
                    <b>THE KITES · Jalandhar</b>
                    <p>
                      Contributed to MERN stack applications by building React
                      components, integrating REST APIs, fixing bugs, and
                      helping deliver responsive websites.
                    </p>
                    <div className="timeline-tags">
                      <span>React.js</span>
                      <span>REST APIs</span>
                      <span>MERN</span>
                    </div>
                  </div>
                </article>
                <article className="timeline-item">
                  <span className="timeline-date">2025 — 2027</span>
                  <div>
                    <h3>Master of Computer Applications</h3>
                    <b>DAVIET</b>
                    <p>
                      Currently pursuing MCA, strengthening my software
                      development and computer science foundations.
                    </p>
                  </div>
                </article>
                <article className="timeline-item">
                  <span className="timeline-date">2022 — 2025</span>
                  <div>
                    <h3>Bachelor of Computer Applications</h3>
                    <b>HMV College · Jalandhar</b>
                    <p>
                      Built my foundation in programming, web technologies,
                      databases, and application development.
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className="certifications">
              <span className="cert-label">CERTIFICATIONS</span>
              <span>
                Deloitte Technology Job Simulation <small>· Forage</small>
              </span>
              <span>
                Accenture Developer & Technology Job Simulation{" "}
                <small>· Forage</small>
              </span>
              <span>
                Internship Common Aptitude Test <small>· iCAT</small>
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="contact-card">
            <div className="contact-top">
              <span>05 / YOUR TURN</span>
              <span className="contact-spark">✳</span>
            </div>
            <div className="contact-content">
              <div>
                <p className="contact-overline">HAVE AN IDEA OR OPPORTUNITY?</p>
                <h2>
                  Let's make
                  <br />
                  <em>something good.</em>
                </h2>
              </div>
              <div className="contact-side">
                <p>
                  I'm open to connecting about web development opportunities,
                  interesting projects, and collaborations. Have something in
                  mind? I'd love to hear from you.
                </p>
                <a className="button button-light" href={links.email}>
                  Say hello <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div className="contact-bottom">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon size={15} /> LinkedIn
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                <GithubIcon size={15} /> GitHub
              </a>
              <a href={links.email}>
                <Mail size={15} /> Email
              </a>
              <span>JALANDHAR, INDIA · IST</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <a href="#home" className="brand">
          r<span>.</span>s
        </a>
        <span>Designed & built with care by Ridhima Sharma.</span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
