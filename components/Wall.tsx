import { WALL } from '@/data/wall';

export default function Wall() {
  return (
    <section className="section on-tint hairline-top" id="wall">
      <div className="container">
        <div className="section-head rv">
          <span className="eyebrow">The wall</span>
          <h2 className="h2">Output from the <span className="accent glow-word">engine.</span></h2>
          <p className="lede">Creative shipped alongside the sites, funnels and search work. Content is a lever inside the growth system, not a separate department running its own agenda.</p>
        </div>
      </div>
    
      <div className="wall-wrap rv">
        <div className="wall-bleed">
          {/* EDIT: each column repeats its own items twice. Keep both copies identical or the loop will jump. */}
      <div className="wall" role="img" aria-label="A wall of recent content work: brand films, reels, carousels, product films and campaign stills">
        {WALL.map((col, ci) => (
          <div className="wall-col" key={ci}>
            <div className="wall-track" style={{ '--dur': col.duration } as React.CSSProperties}>
              {[0, 1].map((pass) =>
                col.items.map((item, ii) => (
                  <div
                    className="wall-item"
                    key={`${pass}-${ii}`}
                    style={{ aspectRatio: item.ratio }}
                    aria-hidden={pass === 1 ? true : undefined}
                  >
                    <span className={`px px-${item.img}`} role="img" aria-label={item.alt} />
                    <span className="wall-cap">{item.caption}</span>
                  </div>
                )),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
