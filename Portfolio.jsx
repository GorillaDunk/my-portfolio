import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "NexaFlow",
    tag: "SaaS Platform",
    stack: ["React", "Node.js", "PostgreSQL"],
    desc: "Real-time workflow automation platform handling 10k+ events/sec with a drag-and-drop pipeline builder.",
    year: "2024",
  },
  {
    id: 2,
    title: "Orbis",
    tag: "Data Visualization",
    stack: ["Next.js", "D3.js", "Python"],
    desc: "Interactive 3D globe dashboard for geospatial analytics, used by logistics teams across 30 countries.",
    year: "2024",
  },
  {
    id: 3,
    title: "Vaultex",
    tag: "Fintech App",
    stack: ["TypeScript", "Go", "Redis"],
    desc: "End-to-end encrypted personal finance tracker with ML-driven spending predictions and budget alerts.",
    year: "2023",
  },
];

const skills = ["React", "Next.js", "Node.js", "TypeScript", "Go", "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL", "Python", "Kubernetes"];

const C = {
  bg: "#FAFAF8",
  text: "#111",
  muted: "#888",
  border: "#E5E5E2",
  chip: "#F0F0ED",
};

function Nav() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: C.bg, borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 48px", height: 60 }}>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, color: C.text, letterSpacing: "-0.02em" }}>Kim Dev</span>
      <div style={{ display: "flex", gap: 32 }}>
        {["About", "Projects"].map(s => (
          <a key={s} href={`#${s.toLowerCase()}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = C.text}
            onMouseLeave={e => e.target.style.color = C.muted}>
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 48px", paddingTop: 60 }}>
      <div style={{ maxWidth: 640 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted, marginBottom: 20 }}>Available for work · Seoul, KR</p>
        <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "clamp(40px, 6vw, 68px)", color: C.text, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 24px" }}>
          Full-Stack Developer<br />
          <span style={{ color: C.muted, fontWeight: 400 }}>building things that work.</span>
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: C.muted, lineHeight: 1.7, maxWidth: 460, margin: "0 0 36px" }}>
          I build high-performance web applications from database to deployment — with a focus on clean architecture and good user experience.
        </p>
        <a href="#projects"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.bg, background: C.text, textDecoration: "none", padding: "12px 24px", display: "inline-block", borderRadius: 6, transition: "opacity 0.2s" }}
          onMouseEnter={e => e.target.style.opacity = "0.75"}
          onMouseLeave={e => e.target.style.opacity = "1"}>
          View Projects
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: C.bg, padding: "96px 48px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 860, display: "grid", gridTemplateColumns: "180px 1fr", gap: 64 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0, paddingTop: 4 }}>About</p>
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: C.text, lineHeight: 1.75, marginBottom: 16 }}>
            I'm a full-stack developer with 5+ years of experience building scalable web products. I care about both the architecture underneath and the experience on top.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: C.muted, lineHeight: 1.75, marginBottom: 40 }}>
            When I'm not shipping features, I'm exploring new runtimes, contributing to open source, and debugging things that definitely shouldn't be broken.
          </p>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Tech Stack</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
            {skills.map(s => (
              <span key={s} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.text, background: C.chip, padding: "6px 12px", borderRadius: 4 }}>{s}</span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 48 }}>
            {[["5+", "Years exp."], ["30+", "Projects"], ["12+", "Clients"]].map(([n, l]) => (
              <div key={l}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 28, color: C.text, margin: "0 0 4px", letterSpacing: "-0.02em" }}>{n}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted, margin: 0 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="projects" style={{ background: C.bg, padding: "96px 48px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 860, display: "grid", gridTemplateColumns: "180px 1fr", gap: 64 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0, paddingTop: 4 }}>Projects</p>
        <div>
          {projects.map((p, i) => (
            <div key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ padding: "28px 0", borderBottom: `1px solid ${C.border}`, borderTop: i === 0 ? `1px solid ${C.border}` : "none", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 17, color: C.text, margin: 0, letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted, background: C.chip, padding: "3px 8px", borderRadius: 3 }}>{p.tag}</span>
                </div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted }}>{p.year}</span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.65, margin: "0 0 12px" }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 16 }}>
                {p.stack.map(s => (
                  <span key={s} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: hovered === p.id ? C.text : "#bbb", transition: "color 0.2s" }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "28px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted }}>© 2025 Kim Dev</span>
      <div style={{ display: "flex", gap: 24 }}>
        {["GitHub", "LinkedIn", "Email"].map(link => (
          <a key={link} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = C.text}
            onMouseLeave={e => e.target.style.color = C.muted}>
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default function Portfolio() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { background: #FAFAF8; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
