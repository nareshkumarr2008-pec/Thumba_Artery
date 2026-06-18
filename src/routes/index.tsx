import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-satellite.jpg";
import sarImg from "@/assets/sar-reveal.jpg";
import graphImg from "@/assets/graph-network.jpg";
// ✅ REMOVED: Broken .asset.json metadata import tracking link

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prahari — AI Road Tracing & Evaluation for Resilient Yatra-paths" },
      { name: "description", content: "Satellite-driven urban mobility resilience. Prahari fuses ISRO optical and SAR imagery, scores every road by real human consequence, and simulates disaster impact in one click." },
      { property: "og:title", content: "Prahari — Satellite Resilience for India's Roads" },
      { property: "og:description", content: "Built by Team Thumba Titans for the ISRO Hackathon. An angiogram for your city's arteries." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: PrahariLanding,
});

/* ----------------------------- Page ----------------------------- */

function PrahariLanding() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Pipeline />
      <SarReveal />
      <Features />
      <Cri />
      <Architecture />
      <Demo />
      <VideoDemo />
      <Impact />
      <Team />
      <Footer />
    </div>
  );
}

/* ----------------------------- Nav ----------------------------- */

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <Logo />
          <div className="leading-tight">
            <div className="font-display font-bold tracking-tight">PRAHARI</div>
            <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em]">THUMBA TITANS</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#pipeline" className="hover:text-foreground transition">Pipeline</a>
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#architecture" className="hover:text-foreground transition">Architecture</a>
          <a href="#demo" className="hover:text-foreground transition">Demo</a>
          <a href="#team" className="hover:text-foreground transition">Team</a>
        </nav>
        <a href="#demo" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary-gradient text-primary-foreground font-medium text-sm shadow-glow-cyan hover:opacity-90 transition">
          Launch Console
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <img
      src="/team-logo.png"
      alt="Thumba Titans — ISRO Hackathon Team Logo"
      className="w-9 h-9 rounded-md object-cover border border-border/50 shadow-glow-cyan"
    />
  );
}

/* ----------------------------- Hero ----------------------------- */

