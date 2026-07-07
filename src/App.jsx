import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BarChart3, ExternalLink, FolderKanban, Github, Home, Linkedin, Mail, Moon, Radar, Sun } from "lucide-react";

const titles = ["EMERGING DATA SCIENTIST", "SQA ANALYST", "DATA ANALYST", "DIGITAL CREATOR"];

const nav = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "Projects", icon: FolderKanban, href: "#projects" },
  { label: "Analytics", icon: BarChart3, href: "#analytics" },
  { label: "Contact", icon: Mail, href: "#links" }
];

const repositoryProjects = [
  {
    title: "NeuroAurum",
    kicker: "Python / AI",
    body: "Intelligent real estate price predictor with diagnostic model metrics and data-driven prediction workflow.",
    url: "https://github.com/Tharindu336/NeuroAurum",
    pushed: "2026-05-20"
  },
  {
    title: "PatientPrepSL",
    kicker: "TypeScript / Mobile",
    body: "AI-powered patient consulting mobile app guide built around Expo and React Native workflows.",
    url: "https://github.com/Tharindu336/PatientPrepSL",
    pushed: "2026-07-01"
  },
  {
    title: "health-diagnosis",
    kicker: "Jupyter Notebook",
    body: "Notebook-based health diagnosis exploration for data analysis and model experimentation.",
    url: "https://github.com/Tharindu336/health-diagnosis",
    pushed: "2026-04-11"
  },
  {
    title: "customer-churn-probability-prediction",
    kicker: "Jupyter Notebook",
    body: "Machine learning regression model for predicting customer churn probability.",
    url: "https://github.com/Tharindu336/customer-churn-probability-prediction",
    pushed: "2026-03-01"
  },
  {
    title: "Industrial-Application-development-project---ITE5622",
    kicker: "Industrial App Dev",
    body: "Code sharing environment for an industrial application development project.",
    url: "https://github.com/Tharindu336/Industrial-Application-development-project---ITE5622",
    pushed: "2026-03-05"
  },
  {
    title: "Slot-machine-for-Casino",
    kicker: "Python / Tkinter",
    body: "Functional Python slot machine with balance tracking and randomized spin logic.",
    url: "https://github.com/Tharindu336/Slot-machine-for-Casino",
    pushed: "2026-01-30"
  },
  {
    title: "Photoclone",
    kicker: "Spring Boot Backend",
    body: "Backend sample for an online image browsing application, currently under development.",
    url: "https://github.com/Tharindu336/Photoclone",
    pushed: "2026-01-29"
  },
  {
    title: "Sri-Lankan-Travel-buddy",
    kicker: "Prolog / AI",
    body: "AI-powered Sri Lankan travel recommendation system built with Prolog.",
    url: "https://github.com/Tharindu336/Sri-Lankan-Travel-buddy",
    pushed: "2025-09-25"
  },
  {
    title: "Minesweeper",
    kicker: "Knowledge Representation",
    body: "Knowledge programming and representation project based around Minesweeper logic.",
    url: "https://github.com/Tharindu336/Minesweeper",
    pushed: "2025-05-29"
  },
  {
    title: "SAAssignment",
    kicker: "JavaScript",
    body: "Code files and report package for a software architecture assignment.",
    url: "https://github.com/Tharindu336/SAAssignment",
    pushed: "2024-11-10"
  }
];

const stackGroups = [
  {
    title: "Core Stack",
    items: ["Python", "Java", "React", "JavaScript", "TypeScript"]
  },
  {
    title: "AI / Data",
    items: ["Jupyter Notebook", "Machine Learning", "Regression Models", "Data Analysis", "Prolog"]
  },
  {
    title: "App / Backend",
    items: ["React Native", "Expo", "Spring Boot", "Tkinter", "REST Backend"]
  },
  {
    title: "Frontend Tools",
    items: ["Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Responsive UI"]
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "Vercel", "VS Code", "npm"]
  }
];

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main className={`${isDark ? "theme-dark bg-[#050506] text-slate-100" : "theme-light bg-slate-100 text-slate-950"} min-h-screen transition-colors duration-300`}>
      <div className="pointer-events-none fixed inset-0 z-0 bg-digital-grid bg-[length:48px_48px] opacity-30" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-dot-matrix bg-[length:18px_18px] opacity-15" />
      <div
        className={`pointer-events-none fixed inset-0 z-0 ${
          isDark
            ? "bg-[radial-gradient(circle_at_20%_10%,rgba(0,240,255,0.18),transparent_25%),radial-gradient(circle_at_82%_16%,rgba(255,0,127,0.14),transparent_26%),linear-gradient(180deg,rgba(5,5,6,0.1),#050506_78%)]"
            : "bg-[radial-gradient(circle_at_20%_10%,rgba(0,240,255,0.22),transparent_26%),radial-gradient(circle_at_82%_16%,rgba(255,0,127,0.12),transparent_26%),linear-gradient(180deg,rgba(248,250,252,0.08),#f1f5f9_82%)]"
        }`}
      />

      <Sidebar isDark={isDark} />

      <div className="relative z-10 px-4 pb-24 pt-6 sm:px-6 lg:ml-24 lg:px-8 lg:pb-10">
        <div className="mx-auto grid max-w-7xl gap-5">
          <TopBar isDark={isDark} setIsDark={setIsDark} />
          <Hero />
          <StatsStrip />
          <StackTools />
          <ProjectGrid />
        </div>
      </div>
    </main>
  );
}

