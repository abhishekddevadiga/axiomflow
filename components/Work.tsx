import { PROJECTS } from '@/data/work';
import ProjectCard from './ProjectCard';

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head rv">
          <span className="eyebrow">Results</span>
          <h2 className="h2">Real business results start with clear strategic decisions.</h2>
        </div>
    
        {/* EDIT: confirm client naming and permissions before launch.
             Each .work block is self-contained — duplicate one to add a project. */}
    <div className="works">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>

    <div className="case rv">
          <div className="case-story">
            <span className="mono" style={{ color: 'var(--brand)' }}>Featured case</span>
            <h3 style={{ fontSize: 'clamp(24px,2.8vw,32px)', margin: '12px 0 22px', letterSpacing: '-.02em' }}>Shipping our own product the way we'd ship yours.</h3>
            <dl className="case-rows">
              <div className="case-row"><dt>Business</dt><dd>SiteSync &mdash; construction project management, SaaS</dd></div>
              <div className="case-row"><dt>Challenge</dt><dd>Construction teams coordinate crores of work over WhatsApp and paper; site progress is invisible to decision-makers.</dd></div>
              <div className="case-row"><dt>Insight</dt><dd>Builders think in locations, not lists &mdash; so the product had to start from a map, not a table.</dd></div>
              <div className="case-row"><dt>Built</dt><dd>Map-first PM platform, marketing site, sales deck and onboarding &mdash; the full acquisition system, end to end.</dd></div>
              <div className="case-row"><dt>Outcome</dt><dd className="hot">First paying client onboarded within weeks of launch.</dd></div>
              <div className="case-row"><dt>Lesson</dt><dd>When the product mirrors how customers already think, selling gets easier everywhere else.</dd></div>
            </dl>
          </div>
          <div className="case-visual" aria-hidden="true">
            <div className="browser">
              <div className="browser-bar"><u></u><u></u><u></u><span className="url mono">sitesync.live</span></div>
              <div className="browser-map">
                <svg viewBox="0 0 400 248" preserveAspectRatio="xMidYMid slice">
                  <path d="M-10 60 L410 40" stroke="#E4DDCB" strokeWidth="7" fill="none" />
                  <path d="M-10 150 L410 170" stroke="#E4DDCB" strokeWidth="7" fill="none" />
                  <path d="M90 -10 L110 258" stroke="#E4DDCB" strokeWidth="7" fill="none" />
                  <path d="M280 -10 L260 258" stroke="#E4DDCB" strokeWidth="7" fill="none" />
                  <rect x="20" y="78" width="52" height="40" rx="6" fill="#EAE3D2" />
                  <rect x="128" y="66" width="60" height="46" rx="6" fill="#EAE3D2" />
                  <rect x="300" y="70" width="70" height="52" rx="6" fill="#EAE3D2" />
                  <rect x="130" y="190" width="54" height="40" rx="6" fill="#EAE3D2" />
                  <rect x="298" y="196" width="62" height="36" rx="6" fill="#EAE3D2" />
                  <path d="M52 96 C 110 40, 220 30, 322 92" stroke="#EE6234" strokeWidth="2" strokeDasharray="5 6" fill="none" />
                  <g className="pinf"><circle cx="52" cy="96" r="9" fill="#EE6234" /><circle cx="52" cy="96" r="3.5" fill="#fff" /></g>
                  <g className="pinf p2"><circle cx="212" cy="52" r="9" fill="#EE6234" /><circle cx="212" cy="52" r="3.5" fill="#fff" /></g>
                  <g className="pinf p3"><circle cx="322" cy="92" r="9" fill="#EE6234" /><circle cx="322" cy="92" r="3.5" fill="#fff" /></g>
                  <g>
                    <rect x="20" y="150" width="118" height="84" rx="10" fill="#FFFFFF" stroke="#E7E3DA" />
                    <rect x="32" y="164" width="66" height="8" rx="4" fill="#EFEBE0" />
                    <rect x="32" y="182" width="94" height="7" rx="3.5" fill="#F3EFE4" />
                    <rect x="32" y="196" width="80" height="7" rx="3.5" fill="#F3EFE4" />
                    <rect x="32" y="212" width="52" height="10" rx="5" fill="#FFE8DC" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="case-toast"><i>&#10003;</i> First paying client onboarded</div>
          </div>
        </div>
    
        <div className="work-cta rv">
          <a href="#contact" className="btn btn-primary">Want this for your brand? Let's talk about it
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" /></svg>
          </a>
        </div>
      </div>
  </section>
  );
}
