const projects = [
  { title: "Rho App", category: "Product", className: "rho-project", image: "assets/rho-card.png" },
  { title: "Loomy App", category: "Product", className: "loomy-project", image: "assets/loomy-card.png" },
  { title: "Cozmat", category: "Branding | Web", className: "cozmat-project", image: "assets/cozmat-card.png" },
];

function ProjectArtwork({ source }) {
  return (
    <div className="project-art" aria-hidden="true">
      <img className="card-export" src={source} alt="" />
    </div>
  );
}

function Project({ project }) {
  return (
    <article className={`project ${project.className}`}>
      <ProjectArtwork source={project.image} />
      <div className="project-copy">
        <h2>{project.title}</h2>
        <p>{project.category}</p>
      </div>
    </article>
  );
}

export function App() {
  return (
    <div className="portfolio-page" id="top">
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
            <span>Let’s create</span>
            <img src="assets/arrow-up-right.svg" alt="" />
          </a>
        </section>

        <section className="projects" aria-label="Selected work">
          {projects.map((project) => <Project key={project.title} project={project} />)}
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
  );
}
