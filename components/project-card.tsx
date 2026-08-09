export function ProjectCard({ project }: {
  project: { title: string; domain: string; description: string; technologies: string };
}) {
  return (
    <article className="project-card">
      <div>
        <p className="project-domain">{project.domain}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="project-tech">{project.technologies}</p>
      </div>
    </article>
  );
}
