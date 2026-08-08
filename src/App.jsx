import { useState, useEffect, useRef } from "react";
import {
  Shield, Award, Globe, Code, Terminal, Lock, Menu,
  Users, Trophy, BrainCircuit, Network, Bug, FileSearch,
  Binary, Target, FileText, Fingerprint, ChevronDown, X
} from "lucide-react";

function GithubIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const TITLES = [
  "Web Application & API Penetration Tester",
  "VAPT Specialist",
  "Cyber Security Analyst Intern",
  "CTF Challenge Creator",
  "AI Security Pioneer"
];

const PROJECTS = [
  {
    id: 1,
    icon: Shield,
    title: "SOCX",
    subtitle: "SOC Monitoring & Incident Response Platform",
    category: "SOC Operations",
    categoryColor: "#10b981",
    bgImage: "/sirophin-portfolio/socx_bg.png",
    bgGradient: "linear-gradient(135deg, rgba(16,185,129,0.3) 0%, rgba(9,13,22,0.95) 100%)",
    githubUrl: "https://github.com/sirophin/SOCX",
    description: "Full-stack Security Operations Center platform with multi-tenant RBAC, log parsing (Windows, Linux, Apache, Nginx), and incident investigation.",
    features: [
      "Multi-tenant Role-Based Access Control (RBAC)",
      "Automated log parsing for Windows, Linux, Apache & Nginx",
      "Real-time incident investigation and alert triage",
      "Interactive security analytics dashboard"
    ],
    tech: ["FastAPI", "React", "PostgreSQL", "JWT", "Tailwind CSS"]
  },
  {
    id: 2,
    icon: Lock,
    title: "SecureRAG",
    subtitle: "Enterprise AI Assistant with Role-Based Access Control",
    category: "Enterprise AI",
    categoryColor: "#6366f1",
    bgImage: "/sirophin-portfolio/securerag_bg.png",
    bgGradient: "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(9,13,22,0.95) 100%)",
    githubUrl: "https://github.com/sirophin/SecureRAG",
    description: "Self-hosted RAG AI assistant featuring RBAC (Intern, Employee, HR, Admin roles), prompt injection protection, and audit logging.",
    features: [
      "Role-Based Access Control with 4 permission tiers",
      "Self-hosted document retrieval via ChromaDB",
      "Private local LLM inference with Ollama",
      "Prompt injection defense and audit trail logging"
    ],
    tech: ["Python", "Flask", "Ollama", "ChromaDB", "SQLite", "HTML/JS"]
  },
  {
    id: 3,
    icon: Fingerprint,
    title: "Sentinel-AI",
    subtitle: "Zero-Trust Privacy Protection for LLMs",
    category: "Privacy Proxy",
    categoryColor: "#06b6d4",
    bgImage: "/sirophin-portfolio/sentinel_bg.png",
    bgGradient: "linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(9,13,22,0.95) 100%)",
    githubUrl: "https://github.com/sirophin/Sentinel-AI",
    description: "Real-time privacy proxy browser extension & backend that masks PII locally using Regex + NLP before reaching cloud LLMs.",
    features: [
      "Real-time client-side prompt interception",
      "PII detection via Regex + Microsoft Presidio & spaCy",
      "Automated local data masking before cloud transmission",
      "Seamless response de-masking & privacy audit logs"
    ],
    tech: ["FastAPI", "Microsoft Presidio", "spaCy", "Chrome Extension"]
  },
  {
    id: 4,
    icon: Bug,
    title: "PhishGuard",
    subtitle: "Real-Time Phishing Detection Platform",
    category: "Threat Intel",
    categoryColor: "#f59e0b",
    bgImage: "/sirophin-portfolio/phishguard_bg.png",
    bgGradient: "linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(9,13,22,0.95) 100%)",
    githubUrl: "https://github.com/sirophin/PhishGuard",
    description: "Phishing detection platform analyzing URLs, email headers, and files using VirusTotal & OpenPhish threat intelligence APIs.",
    features: [
      "Multi-source real-time URL & domain threat intelligence",
      "Email header inspection for DKIM/SPF authentication",
      "File payload scanning with VirusTotal & OpenPhish",
      "Browser extension for instant malicious link alerts"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Chrome Extension"]
  },
  {
    id: 5,
    icon: FileSearch,
    title: "ForensiX",
    subtitle: "Automated Steganography Challenge Generator",
    category: "CTF Tool",
    categoryColor: "#10b981",
    bgImage: "/sirophin-portfolio/forensix_bg.png",
    bgGradient: "linear-gradient(135deg, rgba(16,185,129,0.3) 0%, rgba(9,13,22,0.95) 100%)",
    githubUrl: "https://github.com/sirophin/ForensiX",
    description: "Automated CTF challenge generator embedding flags inside media files using ExifTool, Binwalk, and ZSteg.",
    features: [
      "Automated CTF forensic challenge creation framework",
      "EXIF metadata steganography & PNG chunk injection",
      "Multi-layer media payload hiding via Binwalk & ZSteg",
      "Automated flag extraction verification & solution keygens"
    ],
    tech: ["Python", "Flask", "ExifTool", "Binwalk", "ZSteg"]
  }
];

const CERTS = [
  {
    name: "Cisco Cybersecurity Essentials",
    org: "Cisco",
    year: "2024",
    link: "https://drive.google.com/file/d/1IguJxAfo4ZuuHVaEYPSh4qbPQ4X5KUf3/view?usp=drivesdk",
    driveId: "1IguJxAfo4ZuuHVaEYPSh4qbPQ4X5KUf3",
    icon: Lock
  },
  {
    name: "Cisco Intro to Cybersecurity",
    org: "Cisco",
    year: "2024",
    link: "https://drive.google.com/file/d/1tOKdRYyMbdFs9QYCJiB5u45DzmBH5P-f/view?usp=drivesdk",
    driveId: "1tOKdRYyMbdFs9QYCJiB5u45DzmBH5P-f",
    icon: Network
  },
  {
    name: "NPTEL Java Programming",
    org: "NPTEL / IIT",
    year: "2023",
    link: "https://drive.google.com/file/d/1U34qkPvH4GDvM_BjVPFQwgimLTiUAZXD/view?usp=drivesdk",
    driveId: "1U34qkPvH4GDvM_BjVPFQwgimLTiUAZXD",
    icon: Code
  },
  {
    name: "EC-Council SQL Essentials",
    org: "EC-Council",
    year: "2024",
    link: "https://drive.google.com/file/d/1ar1FoMvdz-pYyuQJQGBbv64blcU4ffqP/view?usp=drivesdk",
    driveId: "1ar1FoMvdz-pYyuQJQGBbv64blcU4ffqP",
    icon: Target
  },
  {
    name: "Palo Alto Cloud Security",
    org: "Palo Alto Networks",
    year: "2024",
    link: "https://drive.google.com/file/d/155UCdyp1Nd9syrJtYh3oHR3iuUSpvWWH/view?usp=drivesdk",
    driveId: "155UCdyp1Nd9syrJtYh3oHR3iuUSpvWWH",
    icon: Shield
  },
  {
    name: "GUVI Figma Design",
    org: "GUVI / IIT Madras",
    year: "2024",
    link: "https://drive.google.com/file/d/1MXEdOpeb6_d__PHJ4J63CQPY9aeUrUk1/view?usp=drivesdk",
    driveId: "1MXEdOpeb6_d__PHJ4J63CQPY9aeUrUk1",
    icon: BrainCircuit
  },
  {
    name: "SAWIT.AI Learnthon",
    org: "GUVI / SAWIT.AI",
    year: "2024",
    link: "https://drive.google.com/file/d/1cKdaE5FVPAnMrw_Uk6cCq_N4rPI05rf-/view?usp=drivesdk",
    driveId: "1cKdaE5FVPAnMrw_Uk6cCq_N4rPI05rf-",
    icon: BrainCircuit
  },
  {
    name: "Forage Cybersecurity",
    org: "Forage / Mastercard",
    year: "2024",
    link: "https://drive.google.com/file/d/1lVJ7G3a8rNxeY7d64yQX1ffbnI8gbfJ_/view?usp=drivesdk",
    driveId: "1lVJ7G3a8rNxeY7d64yQX1ffbnI8gbfJ_",
    icon: Award
  },
  {
    name: "TCM Linux Fundamentals",
    org: "TCM Security",
    year: "2024",
    link: "https://drive.google.com/file/d/1SQQIVfkFhbfVxo0WGzdFq3VzoEI6KW-k/view?usp=drivesdk",
    driveId: "1SQQIVfkFhbfVxo0WGzdFq3VzoEI6KW-k",
    icon: Terminal
  },
  {
    name: "Google Foundations of Cybersecurity",
    org: "Coursera / Google",
    year: "2024",
    link: "https://drive.google.com/file/d/1qy9-3ESUDQwP2WZomFmModemYDGtoRoC/view?usp=drivesdk",
    driveId: "1qy9-3ESUDQwP2WZomFmModemYDGtoRoC",
    icon: Globe
  },
  {
    name: "TryHackMe — Top 2%",
    org: "TryHackMe",
    year: "2024",
    link: "https://tryhackme.com/p/sirophintx",
    icon: Trophy
  },
  {
    name: "SoloLearn Prompt Engineering",
    org: "SoloLearn",
    year: "2024",
    link: "https://drive.google.com/file/d/1CjTKzvhsjK3rA9HcEqC6AxrK40f0BCUF/view?usp=drivesdk",
    driveId: "1CjTKzvhsjK3rA9HcEqC6AxrK40f0BCUF",
    icon: Binary
  }
];

const SKILLS = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Burp Suite", icon: "🔍" },
  { name: "Linux", icon: "🐧" },
  { name: "Wireshark", icon: "🦈" },
  { name: "Nessus", icon: "🛡️" },
  { name: "Networking", icon: "🌐" },
  { name: "Bash", icon: "💻" },
  { name: "Docker", icon: "🐳" },
  { name: "OWASP Top 10", icon: "⚠️" },
  { name: "Figma", icon: "🎨" },
  { name: "Canva", icon: "✏️" },
  { name: "Power BI", icon: "📊" },
  { name: "Firebase", icon: "🔥" },
  { name: "Vibe Coding", icon: "🎵" },
  { name: "Prompt Eng.", icon: "🤖" },
  { name: "OSINT", icon: "🔎" },
  { name: "Metasploit", icon: "💀" },
  { name: "CTF Tools", icon: "🏁" },
  { name: "Git", icon: "📦" },
];

