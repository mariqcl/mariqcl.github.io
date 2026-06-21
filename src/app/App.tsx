import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";

// ─── Dot Grid ──────────────────────────────────────────────────────────────────

function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    let raf: number;

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);

    const GAP = 36;
    const RADIUS = 90;

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const { x: mx, y: my } = mouse.current;

      for (let y = GAP; y < H; y += GAP) {
        for (let x = GAP; x < W; x += GAP) {
          const d = Math.hypot(x - mx, y - my);
          const t = Math.max(0, 1 - d / RADIUS);
          const alpha = 0.07 + t * 0.5;
          const r = 1 + t * 1.2;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(21, 93, 252, ${alpha})`;
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none hidden md:block"
      aria-hidden="true"
    />
  );
}

// ─── Preloader ─────────────────────────────────────────────────────────────────

function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(onDone, 180);
      }
    };
    requestAnimationFrame(frame);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-end justify-between px-6 md:px-28 pb-10"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="font-mono text-[12px] tracking-[0.2em] uppercase text-muted-foreground"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Sistemas, IA e Experiência
      </span>
      <span
        className="font-mono text-[12px] tracking-[0.2em] text-muted-foreground tabular-nums"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {String(count).padStart(3, "0")}
      </span>
    </motion.div>
  );
}

// ─── Shared primitives ─────────────────────────────────────────────────────────

function Rule() {
  return (
    <motion.hr
      className="border-t border-border origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

function SectionLabel({
  children,
  as: Component = "h2",
}: {
  children: React.ReactNode;
  as?: "h2" | "h3" | "p";
}) {
  return (
    <Component
      className="font-mono text-[12px] tracking-[0.22em] uppercase mb-6"
      style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
    >
      {children}
    </Component>
  );
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (innerRef.current) {
        if (target.closest("[data-lightbox]")) {
          innerRef.current.style.transform = "scale(3.5)";
        } else if (target.closest("button") || target.closest("a")) {
          innerRef.current.style.transform = "scale(2.2)";
        } else {
          innerRef.current.style.transform = "scale(1)";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.body.style.cursor = "auto";
      if (document.head.contains(style)) document.head.removeChild(style);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{ willChange: "transform" }}
    >
      <div
        ref={innerRef}
        className="w-3 h-3 rounded-full bg-[#FF5722] transition-transform duration-200 ease-out"
        style={{ transform: "scale(1)" }}
      />
    </div>
  );
}

// ─── Reading progress ──────────────────────────────────────────────────────────

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[200] h-[2px] transition-none"
      style={{ width: `${progress}%`, backgroundColor: "var(--accent)" }}
    />
  );
}

// ─── Navigation ────────────────────────────────────────────────────────────────

function Nav({
  theme,
  toggleTheme,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/98 backdrop-blur-sm" : ""
      }`}
    >
      <div className="px-6 md:px-28 py-4 md:py-8 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-[12px] tracking-[0.2em] uppercase text-accent transition-colors"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Mariana Queiroz
        </button>
        <nav className="flex items-center gap-8 md:gap-12">
          <a
            href="https://www.linkedin.com/in/maariqueiroz/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] tracking-[0.15em] uppercase text-muted-foreground hover:text-accent transition-colors hidden md:block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:mariqcl@gmail.com"
            className="font-mono text-[12px] tracking-[0.15em] uppercase text-muted-foreground hover:text-accent transition-colors hidden md:block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Contato
          </a>
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
}

// ─── Home ──────────────────────────────────────────────────────────────────────

