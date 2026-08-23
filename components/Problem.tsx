export default function Problem() {
  return (
    <>
      <section className="section on-white hairline-top" id="problem">
        <div className="container">
          <div className="section-head center rv" style={{ marginBottom: 'clamp(32px,4vw,44px)' }}>
            <span className="eyebrow">The Symptoms</span>
            <h2 className="h2">Sound familiar?</h2>
          </div>
        </div>
        <div className="marquee rv">
          <div className="marquee-row">
            <div className="marquee-track">
              <span className="mq"><i>&ldquo;</i>We get plenty of traffic, but not enough sales.</span>
              <span className="mq"><i>&ldquo;</i>Our site looks great, but the phone isn't ringing.</span>
              <span className="mq"><i>&ldquo;</i>We rank for keywords that don't bring actual buyers.</span>
              <span className="mq"><i>&ldquo;</i>We get plenty of traffic, but not enough sales.</span>
              <span className="mq"><i>&ldquo;</i>Our site looks great, but the phone isn't ringing.</span>
              <span className="mq"><i>&ldquo;</i>We rank for keywords that don't bring actual buyers.</span>
            </div>
          </div>
          <div className="marquee-row rev">
            <div className="marquee-track">
              <span className="mq"><i>&ldquo;</i>We produce content constantly but can't build authority with it.</span>
              <span className="mq"><i>&ldquo;</i>Paid campaigns send expensive traffic to underperforming pages.</span>
              <span className="mq"><i>&ldquo;</i>Different teams, different reports, nobody in charge of revenue.</span>
              <span className="mq"><i>&ldquo;</i>We produce content constantly but can't build authority with it.</span>
              <span className="mq"><i>&ldquo;</i>Paid campaigns send expensive traffic to underperforming pages.</span>
              <span className="mq"><i>&ldquo;</i>Different teams, different reports, nobody in charge of revenue.</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="pullquote rv">
            <span className="pullquote-mark" aria-hidden="true">&rdquo;</span>
            <p className="statement-scroll" data-fill={true}>These aren't <span className="em">traffic problems or design problems.</span> They're <span className="hl">system problems</span> &mdash; pieces built in isolation <span className="em">that don't work together to produce results.</span></p>
          </div>
        </div>
      </section>
    </>
  );
}
