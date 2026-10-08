'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type Design = {
  title: string
  type: string
  year: string
  category: 'identity' | 'ui-ux' | 'editorial' | 'digital' | 'motion'
  image: string // thumbnail / poster (required, also used as the video poster)
  size: 'wide' | 'standard' | 'tall'
  video?: string // mp4/webm URL, YouTube URL, or Vimeo URL (motion projects)
}

const designs: Design[] = [
  { title: 'Pure Uxels', type: 'Brand identity', year: '2025', category: 'identity', image: 'https://p-images.vercel.app/images/branding/pux.png', size: 'wide' },
  { title: 'Charity', type: 'Motion graphics', year: '2026', category: 'motion', image: 'https://p-images.vercel.app/images/graphics/weg.png', video: 'https://ossy.vercel.app/Assets/images/projects/WE%20support%20less%20privileged%20children%20in%20africa.mp4', size: 'wide' },
  { title: 'Newlife Fountain', type: 'UI/UX Design', year: '2024', category: 'ui-ux', image: 'https://p-images.vercel.app/images/ui-ux/nfm.png', size: 'wide' },
  { title: 'PUX Brand', type: 'Print Design', year: '2025', category: 'editorial', image: 'https://p-images.vercel.app/images/projects/8.png', size: 'standard' },
  { title: 'Precious', type: 'Print Design', year: '2026', category: 'editorial', image: 'https://p-images.vercel.app/images/projects/Her%20Own%20Beauty.png', size: 'tall' },
  { title: 'Imani Realty Groups', type: 'Brand identity', year: '2026', category: 'identity', image: 'https://cdn.sanity.io/images/pda6g6vd/production/a8717300444cf24c3cad6b72002d08889bd3137c-1280x720.png', size: 'wide' },
  { title: 'Youth Ministry', type: 'Digital campaign', year: '2026', category: 'digital', image: 'https://p-images.vercel.app/images/projects/YOUTH%20NFM.png', size: 'tall' },
  { title: 'Mercan Autospares', type: 'UI/UX Design', year: '2025', category: 'ui-ux', image: 'https://p-images.vercel.app/images/ui-ux/Component%2016.png', size: 'wide' },
  { title: 'Creative Suite', type: 'Digital campaign', year: '2025', category: 'digital', image: 'https://p-images.vercel.app/images/projects/11.jpg', size: 'standard' },
  { title: 'Autoprogress', type: 'Promo video', year: '2025', category: 'motion', image: 'https://p-images.vercel.app/images/graphics/auto.png', video: 'https://ossy.vercel.app/Assets/images/projects/we%20bring%20back%20the%20beat.mp4', size: 'wide' },
  { title: 'Crispy Fries', type: 'Digital campaign', year: '2025', category: 'digital', image: 'https://p-images.vercel.app/images/projects/dagracia.png', size: 'standard' },
  { title: 'Donation', type: 'Digital campaign', year: '2025', category: 'digital', image: 'https://p-images.vercel.app/images/projects/give%20to%20live.png', size: 'standard' },
  { title: 'Football Match', type: 'Digital campaign', year: '2024', category: 'digital', image: 'https://p-images.vercel.app/images/graphics/autoprogress.png', size: 'standard' },
  { title: 'Asset Builders', type: 'Brand identity', year: '2025', category: 'identity', image: 'https://p-images.vercel.app/images/branding/ab.png', size: 'wide' },
  { title: 'Agent 4', type: 'UI/UX Design', year: '2025', category: 'ui-ux', image: 'https://cdn.sanity.io/images/pda6g6vd/production/d9add872e9b075eaf35df4d0b0186315f198947b-2978x1498.png', size: 'wide' },
  { title: 'Go Cart', type: 'UI/UX Design', year: '2024', category: 'ui-ux', image: 'https://p-images.vercel.app/images/ui-ux/gocart.png', size: 'wide' },
  { title: 'Fashion', type: 'Digital campaign', year: '2025', category: 'digital', image: 'https://p-images.vercel.app/images/projects/fashion.jpeg', size: 'tall' },
  { title: 'X Mobit', type: 'Digital campaign', year: '2025', category: 'digital', image: 'https://p-images.vercel.app/images/graphics/Send.%20Confirm.%20Done..png', size: 'tall' },
  { title: 'Quest Foods', type: 'Digital campaign', year: '2025', category: 'digital', image: 'https://p-images.vercel.app/images/graphics/12.png', size: 'standard' },
  { title: 'Newlife Fountain Ministries', type: 'Brand identity', year: '2025', category: 'identity', image: 'https://p-images.vercel.app/images/graphics/youth%20flyer%20nfm.png', size: 'tall' },
  { title: 'Funny Poster', type: 'Digital campaign', year: '2026', category: 'digital', image: 'https://p-images.vercel.app/images/graphics/funny.png', size: 'standard' },
  { title: 'Zetor Global', type: 'Digital campaign', year: '2025', category: 'digital', image: 'https://p-images.vercel.app/images/projects/Zetor%20Global%202175.png', size: 'standard' },
  { title: 'Pux', type: 'Digital campaign', year: '2026', category: 'digital', image: 'https://p-images.vercel.app/images/graphics/pux.jpg', size: 'standard' },
  { title: 'ECO Friendly', type: 'Short-form video', year: '2025', category: 'motion', image: 'https://p-images.vercel.app/images/graphics/pot.png', video: 'https://ossy.vercel.app/Assets/images/projects/Cultivating%20Beauty,%20One%20Pot%20at%20a%20Time.mp4', size: 'wide' },
]

