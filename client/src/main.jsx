import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const skills = [
  ['01', 'Programming', 'C, C++, Java and JavaScript, with a focus on problem solving and application development.', '90%'],
  ['02', 'Web Development', 'HTML, CSS and JavaScript for responsive and interactive web experiences.', '86%'],
  ['03', 'AWS Cloud', 'Working knowledge of EC2, S3, DynamoDB, CloudFront and CloudFormation.', '78%'],
  ['04', 'Collaboration', 'Communication, teamwork, leadership and problem-solving through projects and ACE activities.', '88%']
];

const Icon = ({ children }) => <span className="feature-icon" aria-hidden="true">{children}</span>;

const socialLinks = [
  ['in', 'LinkedIn', 'https://www.linkedin.com/'],
  ['GH', 'GitHub', 'https://github.com/Abishaykarlapudi'],
  ['✉', 'Email', 'mailto:kabishay1@gmail.com']
];

function App() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const submit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const r = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const d = await r.json();
      if (!r.ok) throw Error(d.error || 'Unable to send message.');
      setStatus(d.message);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus(err.message || 'Unable to send message.');
    }
  };

  return <div className="site-shell">
    <header className="nav">
      <a className="brand" href="#home" aria-label="Abishay Karlapudi home">
        <img src="/ak-logo.svg" alt="AK Abishay Karlapudi logo" />
      </a>
      <nav aria-label="Primary navigation">
        {['home', 'about', 'education', 'projects', 'skills', 'leadership', 'contact'].map(x =>
          <a key={x} href={'#' + x} className={x === 'home' ? 'active' : ''}>{x[0].toUpperCase() + x.slice(1)}</a>
        )}
      </nav>
      <a className="resume-btn" href="#contact"><span className="download-icon">↓</span> Resume</a>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Hello, I’m</p>
          <h1>Abishay <span>Karlapudi</span></h1>
          <h2>Aspiring Software Developer</h2>
          <p className="lead">Passionate about building real-world solutions, learning new technologies, and making a positive impact through technology.</p>
          <div className="actions">
            <a className="btn primary" href="#projects">View My Work <b>→</b></a>
            <a className="btn secondary" href="#contact">Contact Me</a>
          </div>
          <div className="socials">
            {socialLinks.map(([icon, label, href]) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}>{icon}</a>)}
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile image">
          <div className="paint-frame"><img src="/profile-photo.svg" alt="Abishay by a scenic waterfront" /></div>
          <div className="paint-edge edge-one" />
          <div className="paint-edge edge-two" />
          <div className="slogan">Better<br />Code<br />Brighter<br />Tomorrow<span>↗</span></div>
        </div>
      </section>

      <section className="feature-strip" aria-label="Portfolio highlights">
        <a href="#education"><Icon>♢</Icon><div><b>Education</b><small>My academic journey<br />and achievements</small></div></a>
        <a href="#projects"><Icon>&lt;/&gt;</Icon><div><b>Projects</b><small>Real-world projects<br />I have built</small></div></a>
        <a href="#skills"><Icon>⚙</Icon><div><b>Skills</b><small>Technologies<br />I work with</small></div></a>
        <a href="#leadership"><Icon>♟</Icon><div><b>ACE Leadership</b><small>My contributions<br />and leadership roles</small></div></a>
      </section>

      <section id="about" className="section about-section">
        <p className="eyebrow center">01 / ABOUT ME</p>
        <h2 className="center-heading">Driven by Curiosity. Focused on Impact.</h2>
        <p className="about-intro">I am a passionate software developer who enjoys solving real-world problems, learning new technologies, and creating meaningful solutions.</p>
        <div className="about-grid">
          <div><b>7.5</b><span>GPA / 10</span></div>
          <div><b>2</b><span>Web Projects</span></div>
          <div><b>200+</b><span>Students Reached</span></div>
        </div>
      </section>

      <section id="education" className="section">
        <p className="eyebrow">02 / EDUCATION</p>
        <h2>Academic foundation</h2>
        <div className="projects">
          <article className="project featured"><div className="project-top"><span>01</span><span>OCT 2022 — MAY 2026</span></div><h3>Sagi Ramakrishnam Raju Engineering College, Bhimavaram</h3><p>B.Tech. in Computer Science and Engineering</p><div className="tags"><span>GPA 7.5 / 10</span><span>Computer Science</span></div></article>
          <article className="project"><div className="project-top"><span>02</span><span>OCT 2020 — MAY 2022</span></div><h3>Sri Chaitanya Junior College, Vijayawada</h3><p>M.P.C</p><div className="tags"><span>GPA 7.5 / 10</span></div></article>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">03 / PROJECTS</p>
        <h2>Selected work</h2>
        <div className="projects">
          <article className="project featured"><div className="project-top"><span>01</span><span>WEB • TEAM PROJECT</span></div><h3>Tech Learn — Educational Web Platform</h3><p>Built a responsive educational website to help students grasp web development basics. Developed interactive tutorials and modular layouts with clean, beginner-friendly UI/UX while collaborating with a team of 4.</p><div className="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>GitHub</span></div></article>
          <article className="project"><div className="project-top"><span>02</span><span>WEB • FULL PROJECT</span></div><h3>Student Details Page — Freshers’ Data Collection Portal</h3><p>Designed and launched a web application for collecting structured data from incoming college students. Built the frontend with HTML, CSS and JavaScript and implemented PHP backend processing with MySQL storage, validation and a smooth submission flow.</p><div className="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>PHP</span><span>MySQL</span></div></article>
        </div>
      </section>

      <section id="skills" className="section">
        <p className="eyebrow">04 / SKILLS</p>
        <h2>Technical toolkit</h2>
        <div className="skill-grid">{skills.map(s => <article key={s[0]}><span className="number">{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><div className="bar"><i style={{ width: s[3] }} /></div></article>)}</div>
      </section>

      <section id="leadership" className="section">
        <p className="eyebrow">05 / LEADERSHIP</p>
        <h2>Leadership & responsibility</h2>
        <div className="cert-list">
          <div><b>Senior Body Member — Association of Computer Engineers (ACE)</b><span>June 2025 — Present · Leading and mentoring junior members, organizing technical events and workshops, and coordinating strategic planning.</span></div>
          <div><b>Executive Body Member — ACE</b><span>June 2024 — March 2025 · Co-organized 4+ tech events and coding workshops for 200+ students and coordinated logistics with a 24-member team.</span></div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div><p className="eyebrow">06 / CONTACT</p><h2>Have a project or opportunity?</h2><p>I’m open to opportunities where I can apply Java, problem solving and full-stack development skills.</p><div className="contact-info"><span>✉ <a href="mailto:kabishay1@gmail.com">kabishay1@gmail.com</a></span><span>☎ <a href="tel:+918309617699">+91 8309617699</a></span><span>📍 Andhra Pradesh, India</span></div></div>
        <form onSubmit={submit}><div className="row"><label>Name<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required /></label><label>Email<input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required /></label></div><label>Subject<input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required /></label><label>Message<textarea rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required /></label><button className="btn primary" type="submit">Send message ↗</button>{status && <p className="success">{status}</p>}</form>
      </section>
    </main>

    <footer><span>© 2026 Abishay Karlapudi</span><span>Built with React + Express + MongoDB</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
