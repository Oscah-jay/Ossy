'use client'

import { useEffect, useState } from 'react'

const projects = [
  { id: '01', type: 'UI/UX', title: 'Mercan Autospares', slug: 'mercan-autospares', description: 'A digital experience for an automotive business, bringing together vehicle services, auto parts, and customer information.', tags: ['Web design', 'UI/UX', 'Responsive design'], tone: 'coral', image: 'https://oscah.vercel.app/Assets/1.png', year: '2025', category: 'uiux' },
  { id: '02', type: 'Brand system', title: 'Pure Uxels', slug: 'pure-uxels', description: 'A creative agency platform designed to showcase branding, UI/UX, web design, and digital creative services.', tags: ['UI/UX', 'Web design', 'Branding'], tone: 'lime', image: 'https://oscah.vercel.app/Assets/pux.png', year: '2025', category: 'graphic' },
  { id: '03', type: 'UI/UX', title: 'Agent 4', slug: 'agent-4', description: 'A social media management platform designed to simplify content planning, publishing, and performance management.', tags: ['UI/UX', 'Dashboard', 'Product design'], tone: 'blue', image: 'https://oscah.vercel.app/Assets/2.png', year: '2025', category: 'uiux' },
  { id: '04', type: 'UI/UX + Branding', title: 'PXL-Prints', slug: 'pxl-prints', description: 'A stylish apparel branding experience designed to make discovering, customizing, and exploring clothing and personalized merchandise simpler and more intuitive.', tags: ['UI/UX', 'Branding', 'Apparel'], tone: 'purple', image: 'https://p-images.vercel.app/images/projects/PXL-Prints@2x.png', year: '2026', category: 'graphic' },
  { id: '05', type: 'Branding + UI/UX', title: 'Newlife Fountain Ministries', slug: 'newlife-fountain-ministries', description: 'A digital platform and visual experience created to connect the ministry with its community and support online engagement and donations.', tags: ['Branding', 'UI/UX', 'Digital experience'], tone: 'yellow', image: 'https://p-images.vercel.app/images/projects/NFM.png', year: '2023', category: 'graphic' },
  { id: '06', type: 'UI/UX', title: 'Go Cart', slug: 'go-cart', description: 'A multivendor delivery platform connecting customers, vendors, and delivery operations through a unified digital experience.', tags: ['Product design', 'Dashboard', 'Web development'], tone: 'green', image: 'https://oscah.vercel.app/Assets/3.png', year: '2024', category: 'uiux' },
]

const caseStudies = [
  { title: 'Mercan Autospares', label: 'A clearer route to automotive care', copy: 'A responsive web experience designed to help customers explore auto parts, garage services, and automotive solutions with clarity and ease.', stats: [['12 wks', 'timeline'], ['+34%', 'activation'], ['4.8/5', 'prototype score']], tone: 'coral' },
  { title: 'Agent 4', label: 'Social media management, simplified', copy: 'A focused social media management platform that brings content planning, publishing, and performance management into one streamlined workspace.', stats: [['08 wks', 'timeline'], ['2.4k', 'beta users'], ['−41%', 'task time']], tone: 'blue' },
  { title: 'Go Cart', label: 'A multivendor marketplace built to move', copy: 'A multivendor delivery platform connecting customers, vendors, and delivery operations through a unified experience with dedicated dashboard functionality.', stats: [['10 wks', 'timeline'], ['86%', 'retention'], ['3.2x', 'faster handoff']], tone: 'green' },
]

function ProjectVisual({ tone, number, image, title, motion = false }: { tone: string; number: string; image: string; title: string; motion?: boolean }) {
  return <div className={`project-visual visual-${tone} ${motion ? 'visual-motion' : ''}`}>
    <img src={image} alt={`${title} project preview`} />
    <span className="visual-number">{number}</span>
    {motion && <span className="play-mark">↗</span>}
  </div>
}

