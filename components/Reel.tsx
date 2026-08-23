export default function Reel() {
  return (
    <>
      <section className="section on-white hairline-top" id="reel">
        <div className="container">
          <div className="section-head center rv">
            <span className="eyebrow">The reel</span>
            <h2 className="h2">Work that <span className="accent glow-word">moves.</span></h2>
            <p className="lede" style={{ marginInline: 'auto' }}>Short-form built to stop a thumb: brand films, founder content, product demos and campaign cutdowns. Hover to preview, click to watch.</p>
          </div>
        </div>
      
        <div className="reel-wrap rv">
          <div className="reel-bleed">
            {/* cards are generated from the REEL list at the top of the script — add a video there */}
            <div className="reel" data-reel={true} role="region" aria-label="Video reel, hover to preview and click to watch">
              <div className="reel-track" data-reel-track={true}></div>
            </div>
          </div>
          <p className="reel-note">
            <span>Brand films</span><i></i><span>Founder content</span><i></i><span>Product demos</span><i></i><span>Campaign cutdowns</span>
          </p>
        </div>
      </section>
      
      {/* video lightbox */}
      <div className="lb" data-lb={true} role="dialog" aria-modal="true" aria-label="Video player" hidden={true}>
        <div className="lb-inner" data-lb-inner={true}>
          <button className="lb-close" type="button" data-lb-close={true} aria-label="Close video">&times;</button>
          <div className="lb-slot" data-lb-slot={true} style={{ width: '100%', height: '100%' }}></div>
          <div className="lb-meta"><em data-lb-tag={true}></em><b data-lb-title={true}></b></div>
        </div>
      </div>
    </>
  );
}
