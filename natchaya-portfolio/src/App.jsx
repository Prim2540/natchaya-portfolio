import React, { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, ChevronLeft, ChevronRight, Code2, Download, Image as ImageIcon, Github, GraduationCap, Layers3, Mail, MapPin, Phone, QrCode, Menu, Monitor, ScanLine, Sparkles, Users, X, Sun, Moon, ChartNoAxesCombined, DatabaseZap, Smartphone, Video, Handshake, PanelsTopLeft, ShieldCheck, Activity, ArrowRight } from 'lucide-react'
import { experience, projects, skillGroups } from './data'
import { translations } from './translations'
import { softSkills, hardSkillScores } from './skillsAnalytics'

const icons = { scan: ScanLine, monitor: Monitor, layers: Layers3, users: Users, analytics: ChartNoAxesCombined, database: DatabaseZap, mobile: Smartphone, video: Video, sales: Handshake, web: PanelsTopLeft, shield: ShieldCheck }
const navLinks = ['#about', '#experience', '#projects', '#skills', '#skills-analytics', '#contact']

// ================================================================
// 📸 ใส่รูปภาพหน้าแรก 3 รูปที่นี่ (HERO PHOTO SLOTS)
// 1) นำรูปจริงไปไว้ใน public/images/
// 2) เปลี่ยน path เช่น 'images/profile.jpg' (ไม่ต้องใส่ /public)
// 3) แนะนำรูปแนวตั้งสำหรับ profile และแนวนอนสำหรับ work / factory
// ตอนนี้ใช้ไฟล์ SVG ตัวอย่าง เพื่อไม่ให้หน้าเว็บมีรูปเสีย
// ================================================================
const heroPhotos = {
  profile: "images/profile.jpg",
  work: "images/work.jpg",
  project: "images/project.jpg", // รูปที่ 3: ภาพผลงาน/หน้างาน
}

// 📄 Resume PDFs: วางไฟล์ชื่อด้านล่างใน public/resumes/
const resumeFiles = {
  th: 'resumes/Natchaya_ThaiResume.pdf',
  en: 'resumes/Natchaya_Faengmuangkok_Resume.pdf',
}

const pick = (value, lang) => typeof value === 'object' && value !== null && !Array.isArray(value) ? value[lang] : value
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

// Accept standard YouTube watch, short, Shorts and embed links.
function youtubeEmbed(url) {
  try {
    const parsed = new URL(url)
    const host = parsed.hostname.toLowerCase()
    let id = ''
    if (host === 'youtu.be' || host === 'www.youtu.be') id = parsed.pathname.split('/')[1]
    else if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host)) {
      id = parsed.searchParams.get('v') || parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1] || ''
    }
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return null
    const time = parsed.searchParams.get('t') || parsed.searchParams.get('start') || '0'
    const seconds = /^\d+s?$/.test(time) ? Number(time.replace('s', '')) : 0
    return `https://www.youtube-nocookie.com/embed/${id}?start=${seconds}`
  } catch { return null }
}



