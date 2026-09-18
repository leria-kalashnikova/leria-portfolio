import { useEffect, useRef, useState } from "react";

const projects = [
  { slug: "rho", title: "Rho App", category: "Product", className: "rho-project", image: "assets/rho-card.png" },
  { slug: "loomy", title: "Loomy App", category: "Product", className: "loomy-project", image: "assets/loomy-card.png" },
  { slug: "cozmat", title: "Cozmat", category: "Branding | Web", className: "cozmat-project", image: "assets/cozmat-card.png" },
];

const rhoScreens = [
  {
    name: "Progress Screen",
    screen: "assets/rho-case/progress-screen.png",
    frame: "assets/rho-case/iphone-black.png",
    className: "progress-screen",
  },
  {
    name: "Home Screen",
    screen: "assets/rho-case/home-screen.png",
    frame: "assets/rho-case/iphone-orange.png",
    className: "home-screen",
  },
  {
    name: "Program Screen",
    screen: "assets/rho-case/program-screen.png",
    frame: "assets/rho-case/iphone-black.png",
    className: "program-screen",
  },
];

function ProjectArtwork({ source }) {
  return (
    <div className="project-art" aria-hidden="true">
      <img className="card-export" src={source} alt="" />
    </div>
  );
}

function Project({ project, onOpenRho }) {
  const content = (
    <>
      <ProjectArtwork source={project.image} />
      <div className="project-copy">
        <h2>{project.title}</h2>
        <p>{project.category}</p>
      </div>
    </>
  );

  return (
    <article className={`project ${project.className}`}>
      {project.slug === "rho" ? (
        <a
          className="project-link"
          href="#rho-case"
          data-open-rho
          aria-haspopup="dialog"
          onClick={(event) => {
            event.preventDefault();
            onOpenRho();
          }}
        >
          {content}
        </a>
      ) : content}
    </article>
  );
}

function Detail({ label, children, className = "" }) {
  return (
    <div className={`rho-detail ${className}`.trim()}>
      <p className="rho-detail-label">{label}</p>
      <p className="rho-detail-value">{children}</p>
    </div>
  );
}

function PhoneScreen({ item }) {
  return (
    <figure className={`rho-phone ${item.className}`}>
      <div className="rho-phone-device">
        <img className="rho-phone-content" src={item.screen} alt={`${item.name} interface`} />
        <img className="rho-phone-frame" src={item.frame} alt="" aria-hidden="true" />
      </div>
      <figcaption>{item.name}</figcaption>
    </figure>
  );
}

function RhoCaseStudy({ onClose }) {
  const overlayRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    overlayRef.current?.scrollTo(0, 0);
    closeRef.current?.focus();
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="rho-case-overlay"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rho-case-title"
      onKeyDown={(event) => {
        if (event.key === "Tab") {
          event.preventDefault();
          closeRef.current?.focus();
        }
      }}
    >
      <button className="rho-case-close" type="button" ref={closeRef} onClick={onClose}>
        Close
      </button>

      <article className="rho-case-page" id="rho-case">
        <header className="rho-case-header">
          <img className="rho-case-logo" src="assets/rho-case/rho-logo.png" alt="Rho" />
          <div className="rho-case-title-group">
            <h1 id="rho-case-title">Rho</h1>
            <p>Building the future of trichology for people<br />to get the hair they dream about</p>
          </div>
        </header>

        <section className="rho-case-meta" aria-label="Project details">
          <Detail className="rho-tags" label="Tags">0 → 1/N, UI/UX Design, Art Direction, Prototyping, iOS</Detail>
          <div className="rho-meta-secondary">
            <Detail label="Role">Design Lead</Detail>
            <Detail label="Scope">Art Direction, UI/UX, etc.</Detail>
            <Detail label="Time">2025 — 2026</Detail>
          </div>
        </section>

        <section className="rho-visual" aria-label="AI hair scan concept">
          <img
            className="rho-hero-image"
            src="assets/rho-case/rho-hero.png"
            alt="Rho AI hair scan concept"
          />
        </section>

        <section className="rho-tldr" aria-labelledby="rho-tldr-title">
          <h2 id="rho-tldr-title">TLDR</h2>
          <div className="rho-tldr-copy">
            <p>Rho is a seed-stage, AI-powered trichology startup developing a personalised hair-growth app</p>
            <p>As the sole product designer, I led the product from 0→1—owning the design vision, strategy, research, and execution from early concepts through final UI and interactions</p>
            <div className="rho-owned">
              <p>During my time here, I owned:</p>
              <ul>
                <li>The core product experience, including scalp scanning, product scanning, and an AI assistant</li>
                <li>Product research and strategy, using user interviews, pain-point mapping, and competitive analysis to define priorities</li>
                <li>A design system and iOS interaction language, including motion for scan results and progress milestones</li>
                <li>Activation and retention experiments across onboarding, streaks, reminders, progress photos, and companion-led gamification</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rho-screens" aria-label="Rho application screens">
          {rhoScreens.map((item) => <PhoneScreen key={item.name} item={item} />)}
        </section>
      </article>
    </div>
  );
}

export function App() {
  const [isRhoOpen, setIsRhoOpen] = useState(
    () => new URLSearchParams(window.location.search).get("rho") === "1",
  );

  useEffect(() => {
    if (!isRhoOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isRhoOpen]);

  const closeRho = () => {
    setIsRhoOpen(false);
    requestAnimationFrame(() => document.querySelector("[data-open-rho]")?.focus());
  };

  return (
    <>
      <div className="portfolio-page" id="top" aria-hidden={isRhoOpen || undefined}>
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Leria, back to top">Leria</a>
          <p className="role">Product Designer</p>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section className="hero" aria-labelledby="hero-title">
            <h1 id="hero-title">Creativity<br />focused on clarity</h1>
            <a className="talk-link" href="mailto:leria.kalashnikova@gmail.com">
              <span>Let’s talk</span>
              <img src="assets/arrow-up-right.svg" alt="" />
            </a>
          </section>

          <section className="projects" aria-label="Selected work">
            {projects.map((project) => (
              <Project key={project.title} project={project} onOpenRho={() => setIsRhoOpen(true)} />
            ))}
          </section>

          <section className="about" aria-labelledby="about">
            <h2 id="about">I would love to work with you and your team</h2>
            <p>I’m a Product Designer based in London, interested in ideas that make complex things feel clear, human and useful.</p>
          </section>
        </main>

        <footer id="contact">
          <a href="mailto:leria.kalashnikova@gmail.com">leria.kalashnikova@gmail.com</a>
          <span>LinkedIn</span>
          <span>London</span>
        </footer>
      </div>

      {isRhoOpen && <RhoCaseStudy onClose={closeRho} />}
    </>
  );
}
