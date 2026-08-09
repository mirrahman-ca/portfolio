import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with care in Vancouver, BC.</p>
        <nav aria-label="Footer navigation">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://whywhywhy.ca" target="_blank" rel="noreferrer">WhyWhyWhy</a>
          <a href="https://cloudynix.ca" target="_blank" rel="noreferrer">Cloudynix</a>
        </nav>
      </div>
    </footer>
  );
}
