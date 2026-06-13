'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Server,
  Wrench,
  Send,
  CheckCircle2,
  ChevronRight,
  Star,
  Lock,
} from 'lucide-react'
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import Image from 'next/image'

// ─── Fade-up helper ───────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

const skillGroups = [
  {
    label: 'Frontend',
    icon: Code2,
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Redux', 'React Hooks', 'Framer Motion'],
  },
  {
    label: 'Backend & Cloud',
    icon: Server,
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    skills: ['AWS AppSync', 'AWS Lambda', 'API Gateway', 'CloudWatch', 'GraphQL', 'RESTful APIs', 'BFF Architecture', 'Node.js', 'PHP'],
  },
  {
    label: 'Architecture & Tools',
    icon: Wrench,
    color: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    skills: ['Micro Frontend (MFE)', 'SSR / SSG / App Router', 'RBAC', 'WCAG 2.1', 'Jest', 'React Testing Library', 'Git', 'Agile / Scrum', 'Backstage', 'Locize', 'VS Code Extension Dev'],
  },
]

const projects = [
  {
    title: 'Quick Laundry Zone',
    subtitle: 'Full-Stack Business Website',
    desc: 'Complete business website for a professional laundry service — featuring animated hero, full pricing system, service pages, Formspree contact form, Google Maps, and WhatsApp integration. Built and deployed independently.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Formspree', 'Vercel'],
    live: 'https://quick-laundry-zone.vercel.app',
    github: null,
    isLive: true,
    isNDA: false,
    color: 'from-orange-500/20 to-orange-600/5',
    accent: 'text-orange-400',
    border: 'border-orange-500/20',
    tag: 'Live Project',
    tagBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    icon: '🧺',
  },
  {
    title: 'Modern MathXL — Pearson',
    subtitle: 'EdTech Platform · Enterprise',
    desc: 'Built Backend-for-Frontend APIs on AWS for Pearson\'s MathXL platform. Developed 3 GraphQL merged APIs integrated with Respondus lockdown browser. Led MFE React migration from legacy C# ASP.NET backend.',
    tech: ['AWS AppSync', 'Lambda', 'API Gateway', 'GraphQL', 'React MFE', 'TypeScript'],
    live: null,
    github: null,
    isLive: false,
    isNDA: true,
    color: 'from-blue-500/20 to-blue-600/5',
    accent: 'text-blue-400',
    border: 'border-blue-500/20',
    tag: 'Enterprise · NDA',
    tagBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: '📐',
  },
  {
    title: 'Storied — Social Platform',
    subtitle: 'Next.js Migration · Enterprise',
    desc: 'Migrated entire storytelling platform to Next.js including critical features. Implemented layouts, Jest tests, API integration, Locize localisation, historical newspaper search, family search, and family tree viewer.',
    tech: ['Next.js', 'TypeScript', 'Jest', 'Locize', 'REST APIs'],
    live: null,
    github: null,
    isLive: false,
    isNDA: true,
    color: 'from-violet-500/20 to-violet-600/5',
    accent: 'text-violet-400',
    border: 'border-violet-500/20',
    tag: 'Enterprise · NDA',
    tagBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    icon: '📖',
  },
  {
    title: 'Laithwaites — Wine E-commerce',
    subtitle: 'Next.js Migration · Enterprise',
    desc: 'Developed new headers and layouts using Content Fragment tooling as part of full Next.js migration. Designed multiple themed brand sites sharing one codebase using Material UI.',
    tech: ['Next.js', 'Material UI', 'TypeScript', 'Content Fragments'],
    live: null,
    github: null,
    isLive: false,
    isNDA: true,
    color: 'from-rose-500/20 to-rose-600/5',
    accent: 'text-rose-400',
    border: 'border-rose-500/20',
    tag: 'Enterprise · NDA',
    tagBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    icon: '🍷',
  },
  {
    title: 'Holland America Line',
    subtitle: 'Tourism Platform · Enterprise',
    desc: 'Contributed to design improvements, API integration fixes, accessibility enhancements (WCAG 2.1), and data layer integrations for this large-scale international travel platform.',
    tech: ['React.js', 'TypeScript', 'REST APIs', 'WCAG 2.1', 'Data Layer'],
    live: null,
    github: null,
    isLive: false,
    isNDA: true,
    color: 'from-cyan-500/20 to-cyan-600/5',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
    tag: 'Enterprise · NDA',
    tagBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    icon: '🚢',
  },
  {
    title: 'Datalynx — Pharma Platform',
    subtitle: 'RBAC · Data Management',
    desc: 'Built a fully custom data module for CRUD operations on pharmaceutical formula data. Designed and implemented role-based permissions system with access control across multiple user roles and admin panel.',
    tech: ['React.js', 'TypeScript', 'RBAC', 'REST APIs', 'Admin Panel'],
    live: null,
    github: null,
    isLive: false,
    isNDA: true,
    color: 'from-emerald-500/20 to-emerald-600/5',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    tag: 'Enterprise · NDA',
    tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: '🧬',
  },
  {
    title: 'UPS API Tool',
    subtitle: 'Developer Tooling',
    desc: 'Developed the full UI for a UPS internal API tool using the Backstage library. Built filters, headers, dashboard, and sidebar. Created a custom VS Code extension to detect errors and highlight invalid API data operations.',
    tech: ['React.js', 'Backstage', 'VS Code Extension', 'TypeScript'],
    live: null,
    github: null,
    isLive: false,
    isNDA: true,
    color: 'from-amber-500/20 to-amber-600/5',
    accent: 'text-amber-400',
    border: 'border-amber-500/20',
    tag: 'Enterprise · NDA',
    tagBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    icon: '📦',
  },
]