// Miniature UI previews use real HTML/CSS instead of generic line icons.
// They are design mockups (not real client screenshots).
function ProjectPreview({ type }) {
  if (type === 'vision') return <div className="preview-machine"><div className="preview-toolbar"><span className="preview-live"/> VISION INSPECTION <span>CAM 01</span></div><div className="preview-bottle-scene"><div className="preview-bottle"><span/></div><div className="preview-detect-box"><span>Object detected · 98.6%</span></div><div className="preview-measure"><i/><i/><i/></div></div><div className="preview-status"><span className="preview-pass">● PASS</span><span>Inspection #0248</span><span>AI ACTIVE</span></div></div>
  if (type === 'cctv') return <div className="preview-cctv"><div className="preview-toolbar"><span className="preview-live"/> CCTV COMMAND CENTER <span>LIVE</span></div><div className="preview-monitor-grid">{[0,1,2,3].map(i=><div className={'preview-cam cam-'+i} key={i}><div className="preview-cam-building"><i/><i/><i/></div><span>CAM-0{i+1}</span><b className={i===2?'offline':''}>{i===2?'OFFLINE':'ONLINE'}</b></div>)}</div><div className="preview-status"><span>MONITORING: 153</span><span className="preview-alert">● 1 ALERT</span></div></div>
  if (type === 'erp' || type === 'erp-system') return <div className="preview-software"><div className="preview-window-header"><span className="window-dots">● ● ●</span><span>{type==='erp'?'BUSINESS PLATFORM':'ERP WORKSPACE'}</span></div><div className="preview-app-layout"><aside><span/><span/><span/><span/></aside><main><div className="preview-breadcrumb">OVERVIEW / OPERATIONS</div><div className="preview-kpi-grid"><div><small>ORDERS</small><strong>1,248</strong></div><div><small>APPROVED</small><strong>96%</strong></div></div><div className="preview-data-lines"><span/><span/><span/><span/></div></main></div></div>
  if (type === 'sales') return <div className="preview-sales"><div className="preview-toolbar">B2B SOLUTION PIPELINE <span>CRM</span></div><div className="preview-sales-steps">{['LEAD','DISCOVERY','PROPOSAL','WON'].map((x,i)=><div key={x}><span>{x}</span><b>{[12,8,5,3][i]}</b><i style={{height:`${[48,72,58,95][i]}%`}}/></div>)}</div><div className="preview-status"><span>ACTIVE OPPORTUNITIES</span><span>28 DEALS</span></div></div>
  if (type === 'video-showcase') return <div className="preview-video"><div className="preview-video-screen"><div className="preview-play">▶</div><span>PROJECT DEMO / SHOWREEL</span></div><div className="preview-video-controls"><i/><b/><span>03:24 / 06:10</span></div></div>
  if (type === 'executive-dashboard') return <div className="preview-dashboard"><div className="preview-toolbar">EXECUTIVE INSIGHTS <span>2026</span></div><div className="preview-dashboard-kpis"><div><small>REVENUE</small><b>฿ 2.48M</b><span>↗ +18.4%</span></div><div><small>GROWTH</small><b>+24.6%</b><span>↗ THIS MONTH</span></div></div><div className="preview-chart"><div className="preview-chart-bars">{[30,50,39,66,51,75,91,67,84,96].map((v,i)=><i key={i} style={{height:`${v}%`}}/>)}</div><div className="preview-chart-line"/></div></div>
  if (type === 'line-liff') return <div className="preview-phone"><div className="preview-phone-frame"><div className="preview-phone-notch"/><div className="preview-phone-header"><span>●</span> LINE CUSTOMER PORTAL</div><div className="preview-phone-welcome">Welcome back!<strong>How can we help?</strong></div><div className="preview-phone-services"><div>▦<small>Services</small></div><div>◷<small>Status</small></div><div>▤<small>History</small></div></div><div className="preview-phone-button">View my services →</div></div><div className="preview-phone-label">MOBILE EXPERIENCE</div></div>
  return null
}