const EXP_TIMELINE = [
  {
    role: "Cyber Security Analyst Intern",
    company: "Ozone",
    period: "July 2026",
    badge: "LATEST",
    color: "#10b981",
    points: [
      "Worked as a Security Analyst on multiple real-time client projects.",
      "Identified vulnerabilities across web applications and API endpoints.",
      "Performed web application & API security testing following OWASP Top 10.",
      "Delivered actionable bug reports and mitigation guidance."
    ]
  },
  {
    role: "Cyber Security Intern",
    company: "Cypherdote",
    period: "2024",
    color: "#6366f1",
    points: [
      "Explored CAPS tools and conducted security testing.",
      "Performed functionality testing and delivered structured bug reports.",
      "Authored technical documentation and remediation summaries."
    ]
  },
  {
    role: "Lead Bootcamp Trainer",
    company: "PSNACET",
    period: "2024",
    color: "#06b6d4",
    points: [
      "Instructed a 2-day cybersecurity bootcamp for 60+ students.",
      "Covered Linux security, OSINT, Wireshark & web vulnerability basics.",
      "Created custom CTF challenges and managed competition scoring."
    ]
  },
  {
    role: "CTF Event Coordinator",
    company: "R00T@W4R",
    period: "2024",
    color: "#f59e0b",
    points: [
      "Organized national-level competitive CTF event.",
      "Created web security, crypto, and forensics challenges.",
      "Managed infrastructure, team registrations, and scoreboard."
    ]
  },
  {
    role: "CTF Team Member",
    company: "T3AM KNU11",
    period: "2023–Present",
    color: "#8b5cf6",
    points: [
      "Core competitive member of T3AM KNU11.",
      "Designed CTF challenges for team training and national competitions.",
      "Secured top prize rankings in national CTF events."
    ]
  }
];

