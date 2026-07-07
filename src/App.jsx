import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BarChart3, ExternalLink, FolderKanban, Github, Home, Mail, Radar, Rocket } from "lucide-react";

const titles = ["AI ARCHITECT", "SQA ANALYST", "DATA ANALYST", "DIGITAL CREATOR"];

const nav = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "Projects", icon: FolderKanban, href: "#projects" },
  { label: "Analytics", icon: BarChart3, href: "#analytics" },
  { label: "Contact", icon: Mail, href: "#contact" }
];

const repositoryProjects = [
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

export default function App() {
  return (
    <main className="min-h-screen bg-[#050506] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 bg-digital-grid bg-[length:48px_48px] opacity-35" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-dot-matrix bg-[length:18px_18px] opacity-20" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,240,255,0.18),transparent_25%),radial-gradient(circle_at_82%_16%,rgba(255,0,127,0.14),transparent_26%),linear-gradient(180deg,rgba(5,5,6,0.1),#050506_78%)]" />

      <Sidebar />

      <div className="relative z-10 px-4 pb-24 pt-6 sm:px-6 lg:ml-24 lg:px-8 lg:pb-10">
        <div className="mx-auto grid max-w-7xl gap-5">
          <Hero />
          <StatsStrip />
          <ProjectGrid />
          <ContactPanel />
        </div>
      </div>
    </main>
  );
}

function Sidebar() {
  return (
    <>
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-24 border-r border-cyan/15 bg-black/70 backdrop-blur-xl lg:block">
        <nav className="flex h-full flex-col items-center justify-center gap-5">
          <div className="absolute top-8 grid h-10 w-10 place-items-center border border-cyan/50 text-cyan shadow-cyan">
            <Radar size={19} />
          </div>
          {nav.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="group grid h-12 w-12 place-items-center border border-slate-800 bg-slate-950/70 text-slate-500 transition duration-200 hover:border-cyan/70 hover:text-cyan hover:shadow-cyan"
            >
              <Icon size={20} strokeWidth={1.7} />
            </a>
          ))}
          <div className="absolute bottom-8 h-28 w-px bg-gradient-to-b from-transparent via-cyan/70 to-transparent" />
        </nav>
      </aside>

      <nav className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-2 border border-cyan/20 bg-black/85 p-2 shadow-cyan backdrop-blur-xl lg:hidden">
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
        Live System
      </div>
      <div className="flex min-h-[500px] flex-col justify-between">
        <div>
          <p className="section-label">Senior Engineer / Portfolio Dashboard</p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mt-16 max-w-6xl font-display text-4xl font-black uppercase leading-[0.9] tracking-[0.08em] text-white sm:text-6xl md:text-7xl xl:text-8xl"
          >
            THARINDU
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(0,240,255,0.85)]">ABEYSINGHE</span>
          </motion.h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_340px] lg:items-end">
          <div>
            <p className="section-label">Decryption Loop</p>
            <ScrambleText />
          </div>
          <div className="border border-cyan/20 bg-cyan/5 p-4">
            <p className="font-display text-[0.66rem] uppercase tracking-[0.28em] text-slate-500">Core Stack</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">AI systems, SQA workflows, analytics dashboards, React interfaces, and structured digital products.</p>
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
    ["Accuracy Signal", "94.2%", "text-cyan"],
    ["Loss Rate", "0.012", "text-magenta"],
    ["Release Health", "99.4%", "text-cyan"],
    ["Active Modules", "07", "text-cyan"]
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

function ProjectGrid() {
  return (
    <section id="projects" className="grid gap-5 xl:grid-cols-12">
      <TiltCard className="xl:col-span-7">
        <div className="flex min-h-[430px] flex-col gap-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="section-label">AI Diagnostic Dashboard</p>
              <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-[0.16em] text-white">NeuroAurum</h2>
              <a
                href="https://github.com/Tharindu336/NeuroAurum"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.22em] text-cyan transition hover:text-white"
              >
                View Repository
                <ExternalLink size={14} />
              </a>
            </div>
            <div className="grid gap-2 font-display text-xs uppercase tracking-[0.18em]">
              <Metric label="Accuracy" value="94.2%" />
              <Metric label="Loss Rate" value="0.012" danger />
            </div>
          </div>
          <SurfaceGraph />
        </div>
      </TiltCard>

      <TiltCard className="xl:col-span-5">
        <div className="relative min-h-[430px] overflow-hidden">
          <p className="section-label">Expo / React Native</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-[0.15em] text-white">PatientPrep SL</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">Dark clinical mobile interface with patient readiness states, checklist flow, and Expo-style app delivery.</p>
          <a
            href="https://github.com/Tharindu336/PatientPrepSL"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.22em] text-cyan transition hover:text-white"
          >
            View Repository
            <ExternalLink size={14} />
          </a>
          <PhoneMockup />
        </div>
      </TiltCard>

      <div className="xl:col-span-12">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="section-label">GitHub Repository Matrix</p>
            <h2 className="mt-2 font-display text-2xl font-black uppercase tracking-[0.16em] text-white">Public Projects</h2>
          </div>
          <a
            href="https://github.com/Tharindu336"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-cyan/30 px-4 py-2 font-display text-xs uppercase tracking-[0.22em] text-cyan transition hover:bg-cyan hover:text-black hover:shadow-cyan"
          >
            <Github size={15} />
            GitHub Profile
          </a>
        </div>
      </div>

      {repositoryProjects.map((project) => (
        <TiltCard key={project.title} className="xl:col-span-6">
          <div className="flex min-h-56 flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="section-label">{project.kicker}</p>
                <span className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-slate-500">Pushed {project.pushed}</span>
              </div>
              <h3 className="mt-4 break-words font-display text-xl font-bold uppercase tracking-[0.11em] text-white sm:text-2xl">{project.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">{project.body}</p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 font-display text-xs uppercase tracking-[0.24em] text-cyan transition hover:text-white"
            >
              View Repository
              <ExternalLink size={14} />
            </a>
          </div>
        </TiltCard>
      ))}
    </section>
  );
}

function ContactPanel() {
  return (
    <section id="contact" className="cyber-panel flex flex-col gap-5 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="section-label">Deploy Target / Contact</p>
        <h2 className="mt-3 font-display text-2xl font-black uppercase tracking-[0.16em] text-white">Ready for Vercel Free Hosting</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
          Static Vite build configured for Vercel. Connect the GitHub repo, keep the default Vite preset, and deploy from the main branch.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/Tharindu336"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-cyan/30 px-4 py-3 font-display text-xs uppercase tracking-[0.22em] text-cyan transition hover:bg-cyan hover:text-black hover:shadow-cyan"
        >
          <Github size={16} />
          GitHub
        </a>
        <span className="inline-flex items-center gap-2 border border-magenta/30 px-4 py-3 font-display text-xs uppercase tracking-[0.22em] text-magenta shadow-magenta">
          <Rocket size={16} />
          Deploy Ready
        </span>
      </div>
    </section>
  );
}

function TiltCard({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 22 });

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
    <motion.article
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.012 }}
      className={`cyber-panel relative overflow-hidden p-5 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,240,255,0.12),transparent_38%,rgba(255,0,127,0.09))]" />
      <div className="relative z-10" style={{ transform: "translateZ(24px)" }}>
        {children}
      </div>
    </motion.article>
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
            <motion.polyline
              key={points}
              points={points}
              fill="none"
              stroke={index % 3 === 0 ? "#ff007f" : "#00f0ff"}
              strokeOpacity={index % 3 === 0 ? 0.55 : 0.78}
              strokeWidth="1.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: index * 0.04 }}
            />
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
