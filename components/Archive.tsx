export default function Archive() {
  return (
    <>
      <section className="section on-tint hairline-top" id="archive">
        <div className="container">
          <div className="section-head rv">
            <span className="eyebrow">The archive</span>
            <h2 className="h2">Four folders. <span className="accent glow-word">Open one.</span></h2>
            <p className="lede">Everything we've made, sorted by what it is rather than when we made it.</p>
          </div>
          {/* EDIT: fill each count (e.g. "7 picks") and point each folder at its destination. */}
          <div className="folders">
            <a className="folder rv" href="#work" data-folder={true}>
              <span className="folder-stage" aria-hidden="true">
                {/* EDIT: swap these px- classes for real category thumbnails */}
                <span className="folder-shot"><span className="px px-t1" role="img" aria-label="YouTube thumbnail, founder explainer"></span></span><span className="folder-shot"><span className="px px-f4" role="img" aria-label="Carousel cover, business explainer"></span></span><span className="folder-shot"><span className="px px-r1" role="img" aria-label="Reel cover series"></span></span>
              </span>
              <div className="folder-front">
                <div className="folder-tiles"><span aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M10 2.5l2.3 5 5.2.6-3.9 3.5 1.1 5.2L10 14.2 5.3 16.8l1.1-5.2L2.5 8.1l5.2-.6z" /></svg></span><span aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M4 2.5l11 6.2-4.7 1.3L7.6 15z" /></svg></span></div>
                <h3>Selected work</h3>
                <p>The shortlist. If you only open one folder, open this one.</p>
                <span className="folder-count"><span className="ph">picks</span></span>
              </div>
            </a>
            <a className="folder rv" href="#work" data-folder={true}>
              <span className="folder-stage" aria-hidden="true">
                {/* EDIT: swap these px- classes for real category thumbnails */}
                <span className="folder-shot"><span className="px px-t3" role="img" aria-label="YouTube thumbnail, videography series"></span></span><span className="folder-shot"><span className="px px-f2" role="img" aria-label="Feed post, agency campaign"></span></span><span className="folder-shot"><span className="px px-r3" role="img" aria-label="Reel cover, tutorial series"></span></span>
              </span>
              <div className="folder-front">
                <div className="folder-tiles"><span aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M10 2.5l7 3.6v7.8L10 17.5 3 13.9V6.1z" /><path d="M3 6.1l7 3.7 7-3.7M10 9.8v7.7" /></svg></span><span aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M10 2.5v5M10 12.5v5M2.5 10h5M12.5 10h5M5 5l3 3M12 12l3 3M15 5l-3 3M8 12l-3 3" /></svg></span></div>
                <h3>Products we own</h3>
                <p>Tools we designed, built, shipped and now sell ourselves.</p>
                <span className="folder-count"><span className="ph">shipped</span></span>
              </div>
            </a>
            <a className="folder rv" href="#work" data-folder={true}>
              <span className="folder-stage" aria-hidden="true">
                {/* EDIT: swap these px- classes for real category thumbnails */}
                <span className="folder-shot"><span className="px px-f1" role="img" aria-label="Feed post, clinic growth campaign"></span></span><span className="folder-shot"><span className="px px-t2" role="img" aria-label="YouTube thumbnail, sales channel"></span></span><span className="folder-shot"><span className="px px-r2" role="img" aria-label="Reel cover, dental explainer"></span></span>
              </span>
              <div className="folder-front">
                <div className="folder-tiles"><span aria-hidden="true"><svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="7.5" /><path d="M2.5 10h15M10 2.5a12 12 0 0 1 0 15 12 12 0 0 1 0-15z" /></svg></span><span aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M10 2.5L2.5 6.5 10 10.5l7.5-4z" /><path d="M2.5 10.5 10 14.5l7.5-4M2.5 14 10 18l7.5-4" /></svg></span></div>
                <h3>Client builds</h3>
                <p>Sites and applications delivered end to end, design through deployment.</p>
                <span className="folder-count"><span className="ph">delivered</span></span>
              </div>
            </a>
            <a className="folder rv" href="#work" data-folder={true}>
              <span className="folder-stage" aria-hidden="true">
                {/* EDIT: swap these px- classes for real category thumbnails */}
                <span className="folder-shot"><span className="px px-f3" role="img" aria-label="Feed post, student result"></span></span><span className="folder-shot"><span className="px px-r4" role="img" aria-label="Course cover, membership area"></span></span><span className="folder-shot"><span className="px px-t1" role="img" aria-label="YouTube thumbnail, founder explainer"></span></span>
              </span>
              <div className="folder-front">
                <div className="folder-tiles"><span aria-hidden="true"><svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="7.5" /><path d="M8.2 6.8l5 3.2-5 3.2z" /></svg></span><span aria-hidden="true"><svg viewBox="0 0 20 20"><rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1.6" /><rect x="11" y="2.5" width="6.5" height="6.5" rx="1.6" /><rect x="2.5" y="11" width="6.5" height="6.5" rx="1.6" /><rect x="11" y="11" width="6.5" height="6.5" rx="1.6" /></svg></span></div>
                <h3>Content &amp; campaigns</h3>
                <p>Shoots, edits and campaign systems produced through the twelve-stage pipeline.</p>
                <span className="folder-count"><span className="ph">produced</span></span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
