import { profile } from "@/data/profile";

export function ExperienceTimeline() {
  return (
    <div className="timeline">
      {profile.experience.map((item) => (
        <article className="timeline-item" key={`${item.company}-${item.dates}`}>
          <div className="timeline-marker" aria-hidden="true" />
          <div className="timeline-meta">
            <p>{item.dates}</p>
            <p>{item.location}</p>
          </div>
          <div className="timeline-content">
            <p className="role">{item.role}</p>
            <h3>{item.company}</h3>
            <ul>
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <p className="technology-line"><span>Technology</span>{item.technologies}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