const stats = [
  { value: '3+',  label: 'Years Experience' },
  { value: '7',   label: 'Client Projects'  },
  { value: '4',   label: 'Enterprise Brands' },
  { value: '100%', label: 'Remote Ready'    },
]

const serviceOptions = [
  'Select a topic',
  'Freelance Project',
  'Full-time Opportunity',
  'Collaboration',
  'General Query',
]

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [formData, setFormData] = useState({ name: '', email: '', topic: 'Select a topic', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [typedText, setTypedText] = useState('')

  const titles = ['Full Stack Developer', 'React & Next.js Expert', 'AWS & GraphQL Engineer', 'Frontend Architect']
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const current = titles[titleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setTypedText(current.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, 70)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setTypedText(current.slice(0, charIndex))
        setCharIndex((c) => c - 1)
      }, 35)
    } else {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, titleIndex])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return
    if (formData.topic === 'Select a topic') return
    setFormStatus('sending')
    try {
      const body = new FormData()
      body.append('name', formData.name)
      body.append('email', formData.email)
      body.append('topic', formData.topic)
      body.append('message', formData.message)
      body.append('_subject', `Portfolio Contact — ${formData.topic} | Vaibhav Vasoya`)
      body.append('_replyto', formData.email)
      const res = await fetch('https://formspree.io/f/mzdwvwll', {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', topic: 'Select a topic', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="bg-[#080810] min-h-screen text-white font-sans">

      {/* ═══════════════════════════════════════
          NAVBAR
      ═══════════════════════════════════════ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? 'backdrop-blur-xl bg-[#080810]/80 border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo mark */}
            <a href="#hero" className="flex items-center gap-2 group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 relative rounded-full overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Profile Logo"
                    fill
                    className="object-contain scale-120"
                    priority
                  />
                </div>
              <span className="font-bold text-white text-sm tracking-tight hidden sm:block">
                Vaibhav Vasoya
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}
                   className="text-sm font-medium text-gray-400 hover:text-white
                              transition-colors duration-200 relative
                              after:absolute after:-bottom-0.5 after:left-0 after:h-px
                              after:w-0 after:bg-blue-400 after:transition-all after:duration-300
                              hover:after:w-full">
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="https://github.com/vaibhavvasoya25" target="_blank" rel="noopener noreferrer"
                 className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/vaibhav-vasoya-622239240/" target="_blank" rel="noopener noreferrer"
                 className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={18} />
              </a>
              <a href="https://drive.google.com/file/d/1eHD96Ow_JdrBLcVcobOsfqcLKR_UDRG6/view?usp=sharing"
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white
                            text-xs font-bold px-4 py-2.5 rounded-full transition-all
                            duration-300 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95">
                <Download size={13} /> Resume
              </a>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors">
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#080810]/98 backdrop-blur-xl border-b border-white/5"
            >
              <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col gap-4">
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                     className="text-lg font-semibold text-gray-300 hover:text-white
                                py-2 border-b border-white/5 transition-colors">
                    {l.label}
                  </a>
                ))}
                <div className="flex items-center gap-4 pt-2">
                  <a href="https://github.com/vaibhavvasoya25" target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                  <a href="https://www.linkedin.com/in/vaibhav-vasoya-622239240/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                  <a href="https://drive.google.com/file/d/1eHD96Ow_JdrBLcVcobOsfqcLKR_UDRG6/view?usp=sharing"
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="ml-auto flex items-center gap-2 bg-blue-500 text-white text-xs
                                font-bold px-4 py-2.5 rounded-full">
                    <Download size={13} /> Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
               backgroundSize: '80px 80px',
             }} />

        {/* Glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full
                                  bg-blue-600/10 blur-[150px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full
                                  bg-violet-600/8 blur-[120px]"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
          <div className="max-w-4xl">

            {/* Availability badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-emerald-500/30
                         bg-emerald-500/5 text-emerald-400 text-xs font-bold
                         tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            {/* Name */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-base sm:text-lg font-medium mb-3 tracking-wide">
              Hi, I&apos;m
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white
                         leading-[0.95] tracking-tight mb-6">
              Vaibhav<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r
                               from-blue-400 via-blue-300 to-violet-400">
                Vasoya
              </span>
            </motion.h1>

            {/* Typewriter title */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-7">
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400">
                {typedText}
              </span>
              <span className="w-0.5 h-6 bg-blue-400 animate-pulse" />
            </motion.div>

            {/* Description */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
              Full Stack Developer at <span className="text-white font-semibold">LogWinTech Pvt. Ltd.</span>, Surat.
              4 years of expertise in React, Next.js, TypeScript and AWS services.
              Successfully delivered impactful solutions across{' '}
              <span className="text-blue-400 font-semibold">7 enterprise client projects</span> including
              Pearson, UPS, Laithwaites and Holland America Line.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-14">
              <a href="#projects"
                 className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400
                            text-white font-bold px-7 py-3.5 rounded-full transition-all
                            duration-300 hover:shadow-xl hover:shadow-blue-500/30
                            active:scale-95 text-sm">
                View My Work <ArrowRight size={15} />
              </a>
              <a href="https://drive.google.com/file/d/1eHD96Ow_JdrBLcVcobOsfqcLKR_UDRG6/view?usp=sharing"
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 border border-white/15
                            hover:border-white/30 text-gray-300 hover:text-white
                            font-semibold px-7 py-3.5 rounded-full transition-all
                            duration-300 active:scale-95 text-sm backdrop-blur-sm">
                <Download size={15} /> Download Resume
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-8 sm:gap-12 pt-8 border-t border-white/5">
              {stats.map((s, i) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.a href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col
                     items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors"
          animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} />
        </motion.a>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════ */}
      <section id="about" className="py-24 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-16">
            <p className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Building things that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r
                               from-blue-400 to-violet-400">
                matter at scale
              </span>
            </h2>
          </FadeUp>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Left col — text */}
            <FadeUp delay={0.1} className="lg:col-span-3 space-y-5">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                I&apos;m a Full Stack Developer based in{' '}
                <span className="text-white font-medium">Surat, Gujarat</span> — currently
                working at <span className="text-white font-medium">LogWinTech Pvt. Ltd.</span> where
                I build and deliver enterprise-grade web applications for globally recognised clients.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                My core strength is the intersection of modern frontend architecture and
                cloud-backed systems. I have deep experience with{' '}
                <span className="text-blue-400 font-medium">React.js, Next.js, TypeScript</span> on the frontend
                and <span className="text-emerald-400 font-medium">AWS AppSync, Lambda, GraphQL</span> on the backend.
                I have contributed to MFE migrations, BFF architectures, RBAC systems,
                and WCAG-compliant accessible interfaces across 7 projects.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Outside of my day job, I take on freelance projects — recently delivering a
                complete business website for a laundry service, managing the full product
                lifecycle from planning and design to deployment.
              </p>

              {/* Key points */}
              <div className="pt-4 grid sm:grid-cols-2 gap-3">
                {[
                  'Enterprise-scale React & Next.js',
                  'AWS BFF & GraphQL APIs',
                  'Micro Frontend Architecture',
                  'WCAG 2.1 Accessibility',
                  'RBAC & Security Patterns',
                  'Full Product Lifecycle',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <ChevronRight size={14} className="text-blue-400 shrink-0" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a href="https://www.linkedin.com/in/vaibhav-vasoya-622239240/"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 border border-white/10
                              hover:border-blue-500/50 bg-white/3 hover:bg-blue-500/10
                              text-gray-400 hover:text-blue-400 text-xs font-semibold
                              px-4 py-2.5 rounded-full transition-all duration-300">
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a href="https://github.com/vaibhavvasoya25"
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 border border-white/10
                              hover:border-white/30 bg-white/3 hover:bg-white/8
                              text-gray-400 hover:text-white text-xs font-semibold
                              px-4 py-2.5 rounded-full transition-all duration-300">
                  <Github size={14} /> GitHub
                </a>
                <a href="mailto:vaibhavvasoya2510@gmail.com"
                   className="inline-flex items-center gap-2 border border-white/10
                              hover:border-emerald-500/50 bg-white/3 hover:bg-emerald-500/10
                              text-gray-400 hover:text-emerald-400 text-xs font-semibold
                              px-4 py-2.5 rounded-full transition-all duration-300">
                  <Mail size={14} /> Email Me
                </a>
              </div>
            </FadeUp>

            {/* Right col — info card */}
            <FadeUp delay={0.2} className="lg:col-span-2">
              <div className="bg-white/3 border border-white/8 rounded-3xl p-6 space-y-5
                              backdrop-blur-sm">
                {/* Current role */}
                <div className="pb-5 border-b border-white/8">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">
                    Current Role
                  </p>
                  <p className="text-white font-bold text-sm">Web Developer</p>
                  <p className="text-blue-400 text-xs mt-0.5">LogWinTech Pvt. Ltd.</p>
                  <p className="text-gray-500 text-xs mt-0.5">May 2023 – Present · Surat, India</p>
                </div>

                {/* Education */}
                <div className="pb-5 border-b border-white/8">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">
                    Education
                  </p>
                  <p className="text-white font-bold text-sm">BCA — Computer Applications</p>
                  <p className="text-gray-400 text-xs mt-0.5">S V Patel College, Surat</p>
                  <p className="text-gray-500 text-xs mt-0.5">2021–2023 · CGPA 7.09</p>
                </div>

                {/* Quick info */}
                <div className="space-y-3">
                  {[
                    { label: 'Location',      value: 'Surat, Gujarat, India', icon: MapPin  },
                    { label: 'Experience',    value: '3+ Years',              icon: Star    },
                    { label: 'Availability',  value: 'Open to Opportunities', icon: CheckCircle2 },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center
                                        justify-center shrink-0">
                          <Icon size={13} className="text-blue-400" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-gray-200 text-xs font-medium">{item.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SKILLS
      ═══════════════════════════════════════ */}
      <section id="skills" className="py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-16">
            <p className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Technical Skills
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              The stack I work with
            </h2>
          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
            {skillGroups.map((group, gi) => {
              const Icon = group.icon
              return (
                <FadeUp key={group.label} delay={gi * 0.1}>
                  <div className={`${group.bg} border ${group.border} rounded-3xl p-7
                                  backdrop-blur-sm hover:border-opacity-50 transition-all
                                  duration-300 h-full`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center
                                      justify-center">
                        <Icon size={18} className={group.color} />
                      </div>
                      <p className={`font-bold text-sm ${group.color}`}>{group.label}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill}
                              className="text-xs font-medium text-gray-300 bg-white/5
                                         border border-white/8 px-3 py-1.5 rounded-full
                                         hover:border-white/20 hover:text-white
                                         transition-all duration-200 cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>

          {/* Client logos strip */}
          <FadeUp delay={0.3} className="mt-14 pt-10 border-t border-white/5">
            <p className="text-gray-600 text-xs font-bold tracking-[0.25em] uppercase
                          text-center mb-8">
              Delivered for
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
              {['Pearson', 'UPS', 'Laithwaites', 'Holland America Line', 'Storied', 'Datalynx'].map((client) => (
                <span key={client}
                      className="text-gray-600 hover:text-gray-400 font-bold text-sm
                                 tracking-wide transition-colors duration-200">
                  {client}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROJECTS
      ═══════════════════════════════════════ */}
      <section id="projects" className="py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-16">
            <p className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Projects & Experience
            </h2>
            <p className="text-gray-500 text-sm max-w-lg">
              Enterprise projects are under NDA — tech stack and contributions are shared.
              Personal projects include live links.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <FadeUp key={project.title} delay={i * 0.06}>
                <div className={`relative bg-gradient-to-br ${project.color} border
                                ${project.border} rounded-3xl p-6 h-full flex flex-col
                                backdrop-blur-sm hover:border-opacity-60
                                transition-all duration-300 hover:-translate-y-1
                                hover:shadow-2xl hover:shadow-black/30 group`}>

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-3xl">{project.icon}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold tracking-wider uppercase
                                        border px-2.5 py-1 rounded-full ${project.tagBg}`}>
                        {project.tag}
                      </span>
                      {project.isNDA && (
                        <Lock size={12} className="text-gray-600" />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-base mb-1 leading-snug">
                    {project.title}
                  </h3>
                  <p className={`text-xs font-medium mb-3 ${project.accent}`}>
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed mb-5 flex-1">
                    {project.desc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t}
                            className="text-[10px] font-medium text-gray-500 bg-white/4
                                       border border-white/8 px-2 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                         className={`inline-flex items-center gap-1.5 text-xs font-bold
                                    ${project.accent} hover:opacity-80 transition-opacity`}>
                        <ExternalLink size={12} /> View Live
                      </a>
                    )}
                    {project.isNDA && (
                      <span className="inline-flex items-center gap-1.5 text-xs
                                       text-gray-600 cursor-default">
                        <Lock size={11} /> Code under NDA
                      </span>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-16">
            <p className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-gray-500 text-sm max-w-lg">
              Open to full-time opportunities, freelance projects and interesting collaborations.
              Drop a message — I respond within 24 hours.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Form */}
            <FadeUp delay={0.1}>
              <div className="bg-white/3 border border-white/8 rounded-3xl overflow-hidden
                              backdrop-blur-sm">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-5">
                  <h3 className="text-white font-bold text-base">Send a Message</h3>
                  <p className="text-blue-100 text-xs mt-0.5">
                    Fill in your details and I&apos;ll get back to you.
                  </p>
                </div>

                <div className="p-7 space-y-5">
                  {formStatus === 'success' ? (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8">
                      <CheckCircle2 size={44} className="text-emerald-400 mx-auto mb-4" />
                      <p className="text-white font-bold text-base mb-2">Message sent!</p>
                      <p className="text-gray-400 text-sm">I&apos;ll get back to you soon.</p>
                      <button onClick={() => setFormStatus('idle')}
                              className="mt-4 text-xs text-blue-400 underline underline-offset-2">
                        Send another
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-2
                                            uppercase tracking-wider">
                            Name *
                          </label>
                          <input type="text" name="name" value={formData.name}
                                 onChange={handleChange} placeholder="Your name"
                                 className="w-full bg-white/5 border border-white/10 rounded-xl
                                            px-4 py-3 text-sm text-white placeholder-gray-600
                                            focus:outline-none focus:border-blue-500/60
                                            focus:bg-blue-500/5 transition-all duration-200" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-2
                                            uppercase tracking-wider">
                            Email *
                          </label>
                          <input type="email" name="email" value={formData.email}
                                 onChange={handleChange} placeholder="your@email.com"
                                 className="w-full bg-white/5 border border-white/10 rounded-xl
                                            px-4 py-3 text-sm text-white placeholder-gray-600
                                            focus:outline-none focus:border-blue-500/60
                                            focus:bg-blue-500/5 transition-all duration-200" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-2
                                          uppercase tracking-wider">
                          Topic *
                        </label>
                        <select name="topic" value={formData.topic} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl
                                           px-4 py-3 text-sm text-white
                                           focus:outline-none focus:border-blue-500/60
                                           focus:bg-blue-500/5 transition-all duration-200
                                           cursor-pointer [&>option]:bg-[#0d0d1a]">
                          {serviceOptions.map((o) => (
                            <option key={o} value={o} disabled={o === 'Select a topic'}>{o}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-2
                                          uppercase tracking-wider">
                          Message *
                        </label>
                        <textarea name="message" value={formData.message}
                                  onChange={handleChange} rows={4}
                                  placeholder="Tell me about your project or opportunity..."
                                  className="w-full bg-white/5 border border-white/10 rounded-xl
                                             px-4 py-3 text-sm text-white placeholder-gray-600
                                             focus:outline-none focus:border-blue-500/60
                                             focus:bg-blue-500/5 transition-all duration-200
                                             resize-none" />
                      </div>

                      {formStatus === 'error' && (
                        <p className="text-red-400 text-xs bg-red-500/10 border
                                      border-red-500/20 rounded-xl px-4 py-3">
                          Something went wrong. Please email me directly at vaibhavvasoya2510@gmail.com
                        </p>
                      )}

                      <button onClick={handleSubmit} disabled={formStatus === 'sending'}
                              className="w-full flex items-center justify-center gap-2
                                         bg-blue-500 hover:bg-blue-400 text-white font-bold
                                         py-3.5 px-6 rounded-full transition-all duration-300
                                         hover:shadow-lg hover:shadow-blue-500/30
                                         active:scale-95 disabled:opacity-50
                                         disabled:cursor-not-allowed text-sm">
                        {formStatus === 'sending' ? (
                          <>
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10"
                                      stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <><Send size={14} /> Send Message</>
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </FadeUp>

            {/* Right — info + map */}
            <FadeUp delay={0.2} className="space-y-5">

              {/* Contact cards */}
              {[
                { icon: Mail,   label: 'Email',    value: 'vaibhavvasoya2510@gmail.com', href: 'mailto:vaibhavvasoya2510@gmail.com' },
                { icon: Phone,  label: 'Phone',    value: '+91 93279 20057',             href: 'tel:+919327920057'                  },
                { icon: MapPin, label: 'Location', value: 'Surat, Gujarat, India',       href: null                                 },
              ].map((item) => {
                const Icon = item.icon
                const commonClassName = "flex items-center gap-4 bg-white/3 border border-white/8 rounded-2xl px-5 py-4 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group"
                const content = (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center
                                    justify-center shrink-0">
                      <Icon size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">
                        {item.label}
                      </p>
                      <p className="text-gray-200 text-sm font-medium group-hover:text-white
                                    transition-colors break-all">
                        {item.value}
                      </p>
                    </div>
                  </>
                )

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={commonClassName}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className={commonClassName}>
                    {content}
                  </div>
                )
              })}

              {/* Map */}
              <div className="rounded-3xl overflow-hidden border border-white/8 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59497.77075592548!2d72.77476638995073!3d21.247281742253236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f28545d61a9%3A0x703740bbb637551d!2sAmroli%2C%20Surat%2C%20Gujarat%20394107!5e0!3m2!1sen!2sin!4v1780228148951!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Surat, Gujarat"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
                <span className="text-white font-black text-xs">VV</span>
              </div>
              <span className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Vaibhav Vasoya. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a href="https://github.com/vaibhavvasoya25" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-white transition-colors duration-200">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/vaibhav-vasoya-622239240/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-white transition-colors duration-200">
                <Linkedin size={18} />
              </a>
              <a href="mailto:vaibhavvasoya2510@gmail.com"
                 className="text-gray-600 hover:text-white transition-colors duration-200">
                <Mail size={18} />
              </a>
              <a href="https://drive.google.com/file/d/1eHD96Ow_JdrBLcVcobOsfqcLKR_UDRG6/view?usp=sharing"
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400
                            hover:text-blue-300 transition-colors duration-200">
                <Download size={13} /> Resume
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}