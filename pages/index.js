import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) setTheme(stored)
      if (stored === 'light') document.documentElement.classList.add('light')
    }
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    if (next === 'light') document.documentElement.classList.add('light')
    else document.documentElement.classList.remove('light')
    localStorage.setItem('theme', next)
  }

  return (
    <div>
      <Head>
        <title>ts19u — Personal Page</title>
        <meta name="description" content="Personal page for ts19u" />
      </Head>

      <header className="container header">
        <h1 className="site-title">ts19u</h1>
        <nav>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#contact">Contact</a>
          <button onClick={toggleTheme} className="ml-4 px-3 py-1 rounded-md bg-slate-700">{theme === 'light' ? '☀️' : '🌙'}</button>
        </nav>
      </header>

      <main className="container">
        <section className="mt-8">
          <h2 className="hero-title">Hi — I'm <span className="text-indigo-400">ts19u</span></h2>
          <p className="lead">I build simple, reliable software and like to learn new tools and languages. This is a snapshot of my work and how to reach me.</p>
          <div>
            <a className="btn" href="#projects">See projects</a>
            <a className="btn ml-3 bg-transparent border border-slate-600 text-slate-200" href="#contact">Get in touch</a>
          </div>
        </section>

        <section id="about" className="mt-12">
          <h3 className="text-2xl font-semibold">About</h3>
          <div className="mt-4 card">
            <p>I'm a developer focused on practical web and tooling projects. I enjoy clean design, automation, and learning by building. When I'm not coding I tinker with small hardware projects and read tech blogs.</p>
          </div>
        </section>

        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <div className="mt-4 project-grid">
            <article className="card">
              <h4 className="font-semibold">Project A</h4>
              <p className="mt-2 text-slate-300">Short description of a project. Link to repo or demo.</p>
              <p className="mt-3"><a className="text-indigo-300" href="#">View on GitHub</a></p>
            </article>
            <article className="card">
              <h4 className="font-semibold">Project B</h4>
              <p className="mt-2 text-slate-300">Short description of another project — CLI tool, web app, or library.</p>
              <p className="mt-3"><a className="text-indigo-300" href="#">View on GitHub</a></p>
            </article>
            <article className="card">
              <h4 className="font-semibold">Project C</h4>
              <p className="mt-2 text-slate-300">Small utility or experiment with a short writeup.</p>
              <p className="mt-3"><a className="text-indigo-300" href="#">View on GitHub</a></p>
            </article>
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-4 card">
            <p>If you'd like to reach me, email: <a className="text-indigo-300" href="mailto:ts19u@example.com">ts19u@example.com</a> or find me on GitHub: <a className="text-indigo-300" href="https://github.com/ts19u">github.com/ts19u</a>.</p>
          </div>
        </section>

        <footer className="footer">
          <p>Made by ts19u • <a className="text-indigo-300" href="https://github.com/ts19u/mypage">Source</a></p>
        </footer>
      </main>
    </div>
  )
}