const filters = [
  ['all', 'All work'],
  ['identity', 'Identity'],
  ['editorial', 'Editorial'],
  ['digital', 'Digital'],
  ['motion', 'Motion'],
] as const

// Turns a YouTube/Vimeo link into an embeddable URL. Returns null for direct video files.
function getEmbedUrl(url: string): string | null {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`
  return null
}

const isDirectVideo = (url?: string) => !!url && !getEmbedUrl(url)

function VideoLightbox({ design, onClose }: { design: Design; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const embed = design.video ? getEmbedUrl(design.video) : null

  return (
    <div className="video-lightbox" role="dialog" aria-modal="true" aria-label={`${design.title} video`} onClick={onClose}>
      <div className="video-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="video-close" onClick={onClose} aria-label="Close video">✕</button>
        <div className="video-frame">
          {embed ? (
            <iframe src={embed} title={design.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          ) : (
            <video src={design.video} poster={design.image} controls autoPlay playsInline />
          )}
        </div>
        <p className="video-caption">{design.type} / {design.year} — {design.title}</p>
      </div>
    </div>
  )
}

function MotionCard({ design, index, onOpen }: { design: Design; index: number; onOpen: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canPreview = isDirectVideo(design.video)

  return (
    <article className={`design-preview preview-${design.size}`}>
      <button
        type="button"
        className="design-image-button"
        aria-label={`Play ${design.title}`}
        onClick={onOpen}
        onMouseEnter={() => videoRef.current?.play().catch(() => {})}
        onMouseLeave={() => {
          if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
          }
        }}
      >
        <div className="design-image">
          <img src={design.image} alt={`${design.title} video thumbnail`} />
          {canPreview && <video ref={videoRef} className="design-hover-video" src={design.video} muted loop playsInline preload="none" />}
          <span className="preview-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="motion-badge">Motion ↗</span>
          <span className="play-icon" aria-hidden="true">▶</span>
        </div>
      </button>
      <div className="design-meta">
        <div>
          <p>{design.type} / {design.year}</p>
          <h2>{design.title}</h2>
        </div>
        <span className="preview-arrow">↗</span>
      </div>
    </article>
  )
}

export default function DesignsPage() {
  const [filter, setFilter] = useState<string>('all')
  const [activeVideo, setActiveVideo] = useState<Design | null>(null)

  const filteredDesigns = useMemo(
    () => (filter === 'all' ? designs : designs.filter((design) => design.category === filter)),
    [filter]
  )

  return (
    <main className="designs-page">
      <header className="site-header designs-header">
        <a className="wordmark" href="/"><span className="mark">O</span><span>Oscah<br />Juma</span></a>
        <a className="back-link" href="/">← Back home</a>
      </header>

      <section className="designs-hero container">
        <p className="eyebrow">03 / Full graphic archive</p>
        <h1>All the <em>things</em><br />I make.</h1>
        <p className="designs-intro">A working archive of identities, editorial worlds, digital campaigns, and motion studies built to give ideas a distinct point of view.</p>
      </section>

      <section className="designs-archive container" aria-label="Design archive">
        <div className="archive-toolbar">
          <p className="archive-count">Showing {filteredDesigns.length} of {designs.length} projects</p>
          <div className="filter-bar" role="group" aria-label="Filter designs">
            {filters.map(([key, label]) => (
              <button key={key} className={filter === key ? 'filter active' : 'filter'} onClick={() => setFilter(key)}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {filteredDesigns.length === 0 && <p className="archive-empty">Nothing here yet — check back soon.</p>}

        <div className="design-gallery">
          {filteredDesigns.map((design, index) =>
            design.category === 'motion' && design.video ? (
              <MotionCard key={design.title} design={design} index={index} onOpen={() => setActiveVideo(design)} />
            ) : (
              <article className={`design-preview preview-${design.size}`} key={design.title}>
                <a href={design.category === 'digital' ? '/case-study/mercan-autospares' : '#'} aria-label={`Open ${design.title} preview`}>
                  <div className="design-image">
                    <img src={design.image} alt={`${design.title} design preview`} />
                    <span className="preview-index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </a>
                <div className="design-meta">
                  <div>
                    <p>{design.type} / {design.year}</p>
                    <h2>{design.title}</h2>
                  </div>
                  <span className="preview-arrow">↗</span>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <footer className="designs-footer container">
        <span>© 2026 Oscah Juma</span>
        <a href="/">Back to portfolio ↑</a>
      </footer>

      {activeVideo && <VideoLightbox design={activeVideo} onClose={() => setActiveVideo(null)} />}
    </main>
  )
}