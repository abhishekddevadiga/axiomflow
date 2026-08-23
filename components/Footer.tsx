export default function Footer() {
  return (
    <>
      <footer className="footer">
        <span className="footer-ghost" aria-hidden="true">AXIOMFLOW</span>
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#top" className="brand" aria-label="AxiomFlow home">AxiomFlow<span className="dot">.</span></a>
              <p className="footer-tag">Engineered revenue growth. Strategy, technology and search working as one system.</p>
              <p className="footer-addr">Mangalore · Bangalore, India</p>
            </div>
            <div>
              <h4>Company</h4>
              <nav className="footer-links" aria-label="Footer — company">
                <a href="#why">About</a>
                <a href="#capabilities">What We Do</a>
                <a href="#approach">How We Work</a>
                <a href="#work">Results</a>
              </nav>
            </div>
            <div>
              <h4>Connect</h4>
              <nav className="footer-links" aria-label="Footer — connect">
                <a href="#insights">Growth Insights</a>
                <a href="#contact">Start a Conversation</a>
                <a href="mailto:admin@axiomflow.com">admin@axiomflow.com</a>{/* EDIT: confirm email */}
              </nav>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 AxiomFlow. All rights reserved.</span>
            <span className="legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></span>
          </div>
        </div>
      </footer>
    </>
  );
}
