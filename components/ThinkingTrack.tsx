export default function ThinkingTrack() {
  return (
    <>
      <section className="section" id="pov">
        <div className="container">
          <div className="section-head center rv">
            <span className="eyebrow">How We Think</span>
            <h2 className="h2">Growth demands a <span className="accent glow-word">complete loop,</span><br />not disconnected pieces.</h2>
          </div>
          <div className="neq rv" style={{ marginBottom: 'clamp(44px,6vw,64px)' }}>
            <span><em>Website</em> <b>&ne;</b> Growth strategy</span>
            <span><em>Traffic</em> <b>&ne;</b> Revenue</span>
            <span><em>Content</em> <b>&ne;</b> Authority</span>
            <span><em>Clicks</em> <b>&ne;</b> Customers</span>
          </div>
          <div className="track" data-track={true}>
            <div className="track-spine" aria-hidden="true"><i data-spine={true}></i></div>
      
            <article className="tstep" data-step={true}>
              <span className="tstep-marker" aria-hidden="true"></span>
              <div className="tstep-body">
                <span className="tstep-num">01 / Understand</span>
                <h3 className="tstep-title">The business first, the channel second.</h3>
                <p className="tstep-line">Margins, sales cycle, repeat rate, what a customer is actually worth. Marketing decisions are business decisions wearing a different hat.</p>
                <p className="tstep-q">We ask: <b>what does a good month look like in rupees?</b></p>
              </div>
              <div className="tstep-figure">
                <div className="fig" aria-hidden="true">
                  <div className="fig-cap">Signal vs. noise</div>
                  <div className="fig-bars">
                    <u style={{ '--h': '.32' } as React.CSSProperties}></u><u style={{ '--h': '.5' } as React.CSSProperties}></u><u className="key" style={{ '--h': '1' } as React.CSSProperties}></u><u style={{ '--h': '.42' } as React.CSSProperties}></u><u style={{ '--h': '.26' } as React.CSSProperties}></u><u style={{ '--h': '.6' } as React.CSSProperties}></u><u style={{ '--h': '.36' } as React.CSSProperties}></u>
                  </div>
                </div>
              </div>
            </article>
      
            <article className="tstep" data-step={true}>
              <span className="tstep-marker" aria-hidden="true"></span>
              <div className="tstep-body">
                <span className="tstep-num">02 / Diagnose</span>
                <h3 className="tstep-title">Find the one constraint holding the system back.</h3>
                <p className="tstep-line">A funnel fails at a specific point, not everywhere at once. Fixing anything upstream of the real bottleneck just moves more traffic into the same wall.</p>
                <p className="tstep-q">We ask: <b>where exactly does intent go to die?</b></p>
              </div>
              <div className="tstep-figure">
                <div className="fig" aria-hidden="true">
                  <div className="fig-cap">The bottleneck</div>
                  <div className="fig-funnel"><u></u><u></u><u></u><u></u></div>
                </div>
              </div>
            </article>
      
            <article className="tstep" data-step={true}>
              <span className="tstep-marker" aria-hidden="true"></span>
              <div className="tstep-body">
                <span className="tstep-num">03 / Decide</span>
                <h3 className="tstep-title">Choose what changes &mdash; and what deliberately doesn't.</h3>
                <p className="tstep-line">Strategy is subtraction. Naming what we're not doing this quarter is what makes the remaining work move a number instead of a dashboard.</p>
                <p className="tstep-q">We ask: <b>what earns its place, and what are we cutting?</b></p>
              </div>
              <div className="tstep-figure">
                <div className="fig" aria-hidden="true">
                  <div className="fig-cap">Scope</div>
                  <div className="fig-opts">
                    <span className="pick"><i></i>Rebuild the conversion path</span>
                    <span className="cut"><i></i>Chase vanity keywords</span>
                    <span className="cut"><i></i>Redesign for the sake of it</span>
                  </div>
                </div>
              </div>
            </article>
      
            <article className="tstep" data-step={true}>
              <span className="tstep-marker" aria-hidden="true"></span>
              <div className="tstep-body">
                <span className="tstep-num">04 / Build</span>
                <h3 className="tstep-title">Site, search, GEO and conversion as one system.</h3>
                <p className="tstep-line">The page that ranks, the page that answers an AI engine, and the page that closes are the same page. We build them together or they quietly work against each other.</p>
                <p className="tstep-q">We ask: <b>does every layer point at the same outcome?</b></p>
              </div>
              <div className="tstep-figure">
                <div className="fig" aria-hidden="true">
                  <div className="fig-cap">One stack</div>
                  <div className="fig-stack"><u></u><u></u><u></u><u></u></div>
                </div>
              </div>
            </article>
      
            <article className="tstep" data-step={true}>
              <span className="tstep-marker" aria-hidden="true"></span>
              <div className="tstep-body">
                <span className="tstep-num">05 / Compound</span>
                <h3 className="tstep-title">Every cycle makes the next one cheaper.</h3>
                <p className="tstep-line">Results feed back into the next decision. Authority accrues, cost per acquisition falls, and the system gets sharper the longer it runs.</p>
                <p className="tstep-q">We ask: <b>what did this month teach the next one?</b></p>
              </div>
              <div className="tstep-figure">
                <div className="fig" aria-hidden="true">
                  <div className="fig-cap">Compounding return</div>
                  <svg className="fig-curve" viewBox="0 0 220 66" role="presentation">
                    <path className="base" d="M4 62 H216" />
                    <path d="M6 60 C 62 58, 108 50, 140 36 S 196 10, 214 6" />
                  </svg>
                </div>
              </div>
            </article>
          </div>
      
          <p className="track-close rv">
            <span className="track-loop"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 1.5V4h-2.5" /></svg>And then it runs again</span><br />
            Every element working together, intelligently, to turn attention into the only metric you care about: <strong>revenue.</strong>
          </p>
        </div>
      </section>
    </>
  );
}
