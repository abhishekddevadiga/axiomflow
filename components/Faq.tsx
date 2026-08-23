export default function Faq() {
  return (
    <>
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head center rv">
            <span className="eyebrow">Questions</span>
            <h2 className="h2">Answered, honestly.</h2>
          </div>
          <div className="faq rv">
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false">What does an engagement look like?<span className="pm" aria-hidden="true"></span></button>
              <div className="faq-a"><div className="faq-a-in">Most engagements land in one of three shapes:
                <ul>
                  <li>Discovery &amp; Strategy — ₹<span className="ph">X</span> to ₹<span className="ph">Y</span></li>
                  <li>Design &amp; Development — ₹<span className="ph">X</span> to ₹<span className="ph">Y</span></li>
                  <li>Optimization &amp; Growth — ₹<span className="ph">X</span> to ₹<span className="ph">Y</span> per month</li>
                </ul>
                We also do one-off shoots and single campaigns. Those start at ₹<span className="ph">X</span>.
              </div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false">Who will be working on my account?<span className="pm" aria-hidden="true"></span></button>
              <div className="faq-a"><div className="faq-a-in">You'll have a dedicated team led by a senior growth strategist. This is your core crew from kickoff to launch to optimization. Specialists join as needed, but your leads are your constants. No handoffs, no layers.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false">We already have a website. Can you work with that?<span className="pm" aria-hidden="true"></span></button>
              <div className="faq-a"><div className="faq-a-in">Of course. Our first step is always to audit your current site and tech stack to identify quick wins and optimization opportunities. We'll advise on whether to evolve your current site or start fresh, based on the goals.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false">Do you work with clients outside of India?<span className="pm" aria-hidden="true"></span></button>
              <div className="faq-a"><div className="faq-a-in">Absolutely. We're fully set up for remote collaboration, with tools and processes that keep communication tight and projects on track no matter where you are.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false">How do you measure success?<span className="pm" aria-hidden="true"></span></button>
              <div className="faq-a"><div className="faq-a-in">The same way you do: revenue and growth. We tie every metric we track — from traffic to engagement to conversion — back to the business outcomes that matter to you. If it doesn't ultimately improve your bottom line, it's not a priority for us.</div></div>
            </div>
          </div>
          <p className="faq-more rv">More questions? That's what we're here for. <a href="#contact">Let's talk through the specifics of your project →</a></p>
        </div>
      </section>
    </>
  );
}