const services = [
  { id: '01', title: 'Brand identity', copy: 'Logos, color, type, and guidelines that give a business a clear voice and keep it consistent everywhere it shows up.', tags: ['Logo design', 'Visual systems', 'Guidelines'], tone: 'coral' },
  { id: '02', title: 'UI/UX & web design', copy: 'Research-led interfaces, prototypes, and responsive websites that make products easier to understand and use.', tags: ['Web design', 'Dashboards', 'Prototyping'], tone: 'blue' },
  { id: '03', title: 'Editorial & print', copy: 'Flyers, posters, brochures, and layouts that carry a brand beyond the screen with the same care.', tags: ['Print design', 'Layout', 'Packaging'], tone: 'yellow' },
  { id: '04', title: 'Motion & campaigns', copy: 'Social campaigns, promos, and motion graphics that help ideas get noticed and remembered.', tags: ['Social media', 'Motion graphics', 'Promo video'], tone: 'purple' },
]

const process = [
  { id: '01', title: 'Discover', copy: 'I start by listening. I learn about your goals, audience, and constraints so the work solves the right problem.', time: 'Phase 1', tone: 'coral' },
  { id: '02', title: 'Define', copy: 'Insights turn into a clear direction: moodboards, structure, and a plan everyone agrees on before design begins.', time: 'Phase 2', tone: 'blue' },
  { id: '03', title: 'Design', copy: 'I build, test, and refine. You see progress early and often, with room for feedback at every stage.', time: 'Phase 3', tone: 'lime' },
  { id: '04', title: 'Deliver', copy: 'Final files, guidelines, and handoff, plus support after launch so everything keeps working as intended.', time: 'Phase 4', tone: 'purple' },
]
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
      <a className="wordmark" href="#top" aria-label="Oscah Juma home"><span className="Oscah">O</span><span>Oscah<br />Juma</span></a>
      <nav className="site-nav" aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="availability" href="#contact"><span className="status-dot" />Available for select projects</a>
    </header>

    <section className="hero container" id="top">
      <p className="eyebrow reveal">Independent designer / Kenya + everywhere</p>
      <h1 className="hero-title reveal">Designing <em>useful</em><br />things with feeling.</h1>
      <div className="hero-bottom reveal"><p>Graphic designer and UI/UX partner for teams building what comes next. I make identities, interfaces, and motion that earn attention.</p><a className="circle-link" href="#work" aria-label="Scroll to selected work">↓</a></div>
      <div className="hero-stamp" aria-hidden="true">GOOD<br />WORK<br /><span>↓</span></div>
    </section>

    <section className="marquee-band" aria-label="Services"><div className="marquee-track">IDENTITY <span>✳</span> DIGITAL PRODUCTS <span>✳</span> MOTION <span>✳</span> EDITORIAL <span>✳</span> IDENTITY <span>✳</span> DIGITAL PRODUCTS <span>✳</span></div></section>

    <section className="work-section container" id="work">
      <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2>A mix of <em>thinking</em><br />and making.</h2></div><div className="filter-bar" role="group" aria-label="Filter projects">{[['all', 'All work'], ['uiux', 'UI/UX'], ['graphic', 'Graphic']].map(([key, label]) => <button key={key} className={filter === key ? 'filter active' : 'filter'} onClick={() => setFilter(key)}>{label}</button>)}</div></div>
      <div className="project-grid">{projects.filter((p) => filter === 'all' || p.category === filter).map((project) => <article className={`project-card card-${project.tone}`} key={project.id}><a href={project.category === 'uiux' ? `/case-study/${project.slug}` : '#graphic-work'} aria-label={`View ${project.title}`}><ProjectVisual tone={project.tone} number={project.id} image={project.image} title={project.title} motion={project.title === 'After hours'} /></a><div className="project-info"><div><p className="project-type">{project.type} <span>{project.year}</span></p><h3>{project.title}</h3><p className="project-description">{project.description}</p></div><a className="arrow-link" href={project.category === 'uiux' ? `/case-study/${project.slug}` : '#graphic-work'} aria-label={`View ${project.title}`}>↗</a></div><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div><a className="view-all-designs" href="/designs">View all designs <span>↗</span></a>
    </section>

    <section className="case-section" id="case-studies"><div className="container"><div className="section-heading case-heading"><div><p className="eyebrow">02 / UI/UX case studies</p><h2>From the first<br /><em>question</em> to shipped.</h2></div><p className="section-intro">Every interface starts with listening. Here is how I turn ambiguity into products people want to use.</p></div><div className="case-layout"><div className="case-tabs" role="tablist" aria-label="Case studies">{caseStudies.map((item, index) => <button key={item.title} className={activeCase === index ? 'case-tab active' : 'case-tab'} onClick={() => setActiveCase(index)} role="tab" aria-selected={activeCase === index}><span>0{index + 1}</span>{item.title}<b>↗</b></button>)}</div><article className={`case-detail detail-${caseStudies[activeCase].tone}`}><p className="case-kicker">{caseStudies[activeCase].title} / Product design</p><h3>{caseStudies[activeCase].label}</h3><p>{caseStudies[activeCase].copy}</p><div className="case-stats">{caseStudies[activeCase].stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="case-art"><span className="wireframe-top" /><span className="wireframe-card" /><span className="wireframe-side" /><span className="wireframe-button" /></div></article></div></div></section>

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
          <span className="tile-label">Pure Uxels / 2025</span>
          <strong>CRAFT<br />YOUR<br /><i>identity</i></strong>
          <span className="tile-footer">Creative studio <br/>Brand & digital experiences.</span>
        </div>
        <div className="graphic-tile tile-editorial">
          <span className="tile-label">PXL-Prints / 2026</span>
          <strong>FIND<br />YOUR<br /><i>STYLE</i></strong>
          <span className="tile-footer">Apparel branding</span>
        </div>
        <div className="graphic-tile tile-motion">
          <span className="tile-label">Newlife Fountain Ministries / 2024</span>
          <div className="motion-type">FAITH<br />IN<br /><i>ACTION</i></div>
          <span className="tile-footer">Ministry identity</span>
        </div>
      </div>
      <a className="view-all-designs" href="/designs">View all designs <span>↗</span></a>
    </section>

        <section className="services-section container" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / What I do</p>
          <h2>Services built<br />around <em>your</em> goals.</h2>
        </div>
        <p className="section-intro">From a first logo to a full product interface, here is how I can help your idea take shape.</p>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <a className={`service-row service-${service.tone}`} href="#contact" key={service.id} aria-label={`Start a ${service.title} project`}>
            <span className="service-id">{service.id}</span>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <ul className="service-tags">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <span className="service-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>

        <section className="process-section" id="process">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / How I work</p>
            <h2>A simple path from<br /><em>idea</em> to done.</h2>
          </div>
          <p className="section-intro">A clear process keeps projects on time, on budget, and free of surprises.</p>
        </div>
        <div className="process-grid">
          {process.map((step) => (
            <article className={`process-step process-${step.tone}`} key={step.id}>
              <span className="process-num">{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
              <span className="process-time">{step.time}</span>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="about-section" id="about">
      <div className="container about-layout">
        <div>
          <p className="eyebrow">06 / A little about me</p>
          <h2>Equal parts<br /><em>curious</em> and<br />particular.</h2>
        </div>
        <div className="about-copy">
          <p className="lead">I’m Oscah, a multidisciplinary designer who likes complex problems, clear systems, and the small details that make a thing feel right.</p>
          <p>For the last 5 years I’ve partnered with founders, cultural teams, and product people to turn early ideas into work with a point of view. I work across brand, digital, and motion — usually all three at once.</p>
          <div className="about-links">
            <a href="#contact">Let’s work together <span>↗</span></a>
          </div>
        </div>
      </div>
    </section>

    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <p className="eyebrow">07 / Start a conversation</p>
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

