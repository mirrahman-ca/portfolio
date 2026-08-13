import Image from "next/image";
import { ContactQr } from "./contact-qr";
import { ArrowUpRight, GitHub, LinkedIn } from "./icons";
import { profile } from "@/data/profile";
import profilePicture from "@/profile-pic.png";

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow location"><span aria-hidden="true" />{profile.location}</p>
        <h1 id="hero-title">{profile.displayName}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-statement">{profile.statement}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/resume">View résumé <ArrowUpRight /></a>
          <ContactQr />
        </div>
        <div className="hero-links" aria-label="Social profiles">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Mir Rahman on LinkedIn" title="LinkedIn">
            <LinkedIn />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Mir Rahman on GitHub" title="GitHub">
            <GitHub />
          </a>
        </div>
      </div>
      <aside className="hero-aside" aria-label="Professional summary">
        <div className="profile-picture">
          <Image
            src={profilePicture}
            alt="Mir Rahman"
            width={220}
            height={220}
            sizes="(max-width: 680px) 160px, 220px"
            priority
          />
        </div>
        <p>{profile.summary}</p>
        <div className="availability"><span aria-hidden="true" />{profile.availability}</div>
      </aside>
    </section>
  );
}