const cases = [
  {
    id: "case-1",
    index: "01",
    title: "Design que move o negócio",
    meta: "Produto Fiscal · 2025",
    theme: "Design movendo indicadores de negócio.",
    hook: "A causa não era falta de funcionalidade — era quebra de confiança.",
    tags: ["DISCOVERY", "FACILITAÇÃO", "MÉTRICAS", "INFLUÊNCIA"],
  },
  {
    id: "case-2",
    index: "02",
    title: "O sistema que escala o time",
    meta: "Sistema · Governança",
    theme: "Construção de capacidade organizacional.",
    hook: "A dor não era só estética. Era custo de mudança e legitimidade.",
    tags: ["DESIGN SYSTEM", "GOVERNANÇA", "IA APLICADA", "DESIGN + ENGENHARIA"],
  },
  {
    id: "case-3",
    index: "03",
    title: "Uma plataforma, em vez de cinco produtos",
    meta: "Arquitetura · 2026",
    theme: "Arquitetura da informação em escala.",
    hook: "Cinco produtos que operavam isoladamente — e o problema era arquitetura, não função.",
    tags: ["ARQUITETURA DA INFORMAÇÃO", "VISÃO SISTÊMICA", "ESTRATÉGIA DE PRODUTO", "GOVERNANÇA"],
  },
];