// Project gallery: arrows, thumbnails, keyboard navigation, and touch swipe.
// Images are loaded from public/ using the Vite base path for GitHub Pages.
function ProjectGallery({ images = [], lang = 'th', projectName = '' }) {
  const [active, setActive] = useState(0)
  const touchStart = useRef(null)
  useEffect(() => { setActive(0) }, [images])
  const move = (direction) => setActive(index => (index + direction + images.length) % images.length)

  if (!images.length) return (
    <div className="media-placeholder">
      <ScanLine size={24}/>
      <span>{lang === 'th' ? 'ยังไม่มีรูปภาพผลงาน' : 'No project images yet'}</span>
      <small>{lang === 'th' ? 'เพิ่มรูปใน public/images/projects แล้วระบุเส้นทางที่ src/data.js' : 'Place images in public/images/projects and set paths in src/data.js'}</small>
    </div>
  )

  return <div className="project-gallery" aria-label={lang === 'th' ? 'แกลเลอรีรูปภาพผลงาน' : 'Project image gallery'}>
    <div className="gallery-stage" tabIndex={0}
      onKeyDown={e => { if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1) } if (e.key === 'ArrowRight') { e.preventDefault(); move(1) } }}
      onTouchStart={e => { touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY } }}
      onTouchEnd={e => {
        if (!touchStart.current) return
        const dx = e.changedTouches[0].clientX - touchStart.current.x
        const dy = e.changedTouches[0].clientY - touchStart.current.y
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1)
        touchStart.current = null
      }}>
      <img src={asset(images[active])} alt={`${projectName} — ${lang === 'th' ? 'รูปที่' : 'Image'} ${active + 1}`} loading="lazy" />
      {images.length > 1 && <>
        <button className="gallery-arrow gallery-arrow-prev" type="button" onClick={() => move(-1)} aria-label={lang === 'th' ? 'รูปก่อนหน้า' : 'Previous image'}><ChevronLeft size={24}/></button>
        <button className="gallery-arrow gallery-arrow-next" type="button" onClick={() => move(1)} aria-label={lang === 'th' ? 'รูปถัดไป' : 'Next image'}><ChevronRight size={24}/></button>
      </>}
    </div>
    <div className="gallery-status"><span>{lang === 'th' ? 'ภาพผลงาน' : 'Project images'}</span><strong>{active + 1} / {images.length}</strong></div>
    {images.length > 1 && <div className="gallery-thumbnails" aria-label="Image thumbnails">
      {images.map((src, i) => <button key={`${src}-${i}`} type="button" className={`gallery-thumb ${i === active ? 'active' : ''}`} aria-label={`${lang === 'th' ? 'ไปภาพที่' : 'Go to image'} ${i+1}`} aria-current={i === active ? 'true' : undefined} onClick={() => setActive(i)}>
        <img src={asset(src)} alt="" loading="lazy"/>
      </button>)}
    </div>}
  </div>
}

