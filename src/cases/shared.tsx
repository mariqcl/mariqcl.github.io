import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ArrowLeft, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";

// ─── Primitives ────────────────────────────────────────────────────────────────

export function Rule() {
  return <hr className="border-t border-border" />;
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block font-mono text-[12px] tracking-widest uppercase text-muted-foreground border border-border px-4 py-2"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </span>
  );
}

export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.15em] uppercase text-muted-foreground hover:text-accent transition-colors group"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <ArrowLeft size={11} className="group-hover:-translate-x-0.5 group-hover:text-accent transition-all" />
      Voltar
    </button>
  );
}

// ─── CustomCursor ──────────────────────────────────────────────────────────────

export function CustomCursor() {
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

// ─── Nav ───────────────────────────────────────────────────────────────────────

export function Nav({
  onHome,
  theme,
  toggleTheme,
}: {
  onHome: () => void;
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
      <div className="px-16 md:px-28 py-4 md:py-8 flex items-center justify-between">
        <button
          onClick={onHome}
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

// ─── Case Layout ───────────────────────────────────────────────────────────────

export function CaseLayout({
  children,
  onBack,
  nextIndex,
  nextLabel,
  onNext,
}: {
  children: React.ReactNode;
  onBack: () => void;
  nextIndex?: string;
  nextLabel?: string;
  onNext?: () => void;
}) {
  return (
    <main id="main" className="pt-20">
      <div className="px-16 md:px-28 pb-8">
        <BackButton onClick={onBack} />
      </div>

      {children}

      {onNext && nextLabel && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border"
        >
          <button
            onClick={onNext}
            className="w-full text-left px-16 md:px-28 py-[3.2rem] md:py-[4.8rem] group transition-colors block"
            aria-label={`Próximo projeto: ${nextLabel}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="font-mono text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Próximo projeto
                </p>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <span className="text-3xl md:text-6xl font-medium tracking-tight group-hover:text-accent transition-colors">
                    {nextLabel}
                  </span>
                </div>
              </div>
              <ArrowRight
                size={36}
                className="text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all shrink-0"
              />
            </div>
          </button>
        </motion.div>
      )}
    </main>
  );
}

// ─── Case Hero ─────────────────────────────────────────────────────────────────

export function CaseHero({
  hook,
  overview,
  tags,
}: {
  hook: React.ReactNode;
  overview: { label: string; value: string }[];
  tags: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="px-16 md:px-28 mb-[2.4rem] md:mb-[3.2rem]">
        <h1 className="text-[clamp(2.64rem,6.6vw,6rem)] font-light leading-[1.05] tracking-tight max-w-6xl">
          {hook}
        </h1>
      </div>

      <p
        className="px-16 md:px-28 font-mono text-[11px] tracking-[0.15em] uppercase text-accent dark:text-[#9B6B45]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {tags.join(" · ")}
      </p>

      <div className="mt-[4.8rem] border-t border-border">
        <dl className="px-16 md:px-28 py-[1.6rem] grid grid-cols-2 md:grid-cols-4 gap-[1.6rem] mb-0">
          {overview.map(({ label, value }) => (
            <div key={label}>
              <dt
                className="font-mono text-[12px] tracking-[0.2em] uppercase mb-2"
                style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
              >
                {label}
              </dt>
              <dd className="text-sm font-medium leading-snug m-0">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.div>
  );
}

// ─── Case Phase ────────────────────────────────────────────────────────────────

export function CasePhase({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative pt-[3.2rem] md:pt-[6.4rem] pb-[2.4rem] border-t border-border mt-[2.4rem] md:mt-16"
    >
      <div
        className="absolute top-0 right-8 md:right-14 -translate-y-[45%] text-[15vw] md:text-[12vw] font-medium text-foreground/[0.02] leading-none select-none z-[-1] tracking-tighter"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {number}
      </div>

      <div className="grid md:grid-cols-12 gap-[1.6rem] md:gap-[3.2rem] px-16 md:px-28 relative z-10">
        <div className="md:col-span-4 flex flex-col gap-5">
          <h2 className="text-3xl md:text-[2.5rem] font-medium leading-[1.1] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="md:col-span-8 flex flex-col gap-8 md:pl-0">{children}</div>
      </div>
    </motion.div>
  );
}

// ─── Case Block ────────────────────────────────────────────────────────────────

export function CaseBlock({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      {label && (
        <h3
          className="font-mono text-[12px] tracking-[0.2em] uppercase text-foreground/80 mb-2"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {label}
        </h3>
      )}
      <div className="text-sm md:text-base leading-relaxed text-muted-foreground font-light space-y-5">
        {children}
      </div>
    </div>
  );
}

// ─── Case Highlight ────────────────────────────────────────────────────────────

export function CaseHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-5 md:py-8 my-3">
      <p className="text-2xl md:text-3xl font-light leading-snug tracking-tight text-foreground/90">
        {children}
      </p>
    </div>
  );
}

// ─── Case Artifact ─────────────────────────────────────────────────────────────

export function CaseArtifact({
  label,
  caption,
  image,
  aspect = "video",
  featured = false,
}: {
  label: string;
  caption?: string;
  image?: string;
  aspect?: "video" | "square" | "tall";
  featured?: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const cls =
    aspect === "square"
      ? "aspect-square"
      : aspect === "tall"
      ? "aspect-[4/5]"
      : "aspect-video";

  return (
    <>
      <figure className="my-0 group flex flex-col gap-3">
        <span
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {label}
        </span>
        <div
          className={`${cls} border border-[#e0e0e0] flex items-center justify-center overflow-hidden relative`}
          onClick={() => image && setOpen(true)}
          {...(image ? { "data-lightbox": true } : {})}
        >
          {image ? (
            <ImageWithFallback
              src={image}
              alt={label}
              className={`w-full h-full object-cover transition-all duration-700 ${
                featured ? "" : "grayscale group-hover:grayscale-0"
              }`}
            />
          ) : (
            <p
              className="font-mono text-[12px] text-muted-foreground text-center px-10 leading-loose max-w-xs"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {label}
            </p>
          )}
        </div>
        {caption && (
          <figcaption className="text-sm text-muted-foreground font-light leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 md:p-16 cursor-zoom-out"
              onClick={() => setOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
                className="absolute top-6 right-6 p-2 text-muted-foreground hover:[color:var(--accent)] transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </svg>
              </button>
              <motion.img
                src={image}
                alt={label}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              {caption && (
                <p className="mt-6 text-sm text-muted-foreground font-light max-w-xl text-center leading-relaxed">
                  {caption}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

// ─── Before/After Pair ─────────────────────────────────────────────────────────

export function BeforeAfterPair({
  category,
  before,
  after,
}: {
  category: string;
  before: { image: string; caption: string };
  after: { image: string; caption: string };
}) {
  return (
    <div className="pt-[1.6rem] flex flex-col gap-[2.4rem]">
      <span
        className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {category}
      </span>

      {/* DEPOIS — entregável em destaque, colorido, full width */}
      <CaseArtifact label="DEPOIS" caption={after.caption} image={after.image} featured />

      {/* ANTES — referência compacta com caption ao lado */}
      <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8 pt-3">
        <div className="md:w-[42%] shrink-0">
          <CaseArtifact label="ANTES" image={before.image} />
        </div>
        <p className="text-sm text-muted-foreground font-light leading-relaxed md:pt-7">
          {before.caption}
        </p>
      </div>
    </div>
  );
}

// ─── Artifact Grid ─────────────────────────────────────────────────────────────

export function ArtifactGrid({
  children,
  cols = 2,
}: {
  children: React.ReactNode;
  cols?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-5 md:gap-[1.6rem] my-3 ${
        cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {children}
    </div>
  );
}

// ─── Case Page wrapper (theme + cursor) ────────────────────────────────────────

export function useCaseTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved as "light" | "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")) };
}