function TopBar({ isDark, setIsDark }) {
  return (
    <header id="links" className="cyber-panel flex flex-wrap items-center justify-between gap-3 p-4">
      <div>
        <p className="section-label">Profile Links</p>
        <p className="mt-1 text-sm text-slate-400">Open University of Sri Lanka undergraduate portfolio</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <a href="https://github.com/Tharindu336" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid h-11 w-11 place-items-center border border-cyan/30 text-cyan transition hover:bg-cyan hover:text-black hover:shadow-cyan">
          <Github size={21} />
        </a>
        <a href="https://www.linkedin.com/in/tharindu-abeysinghe-226a912b3/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid h-11 w-11 place-items-center border border-cyan/30 text-cyan transition hover:bg-cyan hover:text-black hover:shadow-cyan">
          <Linkedin size={21} />
        </a>
        <button type="button" onClick={() => setIsDark((value) => !value)} className="inline-flex h-11 items-center gap-2 border border-magenta/35 px-4 font-display text-xs uppercase tracking-[0.22em] text-magenta transition hover:bg-magenta hover:text-white hover:shadow-magenta">
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          {isDark ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

function Sidebar({ isDark }) {
  return (
    <>
      <aside className={`fixed left-0 top-0 z-30 hidden h-screen w-24 border-r border-cyan/15 backdrop-blur-xl lg:block ${isDark ? "bg-black/70" : "bg-white/70"}`}>
        <nav className="flex h-full flex-col items-center justify-center gap-5">
          <div className="absolute top-8 grid h-10 w-10 place-items-center border border-cyan/50 text-cyan shadow-cyan">
            <Radar size={19} />
          </div>
          {nav.map(({ label, icon: Icon, href }) => (
            <a key={label} href={href} aria-label={label} className="group grid h-12 w-12 place-items-center border border-slate-800 bg-slate-950/70 text-slate-500 transition duration-200 hover:border-cyan/70 hover:text-cyan hover:shadow-cyan">
              <Icon size={20} strokeWidth={1.7} />
            </a>
          ))}
          <div className="absolute bottom-8 h-28 w-px bg-gradient-to-b from-transparent via-cyan/70 to-transparent" />
        </nav>
      </aside>

      <nav className={`fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-2 border border-cyan/20 p-2 shadow-cyan backdrop-blur-xl lg:hidden ${isDark ? "bg-black/85" : "bg-white/85"}`}>
        {nav.map(({ label, icon: Icon, href }) => (
          <a key={label} href={href} aria-label={label} className="grid h-11 w-12 place-items-center text-slate-400 hover:text-cyan">
            <Icon size={19} strokeWidth={1.7} />
          </a>
        ))}
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="cyber-panel relative min-h-[560px] overflow-hidden px-5 py-7 sm:px-8 lg:px-10">
      <div className="absolute right-6 top-6 border border-magenta/40 px-3 py-1 font-display text-[0.66rem] uppercase tracking-[0.28em] text-magenta shadow-magenta">
        Student Profile
      </div>
      <div className="flex min-h-[500px] flex-col justify-between">
        <div>
          <p className="section-label">Undergraduate / Open University of Sri Lanka</p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="mt-16 max-w-6xl font-display text-4xl font-black uppercase leading-[0.9] tracking-[0.08em] text-white sm:text-6xl md:text-7xl xl:text-8xl">
            THARINDU
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(0,240,255,0.85)]">ABEYSINGHE</span>
          </motion.h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="section-label">Decryption Loop</p>
            <ScrambleText />
          </div>
          <div className="border border-cyan/20 bg-cyan/5 p-4">
            <p className="font-display text-[0.66rem] uppercase tracking-[0.28em] text-slate-500">Education</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Bachelor of Science Honors in Information Technology, focused on emerging data science, quality analysis, AI systems, Python, Java, React, and product interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrambleText() {
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%";
  const [wordIndex, setWordIndex] = useState(0);
  const [step, setStep] = useState(0);
  const target = titles[wordIndex];

  const text = useMemo(() => {
    return target
      .split("")
      .map((char, index) => {
        if (char === " ") return " ";
        if (index < step) return char;
        return glyphs[(index + step + wordIndex * 5) % glyphs.length];
      })
      .join("");
  }, [glyphs, step, target, wordIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((current) => {
        if (current > target.length + 8) {
          setWordIndex((index) => (index + 1) % titles.length);
          return 0;
        }
        return current + 1;
      });
    }, 80);
    return () => window.clearInterval(timer);
  }, [target.length]);

  return <p className="mt-3 min-h-10 font-display text-2xl font-bold uppercase tracking-[0.24em] text-cyan sm:text-3xl">{text}</p>;
}

function StatsStrip() {
  const stats = [
    ["Academic Path", "BSc IT", "text-cyan"],
    ["Data Science", "Emerging", "text-magenta"],
    ["GitHub Projects", "10+", "text-cyan"],
    ["Core Stack", "Python Java React", "text-cyan"]
  ];

  return (
    <section id="analytics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map(([label, value, color]) => (
        <div key={label} className="cyber-panel p-5">
          <p className="font-display text-[0.66rem] uppercase tracking-[0.28em] text-slate-500">{label}</p>
          <p className={`mt-2 font-display text-3xl font-black ${color}`}>{value}</p>
        </div>
      ))}
    </section>
  );
}

