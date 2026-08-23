export default function Advantage() {
  return (
    <>
      <section className="section on-tint hairline-top" id="advantage">
        <div className="container">
          <p className="statement rv">When everything works towards <span className="ic" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6" /><circle cx="8" cy="8" r="2.2" /></svg></span> one goal, every piece of the system <span className="ic" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 1.5V4h-2.5" /></svg></span> gets smarter.</p>
      
          <div className="neg-eq rv" aria-label="What broken systems produce">
            <div className="eq"><b>site</b> <i>&minus;</i> <b>traffic</b> <i>=</i> <span className="res">a brochure nobody sees</span></div>
            <div className="eq"><b>traffic</b> <i>&minus;</i> <b>conversion</b> <i>=</i> <span className="res">attention wasted</span></div>
            <div className="eq"><b>conversions</b> <i>&minus;</i> <b>loyalty</b> <i>=</i> <span className="res">one-time sales, not growth</span></div>
            <div className="eq"><b>rankings</b> <i>&minus;</i> <b>relevance</b> <i>=</i> <span className="res">visitors, not buyers</span></div>
          </div>
      
          <div className="chain-wrap rv" role="img" aria-label="One team owning the whole system: insight shapes the idea, the idea gets craft, craft gets distribution, distribution returns signal, and signal feeds the next insight">
            <div className="chain">
              <span className="chain-node">Search</span>
              <span className="chain-link"><em>informs</em><i></i></span>
              <span className="chain-node">Content</span>
              <span className="chain-link"><em>earns</em><i></i></span>
              <span className="chain-node">Authority</span>
              <span className="chain-link"><em>lifts</em><i></i></span>
              <span className="chain-node">Conversion</span>
              <span className="chain-link"><em>tunes</em><i></i></span>
              <span className="chain-node">Targeting</span>
            </div>
            <div className="chain-return" aria-hidden="true"><span>the loop compounds</span></div>
            <p className="chain-note mono" aria-hidden="true">&#8635; the loop compounds</p>
          </div>
      
          <div className="stats rv" aria-label="Proof points">{/* EDIT: replace with your final numbers */}
            <div className="stat"><b><span data-count="7">7</span><sup>+</sup></b><span>years solving complex business challenges</span></div>
            <div className="stat"><b><span data-count="5">5</span><sup>+</sup></b><span>industries served, from healthcare to F&amp;B</span></div>
            <div className="stat"><b><span data-count="3">3</span></b><span>products of our own, run in production</span></div>
          </div>
      
          <p className="adv-close rv">That's the advantage of a <em>revenue engine</em> over a loose collection of vendors. A complete system, continuously improving itself.</p>
        </div>
      </section>
    </>
  );
}
