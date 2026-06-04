import './App.css';

const features = [
  {
    title: 'Issue-to-impact boards',
    description:
      'Coordinate protocol fixes, Soroban tooling, and ecosystem experiments with transparent project tracks built for open maintainers.',
  },
  {
    title: 'Contributor launch paths',
    description:
      'Help first-time builders find starter tasks, style guides, and mentorship so every pull request moves Stellar forward.',
  },
  {
    title: 'Shared release notes',
    description:
      'Publish changelogs, testnet milestones, and funding updates in one community-readable timeline for every dependency.',
  },
];

function App() {
  return (
    <main className="landing-page">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Open-source infrastructure for Stellar teams</p>
        <h1 id="hero-title">Forge the next wave of Stellar development together.</h1>
        <p className="hero-copy">
          StellarForge is a mock collaboration home for maintainers, wallet teams,
          smart contract authors, and community contributors building in the Stellar
          open-source ecosystem.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#cta">
            Start contributing
          </a>
          <a className="button button-secondary" href="#features">
            Explore features
          </a>
        </div>
      </section>

      <section className="features" id="features" aria-labelledby="features-title">
        <p className="section-kicker">Built for maintainers</p>
        <h2 id="features-title">Everything contributors need to ship in the open.</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" id="cta" aria-labelledby="cta-title">
        <p className="section-kicker">Ready to collaborate?</p>
        <h2 id="cta-title">Bring your Stellar project into the forge.</h2>
        <p>
          Create a mock workspace, invite contributors, and turn ecosystem ideas
          into reviewed, documented, and release-ready open-source work.
        </p>
        <a className="button button-primary" href="mailto:hello@stellarforge.dev">
          Join the contributor list
        </a>
      </section>
    </main>
  );
}

export default App;
