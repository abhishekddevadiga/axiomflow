export default function LogoMarquee() {
  return (
    <>
      <section className="logos">
        <div className="container rv">
          <span className="logos-eyebrow mono">Trusted by brands across healthcare &middot; education &middot; e-commerce &middot; enterprise</span>
          {/* EDIT: swap each .logo-word for <img src="…" alt="Client name" /> when real assets are ready.
               Keep BOTH sets identical — the second is the seamless loop's tail. */}
          <div className="logo-strip">
            <div className="logo-track">
              <div className="logo-set" aria-label="Selected brands">
                <div className="logo-item"><span className="logo-word">Blush With Me</span></div>
                <div className="logo-item"><span className="logo-word">Alleviate</span></div>
                <div className="logo-item"><span className="logo-word">Conrad Consultancies</span></div>
                <div className="logo-item"><span className="logo-word">Quantum Greentech</span></div>
                <div className="logo-item"><span className="logo-word">SiteSync</span></div>
                <div className="logo-item"><span className="logo-word">22feet</span></div>
              </div>
              <div className="logo-set" aria-hidden="true">
                <div className="logo-item"><span className="logo-word">Blush With Me</span></div>
                <div className="logo-item"><span className="logo-word">Alleviate</span></div>
                <div className="logo-item"><span className="logo-word">Conrad Consultancies</span></div>
                <div className="logo-item"><span className="logo-word">Quantum Greentech</span></div>
                <div className="logo-item"><span className="logo-word">SiteSync</span></div>
                <div className="logo-item"><span className="logo-word">22feet</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