function StackTools() {
  return (
    <section className="cyber-panel p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="section-label">Stack & Toolchain</p>
          <h2 className="mt-2 font-display text-2xl font-black uppercase tracking-[0.16em] text-white">Technologies Used</h2>
        </div>
        <span className="border border-magenta/30 px-3 py-1 font-display text-[0.66rem] uppercase tracking-[0.24em] text-magenta shadow-magenta">
          Python / Java / React
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {stackGroups.map((group) => (
          <div key={group.title} className="border border-cyan/15 bg-black/30 p-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.26em] text-cyan">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="border border-slate-700/70 bg-slate-950/50 px-2.5 py-1.5 font-display text-[0.66rem] uppercase tracking-[0.16em] text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectGrid() {
  return (
    <section id="projects" className="grid gap-5 xl:grid-cols-12">
      <TiltCard href="https://github.com/Tharindu336/NeuroAurum" className="xl:col-span-7">
        <div className="flex min-h-[430px] flex-col gap-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="section-label">AI Diagnostic Dashboard</p>
              <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-[0.16em] text-white">NeuroAurum</h2>
              <RepoHint />
            </div>
            <div className="grid gap-2 font-display text-xs uppercase tracking-[0.18em]">
              <Metric label="Accuracy" value="94.2%" />
              <Metric label="Loss Rate" value="0.012" danger />
            </div>
          </div>
          <SurfaceGraph />
        </div>
      </TiltCard>

      <TiltCard href="https://github.com/Tharindu336/PatientPrepSL" className="xl:col-span-5">
        <div className="relative min-h-[430px] overflow-hidden">
          <p className="section-label">Expo / React Native</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-[0.15em] text-white">PatientPrep SL</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">Dark clinical mobile interface with patient readiness states, checklist flow, and Expo-style app delivery.</p>
          <RepoHint />
          <PhoneMockup />
        </div>
      </TiltCard>

      <div className="xl:col-span-12">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="section-label">GitHub Repository Matrix</p>
            <h2 className="mt-2 font-display text-2xl font-black uppercase tracking-[0.16em] text-white">Public Projects</h2>
          </div>
          <a href="https://github.com/Tharindu336" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-cyan/30 px-4 py-2 font-display text-xs uppercase tracking-[0.22em] text-cyan transition hover:bg-cyan hover:text-black hover:shadow-cyan">
            <Github size={15} />
            GitHub Profile
          </a>
        </div>
      </div>

      {repositoryProjects.map((project) => (
        <TiltCard key={project.title} href={project.url} className="xl:col-span-6">
          <div className="flex min-h-56 flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="section-label">{project.kicker}</p>
                <span className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-slate-500">Pushed {project.pushed}</span>
              </div>
              <h3 className="mt-4 break-words font-display text-xl font-bold uppercase tracking-[0.11em] text-white sm:text-2xl">{project.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">{project.body}</p>
            </div>
            <RepoHint />
          </div>
        </TiltCard>
      ))}
    </section>
  );
}

function RepoHint() {
  return (
    <span className="mt-4 inline-flex w-fit items-center gap-2 font-display text-xs uppercase tracking-[0.22em] text-cyan">
      View Repository
      <ExternalLink size={14} />
    </span>
  );
}

function TiltCard({ children, className = "", href }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 22 });
  const MotionTag = href ? motion.a : motion.article;

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <MotionTag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.012 }}
      className={`cyber-panel relative block overflow-hidden p-5 no-underline ${href ? "cursor-pointer" : ""} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,240,255,0.12),transparent_38%,rgba(255,0,127,0.09))]" />
      <div className="relative z-10" style={{ transform: "translateZ(24px)" }}>
        {children}
      </div>
    </MotionTag>
  );
}

function Metric({ label, value, danger = false }) {
  return (
    <div className="min-w-36 border border-slate-700 bg-black/45 px-3 py-2">
      <span className="block text-slate-500">{label}</span>
      <span className={danger ? "text-magenta" : "text-cyan"}>{value}</span>
    </div>
  );
}

function SurfaceGraph() {
  const lines = Array.from({ length: 11 }, (_, row) => {
    const points = Array.from({ length: 12 }, (_, col) => {
      const x = col * 34;
      const y = row * 22 + Math.sin(col * 0.8 + row * 0.4) * 18;
      return `${x},${y}`;
    }).join(" ");
    return points;
  });

  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden border border-cyan/20 bg-black/50">
      <div className="absolute inset-0 bg-digital-grid bg-[length:34px_34px] opacity-25" />
      <svg viewBox="-30 -35 430 300" className="relative h-full min-h-64 w-full drop-shadow-[0_0_18px_rgba(0,240,255,0.55)]">
        <g transform="skewX(-20) scale(1,0.82) translate(12,70)">
          {lines.map((points, index) => (
            <motion.polyline key={points} points={points} fill="none" stroke={index % 3 === 0 ? "#ff007f" : "#00f0ff"} strokeOpacity={index % 3 === 0 ? 0.55 : 0.78} strokeWidth="1.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1, delay: index * 0.04 }} />
          ))}
        </g>
      </svg>
      <div className="absolute bottom-4 left-4 font-display text-[0.62rem] uppercase tracking-[0.24em] text-slate-500">
        <p>Epoch 218 / Training Stream</p>
        <p className="mt-1 text-cyan">Model convergence stable</p>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="absolute -bottom-8 right-3 h-[330px] w-[190px] rounded-[2rem] border border-cyan/40 bg-slate-950 p-3 shadow-cyan [transform:perspective(900px)_rotateY(-18deg)_rotateZ(-7deg)] sm:right-9 sm:h-[380px] sm:w-[220px]">
      <div className="h-full rounded-[1.45rem] border border-slate-700 bg-[#07090d] p-4">
        <div className="mx-auto mb-5 h-1.5 w-14 rounded-full bg-slate-700" />
        <div className="flex items-center justify-between">
          <span className="font-display text-[0.58rem] uppercase tracking-[0.22em] text-cyan">PatientPrep</span>
          <span className="h-2 w-2 rounded-full bg-magenta shadow-magenta" />
        </div>
        <div className="mt-5 rounded-xl border border-cyan/20 bg-cyan/5 p-3">
          <p className="font-display text-[0.58rem] uppercase tracking-[0.22em] text-slate-500">Next Step</p>
          <p className="mt-2 text-sm font-semibold text-white">Pre-op checklist</p>
          <div className="mt-4 h-1.5 rounded-full bg-slate-800">
            <div className="h-full w-3/4 rounded-full bg-cyan shadow-cyan" />
          </div>
        </div>
        <div className="mt-4 grid gap-2">
          {["Vitals", "Medication", "Arrival"].map((item, index) => (
            <div key={item} className="flex items-center justify-between border border-slate-800 bg-black/35 px-3 py-2">
              <span className="text-xs text-slate-300">{item}</span>
              <span className={index === 1 ? "text-magenta" : "text-cyan"}>0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
