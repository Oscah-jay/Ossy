'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

const studies: Record<string, { title: string; label: string; image: string; tone: string; intro: string; challenge: string; approach: string; outcome: string; steps: string[] }> = {
  'mercan-autospares': { 
    title: 'Mercan Autospares', 
    label: 'A clearer route to automotive care.', 
    image: 'https://cdn.sanity.io/images/pda6g6vd/production/5e3b997d88d367ddbf068afa781dce373ec857d9-5184x3144.png', 
    tone: 'coral', 
    intro: 'A digital experience for an automotive business, bringing together vehicle services, auto parts, and customer information.', 
    challenge: 'Customers needed to move between parts, services, and business information without knowing where to start or which option was right for their vehicle.', 
    approach: 'I organized the experience around clear service pathways, responsive layouts, and a visual hierarchy that makes automotive information easier to scan and act on.', 
    outcome: 'A more approachable web experience that helps customers find the right product or service with less friction.', 
    steps: ['Discovery & interviews', 'Information architecture', 'Responsive UI design', 'Prototype & testing'] 
  },
  'pure-uxels': {
    title: 'Pure UXels',
    label: 'Crafting experiences, pixel by pixel.',
    image: 'https://p-images.vercel.app/images/projects/8.png',
    tone: 'lime',
    intro: 'A creative studio identity and digital platform built to bring branding, UI/UX design, web development, and visual storytelling together under one cohesive creative direction.',
    challenge: 'Pure UXels needed a distinctive brand presence that could communicate its creative capabilities while presenting multiple design disciplines as one cohesive offering. The challenge was balancing visual expression with clarity, ensuring the brand felt both creative and professional.',
    approach: 'I developed a cohesive visual identity and digital experience centered on expressive typography, bold visual elements, and a consistent design language. The website was structured to showcase creative services, highlight selected projects, and communicate the studio’s approach to design through an intuitive and responsive interface.',
    outcome: 'A unified creative brand and digital portfolio that gives Pure UXels a recognizable identity, communicates its multidisciplinary services, and creates a stronger foundation for attracting clients and showcasing creative work.',
    steps: [
        'Brand strategy & discovery',
        'Visual identity development',
        'UI/UX design & information architecture',
        'Website development & responsive optimization'
    ]
},
'pxl-prints': {
    title: 'PXL-Prints',
    label: 'Wear your identity. Make it personal.',
    image: 'https://p-images.vercel.app/images/projects/PXL-Prints@2x.png',
    tone: 'purple',
    intro: 'A modern apparel branding and digital shopping experience designed to bring custom clothing, personalized merchandise, and creative expression together through one cohesive platform.',
    challenge: 'The apparel customization space can feel overwhelming when customers have to navigate different products, printing options, and personalization possibilities. PXL-Prints needed a digital presence that could communicate its creative offering while making product discovery and customization feel effortless.',
    approach: 'I developed a visual direction built around contemporary typography, expressive layouts, and a distinctive brand identity. The digital experience was structured to showcase apparel collections, communicate customization possibilities, and create intuitive pathways for exploring products and personalized merchandise.',
    outcome: 'A cohesive apparel brand and digital experience that positions PXL-Prints as a creative destination for personalized clothing, merchandise, and custom branding solutions.',
    steps: [
        'Brand discovery & positioning',
        'Visual identity development',
        'Product experience & information architecture',
        'UI/UX design & responsive layouts'
    ]
},
'newlife-fountain-ministries': {
    title: 'Newlife Fountain Ministries',
    label: 'Faith, connection, and community.',
    image: 'https://p-images.vercel.app/images/ui-ux/nfm@2x.png',
    tone: 'yellow',
    intro: 'A ministry-focused digital experience designed to strengthen community connections, communicate the church’s mission, and make online engagement and giving more accessible.',
    challenge: 'The ministry needed a cohesive digital presence that could communicate its vision, connect members and visitors with relevant information, and provide a convenient way to support its work through online donations. The challenge was creating an experience that felt welcoming while maintaining clarity and trust.',
    approach: 'I approached the project with a community-first design direction, combining a recognizable visual identity with an intuitive digital platform. Content was organized around the ministry’s mission, activities, and engagement opportunities, while the donation experience was designed to make supporting the ministry straightforward and accessible.',
    outcome: 'A more connected digital presence that communicates the ministry’s identity, improves access to essential information, and creates a convenient pathway for community engagement and online giving.',
    steps: [
        'Brand discovery & visual direction',
        'Information architecture & content strategy',
        'UI/UX design & responsive development',
        'Donation integration & user experience refinement'
    ]
},
  'agent-4': 
  { title: 'Agent 4', 
    label: 'Social media management, simplified.', 
    image: 'https://cdn.sanity.io/images/pda6g6vd/production/d9add872e9b075eaf35df4d0b0186315f198947b-2978x1498.png', 
    tone: 'blue', 
    intro: 'A social media management platform designed to simplify content planning, publishing, and performance management.', 
    challenge: 'Social teams were balancing calendars, approvals, publishing, and reporting across disconnected tools, creating unnecessary context switching.', 
    approach: 'I mapped the publishing workflow and designed a focused dashboard that brings planning, content status, and performance into one clear workspace.', 
    outcome: 'A streamlined product experience that gives teams better visibility over their content and more confidence in what goes live next.', 
    steps: ['Workflow research', 'Dashboard architecture', 'Interaction design', 'Beta validation'] 
  },
  'go-cart': { 
    title: 'Go Cart', 
    label: 'A multivendor marketplace built to move.', 
    image: 'https://cdn.sanity.io/images/pda6g6vd/production/2e2609062f25a458df486726ec83b7a7fbac0dbe-1127x689.png', 
    tone: 'green', 
    intro: 'A multivendor delivery platform connecting customers, vendors, and delivery operations through a unified digital experience.', 
    challenge: 'Customers, vendors, and delivery teams each needed different information at different moments, but the experience had to feel like one connected system.', 
    approach: 'I designed the core marketplace and operational dashboards around shared order states, clear handoffs, and fast actions for every participant.', 
    outcome: 'A unified product direction that makes ordering, vendor management, and delivery coordination feel more transparent.', 
    steps: ['Service mapping', 'Marketplace flows', 'Operations dashboard', 'Design system'] 
  },
}

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const study = studies[slug] ?? studies.northstar

  return <main className={`study-page study-${study.tone}`}>
    <header className="study-header"><Link className="wordmark" href="/#top"><span className="Oscah">O</span><span>Oscah<br />Juma</span></Link><Link className="back-link" href="/#work">← Back to work</Link></header>
    <section className="study-hero container"><p className="eyebrow">UI/UX case study / Selected work</p><h1>{study.title}<br /><em>{study.label}</em></h1><p className="study-intro">{study.intro}</p><img className="study-cover" src={study.image} alt={`${study.title} interface project`} /></section>
    <section className="study-content container"><aside><p className="eyebrow">The approach</p><ol>{study.steps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol></aside><div className="study-copy"><div><p className="eyebrow">01 / The challenge</p><h2>Start with the<br /><em>real problem.</em></h2><p>{study.challenge}</p></div><div><p className="eyebrow">02 / The approach</p><h2>Make the complex<br /><em>feel possible.</em></h2><p>{study.approach}</p></div><div><p className="eyebrow">03 / The outcome</p><h2>Useful by<br /><em>design.</em></h2><p>{study.outcome}</p></div></div></section>
    <footer className="study-footer container"><Link href="/#work">← View all work</Link><Link href="/#contact">Start a project ↗</Link></footer>
  </main>
}
