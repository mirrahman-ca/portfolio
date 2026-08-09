import { ExperienceTimeline } from "@/components/experience-timeline";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ArrowUpRight, GitHub, ImpactIcon, LinkedIn, Mail } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: "https://mirrahman.ca",
  address: { "@type": "PostalAddress", addressLocality: "Vancouver", addressRegion: "BC", addressCountry: "CA" },
  sameAs: [profile.linkedin, profile.github],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <div id="top" />
        <Hero />

        <section id="about" className="section shell about-section">
          <SectionHeading eyebrow="About" title="Architecture thinking. Hands-on delivery." />
          <div className="about-copy">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="section section-tinted" aria-labelledby="impact-title">
          <div className="shell">
            <SectionHeading eyebrow="Selected impact" title="Engineering where the details matter." intro="A practical focus on systems that need to be secure, observable, and dependable from design through production." />
            <div className="impact-grid">
              {profile.impact.map((item, index) => (
                <article className="impact-card" key={item.title}>
                  <div className="impact-card-top">
                    <div className="impact-icon">
                      <ImpactIcon type={( ["security", "cloud", "systems", "ai"] as const)[index]} />
                    </div>
                  </div>
                  <div className="impact-card-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="impact-accent" aria-hidden="true" />
                </article>
              ))}
            </div>
            <div className="impact-callout">
              <span aria-hidden="true">↗</span>
              <p>Delivered architecture and implementation improvements that reduced a major data-transfer workflow’s operating cost by <strong>approximately 40%</strong>—about <strong>$20,000 CAD per month.</strong></p>
            </div>
          </div>
        </section>

        <section id="experience" className="section shell">
          <SectionHeading eyebrow="Experience" title="Building dependable systems across industries." />
          <ExperienceTimeline />
        </section>

        <section id="projects" className="section section-dark">
          <div className="shell">
            <SectionHeading eyebrow="Selected projects" title="Complex problems, made operational." intro="A selection of secure platforms, data systems, and distributed services delivered in regulated and demanding environments." />
            <div className="projects-grid">
              {profile.projects.map((project) => <ProjectCard key={project.title} project={project} />)}
            </div>
          </div>
        </section>

        <section id="skills" className="section shell">
          <SectionHeading eyebrow="Technical strengths" title="Broad enough to architect. Deep enough to build." />
          <div className="skills-list">
            {profile.skills.map(([group, skills]) => (
              <div className="skill-row" key={group}><h3>{group}</h3><p>{skills}</p></div>
            ))}
          </div>
        </section>

        <section id="certifications" className="section section-tinted certifications-section" aria-labelledby="certifications-title">
          <div className="shell">
            <SectionHeading eyebrow="Certifications" title="Validated cloud expertise." />
            <div className="certification-grid">
              {profile.certifications.map((certification) => (
                <article className="certification-card" key={certification}>
                  <div className="aws-mark" aria-hidden="true">AWS</div>
                  <div><p>Amazon Web Services</p><h3>{certification}</h3></div>
                </article>
              ))}
            </div>
            <a className="text-link" href={profile.certificationUrl} target="_blank" rel="noreferrer">Verify AWS certifications <ArrowUpRight /></a>
          </div>
        </section>

        <section id="recommendations" className="section recommendations-section" aria-labelledby="recommendations-title">
          <div className="shell">
            <div className="recommendations-header">
              <SectionHeading eyebrow="Recommendations" title="Trusted by the people I’ve worked with." intro="Feedback from engineering leaders and colleagues across the teams and systems we built together." />
              <a className="recommendations-verify" href={profile.recommendationsUrl} target="_blank" rel="noreferrer">
                Verify on LinkedIn <ArrowUpRight />
              </a>
            </div>
            <p className="recommendations-name-note">
              <span>Full name</span>
              Mir Md Azizur Rahman — some recommendations refer to Mir as “Azizur.”
            </p>
            <div className="recommendations-grid">
              {profile.recommendations.map((recommendation) => (
                <article className="recommendation-card" key={recommendation.name}>
                  <div className="quote-mark" aria-hidden="true">“</div>
                  <blockquote>{recommendation.quote}</blockquote>
                  <footer className="recommendation-author">
                    <div className="recommendation-avatar" aria-hidden="true">
                      {recommendation.name.split(" ").map((part) => part[0]).join("")}
                    </div>
                    <div>
                      <a href={recommendation.profileUrl} target="_blank" rel="noreferrer">
                        {recommendation.name} <ArrowUpRight />
                      </a>
                      <p>{recommendation.title}</p>
                    </div>
                  </footer>
                  <div className="recommendation-context">
                    <span>{recommendation.relationship}</span>
                    <time>{recommendation.date}</time>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell beyond-section" aria-labelledby="beyond-title">
          <SectionHeading eyebrow="Beyond the résumé" title="Writing, learning, and building." />
          <div className="beyond-grid">
            <a className="beyond-card" href="https://whywhywhy.ca" target="_blank" rel="noreferrer">
              <div><p>Engineering writing</p><h3>WhyWhyWhy</h3><span>Practical engineering conversations that start with “Why?”</span></div><ArrowUpRight />
            </a>
            <a className="beyond-card" href="https://cloudynix.ca" target="_blank" rel="noreferrer">
              <div><p>Consulting</p><h3>Cloudynix Technology Inc.</h3><span>Company and consulting presence.</span></div><ArrowUpRight />
            </a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="shell contact-inner">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something reliable.</h2>
            <p>Have a complex system to design, a platform to improve, or a senior engineering role to discuss? I’d be glad to hear about it.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}><Mail />{profile.email}</a>
            <div className="contact-meta">
              <span>{profile.location}</span>
              <div className="contact-socials" aria-label="Social profiles">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Mir Rahman on LinkedIn" title="LinkedIn">
                  <LinkedIn />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Mir Rahman on GitHub" title="GitHub">
                  <GitHub />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
