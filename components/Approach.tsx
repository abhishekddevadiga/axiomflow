export default function Approach() {
  return (
    <>
      <section className="section on-tint hairline-top" id="approach">
        <div className="container">
          <div className="section-head rv">
            <span className="eyebrow">How We Work</span>
            <h2 className="h2">From strategy to scale to <span className="accent glow-word">sustainable growth.</span></h2>
          </div>
          <div className="steps">
            <article className="step rv">
              <div className="step-top"><span className="step-num">01</span><span className="mono">Listen</span></div>
              <h3>Understand.</h3>
              <p>Your business, your market, your customer, and your goals. If we don't get your business, we can't help it grow.</p>
            </article>
            <article className="step rv rv-d1">
              <div className="step-top"><span className="step-num">02</span><span className="mono">Audit</span></div>
              <h3>Diagnose.</h3>
              <p>A data-led analysis of your entire funnel today: site, search, content, conversion. Actionable insights even if you don't hire us.</p>
              <div className="vig vig-funnel" aria-hidden="true">
                <div className="f"><i style={{ width: '96%' }}></i></div>
                <div className="f"><i style={{ width: '58%' }}></i></div>
                <div className="f"><i style={{ width: '24%' }}></i></div>
                <div className="lbl"><span>Visits</span><span>Leads</span><span>Revenue</span></div>
              </div>
            </article>
            <article className="step rv rv-d2">
              <div className="step-top"><span className="step-num">03</span><span className="mono">Plan</span></div>
              <h3>Strategize.</h3>
              <p>Clarity on which levers will make the biggest impact, and in what order. A complete growth plan backed by numbers.</p>
              <div className="vig vig-file" aria-hidden="true">
                <i><svg viewBox="0 0 16 16" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v8m0 0 3-3M8 10 5 7" /><path d="M2.5 13.5h11" /></svg></i>
                <span><span className="fn">growth-plan.pdf</span><span className="fs">→ prioritised levers</span></span>
                <span className="ok">✓</span>
              </div>
            </article>
            <article className="step rv">
              <div className="step-top"><span className="step-num hot">04</span><span className="mono">Ship</span></div>
              <h3>Build.</h3>
              <p>Websites, applications, content, and campaigns painstakingly engineered to perform their role in the growth engine.</p>
            </article>
            <article className="step rv rv-d1">
              <div className="step-top"><span className="step-num">05</span><span className="mono">Track</span></div>
              <h3>Measure.</h3>
              <p>End-to-end analytics and dashboards that tie every digital metric to a business outcome. Ground truth you can act on.</p>
              <div className="vig" aria-hidden="true">
                <svg className="vig-chart" viewBox="0 0 220 56" preserveAspectRatio="none">
                  <defs><linearGradient id="chartfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#EE6234" stopOpacity=".22" /><stop offset="1" stopColor="#EE6234" stopOpacity="0" /></linearGradient></defs>
                  <polygon className="area" points="4,46 46,40 88,42 130,28 172,22 216,8 216,56 4,56" />
                  <polyline points="4,46 46,40 88,42 130,28 172,22 216,8" />
                </svg>
              </div>
            </article>
            <article className="step rv rv-d2">
              <div className="step-top"><span className="step-num">06</span><span className="mono">Loop</span></div>
              <h3>Optimize.</h3>
              <p>Continuous, iterative improvement based on real performance data. Because the digital landscape doesn't sit still.</p>
            </article>
          </div>
          <div className="work-cta rv">
            <a href="#contact" className="btn btn-secondary">Ready to kick off Step 1? Let's talk</a>
          </div>
        </div>
      </section>
    </>
  );
}
