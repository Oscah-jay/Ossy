'use client'

import { useEffect, useState } from 'react'

const projects = [
  { id: '01', type: 'UI/UX', title: 'Mercan Autospares', description: 'A digital experience for an automotive business, bringing together vehicle services, auto parts, and customer information.', tags: ['Web design', 'UI/UX', 'Responsive design'], tone: 'coral', year: '2024', category: 'uiux' },
  { id: '02', type: 'Brand system', title: 'Pure Uxels', description: 'A creative agency platform designed to showcase branding, UI/UX, web design, and digital creative services.', tags: ['UI/UX', 'Web design', 'Branding'], tone: 'lime', year: '2023', category: 'graphic' },
  { id: '03', type: 'UI/UX', title: 'Agent 4', description: 'A social media management platform designed to simplify content planning, publishing, and performance management.', tags: ['UI/UX', 'Dashboard', 'Product design'], tone: 'blue', year: '2024', category: 'uiux' },
  { id: '04', type: 'UI/UX + Web Design', title: 'Imani Realty Groups', description: 'A property-focused digital experience designed to make discovering and exploring real estate opportunities simpler and more intuitive.', tags: ['UI/UX', 'Web design', 'Real estate'], tone: 'purple', year: '2022', category: 'graphic' },
  { id: '05', type: 'Branding + UI/UX', title: 'Newlife Fountain Ministries', description: 'A digital platform and visual experience created to connect the ministry with its community and support online engagement and donations.', tags: ['Web design', 'UI/UX', 'Digital experience'], tone: 'yellow', year: '2023', category: 'graphic' },
  { id: '06', type: 'UI/UX', title: 'Go Cart', description: 'A multivendor delivery platform connecting customers, vendors, and delivery operations through a unified digital experience.', tags: ['Product design', 'Dashboard', 'Web development'], tone: 'green', year: '2024', category: 'uiux' },
]

const caseStudies = [
  { title: 'Mercan Autospares', label: 'A digital experience for automotive services', copy: 'A responsive web experience designed to help customers explore auto parts, garage services, and automotive solutions with clarity and ease.', stats: [['12 wks', 'timeline'], ['+34%', 'activation'], ['4.8/5', 'prototype score']], tone: 'coral' },
  { title: 'Agent 4', label: 'Social media management, simplified', copy: 'A focused social media management platform that brings content planning, publishing, and performance management into one streamlined workspace.', stats: [['08 wks', 'timeline'], ['2.4k', 'beta users'], ['−41%', 'task time']], tone: 'blue' },
  { title: 'Go Cart', label: 'A multivendor marketplace built to move', copy: 'A multivendor delivery platform connecting customers, vendors, and delivery operations through a unified experience with dedicated dashboard functionality.', stats: [['10 wks', 'timeline'], ['86%', 'retention'], ['3.2x', 'faster handoff']], tone: 'green' },
]

function ProjectVisual({ tone, number, motion = false }: { tone: string; number: string; motion?: boolean }) {
  return <div className={`project-visual visual-${tone} ${motion ? 'visual-motion' : ''}`} aria-hidden="true">
    <span className="visual-number">{number}</span>
    <span className="visual-orb orb-one" /><span className="visual-orb orb-two" />
    <span className="visual-line line-one" /><span className="visual-line line-two" />
    {motion && <span className="play-mark">↗</span>}
  </div>
}

