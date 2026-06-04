const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Issues', href: '#issues' },
  { label: 'Resources', href: '#resources' },
];

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="#home" aria-label="StellarForge home">
        StellarForge
      </a>

      <nav className="navbar__nav" aria-label="Primary navigation">
        {navigationLinks.map((link) => (
          <a className="navbar__link" href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </nav>

      <style>{`
        .navbar {
          align-items: center;
          background: #0f172a;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          width: 100%;
        }

        .navbar__brand {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-decoration: none;
        }

        .navbar__nav {
          align-items: center;
          display: flex;
          gap: 1rem;
        }

        .navbar__link {
          border-radius: 999px;
          color: #cbd5e1;
          font-weight: 600;
          padding: 0.5rem 0.75rem;
          text-decoration: none;
          transition: background-color 160ms ease, color 160ms ease;
        }

        .navbar__link:hover,
        .navbar__link:focus-visible {
          background: #1e293b;
          color: #ffffff;
          outline: none;
        }

        @media (max-width: 640px) {
          .navbar {
            align-items: flex-start;
            flex-direction: column;
            gap: 1rem;
          }

          .navbar__nav {
            align-items: stretch;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
          }

          .navbar__link {
            background: #111827;
            display: block;
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
