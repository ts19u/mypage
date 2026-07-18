import Head from 'next/head'
import { useEffect, useState } from 'react'

const PROJECTS = [
  {
    name: 'Project Alpha',
    tag: 'Web App',
    description: 'A real-time collaboration tool built with Next.js and WebSockets. Focused on speed and a frictionless editor experience.',
    tech: ['Next.js', 'WebSocket', 'Postgres'],
    url: '#',
  },
  {
    name: 'CLI Toolkit',
    tag: 'CLI',
    description: 'A collection of small command-line utilities for daily developer workflows — file watchers, log parsers, and scaffolders.',
    tech: ['Go', 'Cobra', 'Bash'],
    url: '#',
  },
  {
    name: 'Pixel Lab',
    tag: 'Experiment',
    description: 'A browser-based pixel art editor with palette swapping, animation frames, and exportable spritesheets.',
    tech: ['TypeScript', 'Canvas', 'Vite'],
    url: '#',
  },
  {
    name: 'Home Automation',
    tag: 'Hardware',
    description: 'A small firmware + bridge for controlling lights and sensors from a self-hosted dashboard.',
    tech: ['ESP32', 'MQTT', 'React'],
    url: '#',
  },
]

const SKILLS = [
  { label: 'TypeScript', level: 92 },
  { label: 'React / Next.js', level: 88 },
  { label: 'Node.js', level: 85 },
  { label: 'Go', level: 70 },
  { label: 'Postgres / SQL', level: 78 },
  { label: 'DevOps', level: 65 },
]

const SOCIALS = [
  { label: 'GitHub', handle: '@ts19u', href: 'https://github.com/ts19u' },
  { label: 'Email', handle: 'ts19u@example.com', href: 'mailto:ts19u@example.com' },
  { label: 'X', handle: '@ts19u', href: 'https://x.com/ts19u' },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function Home() {
  const [theme, setTheme] = useState('dark')
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem('theme')
    const initial = stored || 'dark'
    setTheme(initial)
    document.documentElement.dataset.theme = initial
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', 'about', 'projects', 'contact']
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useReveal()

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div className="page">
      <Head>
        <title>ts19u — Developer & Maker</title>
        <meta name="description" content="Personal site of ts19u — developer, maker, and lifelong learner building simple, reliable software." />
        <meta property="og:title" content="ts19u — Developer & Maker" />
        <meta property="og:description" content="Developer, maker, and lifelong learner. Building simple, reliable software." />
      </Head>

      <div className="bg-orb orb-1" aria-hidden />
      <div className="bg-orb orb-2" aria-hidden />
      <div className="grid-overlay" aria-hidden />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">t</span>
            <span className="brand-name">ts19u</span>
          </a>

          <nav className={`nav ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`nav-link ${active === n.id ? 'is-active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <span className="theme-icon">{theme === 'light' ? '☀' : '☾'}</span>
            </button>
            <button
              className="menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <p className="eyebrow" data-reveal>
              <span className="status-dot" /> Available for work
            </p>
            <h1 className="hero-title" data-reveal>
              Hi, I'm <span className="gradient-text">ts19u</span>
              <br />
              I build <span className="gradient-text">simple, reliable</span> software.
            </h1>
            <p className="lead" data-reveal>
              Developer, maker, and lifelong learner. I focus on practical web and tooling
              projects — clean design, automation, and learning by building.
            </p>
            <div className="hero-cta" data-reveal>
              <a className="btn btn-primary" href="#projects">
                View my work
                <span className="btn-arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-stats" data-reveal>
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-label">Years coding</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">20+</span>
                <span className="stat-label">Projects shipped</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">∞</span>
                <span className="stat-label">Things to learn</span>
              </div>
            </div>

            <a href="#about" className="scroll-cue" aria-label="Scroll to about">
              <span className="mouse"><span className="wheel" /></span>
              <span className="scroll-text">Scroll</span>
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="section-index">01</span>
              <h2 className="section-title">About</h2>
            </div>

            <div className="about-grid">
              <div className="about-text" data-reveal>
                <p>
                  I'm a developer focused on practical web and tooling projects. I enjoy
                  clean design, automation, and learning by building. When I'm not coding
                  I tinker with small hardware projects and read tech blogs.
                </p>
                <p>
                  My approach: ship small, iterate fast, and keep things simple enough to
                  maintain years later. I care about developer experience, fast feedback
                  loops, and software that respects its users.
                </p>
                <div className="about-tags">
                  {['Web', 'Tooling', 'Automation', 'Hardware', 'Open Source'].map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="skills" data-reveal>
                <h3 className="skills-title">Skills</h3>
                {SKILLS.map((s) => (
                  <div key={s.label} className="skill">
                    <div className="skill-row">
                      <span>{s.label}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-bar" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="section-index">02</span>
              <h2 className="section-title">Projects</h2>
            </div>

            <div className="project-grid">
              {PROJECTS.map((p) => (
                <article key={p.name} className="project-card" data-reveal>
                  <div className="project-top">
                    <span className="project-tag">{p.tag}</span>
                    <a href={p.url} className="project-link" aria-label={`Open ${p.name}`}>
                      ↗
                    </a>
                  </div>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-tech">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="section-index">03</span>
              <h2 className="section-title">Contact</h2>
            </div>

            <div className="contact-card" data-reveal>
              <div className="contact-left">
                <h3 className="contact-title">Let's build something.</h3>
                <p className="contact-sub">
                  Open to freelance, collaborations, and interesting conversations.
                  Reach out through any of the channels below.
                </p>
              </div>
              <div className="contact-links">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} className="contact-link">
                    <span className="contact-link-label">{s.label}</span>
                    <span className="contact-link-handle">{s.handle} →</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} ts19u</p>
          <p className="footer-meta">
            Built with Next.js & Tailwind • <a href="https://github.com/ts19u/mypage">Source</a>
          </p>
          <a href="#home" className="back-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
