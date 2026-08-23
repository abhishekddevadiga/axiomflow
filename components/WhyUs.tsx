export default function WhyUs() {
  return (
    <>
      <section className="section" id="why">
        <div className="container">
          <div className="compare rv" role="img" aria-label="A typical agency goes brief, deliverable, done. AxiomFlow goes business goal, diagnose, strategize, build, measure, improve — and loops back">
            <div className="cmp-row cmp-them">
              <span className="cmp-label">Typical agency</span>
              <span className="cmp-pill">Brief</span><span className="cmp-arrow">&rarr;</span>
              <span className="cmp-pill">Deliverable</span><span className="cmp-arrow">&rarr;</span>
              <span className="cmp-pill">Done</span><span className="cmp-end">.</span>
            </div>
            <div className="cmp-row cmp-us">
              <span className="cmp-label">AxiomFlow</span>
              <span className="cmp-pill">Business goal</span><span className="cmp-arrow">&rarr;</span>
              <span className="cmp-pill">Diagnose</span><span className="cmp-arrow">&rarr;</span>
              <span className="cmp-pill">Strategize</span><span className="cmp-arrow">&rarr;</span>
              <span className="cmp-pill">Build</span><span className="cmp-arrow">&rarr;</span>
              <span className="cmp-pill">Measure</span><span className="cmp-arrow">&rarr;</span>
              <span className="cmp-pill">Improve</span>
              <span className="cmp-loop" title="and the loop repeats"><svg viewBox="0 0 16 16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 1.5V4h-2.5" /></svg></span>
            </div>
          </div>
          <div className="why">
            <div className="why-key rv">
              <span className="eyebrow">Why Us</span>
              <h2 className="h2" style={{ fontSize: 'clamp(30px,3.8vw,44px)' }}>A partner in growth, not just an agency.</h2>
              <p className="lede" style={{ fontSize: '17px' }}>Five commitments we'd want from anyone we hired ourselves.</p>
            </div>
            <div>
              <div className="why-list">
                <div className="why-row rv"><i><svg viewBox="0 0 20 20" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2.5v15M2.5 10h15" /><circle cx="10" cy="10" r="7.5" /></svg></i><div><div className="t">We're operators, not just an agency.</div><p>We run profitable sites and applications ourselves. The strategies we bring to you are the same ones we stake our own success on.</p></div></div>
                <div className="why-row rv"><i><svg viewBox="0 0 20 20" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 16.5V12M8 16.5V8M13 16.5V10.5M18 16.5V4" /></svg></i><div><div className="t">We start with your P&amp;L, not your brief.</div><p>If a shiny new site won't move your bottom line, we'll tell you to invest elsewhere. We only build what's good for your business.</p></div></div>
                <div className="why-row rv"><i><svg viewBox="0 0 20 20" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="7" r="3.5" /><path d="M3.5 17c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" /></svg></i><div><div className="t">Senior expertise from day one.</div><p>No bait-and-switch, no juniors learning on your dime. The people you meet in your first call are the people doing your work.</p></div></div>
                <div className="why-row rv"><i><svg viewBox="0 0 20 20" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3h12v4H4zM4 9.5h7v7H4zM13.5 9.5H16v7h-2.5z" /></svg></i><div><div className="t">A strategy-first approach.</div><p>We don't start building until we have a clear, data-backed plan tied to your business goals. You get a complete growth blueprint before we write a line of code.</p></div></div>
                <div className="why-row rv"><i><svg viewBox="0 0 20 20" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2.5 12 7l4.8.4-3.6 3.2 1.1 4.7L10 12.8l-4.3 2.5 1.1-4.7L3.2 7.4 8 7l2-4.5Z" /></svg></i><div><div className="t">Agility meets reliability.</div><p>The speed and adaptability of a startup with the process maturity of an enterprise firm. The best of both worlds for your business.</p></div></div>
              </div>
              <div className="founder rv">
                <b aria-hidden="true">S</b>
                <div>
                  <p className="q ph">"Quote emphasizing personal commitment to client success through the lens of business outcomes and measurable growth."</p>
                  <p className="who"><strong>Swarup</strong> — Founder, AxiomFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
