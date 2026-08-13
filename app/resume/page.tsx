import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumé | Mir Rahman",
  description: "View or download Mir Rahman's résumé.",
  alternates: { canonical: "/resume" },
};

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2.5v10m0 0 4-4m-4 4-4-4M3.5 15.5h13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ResumePage() {
  return (
    <main className="resume-viewer">
      <header className="resume-toolbar">
        <div className="resume-toolbar-copy">
          <Link className="resume-back" href="/" aria-label="Back to Mir Rahman's portfolio">← Portfolio</Link>
          <h1>Mir Rahman — Résumé</h1>
        </div>
        <a className="button button-primary resume-download" href="/resume.pdf" download="Mir_Rahman_Resume.pdf">
          <DownloadIcon /> Download PDF
        </a>
      </header>
      <div className="resume-document">
        <iframe src="/resume.pdf#view=FitH" title="Mir Rahman's résumé" />
      </div>
    </main>
  );
}