function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('portfolio-language') === 'th' ? 'th' : 'en' }
    catch { return 'en' }
  })
  // 🌗 ธีมสว่าง/มืด: จำการเลือกไว้ใน browser และเริ่มตามธีมเครื่องเมื่อยังไม่เคยเลือก
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved === 'light' || saved === 'dark') return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch { return 'light' }
  })
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* storage may be disabled */ }
  }, [theme])

  const [selected, setSelected] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'th' ? 'ณัฐชยา | ผลงานและประสบการณ์' : 'Natchaya | Portfolio & Experience'
    try { localStorage.setItem('portfolio-language', lang) } catch { /* storage may be disabled */ }
  }, [lang])

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [selected])

  const open = (item) => { setSelected(item) }
  const isExperience = Boolean(selected?.company)

  return <>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="site-header"><div className="container header-inner">
      <a className="logo" href="#home" aria-label="Home"><span className="logo-mark">N<span>.</span></span><span className="logo-text">NATCHAYA<span> / PORTFOLIO</span></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        {navLinks.map((href, i) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{t.nav[i]}</a>)}
      </nav>
      <div className="header-tools">
        <div className="language-switch" role="group" aria-label={t.language}>
          <button type="button" className={lang === 'th' ? 'active' : ''} onClick={() => setLang('th')} aria-pressed={lang === 'th'}>🇹🇭 TH</button>
          <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>🇬🇧 EN</button>
        </div>
        {/* 🌗 ปุ่มสลับโทนมืด/สว่างบน Desktop และ Mobile */}
        <button type="button" className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={lang === 'th' ? 'เปลี่ยนโทนสีเว็บไซต์' : 'Toggle website color theme'} aria-pressed={theme === 'dark'}>
          {theme === 'dark' ? <Sun size={19}/> : <Moon size={19}/>}
        </button>
        <a className="header-cta" href="#contact">{t.connect} <ArrowUpRight size={16}/></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </div></header>

    <main>
      <section id="home" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> {t.eyebrow}</div>
          <p className="hero-kicker">{t.greeting}</p>
          <h1>
            {t.heroFirst} <span className="gradient-text">{t.heroAccent}</span>
            <br/>
            {/* ลดขนาดเฉพาะบรรทัด "ผลงานและประสบการณ์." ลง 20% ในโหมดภาษาไทย */}
            <span className={lang === 'th' ? 'hero-second-line hero-second-line-th' : 'hero-second-line'}>
              {t.heroSecond}<span className="period">.</span>
            </span>
          </h1>
          <p className="hero-lead">{t.leadStart}<strong>{t.leadStrong}</strong>{t.leadEnd}</p>
          <div className="hero-actions"><a className="button primary" href="#projects">{t.explore} <ArrowUpRight size={18}/></a><a className="button ghost" href="#experience">{t.myExperience} <ArrowDownRight size={18}/></a></div>
          {/* 📄 ปุ่มดาวน์โหลด Resume: ต้องมี PDF จริงใน public/resumes/ */}
          <div className="resume-actions">
            <a className="resume-button" href={asset(resumeFiles.th)} download="Natchaya_ThaiResume.pdf"><Download size={19}/><span><strong>🇹🇭 {lang === 'th' ? 'เรซูเม่ภาษาไทย' : 'Thai Resume'}</strong><small>Natchaya_ThaiResume.pdf</small></span></a>
            <a className="resume-button" href={asset(resumeFiles.en)} download="Natchaya_Faengmuangkok_Resume.pdf"><Download size={19}/><span><strong>🇬🇧 {lang === 'th' ? 'เรซูเม่ภาษาอังกฤษ' : 'English Resume'}</strong><small>Natchaya_Faengmuangkok_Resume.pdf</small></span></a>
          </div>
          <div className="hero-mini"><span className="mini-line"/><span>{t.location}</span><span className="mini-sep">/</span><span>{t.available}</span></div>
        </div>
        {/* 📸 PHOTO COLLAGE: แก้ชื่อไฟล์ได้ที่ heroPhotos ด้านบน */}
        <div className="hero-art photo-collage" aria-label={lang === 'th' ? 'รูปโปรไฟล์และภาพผลงาน 3 รูป' : 'Three photos of profile and work'}>
          <div className="photo-halo"/>
          <div className="photo-frame photo-main"><img src={asset(heroPhotos.profile)} alt="Natchaya profile photo"/><span className="photo-caption">01 / PROFILE</span></div>
          <div className="photo-frame photo-work"><img src={asset(heroPhotos.work)} alt="Coding and software development"/><span className="photo-caption">02 / WORK</span></div>
          <div className="photo-frame photo-project"><img src={asset(heroPhotos.project)} alt="Project and industrial work"/><span className="photo-caption">03 / PROJECT</span></div>
          <div className="photo-note note-top"><Sparkles size={16}/> {t.system}</div>
          <div className="photo-note note-bottom"><span>✦</span> {t.human}</div>
        </div>
        <a className="scroll-hint" href="#about"><span>{t.scroll}</span><ArrowDownRight size={17}/></a>
      </section>

      <section id="about" className="section about-section"><div className="container about-grid">
        <div><div className="section-label"><span>01</span> / {t.aboutLabel}</div><h2 className="section-heading">{t.aboutHeading} <em>{t.aboutEm}</em></h2></div>
        <div className="about-right"><p>{t.aboutP1}</p><p>{t.aboutP2}</p><div className="about-chips"><span><GraduationCap size={16}/> {t.degree}</span><span><BriefcaseBusiness size={16}/> {t.field}</span></div></div>
      </div></section>

      <section id="experience" className="section experience-section"><div className="container"><div className="section-label"><span>02</span> / {t.expLabel}</div><div className="section-title-row"><h2 className="section-heading">{t.expHeading}<br/><em>{t.expEm}</em></h2><p>{t.expIntro}</p></div>
        <div className="experience-list">{experience.map((item, i) => <button key={item.company} className="experience-row" onClick={() => open(item)}><span className="experience-index">0{i + 1}</span><span className="experience-main"><span className="experience-company">{item.company}</span><span className="experience-role">{pick(item.role, lang)}</span></span><span className="experience-date">{item.period}</span><span className="experience-arrow"><ArrowUpRight size={22}/></span></button>)}</div>
        <p className="click-hint">{t.expHint}</p>
      </div></section>

      <section id="projects" className="section projects-section"><div className="container"><div className="section-label"><span>03</span> / {t.projectLabel}</div><div className="section-title-row"><h2 className="section-heading">{t.projectHeading} <em>{t.projectEm}</em></h2><p>{t.projectIntro}</p></div>
        <div className="projects-grid">{projects.map((item) => {
          return <button key={item.id} type="button" className={`project-card ${item.color}`} onClick={() => open(item)} aria-label={`${pick(item.name, lang)} — ${lang === 'th' ? 'คลิกดูรายละเอียด' : 'View details'}`}>
            <div className="project-card-top"><span className="project-category"><span className="project-category-dot"/>{pick(item.tag, lang)}</span><span className="project-external"><ArrowUpRight size={19}/></span></div>
            <div className="project-visual" aria-hidden="true">
              <div className="visual-grid"/><div className="visual-glow"/>
              <div className="project-preview-frame"><ProjectPreview type={item.id}/></div>
              <span className="visual-corner visual-corner-top">N / PORTFOLIO</span><span className="project-number">{item.number.padStart(2, '0')}</span>
            </div>
            <div className="project-content"><div className="project-content-heading"><h3>{pick(item.name, lang)}</h3><ArrowRight className="content-arrow" size={17}/></div><p>{pick(item.description, lang)}</p><div className="tags">{item.stack.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
          </button>
        })}</div>
      </div></section>

      <section id="skills" className="section skills-section"><div className="container"><div className="section-label"><span>04</span> / {t.skillsLabel}</div><div className="section-title-row"><h2 className="section-heading">{t.skillsHeading} <em>{t.skillsEm}</em></h2><p>{t.skillsIntro}</p></div><div className="skill-grid">{skillGroups.map((group, i) => <div className="skill-panel" key={i}><span className="skill-panel-number">0{i + 1} /</span><h3>{pick(group.name, lang)}</h3><div className="skill-items">{group.items.map((skill) => <span key={skill}><Check size={14}/>{skill}</span>)}</div></div>)}</div></div></section>

      {/* ============================================================
          05 / SKILLS ANALYTICS — Editable illustration values
          Values in src/skillsAnalytics.js are NOT certified measurements.
          ============================================================ */}
      <section id="skills-analytics" className="section analytics-section">
        <div className="container">
          <div className="section-label"><span>05</span> / SKILLS ANALYTICS</div>
          <div className="section-title-row">
            <h2 className="section-heading">{lang === 'th' ? 'ทักษะที่ใช่' : 'Skills at a'} <em>{lang === 'th' ? 'ในรูปแบบข้อมูล' : 'glance'}</em></h2>
            <p>{lang === 'th' ? 'ภาพรวมทักษะทางเทคนิคและทักษะการทำงาน แสดงเป็นเปอร์เซ็นต์ที่เข้าใจง่าย' : 'A clear percentage-based view of technical and workplace skills.'}</p>
          </div>
          <div className="analytics-grid">
            <article className="analytics-panel">
              <div className="analytics-head">
                <span className="analytics-kicker">01 / HARD SKILLS</span>
                <h3>{lang === 'th' ? 'ทักษะทางเทคนิคและธุรกิจ' : 'Technical & Business Skills'}</h3>
                <p>{lang === 'th' ? 'แสดงระดับทักษะเป็นเปอร์เซ็นต์ แยกตามกลุ่มความสามารถ' : 'Editable illustration scores by skill category.'}</p>
              </div>
              <div className="hard-score-donuts">
                {skillGroups.map((group,i) => {
                  const {score,color} = hardSkillScores[i] ?? {score:90,color:'#fb932c'}
                  return <div className="hard-score-card" key={i}>
                    <div className="hard-score-donut" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={score} aria-label={pick(group.name,lang)} style={{'--score':`${score}%`,'--skill-color':color}}>
                      <div className="hard-score-inner"><strong>{score}%</strong></div>
                    </div>
                    <strong className="hard-score-label">{pick(group.name,lang)}</strong>
                  </div>
                })}
              </div>
              <div className="hard-skill-bars">
                {skillGroups.map((group,i) => {
                  const {score,color} = hardSkillScores[i] ?? {score:90,color:'#fb932c'}
                  return <div className="hard-skill-line" key={i}>
                    <div><span>{pick(group.name,lang)}</span><strong style={{color}}>{score}%</strong></div>
                    <div className="bar-track" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={score} aria-label={pick(group.name,lang)}><div className="bar-fill" style={{width:`${score}%`,background:color}}/></div>
                  </div>
                })}
              </div>
            </article>
            <article className="analytics-panel">
              <div className="analytics-head">
                <span className="analytics-kicker">02 / SOFT SKILLS</span>
                <h3>{lang === 'th' ? 'ทักษะการทำงานร่วมกับผู้อื่น' : 'Interpersonal & Workplace Skills'}</h3>
                <p>{lang === 'th' ? 'แต่ละทักษะใช้สีที่แตกต่างกัน และแสดงคะแนน 90% อย่างชัดเจน' : 'Six distinct colors, with a clearly displayed 90% score for each skill.'}</p>
              </div>
              <div className="soft-skill-bars">
                {softSkills.map((skill,i) => <div className="soft-skill-item" key={skill.id} style={{'--skill-color':skill.color}}>
                  <div className="soft-skill-top">
                    <div className="soft-skill-name"><span className="soft-number" style={{color:skill.color}}>0{i+1}</span><strong>{pick(skill.name,lang)}</strong></div>
                    <strong className="soft-score" style={{color:skill.color}}>{skill.score}%</strong>
                  </div>
                  <div className="bar-track soft-track" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.score} aria-label={pick(skill.name,lang)}><div className="bar-fill soft-fill" style={{width:`${skill.score}%`,background:skill.color}}/></div>
                  <p className="soft-skill-description">{pick(skill.description,lang)}</p>
                </div>)}
              </div>
            </article>
          </div>
          <p className="analytics-disclaimer">{lang==='th' ? 'หมายเหตุ: ตัวเลข Hard Skills และ Soft Skills เป็นเปอร์เซ็นต์ตัวอย่างสำหรับการนำเสนอ Portfolio ไม่ใช่คะแนนจากแบบทดสอบที่รับรอง สามารถแก้ไขได้ใน src/skillsAnalytics.js' : 'Note: Hard and Soft Skills percentages are editable presentation examples, not certified assessment results. Edit values in src/skillsAnalytics.js.'}</p>
        </div>
      </section>

      {/* ============================================================
          📞 CONTACT: เบอร์โทร/อีเมล และพื้นที่ QR Code LINE
          📷 วิธีเพิ่ม QR: บันทึกรูปเป็น public/images/line-qr.png
          ตอนยังไม่มีรูปจะแสดง Placeholder ให้ก่อน
          ============================================================ */}
      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div className="section-label"><span>06</span> / {t.contactLabel}</div>
          <p className="contact-overline">{t.contactOverline}</p>
          <h2>{t.contactHeading}<br/><em>{t.contactEm}</em></h2>
          <p className="contact-copy">{t.contactIntro}</p>
          <div className="contact-layout">
            <div className="contact-details">
              <div className="contact-detail"><MapPin size={20}/><span>Bangkok, Thailand</span></div>
              <a className="contact-detail" href="tel:+66943605725"><Phone size={20}/><span>+66 94 360 5725</span></a>
              <a className="contact-detail" href="mailto:primnatchaya2540@gmail.com"><Mail size={20}/><span>primnatchaya2540@gmail.com</span></a>
              <div className="contact-actions">
                <a className="button primary" href="mailto:primnatchaya2540@gmail.com?subject=Portfolio%20Inquiry">{t.email} <Mail size={18}/></a>
                <a className="button ghost" href="https://github.com/Prim2540" target="_blank" rel="noreferrer">GitHub <Github size={18}/></a>
                <a className="button ghost" href={asset(resumeFiles.th)} download>🇹🇭 {lang === 'th' ? 'ดาวน์โหลดเรซูเม่ไทย' : 'Thai Resume'}</a>
                <a className="button ghost" href={asset(resumeFiles.en)} download>🇬🇧 {lang === 'th' ? 'ดาวน์โหลดเรซูเม่อังกฤษ' : 'English Resume'}</a>
              </div>
            </div>
            <div className="line-qr-card">
              {/* 📷 ใส่รูป QR Code ของคุณใน public/images/line-qr.png */}
           <div className="line-qr-card">
  <div className="line-qr-image">
    <img
      src={`${import.meta.env.BASE_URL}images/line-qr.jpg`}
      alt="LINE QR Code - Natchaya"
    />
  </div>

  <strong>
    {lang === "th"
      ? "สแกน QR Code เพื่อติดต่อผ่าน LINE"
      : "Scan to connect on LINE"}
  </strong>
