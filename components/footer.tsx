import Image from "next/image";
import { profile } from "@/data/profile";
import { GitHub, LinkedIn } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with care in Vancouver, BC.</p>
        <nav aria-label="Footer navigation">
          <a className="footer-social-link" href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedIn />LinkedIn</a>
          <a className="footer-social-link" href={profile.github} target="_blank" rel="noreferrer"><GitHub />GitHub</a>
          <a className="footer-site-link" href="https://whywhywhy.ca" target="_blank" rel="noreferrer">
            <Image src="/whywhywhy-icon.svg" alt="" width={17} height={17} />
            whywhywhy.ca
          </a>
          <a className="footer-site-link" href="https://cloudynix.ca" target="_blank" rel="noreferrer">
            <Image src="/cloudynix-icon.svg" alt="" width={17} height={17} />
            Cloudynix
          </a>
        </nav>
      </div>
    </footer>
  );
}