function HomeView() {
  return (
    <>
    <DotGrid />
    <main id="main">
      {/* Hero ─────────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-between pt-20 pb-0 px-6 md:px-28">
        <div className="flex items-start justify-between pt-9">
          <motion.p
            className="font-mono text-[12px] tracking-[0.22em] uppercase text-muted-foreground"
            style={{ fontFamily: "var(--font-mono)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Senior Product Designer
          </motion.p>
          <motion.p
            className="font-mono text-[12px] tracking-[0.22em] uppercase text-muted-foreground"
            style={{ fontFamily: "var(--font-mono)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            2026
          </motion.p>
        </div>

        <div className="py-9">
          <h1 className="sr-only">Sistemas, IA e Experiência.</h1>
          <div className="overflow-hidden mb-2" aria-hidden="true">
            <motion.div
              className="text-[clamp(2.75rem,7.7vw,7.7rem)] font-medium leading-[0.9] tracking-tighter"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Sistemas,
            </motion.div>
          </div>
          <div className="overflow-hidden" aria-hidden="true">
            <motion.div
              className="text-[clamp(2.75rem,7.7vw,7.7rem)] font-medium leading-[0.9] tracking-tighter"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-light">IA e Experiência</span>
              <span style={{ color: "var(--accent)" }}>.</span>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pt-7 pb-14 flex flex-col md:flex-row md:items-start md:justify-between gap-7">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-md">
              Especialista em arquitetar{" "}
              <strong className="font-semibold" style={{ color: "var(--accent)" }}>
                ecossistemas digitais
              </strong>{" "}
              do discovery ao delivery, conectando pesquisa, estratégia e tecnologia.
            </p>
            <button
              onClick={() =>
                document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-4 text-sm px-8 py-4 transition-colors group shrink-0 text-white w-fit self-start"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Ver projetos
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Cases ────────────────────────────────────────────────────────────── */}
      <section id="cases" className="px-6 md:px-28 pt-20 md:pt-28 pb-7">
        <SectionLabel>Projetos selecionados</SectionLabel>
      </section>

      <div className="flex flex-col">
        {cases.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Rule />
            <a
              href={`./cases/${c.id}/`}
              className="w-full text-left px-6 md:px-28 py-9 group hover:bg-accent/5 transition-colors block"
              aria-label={`Ver projeto: ${c.title}`}
            >
              <div className="grid grid-cols-[3rem_1fr_auto] md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-1">
                  <span
                    className="font-mono text-xs md:text-sm text-muted-foreground group-hover:text-accent transition-colors pt-2 tabular-nums block"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {c.index}
                  </span>
                </div>

                <div className="md:col-span-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 md:gap-12 md:pr-12">
                  <div className="flex-1 max-w-2xl">
                    <h2 className="text-2xl md:text-4xl font-medium leading-tight group-hover:text-accent transition-colors mb-3">
                      {c.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground group-hover:text-accent/80 transition-colors leading-relaxed mb-5 font-normal">
                      {c.hook}
                    </p>
                    <p
                      className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent dark:text-[#9B6B45]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {c.tags.join(" · ")}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-1 flex justify-end pt-2">
                  <ArrowUpRight
                    size={24}
                    className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        <Rule />
      </div>

      {/* About ────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-28 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-14 md:gap-7 items-start">
          <div className="md:col-span-5 md:pr-10">
            <h2 className="text-[3.267rem] md:text-[4.356rem] leading-tight -mt-[0.15em]">
              <span className="font-semibold">Mariana</span>
              <br />
              <span className="font-light">Queiroz</span>
            </h2>
          </div>

          <div className="md:col-span-7 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground font-light max-w-3xl">
            <p className="text-foreground font-light">
              Senior Product Designer · Sistemas, IA e Experiência em Contextos Complexos
            </p>
            <p>
              Mestre em Design (CESAR School) e pós-graduanda em MBA de Produtos Digitais na Era da
              IA (TERA). Professora de Design System para IA na TheStarter e, atualmente, Senior
              Product Designer na SIEG.
            </p>

            <div className="pt-5 space-y-3">
              <p
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground/60"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Minha abordagem: estrutura + experiência
              </p>
              <p>
                A experiência do usuário emerge de uma base sistêmica sólida. Traduzo regras de
                negócio complexas em arquiteturas fluidas — criando uma linguagem comum entre design,
                produto, engenharia e QA para garantir eficiência e escala.
              </p>
            </div>

            <div className="pt-5 space-y-3">
              <p
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground/60"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                O impacto da IA no meu ecossistema
              </p>
              <p>A IA redesenha minha atuação em três pilares:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-5 pt-2">
                {[
                  {
                    label: "Processo",
                    sub: "eficiência",
                    desc: "Explora alternativas, simula fluxos e acelera decisões. Encurta o ciclo entre intenção e código.",
                  },
                  {
                    label: "Governança",
                    sub: "consistência",
                    desc: "Mantém padrões de decisão e estrutura vivos, preservando a integridade do ecossistema conforme o produto evolui.",
                  },
                  {
                    label: "Produto",
                    sub: "experiência",
                    desc: "Integra-se de forma nativa à jornada, simplificando caminhos e interpretando regras complexas. Extensão natural do fluxo, não recurso isolado.",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className="font-mono text-[12px] tracking-widest uppercase mb-2"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                    >
                      {item.label} — {item.sub}
                    </p>
                    <p className="text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact ─────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="min-h-[60vh] flex flex-col border-t border-border px-6 md:px-28 pt-14 pb-9"
      >
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-start justify-between gap-7">
            <div>
              <SectionLabel>Contato</SectionLabel>
              <div className="flex flex-col gap-3 mt-5">
                <a
                  href="mailto:mariqcl@gmail.com"
                  className="text-lg md:text-xl font-light hover:text-accent transition-colors group inline-flex items-center gap-4"
                >
                  mariqcl@gmail.com
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent transition-all"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/maariqueiroz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-light text-muted-foreground hover:text-accent transition-colors group inline-flex items-center gap-3"
                >
                  LinkedIn
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent transition-all"
                  />
                </a>
              </div>
            </div>
            <img
              src="/minha-foto.png"
              alt="Mariana Queiroz"
              className="w-52 h-52 rounded-full object-cover grayscale flex-shrink-0"
            />
          </div>
        </div>

        <div className="pt-10">
          <span
            className="font-mono text-[12px] tracking-widest text-muted-foreground"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2026 Mariana Queiroz
          </span>
        </div>
      </section>
    </main>
    </>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved as "light" | "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-background focus:text-foreground"
        >
          Pular para o conteúdo principal
        </a>
        <CustomCursor />
        <AnimatePresence>
          {!ready && <Preloader key="preloader" onDone={() => setReady(true)} />}
        </AnimatePresence>

        {ready && (
          <>
            <ReadingProgress />
            <Nav theme={theme} toggleTheme={toggleTheme} />
            <HomeView />
          </>
        )}
      </div>
    </MotionConfig>
  );
}