</div>
              <strong>{lang === 'th' ? 'สแกน LINE เพื่อติดต่อ' : 'Scan to connect on LINE'}</strong>
              <small>{lang === 'th' ? 'พื้นที่สำหรับใส่ QR Code ของคุณ' : 'Your LINE QR code goes here'}</small>
            </div>
          </div>
          <p className="email-warning">{t.emailWarning}</p>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a href="#home" className="footer-brand">N<span>.</span></a><span>© {new Date().getFullYear()} Natchaya Faengmuangkok. {t.crafted}</span><a href="#home">{t.backTop}</a></div></footer>

    {selected && <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null) }}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div className="modal-header"><span>{t.details}</span><button className="modal-close" onClick={() => setSelected(null)} aria-label={t.close}><X size={22}/></button></div><div className="modal-body"><span className="modal-category">{pick(selected.category || selected.tag, lang)}</span><h2 id="modal-title">{selected.company || pick(selected.name, lang)}</h2>{selected.role && <h3>{pick(selected.role, lang)} <span>· {selected.period}</span></h3>}<p className="modal-description">{pick(selected.description, lang)}</p><div className="modal-subheading">{t.highlights}</div><ul className="modal-bullets">{(pick(selected.bullets || selected.details, lang) || []).map((b) => <li key={b}><Check size={16}/>{b}</li>)}</ul><div className="modal-subheading">{t.tools}</div><div className="tags modal-tags">{(selected.skills || selected.stack || []).map((s) => <span key={s}>{s}</span>)}</div>{!isExperience && <><div className="modal-subheading media-heading">{t.media}</div><ProjectGallery key={selected.id || selected.company || pick(selected.name, lang)} images={selected.images || []} lang={lang} projectName={pick(selected.name, lang) || ''}/>
      {(selected.videos || []).map((v) => <video key={v} className="project-video" controls preload="metadata" src={asset(v)}/>)}{(selected.youtube || []).map((url, i) => {
      const embed = youtubeEmbed(url)
      return embed ? <div key={`${url}-${i}`} className="youtube-wrap"><iframe src={embed} title={`YouTube demo ${i + 1}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/><a href={url} target="_blank" rel="noopener noreferrer">{lang === 'th' ? 'เปิดวิดีโอบน YouTube ↗' : 'Watch on YouTube ↗'}</a></div> : null
    })}</>}</div></div></div>}
  </>
}

export default App