function useTypewriter(words, speed = 80, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[wIdx];
    let t;
    if (!del && cIdx < word.length) t = setTimeout(() => setCIdx(c => c + 1), speed);
    else if (!del) t = setTimeout(() => setDel(true), pause);
    else if (del && cIdx > 0) t = setTimeout(() => setCIdx(c => c - 1), speed / 2);
    else { setDel(false); setWIdx(w => (w + 1) % words.length); }
    setDisplay(word.substring(0, cIdx));
    return () => clearTimeout(t);
  }, [cIdx, del, wIdx, words, speed, pause]);
  return display;
}

function useInView(ref, threshold = 0.1) {
  const [v, setV] = useState(true);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [ref, threshold]);
  return v;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["About", "Experience", "Projects", "Skills", "Certifications", "Achievements", "Contact"];
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s ease",
      background: scrolled ? "rgba(9,13,22,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none"
    }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ fontWeight: 800, fontSize: "1.1rem", color: "#f9fafb", textDecoration: "none", letterSpacing: "-0.02em" }}>
          SIROPHIN T X <span style={{ color: "#6366f1" }}>.</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }} className="nav-desktop">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: "0.9rem", fontWeight: 500, color: "#9ca3af", textDecoration: "none" }}
              onMouseEnter={e => e.target.style.color = "#f9fafb"}
              onMouseLeave={e => e.target.style.color = "#9ca3af"}>
              {l}
            </a>
          ))}
          <a href="#contact" style={{ padding: "8px 18px", borderRadius: "8px", background: "#6366f1", color: "#fff", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
            Contact Me
          </a>
        </div>
        <button style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer" }} className="nav-hamburger" onClick={() => setOpen(!open)}>
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div style={{ background: "rgba(9,13,22,0.98)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "18px 24px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{ fontSize: "1rem", fontWeight: 500, color: "#9ca3af", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px", fontWeight: 600 }}>
        {subtitle}
      </p>
      <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#f9fafb", letterSpacing: "-0.02em" }}>
        {title}
      </h2>
    </div>
  );
}

function Hero() {
  const typed = useTypewriter(TITLES);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 150); }, []);

  return (
    <section id="hero" style={{ minHeight: "92vh", display: "flex", alignItems: "center", padding: "100px 24px 40px", maxWidth: "1180px", margin: "0 auto" }}>
      <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "48px", width: "100%", alignItems: "center" }}>
        <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", marginBottom: "20px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981" }} />
            <span style={{ fontSize: "0.82rem", fontFamily: "'JetBrains Mono', monospace", color: "#10b981", fontWeight: 600 }}>Available for VAPT & Security Roles</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "16px", color: "#f9fafb", letterSpacing: "-0.03em" }}>
            SIROPHIN T X<br />
            <span style={{ color: "#6366f1", fontSize: "0.62em", fontWeight: 700, display: "block", marginTop: "8px", letterSpacing: "0em" }}>Web Application & API Penetration Tester</span>
          </h1>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "#10b981", fontWeight: 600, marginBottom: "20px" }}>
            &gt; {typed}<span style={{ animation: "cursor-blink 1s step-end infinite" }}>█</span>
          </p>
          <p style={{ color: "#9ca3af", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "32px", maxWidth: "520px" }}>
            Cybersecurity Enthusiast at PSNACET · Cyber Security Analyst Intern at Ozone (July 2026). Specializing in Web Application & API Security, VAPT, OWASP Top 10, and AI/LLM Security.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "32px" }}>
            <a href="https://drive.google.com/file/d/1Zg7joA0L6xd4QT1PamtcmOU9dGQO9ZcS/view?usp=drivesdk" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 24px", borderRadius: "8px", background: "#6366f1", color: "white", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              <FileText size={17} /> Download Resume
            </a>
            <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 24px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#f9fafb", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#6366f1"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}>
              View Projects
            </a>
          </div>
          <div style={{ display: "flex", gap: "18px", alignItems: "center", flexWrap: "wrap" }}>
            {[
              { l: "GitHub", href: "https://github.com/sirophin" },
              { l: "LinkedIn", href: "https://linkedin.com/in/sirophin-t-x-64665a27a" },
              { l: "TryHackMe", href: "https://tryhackme.com/p/sirophintx" },
              { l: "Email", href: "mailto:sirophintx@gmail.com" },
            ].map(({ l, href }) => (
              <a key={l} href={href} target="_blank" rel="noreferrer" style={{ fontSize: "0.85rem", color: "#9ca3af", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace" }}
                onMouseEnter={e => e.currentTarget.style.color = "#6366f1"}
                onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}>
                {l} ↗
              </a>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {[
            { val: "2", label: "Security Internships" },
            { val: "5", label: "Core Projects" },
            { val: "14+", label: "Certifications" },
            { val: "60+", label: "Students Trained" },
          ].map(({ val, label }) => (
            <div key={label} className="neat-card" style={{ padding: "24px 20px" }}>
              <p style={{ fontSize: "2.2rem", fontWeight: 800, color: "#f9fafb", lineHeight: 1, marginBottom: "8px" }}>{val}</p>
              <p style={{ color: "#9ca3af", fontSize: "0.88rem", lineHeight: 1.45 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef();
  return (
    <section id="about" ref={ref} style={{ padding: "80px 24px", maxWidth: "1180px", margin: "0 auto" }}>
      <SectionHeader title="About Me" subtitle="// background.init()" />
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "32px", alignItems: "start" }}>
        <div className="neat-card" style={{ padding: "36px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f9fafb", marginBottom: "20px" }}>Security Analyst & Web Vulnerability Researcher</h3>
          <p style={{ color: "#9ca3af", lineHeight: 1.8, marginBottom: "16px" }}>
            I'm <span style={{ color: "#f9fafb", fontWeight: 600 }}>Sirophin T X</span>, a Cybersecurity Enthusiast and Web Application & API Penetration Tester who enjoys discovering security flaws and implementing remediation controls.
          </p>
          <p style={{ color: "#9ca3af", lineHeight: 1.8, marginBottom: "16px" }}>
            Recently completed my internship as a <span style={{ color: "#10b981", fontWeight: 600 }}>Cyber Security Analyst Intern at Ozone (July 2026)</span>, conducting vulnerability assessments and web application & API security testing on live client applications.
          </p>
          <p style={{ color: "#9ca3af", lineHeight: 1.8 }}>
            My technical domain covers <span style={{ color: "#6366f1", fontWeight: 600 }}>VAPT</span>, <span style={{ color: "#10b981", fontWeight: 600 }}>AI/LLM Security</span>, and <span style={{ color: "#f9fafb", fontWeight: 600 }}>CTF Challenge Development</span>. I coordinated the national-level CTF <span style={{ color: "#f9fafb", fontWeight: 600 }}>R00T@W4R</span> and trained 60+ students.
          </p>
          <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Ozone Security Intern", "PSNACET", "Cybersecurity Enthusiast", "CGPA 8.6", "Tamil Nadu", "T3AM KNU11"].map(t => (
              <span key={t} style={{ padding: "4px 12px", borderRadius: "6px", fontSize: "0.8rem", fontFamily: "'JetBrains Mono', monospace", color: "#10b981", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            { Icon: Shield, l: "Specialization", v: "Web App & API VAPT" },
            { Icon: BrainCircuit, l: "AI Safety", v: "RBAC & Prompt Injection Defense" },
            { Icon: Trophy, l: "CTF Victories", v: "1st Place Sri Eshwar CTF 2026" },
            { Icon: Users, l: "Leadership", v: "Bootcamp Lead Trainer & CTF Creator" }
          ].map(({ Icon, l, v }) => (
            <div key={l} className="neat-card" style={{ padding: "18px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)", flexShrink: 0 }}>
                <Icon size={20} style={{ color: "#6366f1" }} />
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", color: "#9ca3af", fontFamily: "'JetBrains Mono', monospace", marginBottom: "2px" }}>{l}</p>
                <p style={{ fontSize: "0.98rem", color: "#f9fafb", fontWeight: 600 }}>{v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== PROJECT CARD — FADE PANEL (no 3D flip, works on touch) ========== */
function ProjectFlipCard({ project: p }) {
  const [showBack, setShowBack] = useState(false);
  const Icon = p.icon;

  return (
    <div style={{ height: "400px", position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>

      {/* ── FRONT PANEL ── */}
      <div
        onClick={() => setShowBack(true)}
        style={{
          position: "absolute", inset: 0,
          opacity: showBack ? 0 : 1,
          pointerEvents: showBack ? "none" : "auto",
          transition: "opacity 0.35s ease",
          cursor: "pointer"
        }}
      >
        {/* bg image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${p.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.45)"
        }} />
        {/* gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(9,13,22,0.97) 0%, rgba(9,13,22,0.55) 55%, rgba(9,13,22,0.1) 100%)"
        }} />
        {/* content */}
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", padding: "22px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{ fontSize: "0.72rem", fontFamily: "'JetBrains Mono', monospace", color: p.categoryColor, padding: "3px 10px", borderRadius: "4px", background: `${p.categoryColor}20`, border: `1px solid ${p.categoryColor}50`, fontWeight: 700 }}>
              {p.category}
            </span>
            <div style={{ width: "36px", height: "36px", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <Icon size={17} style={{ color: p.categoryColor }} />
            </div>
          </div>

          <div style={{ marginTop: "auto" }}>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#f9fafb", marginBottom: "5px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{p.title}</h3>
            <p style={{ fontSize: "0.85rem", color: "#9ca3af", lineHeight: 1.5, marginBottom: "14px" }}>{p.subtitle}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
              {p.tech.slice(0, 3).map(t => (
                <span key={t} style={{ fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace", color: "#9ca3af", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", padding: "2px 8px", borderRadius: "4px" }}>{t}</span>
              ))}
              {p.tech.length > 3 && <span style={{ fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace", color: "#6366f1" }}>+{p.tech.length - 3}</span>}
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#6366f1", fontSize: "0.8rem", fontFamily: "'JetBrains Mono', monospace", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", padding: "5px 12px", borderRadius: "6px" }}>
              Tap to explore →
            </div>
          </div>
        </div>
      </div>

      {/* ── BACK PANEL ── */}
      <div
        style={{
          position: "absolute", inset: 0,
          opacity: showBack ? 1 : 0,
          pointerEvents: showBack ? "auto" : "none",
          transition: "opacity 0.35s ease",
          background: "#111827",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        {/* top accent bar */}
        <div style={{ height: "3px", flexShrink: 0, background: `linear-gradient(90deg, ${p.categoryColor}, transparent)` }} />

        {/* scrollable content area */}
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <span style={{ fontSize: "0.68rem", fontFamily: "'JetBrains Mono', monospace", color: p.categoryColor, fontWeight: 700, letterSpacing: "0.05em" }}>{p.category}</span>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f9fafb", lineHeight: 1.3, marginTop: "2px" }}>{p.title}</h3>
            </div>
            <button
              onClick={() => setShowBack(false)}
              style={{ flexShrink: 0, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "7px", color: "#9ca3af", cursor: "pointer", padding: "5px 10px", fontSize: "0.78rem", fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}
            >
              ✕
            </button>
          </div>

          {/* description */}
          <p style={{ fontSize: "0.84rem", color: "#9ca3af", lineHeight: 1.65 }}>{p.description}</p>

          {/* features */}
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
            {p.features.map((feat, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: "#9ca3af", lineHeight: 1.55 }}>
                <span style={{ color: p.categoryColor, flexShrink: 0, marginTop: "1px" }}>✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {p.tech.map(t => (
              <span key={t} style={{ padding: "3px 9px", borderRadius: "4px", fontSize: "0.72rem", fontFamily: "'JetBrains Mono', monospace", color: "#9ca3af", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* GitHub button — fixed at bottom, always clickable */}
        <div style={{ flexShrink: 0, padding: "12px 18px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <a
            href={p.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "11px", borderRadius: "9px", background: "#6366f1", color: "#fff", fontSize: "0.87rem", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            <GithubIcon size={16} color="#fff" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 24px", maxWidth: "1180px", margin: "0 auto" }}>
      <SectionHeader title="Featured Security Projects" subtitle="// projects.load()" />
      <p style={{ color: "#9ca3af", fontSize: "0.85rem", fontFamily: "'JetBrains Mono', monospace", marginBottom: "32px", marginTop: "-24px" }}>
        // Tap any card to see full details & open GitHub
      </p>
      <div className="projects-scroll-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        {PROJECTS.map(p => <ProjectFlipCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}

function Skills() {
  const ref = useRef();
  const row1 = SKILLS.slice(0, 10);
  const row2 = SKILLS.slice(10);

  return (
    <section id="skills" ref={ref} style={{ padding: "80px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px 32px" }}>
        <SectionHeader title="Technical Skills & Tools" subtitle="// skills.map()" />
      </div>
      <div className="marquee-track" style={{ marginBottom: "14px" }}>
        <div className="marquee-inner">
          {[...row1, ...row1, ...row1].map((s, i) => (
            <div key={i} className="neat-card" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", padding: "18px 24px", minWidth: "130px", cursor: "default" }}>
              <span style={{ fontSize: "2rem" }}>{s.icon}</span>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.88rem", fontWeight: 600, color: "#f9fafb", whiteSpace: "nowrap" }}>{s.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-track">
        <div className="marquee-inner marquee-reverse">
          {[...row2, ...row2, ...row2].map((s, i) => (
            <div key={i} className="neat-card" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", padding: "18px 24px", minWidth: "130px", cursor: "default" }}>
              <span style={{ fontSize: "2rem" }}>{s.icon}</span>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.88rem", fontWeight: 600, color: "#6366f1", whiteSpace: "nowrap" }}>{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== SQUARE EXPERIENCE CARDS ========== */
function ExperienceTimeline() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section id="experience" style={{ padding: "80px 24px", maxWidth: "1180px", margin: "0 auto" }}>
      <SectionHeader title="Professional Experience" subtitle="// experience.timeline()" />
      <p style={{ color: "#9ca3af", fontSize: "0.85rem", fontFamily: "'JetBrains Mono', monospace", marginBottom: "32px", marginTop: "-24px" }}>
        // Click a card to expand details
      </p>

      {/* Square cards row */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
        {EXP_TIMELINE.map((item, i) => (
          <div
            key={i}
            onClick={() => setActiveIdx(activeIdx === i ? null : i)}
            style={{
              flex: "1 1 160px",
              maxWidth: "200px",
              aspectRatio: "1 / 1",
              borderRadius: "14px",
              border: `1px solid ${activeIdx === i ? item.color : "rgba(255,255,255,0.08)"}`,
              background: activeIdx === i ? `${item.color}12` : "#111827",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              textAlign: "center",
              transition: "all 0.3s ease",
              boxShadow: activeIdx === i ? `0 0 24px ${item.color}30` : "none",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={e => { if (activeIdx !== i) { e.currentTarget.style.border = `1px solid ${item.color}60`; e.currentTarget.style.background = `${item.color}08`; } }}
            onMouseLeave={e => { if (activeIdx !== i) { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)"; e.currentTarget.style.background = "#111827"; } }}
          >
            {/* Active indicator dot */}
            {activeIdx === i && (
              <div style={{ position: "absolute", top: "10px", right: "10px", width: "8px", height: "8px", borderRadius: "50%", background: item.color }} />
            )}

            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `${item.color}18`, border: `1px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "1.3rem" }}>
                {i === 0 ? "🛡️" : i === 1 ? "🔐" : i === 2 ? "🎓" : i === 3 ? "🚩" : "🏁"}
              </span>
            </div>

            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: item.color, fontWeight: 700, letterSpacing: "0.05em", marginBottom: "4px", textTransform: "uppercase" }}>
              {item.period}
            </p>
            <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#f9fafb", lineHeight: 1.3, marginBottom: "4px" }}>
              {item.company}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#9ca3af", lineHeight: 1.3 }}>
              {item.role.split(" ").slice(0, 2).join(" ")}...
            </p>
          </div>
        ))}
      </div>

      {/* Expanded detail panel */}
      {activeIdx !== null && (
        <div style={{
          borderRadius: "14px",
          border: `1px solid ${EXP_TIMELINE[activeIdx].color}40`,
          background: `${EXP_TIMELINE[activeIdx].color}08`,
          padding: "28px",
          animation: "expandDown 0.3s ease",
          position: "relative"
        }}>
          {/* Accent bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", borderRadius: "14px 14px 0 0", background: `linear-gradient(90deg, ${EXP_TIMELINE[activeIdx].color}, transparent)` }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f9fafb" }}>{EXP_TIMELINE[activeIdx].role}</h3>
                {EXP_TIMELINE[activeIdx].badge && (
                  <span style={{ fontSize: "0.68rem", fontFamily: "'JetBrains Mono', monospace", padding: "2px 8px", borderRadius: "4px", background: `${EXP_TIMELINE[activeIdx].color}20`, color: EXP_TIMELINE[activeIdx].color, border: `1px solid ${EXP_TIMELINE[activeIdx].color}40`, fontWeight: 700 }}>
                    {EXP_TIMELINE[activeIdx].badge}
                  </span>
                )}
              </div>
              <p style={{ color: EXP_TIMELINE[activeIdx].color, fontWeight: 600, fontSize: "0.95rem" }}>{EXP_TIMELINE[activeIdx].company}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "0.85rem", fontFamily: "'JetBrains Mono', monospace", color: "#9ca3af", background: "rgba(255,255,255,0.05)", padding: "4px 12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.08)" }}>
                {EXP_TIMELINE[activeIdx].period}
              </span>
              <button onClick={() => setActiveIdx(null)} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", color: "#9ca3af", cursor: "pointer", padding: "5px 10px", fontSize: "0.8rem" }}>✕</button>
            </div>
          </div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {EXP_TIMELINE[activeIdx].points.map((pt, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.92rem", color: "#9ca3af", lineHeight: 1.6 }}>
                <span style={{ color: EXP_TIMELINE[activeIdx].color, marginTop: "2px", fontWeight: 700 }}>→</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function CertCard({ cert: c }) {
  const [hovered, setHovered] = useState(false);
  const Icon = c.icon;
  const bgImg = c.driveId ? `https://lh3.googleusercontent.com/d/${c.driveId}=w600` : null;

  return (
    <a
      href={c.link || "#"}
      target={c.link ? "_blank" : "_self"}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        position: "relative",
        height: "220px",
        borderRadius: "16px",
        overflow: "hidden",
        textDecoration: "none",
        border: `1px solid ${hovered ? "#6366f1" : "rgba(255,255,255,0.12)"}`,
        transition: "all 0.35s ease",
        boxShadow: hovered ? "0 12px 32px rgba(99,102,241,0.3)" : "0 4px 16px rgba(0,0,0,0.4)"
      }}
    >
      {/* Background Certificate Image */}
      {bgImg ? (
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: hovered ? "brightness(0.7)" : "brightness(0.55)",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "all 0.4s ease"
        }} />
      ) : (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(9,13,22,0.95) 100%)"
        }} />
      )}

      {/* Dark overlay gradient for readable text */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered
          ? "linear-gradient(to top, rgba(9,13,22,0.96) 0%, rgba(9,13,22,0.65) 50%, rgba(9,13,22,0.2) 100%)"
          : "linear-gradient(to top, rgba(9,13,22,0.92) 0%, rgba(9,13,22,0.55) 55%, rgba(9,13,22,0.15) 100%)",
        transition: "background 0.3s ease"
      }} />

      {/* Content over image */}
      <div style={{ position: "relative", zIndex: 2, height: "100%", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.72rem", fontFamily: "'JetBrains Mono', monospace", color: "#6366f1", background: "rgba(9,13,22,0.85)", border: "1px solid rgba(99,102,241,0.4)", padding: "4px 10px", borderRadius: "6px", fontWeight: 700, backdropFilter: "blur(4px)" }}>
            {c.org} · {c.year}
          </span>
          <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "rgba(9,13,22,0.85)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
            <Icon size={17} style={{ color: "#6366f1" }} />
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "1.08rem", fontWeight: 800, color: "#f9fafb", marginBottom: "10px", lineHeight: 1.3, letterSpacing: "-0.01em", textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
            {c.name}
          </h3>
          {c.link && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", fontFamily: "'JetBrains Mono', monospace", color: "#10b981", background: "rgba(9,13,22,0.85)", border: "1px solid rgba(16,185,129,0.4)", padding: "4px 12px", borderRadius: "6px", fontWeight: 600, backdropFilter: "blur(4px)" }}>
              View Certificate ↗
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

function Certifications() {
  const ref = useRef();
  return (
    <section id="certifications" ref={ref} style={{ padding: "80px 24px", maxWidth: "1180px", margin: "0 auto" }}>
      <SectionHeader title="Certifications & Credentials" subtitle="// certs.list()" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
        {CERTS.map((c, i) => (
          <CertCard key={i} cert={c} />
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  const items = [
    { rank: "1st Place", event: "Sri Eshwar CTF 2026", detail: "National Level · Cyber Security", emoji: "🥇" },
    { rank: "Duplicate Report", event: "Bath & Body Works", detail: "Bug Bounty Vulnerability Submission", emoji: "🐛" },
    { rank: "Top 10", event: "Hack Quest National", detail: "Competitive CTF · All India", emoji: "🏆" },
    { rank: "Top 10", event: "Thiran CTF", detail: "Security Challenge · Regional", emoji: "🔥" },
    { rank: "Top 10", event: "H7CTF 2024", detail: "Hacking Tournament · Open", emoji: "⚡" },
    { rank: "Finalist", event: "SIH 2025", detail: "Smart India Hackathon · National", emoji: "🚀" },
  ];
  return (
    <section id="achievements" style={{ padding: "80px 24px", maxWidth: "1180px", margin: "0 auto" }}>
      <SectionHeader title="CTF Victories & Bug Bounty" subtitle="// victories.log()" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
        {items.map((item, i) => (
          <div key={i} className="neat-card" style={{ padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: "2.2rem", marginBottom: "10px" }}>{item.emoji}</div>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f9fafb", marginBottom: "4px" }}>{item.event}</p>
            <p style={{ fontSize: "0.8rem", fontFamily: "'JetBrains Mono', monospace", color: "#9ca3af", marginBottom: "10px" }}>{item.detail}</p>
            <span style={{ fontSize: "0.85rem", fontFamily: "'JetBrains Mono', monospace", color: "#10b981", fontWeight: 700, background: "rgba(16,185,129,0.15)", padding: "3px 10px", borderRadius: "6px" }}>{item.rank}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const socials = [
    { label: "Email", value: "sirophintx@gmail.com", href: "mailto:sirophintx@gmail.com", icon: "📧" },
    { label: "LinkedIn", value: "sirophin-t-x-64665a27a", href: "https://linkedin.com/in/sirophin-t-x-64665a27a", icon: "🔗" },
    { label: "TryHackMe", value: "sirophintx", href: "https://tryhackme.com/p/sirophintx", icon: "🛡️" },
    { label: "GitHub", value: "sirophin", href: "https://github.com/sirophin", icon: "💻" },
  ];
  return (
    <section id="contact" style={{ padding: "80px 24px", maxWidth: "1180px", margin: "0 auto" }}>
      <SectionHeader title="Get In Touch" subtitle="// contact.init()" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ color: "#9ca3af", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Interested in security assessments, VAPT collaborations, or hiring? I'm open to discussing opportunities and project engagements.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {socials.map(({ label, value, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="neat-card" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 18px", textDecoration: "none" }}>
                <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px", fontWeight: 600 }}>{label}</p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.88rem", color: "#f9fafb", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{value}</p>
                </div>
                <span style={{ color: "#9ca3af" }}>→</span>
              </a>
            ))}
            <a href="https://drive.google.com/file/d/1Zg7joA0L6xd4QT1PamtcmOU9dGQO9ZcS/view?usp=drivesdk" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#6366f1", color: "white", borderRadius: "8px", padding: "14px 20px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", marginTop: "8px" }}>
              <FileText size={16} /> Download Resume
            </a>
          </div>
        </div>
        <div className="neat-card" style={{ padding: "32px" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px", fontWeight: 600 }}>// Send Message</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(9,13,22,0.8)", color: "#f9fafb", fontSize: "0.95rem", outline: "none", boxSizing: "border-box" }} />
            <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Your Email" type="email" style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(9,13,22,0.8)", color: "#f9fafb", fontSize: "0.95rem", outline: "none", boxSizing: "border-box" }} />
            <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Your Message" rows={4} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(9,13,22,0.8)", color: "#f9fafb", fontSize: "0.95rem", outline: "none", resize: "none", boxSizing: "border-box" }} />
            <button onClick={() => setSent(true)} style={{ width: "100%", padding: "12px", borderRadius: "8px", background: "#6366f1", color: "white", fontWeight: 600, fontSize: "0.95rem", border: "none", cursor: "pointer" }}>
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
            {sent && <p style={{ textAlign: "center", color: "#10b981", fontSize: "0.85rem", fontFamily: "'JetBrains Mono', monospace" }}>Thank you! I'll get back to you soon.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "40px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
      <p style={{ color: "#f9fafb", fontSize: "1rem", fontWeight: 700, marginBottom: "4px" }}>SIROPHIN T X</p>
      <p style={{ color: "#9ca3af", fontSize: "0.82rem", fontFamily: "'JetBrains Mono', monospace" }}>PSNACET · TAMIL NADU · CYBERSECURITY ENTHUSIAST</p>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#090d16", color: "#9ca3af" }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
