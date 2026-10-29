import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const skillCategories = [
  {
    num: '01',
    category: 'Programming Languages',
    description: 'Java (core), SQL',
    tags: ['Java (Core)', 'SQL'],
    percent: '90%'
  },
  {
    num: '02',
    category: 'Web Technologies',
    description: 'HTML, CSS, JavaScript, React.js',
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express.js'],
    percent: '88%'
  },
  {
    num: '03',
    category: 'Cloud Infrastructure',
    description: 'AWS (EC2, S3, DynamoDB, CloudFront, CloudFormation)',
    tags: ['AWS EC2', 'AWS S3', 'DynamoDB', 'CloudFront', 'CloudFormation'],
    percent: '82%'
  },
  {
    num: '04',
    category: 'Tools & Platforms',
    description: 'GitHub, VS Code, Postman, Render, Netlify',
    tags: ['GitHub', 'VS Code', 'Postman', 'Render', 'Netlify'],
    percent: '86%'
  },
  {
    num: '05',
    category: 'Soft Skills',
    description: 'Communication, Teamwork, Leadership, Problem-solving',
    tags: ['Leadership', 'Problem-solving', 'Teamwork', 'Communication'],
    percent: '92%'
  }
];

const socialLinks = [
  { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { icon: 'GH', label: 'GitHub', href: 'https://github.com/Abishaykarlapudi' },
  { icon: '✉', label: 'Email', href: 'mailto:kabishay1@gmail.com' }
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [heroTab, setHeroTab] = useState('code');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending...');
    try {
      const r = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || 'Unable to send message.');
      setStatus(d.message || 'Thank you! Your message has been sent successfully.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus(err.message || 'Unable to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="site-shell">
      {/* Navigation Header */}
      <header className="nav">
        <a className="brand" href="#home" aria-label="Abishay Karlapudi home">
          <img src="/ak-logo.svg" alt="AK Abishay Karlapudi logo" />
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="resume-btn" href="#contact">
          <span className="download-icon">↓</span> Get in Touch
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Hello, I’m</p>
            <h1>
              Abishay <span>Karlapudi</span>
            </h1>
            <h2>Full Stack Developer</h2>
            <p className="lead">
              Passionate Full Stack Developer with expertise in MERN stack, Java, and AWS Cloud. Dedicated to
              building impactful, scalable web applications and high-performance software systems.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">
                View My Projects <b>→</b>
              </a>
              <a className="btn secondary" href="#contact">
                Contact Me
              </a>
            </div>
            <div className="socials">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Interactive developer showcase">
            {/* Floating tech badges */}
            <div className="tech-badge-float badge-top-left">
              <span className="badge-icon">☕</span>
              <div>
                <strong>Java &amp; Spring Boot</strong>
                <small>Doc-Time &amp; Banking</small>
              </div>
            </div>

            <div className="tech-badge-float badge-bottom-right">
              <span className="badge-icon">⚛️</span>
              <div>
                <strong>MERN Stack</strong>
                <small>Stickbook Internship</small>
              </div>
            </div>

            <div className="tech-badge-float badge-top-right">
              <span className="badge-icon">☁️</span>
              <div>
                <strong>AWS Cloud</strong>
                <small>EC2 · S3 · DynamoDB</small>
              </div>
            </div>

            {/* Code / Terminal Window */}
            <div className="code-card">
              <div className="code-header">
                <div className="window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="window-tabs">
                  <button
                    type="button"
                    className={`tab-btn ${heroTab === 'code' ? 'active' : ''}`}
                    onClick={() => setHeroTab('code')}
                  >
                    <span className="file-icon">⚡</span> developer.ts
                  </button>
                  <button
                    type="button"
                    className={`tab-btn ${heroTab === 'terminal' ? 'active' : ''}`}
                    onClick={() => setHeroTab('terminal')}
                  >
                    <span className="file-icon">&gt;_</span> terminal
                  </button>
                </div>
                <div className="window-status">
                  <span className="status-indicator" /> Active
                </div>
              </div>

              <div className="code-body">
                {heroTab === 'code' ? (
                  <pre className="code-content">
                    <code>
                      <span className="tok-kw">const</span> <span className="tok-var">developer</span> = &#123;{'\n'}
                      {'  '}<span className="tok-key">name</span>: <span className="tok-str">"Abishay Karlapudi"</span>,{'\n'}
                      {'  '}<span className="tok-key">role</span>: <span className="tok-str">"Full Stack Developer"</span>,{'\n'}
                      {'  '}<span className="tok-key">education</span>: &#123;{'\n'}
                      {'    '}<span className="tok-key">college</span>: <span className="tok-str">"SRKREC Bhimavaram"</span>,{'\n'}
                      {'    '}<span className="tok-key">degree</span>: <span className="tok-str">"B.Tech in CSE"</span>,{'\n'}
                      {'    '}<span className="tok-key">gpa</span>: <span className="tok-num">7.5</span>{'\n'}
                      {'  '}&#125;,{'\n'}
                      {'  '}<span className="tok-key">skills</span>: &#123;{'\n'}
                      {'    '}<span className="tok-key">languages</span>: [<span className="tok-str">"Java (core)"</span>, <span className="tok-str">"SQL"</span>],{'\n'}
                      {'    '}<span className="tok-key">web</span>: [<span className="tok-str">"React.js"</span>, <span className="tok-str">"Node.js"</span>, <span className="tok-str">"HTML/CSS"</span>],{'\n'}
                      {'    '}<span className="tok-key">cloud</span>: [<span className="tok-str">"AWS EC2"</span>, <span className="tok-str">"S3"</span>, <span className="tok-str">"DynamoDB"</span>]{'\n'}
                      {'  '}&#125;,{'\n'}
                      {'  '}<span className="tok-key">internship</span>: <span className="tok-str">"Stickbook (MERN Intern)"</span>,{'\n'}
                      {'  '}<span className="tok-key">leadership</span>: <span className="tok-str">"ACE Senior Body Member"</span>,{'\n'}
                      {'  '}<span className="tok-key">status</span>: <span className="tok-str">"Open for Opportunities 🚀"</span>{'\n'}
                      &#125;;
                    </code>
                  </pre>
                ) : (
                  <div className="terminal-content">
                    <p className="term-line"><span className="term-prompt">$</span> curl -s https://abishay.dev/status</p>
                    <p className="term-output term-success">&#10003; 200 OK — Developer profile loaded</p>
                    <p className="term-line"><span className="term-prompt">$</span> node -v &amp;&amp; java --version</p>
                    <p className="term-output">v20.x · OpenJDK 17 Runtime Environment</p>
                    <p className="term-line"><span className="term-prompt">$</span> git log -1 --oneline</p>
                    <p className="term-output term-info">"Passionate Full Stack Developer creating impactful web apps"</p>
                    <p className="term-line"><span className="term-prompt">$</span> npm test</p>
                    <p className="term-output term-success">&#10003; 100% tests passing. Ready to deploy.</p>
                    <p className="term-line term-cursor"><span className="term-prompt">$</span> <span className="cursor-blink">█</span></p>
                  </div>
                )}
              </div>

              <div className="code-footer">
                <span className="footer-item"><span className="icon-branch">⑂</span> main*</span>
                <span className="footer-item">UTF-8</span>
                <span className="footer-item">TypeScript React</span>
                <span className="footer-item status-green">&#10003; Prettier</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Strip */}
        <section className="feature-strip" aria-label="Portfolio highlights">
          <a href="#experience">
            <span className="feature-icon" aria-hidden="true">💼</span>
            <div>
              <b>Experience</b>
              <small>MERN Stack Intern<br />at Stickbook</small>
            </div>
          </a>
          <a href="#projects">
            <span className="feature-icon" aria-hidden="true">&lt;/&gt;</span>
            <div>
              <b>Projects</b>
              <small>Doc-Time & Banking<br />System applications</small>
            </div>
          </a>
          <a href="#skills">
            <span className="feature-icon" aria-hidden="true">⚙</span>
            <div>
              <b>Skills</b>
              <small>Java, MERN Stack<br />& AWS Cloud</small>
            </div>
          </a>
          <a href="#leadership">
            <span className="feature-icon" aria-hidden="true">♟</span>
            <div>
              <b>Leadership</b>
              <small>Senior Body Member<br />ACE & Hackathon Lead</small>
            </div>
          </a>
        </section>

        {/* 01 / About Me */}
        <section id="about" className="section about-section">
          <p className="eyebrow center">01 / ABOUT ME</p>
          <h2 className="center-heading">Career Objective & Background</h2>
          <p className="about-intro">
            To obtain a challenging position as a Full Stack Developer where I can apply my MERN stack expertise,
            Java skills, and cloud knowledge to contribute to impactful, scalable web applications.
          </p>
          <div className="about-grid">
            <div>
              <b>7.5</b>
              <span>GPA / 10 (SRKREC)</span>
            </div>
            <div>
              <b>50+</b>
              <span>Teams Led in Hackathon</span>
            </div>
            <div>
              <b>200+</b>
              <span>Students Mentored</span>
            </div>
          </div>
        </section>

        {/* 02 / Experience */}
        <section id="experience" className="section">
          <p className="eyebrow">02 / EXPERIENCE</p>
          <h2>Professional experience</h2>
          <div className="experience-container">
            <article className="experience-card featured">
              <div className="project-top">
                <span className="badge-highlight">INTERNSHIP</span>
                <span>MAY 2026 — JUN 2026</span>
              </div>
              <div className="exp-header">
                <h3>MERN Stack Development Intern</h3>
                <h4 className="company-title">Stickbook</h4>
              </div>
              <ul className="exp-points">
                <li>Completed a one-month internship focused on MERN Stack Full-Stack Development.</li>
                <li>Learned the fundamentals of MongoDB, Express.js, React.js, and Node.js.</li>
                <li>Gained knowledge of frontend development using React.js and backend development using Node.js and Express.js.</li>
                <li>Learned how to connect web applications with MongoDB for data storage and retrieval.</li>
                <li>Improved understanding of full-stack application development and client-server communication.</li>
              </ul>
              <div className="tags">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>REST APIs</span>
                <span>Full Stack</span>
              </div>
            </article>
          </div>
        </section>

        {/* 03 / Projects */}
        <section id="projects" className="section">
          <p className="eyebrow">03 / PROJECTS</p>
          <h2>Featured projects</h2>
          <div className="projects">
            {/* Project 1: Doc-Time */}
            <article className="project featured">
              <div className="project-top">
                <span className="badge-highlight">JAVA & SPRING BOOT</span>
                <a
                  href="https://github.com/Abishaykarlapudi"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-link"
                >
                  GitHub ↗
                </a>
              </div>
              <h3>Hospital Appointment Management System — ”Doc-Time”</h3>
              <p className="project-tech-line">
                <strong>Technologies:</strong> Java, Spring Boot, Spring Data JPA, MySQL, REST APIs
              </p>
              <ul className="project-points">
                <li>Designed a hospital appointment management application for patients, doctors, and hospital administrators.</li>
                <li>Developed backend components for managing appointments and retrieving appointment records.</li>
                <li>Used entity classes, repositories, services, and REST controllers to organize application functionality.</li>
                <li>Worked on relational database mapping and appointment management operations.</li>
              </ul>
              <div className="tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Spring Data JPA</span>
                <span>MySQL</span>
                <span>REST APIs</span>
              </div>
            </article>

            {/* Project 2: Banking System */}
            <article className="project">
              <div className="project-top">
                <span className="badge-highlight">CORE JAVA APPLICATION</span>
                <a
                  href="https://github.com/Abishaykarlapudi"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-link"
                >
                  GitHub ↗
                </a>
              </div>
              <h3>Banking System – Console-Based Application</h3>
              <p className="project-tech-line">
                <strong>Technologies:</strong> Core Java, OOP Concepts, Scanner Class, Switch Statements, Loops, Conditional Statements
              </p>
              <ul className="project-points">
                <li>Developed a console-based banking application using Java to perform basic banking operations.</li>
                <li>Implemented account creation with customer details, including name, age, account type, and mobile number.</li>
                <li>Developed deposit and withdrawal functionalities with minimum transaction amount and balance validation.</li>
                <li>Implemented balance inquiry and optional balance display after transactions.</li>
                <li>Used switch statements, do-while loops, and separate methods to manage menu-driven operations.</li>
                <li>Applied conditional logic to handle invalid selections and insufficient balance scenarios.</li>
              </ul>
              <div className="tags">
                <span>Core Java</span>
                <span>OOP Concepts</span>
                <span>Scanner Class</span>
                <span>Control Flow</span>
                <span>Data Validation</span>
              </div>
            </article>
          </div>
        </section>

        {/* 04 / Skills */}
        <section id="skills" className="section">
          <p className="eyebrow">04 / SKILLS</p>
          <h2>Technical toolkit & proficiencies</h2>
          <div className="skill-grid">
            {skillCategories.map((s) => (
              <article key={s.num}>
                <span className="number">{s.num}</span>
                <h3>{s.category}</h3>
                <p>{s.description}</p>
                <div className="tags" style={{ marginTop: '15px' }}>
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="bar">
                  <i style={{ width: s.percent }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 05 / Education */}
        <section id="education" className="section">
          <p className="eyebrow">05 / EDUCATION</p>
          <h2>Academic foundation</h2>
          <div className="education-container">
            <article className="project featured">
              <div className="project-top">
                <span className="badge-highlight">BACHELOR OF TECHNOLOGY</span>
                <span>OCT 2020 — MAY 2026</span>
              </div>
              <h3>Sagi Ramakrishnam Raju Engineering College, Bhimavaram</h3>
              <p className="degree-title">B.Tech. in Computer Science and Engineering</p>
              <div className="education-metrics">
                <div className="metric-badge">
                  <strong>GPA:</strong> 7.5 / 10
                </div>
                <div className="metric-badge">
                  <strong>Specialization:</strong> Computer Science and Engineering
                </div>
              </div>
              <div className="tags">
                <span>Computer Science & Engineering</span>
                <span>Data Structures</span>
                <span>OOP</span>
                <span>DBMS</span>
                <span>Web Technologies</span>
              </div>
            </article>
          </div>
        </section>

        {/* 06 / Leadership & Activities */}
        <section id="leadership" className="section">
          <p className="eyebrow">06 / LEADERSHIP & EXTRACURRICULAR</p>
          <h2>Leadership & activities</h2>
          <div className="cert-list">
            <div className="leadership-card">
              <div className="leadership-header">
                <div>
                  <h3>Senior Body Member (SBM) – Association of Computer Engineers (ACE)</h3>
                  <span className="org-sub">SRKREC · Aug 2025 — June 2026</span>
                </div>
              </div>
              <ul className="project-points" style={{ marginTop: '15px' }}>
                <li>Co-organized more than four technical events and coding workshops attended by over 200 students.</li>
                <li>Coordinated event logistics, technical arrangements, and speaker-related activities with a team of 24 members.</li>
                <li>Led the organizing team for the national-level hackathon “Pajwalen,” involving more than 50 teams.</li>
              </ul>
              <div className="tags">
                <span>Event Leadership</span>
                <span>Team Coordination</span>
                <span>Hackathon Organizer</span>
                <span>Workshop Host</span>
              </div>
            </div>
          </div>
        </section>

        {/* 07 / Contact */}
        <section id="contact" className="section contact">
          <div>
            <p className="eyebrow">07 / CONTACT</p>
            <h2>Have a project or opportunity?</h2>
            <p>
              I am open to full-time roles, internships, and opportunities where I can apply my MERN stack, Java,
              and cloud expertise to build impactful applications.
            </p>
            <div className="contact-info">
              <span>
                ✉ <a href="mailto:kabishay1@gmail.com">kabishay1@gmail.com</a>
              </span>
              <span>
                ☎ <a href="tel:+918309617699">+91 8309617699</a>
              </span>
              <span>
                📍 6-133/3, Vidhyanagar, Guntur, Andhra Pradesh – 522007
              </span>
              <span>
                💻 <a href="https://github.com/Abishaykarlapudi" target="_blank" rel="noreferrer">github.com/Abishaykarlapudi</a>
              </span>
              <span>
                🔗 <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn Profile</a>
              </span>
            </div>
          </div>

          <form onSubmit={submit}>
            <div className="row">
              <label>
                Name
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Your Email"
                  required
                />
              </label>
            </div>
            <label>
              Subject
              <input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Subject of your message"
                required
              />
            </label>
            <label>
              Message
              <textarea
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message here..."
                required
              />
            </label>
            <button className="btn primary" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send message ↗'}
            </button>
            {status && <p className="success">{status}</p>}
          </form>
        </section>
      </main>

      <footer>
        <span>© 2026 Abishay Karlapudi · Full Stack Developer</span>
        <span>Built with React + Node.js/Express + MongoDB</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
