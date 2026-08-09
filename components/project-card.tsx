export function ProjectCard({ project, index }: {
  project: { title: string; domain: string; description: string; technologies: string };
  index: number;
}) {
  return (
    <article className="project-card">
      <div className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
      <div>
        <p className="project-domain">{project.domain}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="project-tech">{project.technologies}</p>
      </div>
    </article>
  );
}
