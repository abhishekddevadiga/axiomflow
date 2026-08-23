export default function Testimonials() {
  return (
    <>
      <section className="section on-white hairline-top" id="testimonials">
        <div className="container">
          <div className="section-head center rv">
            <span className="tst-pill">Client Stories</span>
            <h2 className="h2">Trusted by <span className="accent glow-word">operators.</span></h2>
            <p className="tst-sub">Founders, marketing heads and business owners who came to us with a number that wasn't moving.</p>
          </div>
      
          <div className="tst-ctrl rv">
            <button className="tst-arrow" type="button" data-tst-prev={true} aria-label="Previous testimonials">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <div className="tst-dots" role="tablist" aria-label="Testimonial pages" data-tst-dots={true}></div>
            <button className="tst-arrow" type="button" data-tst-next={true} aria-label="More testimonials">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      
        <div className="tst-bleed rv">
          {/* EDIT: replace each .ph quote with a real, approved client quote before launch. */}
          <div className="tst-rail" data-tst-rail={true} tabIndex={0} role="group" aria-label="Client testimonials, scrollable">
            <figure className="tst-card">
              <span className="tst-tag">The impact</span>
              <blockquote className="q ph">"A longer quote about the business outcomes the work produced &mdash; what changed in revenue, leads, or growth, in the client's own words."</blockquote>
              <figcaption className="tst-person"><b>C</b><span><span className="n ph">Client name</span><br /><span className="r ph">Title, Company</span></span></figcaption>
            </figure>
            <figure className="tst-card alt">
              <span className="tst-tag">The problem</span>
              <blockquote className="q ph">"Quote about the business challenge they were facing before the engagement."</blockquote>
              <figcaption className="tst-person"><b>C</b><span><span className="n ph">Client name</span><br /><span className="r ph">Title, Company</span></span></figcaption>
            </figure>
            <figure className="tst-card alt2">
              <span className="tst-tag">Why us</span>
              <blockquote className="q ph">"Quote about why they chose to work with AxiomFlow over the alternatives."</blockquote>
              <figcaption className="tst-person"><b>C</b><span><span className="n ph">Client name</span><br /><span className="r ph">Title, Company</span></span></figcaption>
            </figure>
            <figure className="tst-card">
              <span className="tst-tag">The process</span>
              <blockquote className="q ph">"Quote about what it was actually like to work together &mdash; communication, pace, how decisions got made."</blockquote>
              <figcaption className="tst-person"><b>C</b><span><span className="n ph">Client name</span><br /><span className="r ph">Title, Company</span></span></figcaption>
            </figure>
            <figure className="tst-card alt">
              <span className="tst-tag">The turning point</span>
              <blockquote className="q ph">"Quote about the specific moment or change that made the difference in results."</blockquote>
              <figcaption className="tst-person"><b>C</b><span><span className="n ph">Client name</span><br /><span className="r ph">Title, Company</span></span></figcaption>
            </figure>
            <figure className="tst-card alt2">
              <span className="tst-tag">Long term</span>
              <blockquote className="q ph">"Quote about the ongoing relationship and what has compounded since the first engagement."</blockquote>
              <figcaption className="tst-person"><b>C</b><span><span className="n ph">Client name</span><br /><span className="r ph">Title, Company</span></span></figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
