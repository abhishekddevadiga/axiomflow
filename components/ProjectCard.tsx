import type { Project } from '@/data/work';

/** One project tile. Markup mirrors the source exactly; the hover veil,
 *  scrim and reveal layers are driven entirely by globals.css. */
export default function ProjectCard({ project }: { project: Project }) {
  const cls = ['work', project.span, 'rv', project.delay].filter(Boolean).join(' ');
  return (
    <article className={cls} data-work tabIndex={0} role="button" aria-expanded="false">
      <span className="work-tap" aria-hidden="true">+</span>
      <div className="work-shot">
        <span className={`px px-${project.image}`} role="img" aria-label={project.alt} />
        <span className="work-scrim" aria-hidden="true" />
      </div>
      <div className="work-face">
        <span className="work-sector">{project.sector}</span>
        <h3>{project.name}</h3>
      </div>
      <div className="work-info">
        <h3>{project.name}</h3>
        <p className="work-line">{project.line}</p>
        <dl className="work-rows">
          {project.rows.map((row) => (
            <div className="work-row" key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="work-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="work-result">
          <i />
          {project.outcomeVerified ? (
            <b>{project.outcome}</b>
          ) : (
            <b className="ph">{project.outcome}</b>
          )}
        </div>
      </div>
    </article>
  );
}
