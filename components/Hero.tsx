export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <svg className="hero-loop-bg" viewBox="0 0 860 400" aria-hidden="true" focusable="false">
          <path id="lp1" d="M30,200 a400,150 0 1,0 800,0 a400,150 0 1,0 -800,0" />
          <path id="lp2" d="M140,200 a290,102 0 1,0 580,0 a290,102 0 1,0 -580,0" />
          <circle className="loop-dot" r="3.5"><animateMotion dur="26s" repeatCount="indefinite"><mpath href="#lp1" /></animateMotion></circle>
          <circle className="loop-dot" r="2.5"><animateMotion dur="19s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#lp2" /></animateMotion></circle>
        </svg>
        <div className="container">
          <a className="pill rv" href="#pov">
            <span className="dot-check" aria-hidden="true"><svg viewBox="0 0 12 12" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6.5 4.6 9 10 3.5" /></svg></span>
            Digital Growth Engineering <span className="pill-soft">— web · search · conversion</span> <span className="pill-arrow">→</span>
          </a>
          <h1 className="rv rv-d1">Business outcomes, <span className="accent glow-word">built intelligently.</span></h1>
          <p className="lede rv rv-d2">Websites, applications, and search visibility strategically designed to produce real revenue and growth. Not just more digital stuff.</p>
          <div className="hero-ctas rv rv-d2">
            <a href="#contact" className="btn btn-primary">Start a Conversation
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" /></svg>
            </a>
            <a href="#pov" className="btn btn-secondary">See How We Think</a>
          </div>
          <div className="checks rv rv-d3" aria-label="How we work, in short">
            <span className="c"><i><svg viewBox="0 0 12 12" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6.5 4.6 9 10 3.5" /></svg></i>Strategy-first</span>
            <span className="sep" aria-hidden="true"></span>
            <span className="c"><i><svg viewBox="0 0 12 12" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6.5 4.6 9 10 3.5" /></svg></i>Senior-led</span>
            <span className="sep" aria-hidden="true"></span>
            <span className="c"><i><svg viewBox="0 0 12 12" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6.5 4.6 9 10 3.5" /></svg></i>Measured end-to-end</span>
          </div>
        </div>
      </section>
    </>
  );
}
