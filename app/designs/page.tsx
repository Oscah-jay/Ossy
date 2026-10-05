'use client'

import { useMemo, useState } from 'react'

const designs = [
  { title: 'Pure Uxels', type: 'Brand identity', year: '2023', category: 'identity', image: 'https://p-images.vercel.app/images/branding/pux.png', size: 'wide' },
  { title: 'Imani Realty Groups', type: 'Editorial direction', year: '2022', category: 'editorial', image: 'https://cdn.sanity.io/images/pda6g6vd/production/a8717300444cf24c3cad6b72002d08889bd3137c-1280x720.png', size: 'wide' },
  { title: 'Newlife Fountain Ministries', type: 'Motion identity', year: '2023', category: 'motion', image: 'https://p-images.vercel.app/images/graphics/youth%20flyer%20nfm.png', size: 'tall' },
  { title: 'Mercan Autospares', type: 'Digital campaign', year: '2024', category: 'digital', image: 'https://p-images.vercel.app/images/ui-ux/Component%2016.png', size: 'wide' },
  { title: 'Football Match', type: 'Motion graphics', year: '2024', category: 'motion', image: 'https://p-images.vercel.app/images/graphics/autoprogress.png', size: 'standard' },
  { title: 'Asset Builders', type: 'Visual system', year: '2023', category: 'identity', image: 'https://p-images.vercel.app/images/branding/ab.png', size: 'wide' },
  { title: 'Agent 4', type: 'Digital campaign', year: '2024', category: 'digital', image: 'https://cdn.sanity.io/images/pda6g6vd/production/d9add872e9b075eaf35df4d0b0186315f198947b-2978x1498.png', size: 'wide' },
  { title: 'Go Cart', type: 'Digital campaign', year: '2024', category: 'digital', image: 'https://p-images.vercel.app/images/ui-ux/gocart.png', size: 'wide' },
  { title: 'Fashion', type: 'Brand identity', year: '2022', category: 'identity', image: 'https://p-images.vercel.app/images/projects/fashion.jpeg', size: 'tall' },
  { title: 'X Mobit', type: 'Editorial direction', year: '2023', category: 'editorial', image: 'https://p-images.vercel.app/images/graphics/Send.%20Confirm.%20Done..png', size: 'tall' },
  { title: 'Quest Foods', type: 'Motion graphics', year: '2023', category: 'motion', image: 'https://p-images.vercel.app/images/graphics/12.png', size: 'standard' },
  { title: 'Zetor Global', type: 'Motion graphics', year: '2023', category: 'motion', image: 'https://p-images.vercel.app/images/projects/Zetor%20Global%202175.png', size: 'standard' },
  { title: 'Pux', type: 'Brand identity', year: '2023', category: 'identity', image: 'https://p-images.vercel.app/images/graphics/pux.jpg', size: 'standard' },
]

export default function DesignsPage() {
  const [filter, setFilter] = useState('all')
  const filteredDesigns = useMemo(() => filter === 'all' ? designs : designs.filter((design) => design.category === filter), [filter])

  return <main className="designs-page">
    <header className="site-header designs-header">
      <a className="wordmark" href="/"><span className="mark">M</span><span>Oscah<br />Juma</span></a>
      <a className="back-link" href="/">← Back home</a>
    </header>
    <section className="designs-hero container">
      <p className="eyebrow">03 / Full graphic archive</p>
      <h1>All the <em>things</em><br />I make.</h1>
      <p className="designs-intro">A working archive of identities, editorial worlds, digital campaigns, and motion studies built to give ideas a distinct point of view.</p>
    </section>
    <section className="designs-archive container" aria-label="Design archive">
      <div className="archive-toolbar"><p className="archive-count">Showing {filteredDesigns.length} of {designs.length} projects</p><div className="filter-bar" role="group" aria-label="Filter designs">{[['all', 'All work'], ['identity', 'Identity'], ['editorial', 'Editorial'], ['digital', 'Digital'], ['motion', 'Motion']].map(([key, label]) => <button key={key} className={filter === key ? 'filter active' : 'filter'} onClick={() => setFilter(key)}>{label}</button>)}</div></div>
      <div className="design-gallery">{filteredDesigns.map((design, index) => <article className={`design-preview preview-${design.size}`} key={design.title}><a href={design.category === 'digital' ? '/case-study/mercan-autospares' : '#'} aria-label={`Open ${design.title} preview`}><div className="design-image"><img src={design.image} alt={`${design.title} design preview`} /><span className="preview-index">0{index + 1}</span>{design.category === 'motion' && <span className="motion-badge">Motion ↗</span>}</div></a><div className="design-meta"><div><p>{design.type} / {design.year}</p><h2>{design.title}</h2></div><span className="preview-arrow">↗</span></div></article>)}</div>
    </section>
    <footer className="designs-footer container"><span>© 2026 Oscah Juma</span><a href="/">Back to portfolio ↑</a></footer>
  </main>
}
