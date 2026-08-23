export default function Nav() {
  return (
    <>
      <header className="nav" id="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand" aria-label="AxiomFlow home">
            AxiomFlow<span className="dot">.</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#pov">How We Think</a>
            <a href="#capabilities">What We Do</a>
            <a href="#work">Results</a>
            <a href="#industries">Who We Help</a>
            <a href="#insights">Insights</a>
          </nav>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary btn-outside">Start a Conversation
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" /></svg>
            </a>
            <button className="nav-burger" id="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
          </div>
        </div>
        <div className="progress" aria-hidden="true"><i id="progressBar"></i></div>
      </header>
      <div className="mobile-menu" id="mobileMenu">
        <a href="#pov">How We Think</a>
        <a href="#capabilities">What We Do</a>
        <a href="#content">Content</a>
        <a href="#work">Results</a>
        <a href="#industries">Who We Help</a>
        <a href="#insights">Insights</a>
        <a href="#contact" className="btn btn-primary">Start a Conversation</a>
      </div>
    </>
  );
}
