export default function Contact() {
  return (
    <>
      <section className="finale section" id="contact">
        <div className="container">
          <div className="finale-head rv">
            <span className="eyebrow">Start a Conversation</span>
            <h2>Not sure where to start? Start by telling us where you want to <span className="mark">go.</span></h2>
            <p className="finale-sub">Our expert team is ready to dig into your business. No generic advice — just actionable insights tailored to your goals.</p>
            <button className="spin-badge" id="spinBadge" aria-label="Jump to the form — let's get started">
              <span className="disc" aria-hidden="true"></span>
              <svg className="ring" viewBox="0 0 132 132" aria-hidden="true">
                <defs><path id="circlePath" d="M66,66 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
                <text><textPath href="#circlePath">LET'S GET STARTED · LET'S GET STARTED ·&#160;</textPath></text>
              </svg>
              <span className="arr" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18 18 6M9 6h9v9" /></svg></span>
            </button>
          </div>
      
          <div className="contact-grid">
            <div className="contact-notes rv">
              <div className="contact-note"><i><svg viewBox="0 0 16 16" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12.5 6 8l3 3 5-6M10.5 5H14v3.5" /></svg></i><div><div className="t">A real diagnosis, not a pitch</div><p>Your first session maps your funnel and names the levers — useful even if we never work together.</p></div></div>
              <div className="contact-note"><i><svg viewBox="0 0 16 16" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="6" r="3" /><path d="M2.5 14c.7-2.6 2.9-4 5.5-4s4.8 1.4 5.5 4" /></svg></i><div><div className="t">Talk to the people doing the work</div><p>Senior-led from the first call. The strategist you meet is the strategist you keep.</p></div></div>
              <div className="contact-note"><i><svg viewBox="0 0 16 16" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 1.5V4h-2.5" /></svg></i><div><div className="t">Replies within one business day</div><p>Tell us where you want to go; we'll come back with a point of view, not an autoresponder.</p></div></div>
            </div>
      
            <form className="form-card rv rv-d1" id="contactForm" noValidate={true}>
              <div className="form-grid">
                <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" name="name" type="text" placeholder="Your name" required={true} /></div>
                <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" placeholder="you@company.com" required={true} /></div>
                <div className="field full"><label htmlFor="f-company">Company</label><input id="f-company" name="company" type="text" placeholder="Company name" /></div>
                <div className="field full"><label htmlFor="f-goal">What are you looking to achieve?</label>
                  <select id="f-goal" name="goal">
                    <option>Grow an existing business</option>
                    <option>Launch something new</option>
                    <option>Rebuild our marketing stack</option>
                    <option>Improve our product funnel</option>
                    <option>Explore new acquisition channels</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field full"><label htmlFor="f-more">Tell us more about your project and goals <span style={{ color: '#7A6F62', fontWeight: '400' }}>(optional)</span></label><textarea id="f-more" name="details" placeholder="A few lines is plenty."></textarea></div>
              </div>
              <button className="btn btn-primary" type="submit">Start the conversation
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" /></svg>
              </button>
              <p className="form-fine">By requesting a strategy session, you agree to our <a href="#">privacy policy</a>.</p>
              <p className="form-done" id="formDone">Demo form — wire this to your handler (Formspree, backend, or CRM) before launch.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