export default function Page() {
  const [filter, setFilter] = useState('all')
  const [activeCase, setActiveCase] = useState(0)

  useEffect(() => {
    const onScroll = () => document.documentElement.style.setProperty('--scroll-progress', `${Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100, 100)}%`)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <main>
    <div className="scroll-progress" />
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Mira Okafor home"><span className="mark">O</span><span>oscah<br />Juma</span></a>
      <nav className="site-nav" aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="availability" href="#contact"><span className="status-dot" />Available for select projects</a>
    </header>

    <section className="hero container" id="top">
      <p className="eyebrow reveal">Independent designer / Kenya + everywhere</p>
      <h1 className="hero-title reveal">Designing <em>useful</em><br />things with feeling.</h1>
      <div className="hero-bottom reveal"><p>Graphic designer and UI/UX partner for teams building what comes next. I make identities, interfaces, and motion that earn attention.</p><a className="circle-link" href="#work" aria-label="Scroll to selected work">↓</a></div>
      <div className="hero-stamp" aria-hidden="true">GOOD<br />WORK<br /><span>↓</span></div>
    </section>

    <section className="marquee-band" aria-label="Services">
      <div className="marquee-track">IDENTITY 
        <span>✳</span> DIGITAL PRODUCTS <span>✳</span> MOTION <span>✳</span> EDITORIAL <span>✳</span> IDENTITY <span>✳</span> DIGITAL PRODUCTS <span>✳</span>
      </div>
    </section>

    <section className="work-section container" id="work">
      <div className="section-heading">
        <div><p className="eyebrow">01 / Selected work</p>
          <h2>A mix of <em>thinking</em><br />and making.</h2>
        </div>
        <div className="filter-bar" role="group" aria-label="Filter projects">{[['all', 'All work'], ['uiux', 'UI/UX'], ['graphic', 'Graphic']].map(([key, label]) => 
          <button key={key} className={filter === key ? 'filter active' : 'filter'} onClick={() => setFilter(key)}>{label}</button>)}
        </div>
      </div>
      <div className="project-grid">{projects.filter((p) => filter === 'all' || p.category === filter).map((project) => 
        <article className={`project-card card-${project.tone}`} key={project.id}>
          <ProjectVisual tone={project.tone} number={project.id} motion={project.title === 'After hours'} />
          <div className="project-info">
            <div>
              <p className="project-type">{project.type} 
                <span>{project.year}</span>
              </p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <a className="arrow-link" href={project.category === 'uiux' ? '#case-studies' : '#graphic-work'} aria-label={`View ${project.title}`}>↗</a>
          </div>
          <div className="tag-list">{project.tags.map((tag) => 
            <span key={tag}>{tag}</span>)}
          </div>
        </article>)}
      </div>
    </section>

    <section className="case-section" id="case-studies">
      <div className="container">
        <div className="section-heading case-heading">
          <div><p className="eyebrow">02 / UI/UX case studies</p>
            <h2>From the first<br /><em>question</em> to shipped.</h2>
          </div>
          <p className="section-intro">Every interface starts with listening. 
            Here is how I turn ambiguity into products people want to use.</p>
        </div>
        <div className="case-layout">
          <div className="case-tabs" role="tablist" aria-label="Case studies">{caseStudies.map((item, index) => 
            <button key={item.title} className={activeCase === index ? 'case-tab active' : 'case-tab'} onClick={() => setActiveCase(index)} role="tab" aria-selected={activeCase === index}>
              <span>0{index + 1}</span>{item.title}<b>↗</b></button>)}
          </div>
          <article className={`case-detail detail-${caseStudies[activeCase].tone}`}>
            <p className="case-kicker">{caseStudies[activeCase].title} / Product design</p>
            <h3>{caseStudies[activeCase].label}</h3><p>{caseStudies[activeCase].copy}</p>
            <div className="case-stats">{caseStudies[activeCase].stats.map(([value, label]) => 
              <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
            <div className="case-art">
              <span className="wireframe-top" />
              <span className="wireframe-card" />
              <span className="wireframe-side" />
              <span className="wireframe-button" />
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="graphic-section container" id="graphic-work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / Graphic design</p>
          <h2>Built to live<br /><em>outside the screen.</em></h2>
        </div>
        <p className="section-intro">Identity systems with enough structure to stay 
          consistent and enough spirit to stay alive.</p>
      </div>
      <div className="graphic-grid">
        <div className="graphic-tile tile-poster">
          <span className="tile-label">Pure Uxels / 2026</span>
          <strong>MAKE<br />ROOM<br />FOR<br /><i>MORE</i></strong>
          <span className="tile-footer">A community brand<br />for curious people.</span>
        </div>
        <div className="graphic-tile tile-editorial">
          <span className="tile-label">X Mobit / 2025</span>
          <strong>the<br /><i>crypto</i><br />market</strong>
          <span className="tile-footer">Trade Like A Pro.</span>
        </div>
        <div className="graphic-tile tile-motion">
          <span className="tile-label">Quest Foods / 2024</span>
          <div className="motion-type">EAT<br />WITH<br /><i>PASSION</i></div>
          <span className="play-button" aria-label="Play After hours motion preview">▶</span>
          <span className="tile-footer">Motion identity / 00:24</span>
        </div>
      </div>
    </section>

    <section className="about-section" id="about">
      <div className="container about-layout">
        <div>
          <p className="eyebrow">04 / A little about me</p>
          <h2>Equal parts<br /><em>curious</em> and<br />particular.</h2>
        </div>
        <div className="about-copy">
          <p className="lead">I’m Oscah, a multidisciplinary designer who likes complex problems, clear systems, and the small details that make a thing feel right.</p>
          <p>For the last 6 years I’ve partnered with founders, cultural teams, and product people to turn early ideas into work with a point of view. I work across brand, digital, and motion — usually all three at once.</p>
          <div className="about-links">
            <a href="#contact">Let’s work together <span>↗</span></a>
            <a href="#contact">Download résumé <span>↓</span></a>
          </div>
        </div>
      </div>
    </section>

    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <p className="eyebrow">05 / Start a conversation</p>
          <h2>Have a good<br /><em>one?</em> Say hello.</h2>
          <a className="email-link" href="mailto:oscahjuma270@gmail.com">oscahjuma270@gmail.com <span>↗</span></a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Oscah Juma</span>
          <div>
            <a href="#top">Back to top ↑</a>
            <a href="https://www.linkedin.com/in/oscah-juma-042295226/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://dribbble.com/oscah-juma" target="_blank" rel="noreferrer">Dribbble ↗</a>
          </div>
          <span>Built with intent.</span>
        </div>
      </div>
    </footer>
  </main>
}

// The interface is intentionally driven by native HTML controls and CSS; the only client state powers filters and case-study tabs.
// A small TypeScript annotation keeps the project type-safe while avoiding UI framework components or a design system dependency.
// For production, replace the generated visual panels with exported project artwork or video files.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _vanillaNote = 'HTML structure, CSS visual system, and native browser interactions.'

export {}

