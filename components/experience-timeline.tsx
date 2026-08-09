import { profile } from "@/data/profile";

export function ExperienceTimeline() {
  return (
    <div className="timeline">
      {profile.experience.map((item, index) => (
        <article className="timeline-item" key={`${item.company}-${item.dates}`}>
          <div className="timeline-rail" aria-hidden="true">
            <span className={`timeline-marker${index === 0 ? " timeline-marker-current" : ""}`}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8.5 7V5.7c0-.9.7-1.7 1.7-1.7h3.6c.9 0 1.7.7 1.7 1.7V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="3" y="7" width="18" height="12.5" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3.5 11.2c2.5 1.5 5.4 2.3 8.5 2.3s6-.8 8.5-2.3M10.5 13.5v1.7h3v-1.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <div className="timeline-meta">
            <p className="timeline-dates">{item.dates}</p>
            <p className="timeline-location">{item.location}</p>
          </div>
          <div className="timeline-content">
            <div className="timeline-heading">
              <div className="company-mark" aria-hidden="true">
                {item.company.split(" ").slice(0, 2).map((word) => word[0]).join("")}
              </div>
              <div>
                <p className="role">{item.role}</p>
                <h3>{item.company}</h3>
              </div>
            </div>
            <ul>
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <div className="technology-line">
              <span>Technology</span>
              <p>{item.technologies}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