function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-20 min-h-screen flex items-center bg-hero overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(180deg, black 30%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(180deg, black 30%, transparent 95%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full surface-elevated border border-border font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow shadow-glow-amber" />
            ISRO HACKATHON · ROUTE RESILIENCE TRACK
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-[0.95]">
            An <span className="text-gradient">angiogram</span><br />
            for your city's arteries.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Prahari fuses ISRO's optical and radar imagery to see roads through monsoon clouds,
            scores every street by the people it serves, and simulates what breaks when a bridge falls —
            <span className="text-foreground"> before the storm hits, not after.</span>
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary-gradient text-primary-foreground font-semibold shadow-glow-cyan hover:scale-[1.02] transition">
              See the live demo
              <span aria-hidden>→</span>
            </a>
            <a href="#pipeline" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border surface-elevated hover:border-primary transition font-medium">
              How it works
            </a>
          </div>

          <dl className="grid grid-cols-3 gap-6 pt-8 max-w-xl">
            {[
              { k: "3", l: "Modal Fusion" },
              { k: "100%", l: "Cloud Resilient" },
              { k: "1-Click", l: "Disaster Sim" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-bold text-gradient">{s.k}</dt>
                <dd className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase mt-1">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <HeroPanel />
        </div>
      </div>
    </section>
  );
}

function HeroPanel() {
  return (
    <div className="relative surface-elevated border border-border rounded-2xl p-5 shadow-elevated scanline overflow-hidden animate-float">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          LIVE · BHUVAN FEED
        </div>
        <div>AOI · GUWAHATI</div>
      </div>

      <div className="mt-4 rounded-lg overflow-hidden border border-border relative">
        <img src={heroImg} alt="Satellite view of city road network" width={1920} height={1080} className="w-full aspect-[16/10] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 rounded surface-elevated/80 backdrop-blur border border-border">
          26.14°N · 91.73°E
        </div>
        <div className="absolute bottom-3 right-3 font-mono text-[10px] px-2 py-1 rounded bg-accent text-accent-foreground font-semibold">
          CRI: HIGH
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Stat label="Resilience Score" value="71/100" tone="cyan" />
        <Stat label="Critical Edges" value="142" tone="amber" />
        <Stat label="Pop. at Risk" value="2.4M" tone="cyan" />
        <Stat label="Bridges" value="38" tone="amber" />
      </div>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: "cyan" | "amber" }) {
  return (
    <div className="surface rounded-lg p-3 border border-border">
      <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-muted-foreground">{label}</div>
      <div className={`font-display text-xl font-bold mt-1 ${tone === "cyan" ? "text-primary" : "text-accent"}`}>{value}</div>
    </div>
  );
}

/* ---------------------------- Marquee ---------------------------- */

function Marquee() {
  const items = ["ISRO BHUVAN", "RESOURCESAT LISS-IV", "CARTOSAT", "RISAT SAR", "SENTINEL-2", "PM GATI SHAKTI", "NDMA", "SMART CITIES MISSION", "WORLDPOP"];
  return (
    <section className="border-y border-border surface/50 backdrop-blur py-5 overflow-hidden">
      <div className="flex gap-12 font-mono text-xs tracking-[0.25em] text-muted-foreground whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((s, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{s}</span><span className="text-primary">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </section>
  );
}

/* ---------------------------- Problem ---------------------------- */

function Problem() {
  return (
    <Section id="problem" eyebrow="The Problem" title="Roads vanish exactly when cities need them most.">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { h: "Clouds blind the satellite", p: "Monsoon cloud cover and built-up shadow hide up to 60% of a city's road surface in optical imagery — exactly when disaster mapping matters." },
          { h: "OSM is silent where it counts", p: "Crowdsourced maps are sparse in rural and disaster-prone regions, and don't refresh after a flood, landslide, or earthquake disrupts the network." },
          { h: "Graph theory ≠ decisions", p: "A betweenness-centrality number means nothing to a District Collector. They need: how many people get cut off, and which road to fix first." },
        ].map((c) => (
          <div key={c.h} className="surface-elevated rounded-xl p-6 border border-border hover:border-primary/40 transition">
            <div className="font-mono text-[10px] tracking-[0.2em] text-accent">CHALLENGE</div>
            <h3 className="font-display text-xl font-semibold mt-3">{c.h}</h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">{c.p}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------- Pipeline ---------------------------- */

function Pipeline() {
  const layers = [
    {
      tag: "01 · PERCEPTION",
      h: "See through the cloud",
      p: "Tri-modal fusion of optical (LISS-IV, Cartosat, Sentinel-2), SAR (RISAT), and DEM, with a generative in-painting branch trained on a synthetic-occlusion curriculum.",
      stack: ["Swin-Transformer", "D-LinkNet", "Partial Conv", "PyTorch"],
    },
    {
      tag: "02 · COGNITION",
      h: "Score what matters",
      p: "Raster → topological graph in PostGIS. Betweenness, bridges, k-connectivity fused with population, hospital proximity, and Bhuvan hazard layers into a single Criticality & Resilience Index.",
      stack: ["NetworkX", "PostGIS", "WorldPop", "Bhuvan Hazards"],
    },
    {
      tag: "03 · DECISION",
      h: "Answer in plain language",
      p: "Cascading-failure simulation, resilience-per-rupee investment optimizer, and a RAG assistant that lets planners ask: 'Which roads should we reinforce before monsoon?'",
      stack: ["LangChain", "pgvector", "Llama 3.1", "FastAPI"],
    },
  ];
  return (
    <Section id="pipeline" eyebrow="The Pipeline" title="Three layers. One pulse.">
      <div className="grid lg:grid-cols-3 gap-5">
        {layers.map((l, i) => (
          <div key={l.tag} className="relative surface-elevated rounded-2xl p-7 border border-border overflow-hidden group hover:shadow-glow-cyan transition">
            <div className="absolute top-0 right-0 font-display text-[8rem] leading-none font-bold text-primary/5 select-none">
              {String(i + 1)}
            </div>
            <div className="relative">
              <div className="font-mono text-[10px] tracking-[0.25em] text-primary">{l.tag}</div>
              <h3 className="font-display text-2xl font-bold mt-3">{l.h}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{l.p}</p>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {l.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] px-2 py-1 rounded surface border border-border text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------- SAR Reveal --------------------------- */

function SarReveal() {
  return (
    <Section eyebrow="Signature Capability" title="What the cloud hides, the radar reveals.">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-border shadow-elevated">
          <img src={sarImg} alt="Comparison: cloud-occluded optical vs SAR-revealed road network" width={1536} height={864} loading="lazy" className="w-full" />
          <div className="absolute top-0 left-0 right-0 flex">
            <div className="flex-1 font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 bg-background/70 backdrop-blur border-r border-border">
              <span className="text-destructive">●</span> Optical · Occluded
            </div>
            <div className="flex-1 font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 bg-background/70 backdrop-blur text-right">
              SAR + Fusion · Resolved <span className="text-primary">●</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-5">
          <div className="font-mono text-[11px] tracking-[0.25em] text-accent">UNREPLICABLE WITH GOOGLE MAPS</div>
          <h3 className="font-display text-3xl font-bold leading-tight">
            Radar penetrates the very clouds<br />that blind cameras during a disaster.
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We train on synthetically-occluded ground-truth tiles so the model learns road
            continuity priors — curvature, parallelism, junction geometry — instead of memorising clear pixels.
            The result: a continuous road map even when half the city is under monsoon cover.
          </p>
          <ul className="space-y-3">
            {[
              "Optical + SAR + DEM tri-modal encoder",
              "Partial-convolution in-painting for occluded segments",
              "Synthetic-occlusion curriculum learning",
              "Validated against hidden ground truth via IoU / F1",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shadow-glow-cyan" />
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------- Features ---------------------------- */

function Features() {
  const feats = [
    { icon: "👁", h: "See-through-cloud extraction", p: "Live inference on a genuinely cloud-covered tile — watch roads appear where optical sees nothing." },
    { icon: "⚡", h: "One-click disaster simulation", p: "Click a bridge, simulate a monsoon flood. The dashboard recolors the network and prints a human-impact card." },
    { icon: "💬", h: "Natural-language assistant", p: "Ask 'Which roads near Guwahati to prioritize before monsoon?' RAG over your own graph — not a generic chatbot." },
    { icon: "📄", h: "Executive PDF brief", p: "One click → a polished City Resilience Report Card written by an LLM from your structured metrics." },
    { icon: "🌐", h: "3D digital-twin view", p: "Satellite-draped deck.gl globe with a glowing criticality heat-overlay planners can rotate and fly through." },
    { icon: "₹", h: "Resilience-per-rupee optimizer", p: "Drag a budget slider — the recommended upgrade list and total resilience gain update live." },
    { icon: "⏱", h: "Change-detection time-lapse", p: "Two time-separated passes of the same AOI surface road degradation and encroachment automatically." },
    { icon: "📱", h: "Field-verification loop", p: "Ground users confirm or correct occluded segments — feeding the model an active-learning signal." },
  ];
  return (
    <Section id="features" eyebrow="WOW Features" title="Eight moments judges remember.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {feats.map((f) => (
          <div key={f.h} className="surface-elevated border border-border rounded-xl p-5 hover:border-primary/60 hover:-translate-y-1 transition group">
            <div className="w-10 h-10 rounded-lg surface grid place-items-center text-xl border border-border group-hover:bg-primary-gradient transition">{f.icon}</div>
            <h4 className="font-display font-semibold mt-4">{f.h}</h4>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.p}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ CRI ------------------------------ */

function Cri() {
  return (
    <Section eyebrow="The Score" title="Criticality & Resilience Index">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-border shadow-elevated">
          <img src={graphImg} alt="Graph criticality visualization" width={1280} height={896} loading="lazy" className="w-full" />
        </div>
        <div className="lg:col-span-6 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A betweenness number is a CS assignment. CRI is a decision-support score —
            it bakes in <span className="text-foreground">who lives there, what's nearby, and what could go wrong.</span>
          </p>
          <div className="surface-elevated rounded-xl border border-border p-6 font-mono text-sm">
            <div className="text-[10px] tracking-[0.25em] text-primary mb-3">CRI FORMULA</div>
            <pre className="text-foreground whitespace-pre-wrap leading-relaxed">
{`CRI = w₁·betweenness
    + w₂·(1 − redundancy)
    + w₃·population_served
    + w₄·hazard_overlap
    + w₅·POI_proximity`}
            </pre>
          </div>
          <div className="grid grid-cols-5 gap-1 h-3 rounded-full overflow-hidden">
            {["#1d4ed8","#06b6d4","#facc15","#f97316","#ef4444"].map((c) => (
              <div key={c} style={{ background: c }} />
            ))}
          </div>
          <div className="flex justify-between font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            <span>Resilient</span><span>Watch</span><span>Critical</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------- Architecture ------------------------- */

function Architecture() {
  const rows = [
    { layer: "SOURCES", items: ["Bhuvan / NRSC", "ResourceSat LISS-IV", "RISAT SAR", "Sentinel-2 / OSM", "WorldPop / Census"] },
    { layer: "PERCEPTION", items: ["Tri-modal Fusion", "Occlusion-Aware Seg.", "Generative In-paint", "Raster → Vector"] },
    { layer: "COGNITION", items: ["Graph Construction", "Graph-Theory Metrics", "Consequence Weighting", "CRI Score"] },
    { layer: "DECISION", items: ["Failure Simulator", "Investment Optimizer", "RAG + LLM Assistant"] },
    { layer: "APPLICATION", items: ["FastAPI Services", "React + MapLibre", "deck.gl Digital Twin", "Field Verification App"] },
  ];
  return (
    <Section id="architecture" eyebrow="System Architecture" title="A defensible, end-to-end pipeline.">
      <div className="surface-elevated border border-border rounded-2xl p-6 md:p-8 overflow-x-auto shadow-elevated">
        <div className="space-y-3 min-w-[700px]">
          {rows.map((r, idx) => (
            <div key={r.layer} className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-3 font-mono text-[10px] tracking-[0.25em] text-primary">{r.layer}</div>
              <div className="col-span-9 flex flex-wrap gap-2">
                {r.items.map((it) => (
                  <div key={it} className="px-4 py-2 rounded-lg surface border border-border text-sm hover:border-primary transition">{it}</div>
                ))}
              </div>
              {idx < rows.length - 1 && <div className="col-span-12 h-px bg-border my-1" />}
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6 font-mono tracking-wider">
        SOURCES → PERCEPTION → COGNITION → DECISION → APPLICATION · feedback loop via field verification
      </p>
    </Section>
  );
}

/* ------------------------------ Demo ------------------------------ */

function Demo() {
  const steps = [
    { n: "01", h: "Extract", p: "Pull the latest satellite pass for the AOI, run tri-modal fusion." },
    { n: "02", h: "Score", p: "Build the graph in PostGIS, compute CRI per edge, render the heatmap." },
    { n: "03", h: "Simulate", p: "Click a bridge, watch the cascading failure and human-impact card render live." },
    { n: "04", h: "Decide", p: "Drag the budget slider for resilience-per-rupee. Generate the executive brief." },
  ];
  return (
    <Section id="demo" eyebrow="Story Mode" title="A four-step walkthrough.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s) => (
          <div key={s.n} className="relative surface-elevated border border-border rounded-xl p-6 hover:border-primary transition">
            <div className="font-mono text-xs text-accent tracking-[0.25em]">STEP {s.n}</div>
            <h4 className="font-display text-2xl font-bold mt-2">{s.h}</h4>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{s.p}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 surface-elevated border border-border rounded-2xl p-8 md:p-10 text-center shadow-elevated">
        <div className="font-mono text-[11px] tracking-[0.3em] text-primary">ASK THE ASSISTANT</div>
        <p className="font-display text-2xl md:text-3xl mt-4 max-w-3xl mx-auto leading-snug">
          "Which 5 roads near Guwahati should we reinforce before monsoon, given a ₹50 Cr budget?"
        </p>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
          Prahari answers with ranked, cited recommendations — backed by real computed CRI, hazard overlap,
          and population-served data. Not a generic chatbot.
        </p>
      </div>
    </Section>
  );
}

/* ---------------------------- Video Demo ---------------------------- */

function VideoDemo() {
  return (
    <Section id="video" eyebrow="Watch the Demo" title="See Prahari in action.">
      <div className="surface-elevated border border-border rounded-2xl overflow-hidden shadow-elevated">
        <video
          controls
          className="w-full aspect-video"
          poster={heroImg}
          preload="metadata"
        >
          <source src="/prahari-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6 font-mono tracking-wider">
        A 20-second walkthrough of the complete Prahari pipeline — from satellite to decision.
      </p>
    </Section>
  );
}

/* ----------------------------- Impact ----------------------------- */

function Impact() {
  return (
    <Section eyebrow="Deployment Path" title="A resilience layer for India.">
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { h: "PM Gati Shakti", p: "Plug into the National Master Plan as the resilience-scoring layer for infrastructure already being tracked." },
          { h: "NDMA & SDMAs", p: "Disaster cells get cascading-failure forecasts and prioritized reinforcement targets before a cyclone or monsoon hits." },
          { h: "Smart Cities Mission", p: "SPVs and State PWDs get a resilience-per-rupee optimizer wired to their existing GIS and budget cycles." },
        ].map((c) => (
          <div key={c.h} className="relative surface-elevated rounded-xl p-7 border border-border overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
            <h4 className="font-display text-xl font-semibold relative">{c.h}</h4>
            <p className="text-muted-foreground mt-3 relative leading-relaxed">{c.p}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ Team ------------------------------ */

function Team() {
  return (
    <Section id="team" eyebrow="The Team" title="Thumba Titans.">
      <div className="surface-elevated border border-border rounded-2xl p-8 md:p-12 text-center shadow-elevated relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-50" />
        <div className="relative max-w-3xl mx-auto space-y-6">
          <img
            src="/team-logo.png"
            alt="Thumba Titans Team Logo"
            className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-primary/40 shadow-glow-cyan"
          />
          <p className="font-mono text-[11px] tracking-[0.3em] text-primary">FROM THUMBA · WHERE INDIA'S JOURNEY TO SPACE BEGAN</p>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
            In 1963, ISRO launched its first rocket from a fishing village in Kerala.
            Six decades later, we're using that same satellite heritage to give Indian cities
            <span className="text-gradient font-semibold"> foresight before the storm hits</span> — not after.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-4 font-mono text-xs tracking-[0.2em] text-muted-foreground">
            <span className="px-3 py-1.5 rounded-full surface border border-border">PERCEPTION</span>
            <span className="px-3 py-1.5 rounded-full surface border border-border">COGNITION</span>
            <span className="px-3 py-1.5 rounded-full surface border border-border">DECISION</span>
            <span className="px-3 py-1.5 rounded-full surface border border-border">EXPERIENCE</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------- Footer ----------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border surface/50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <div className="font-display font-bold">PRAHARI</div>
            <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em]">© 2026 THUMBA TITANS</div>
          </div>
        </div>
        <div className="text-center font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
          Shehar ki Naadiyan · Pulse · Triage · Resilience
        </div>
        <div className="md:text-right text-xs text-muted-foreground">
          Data: ISRO Bhuvan · NRSC · Copernicus · OpenStreetMap · WorldPop
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------- Section ---------------------------- */

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-[11px] tracking-[0.3em] text-primary mb-3">{eyebrow}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
/* ----------------------------End of Section ---------------------------- */
