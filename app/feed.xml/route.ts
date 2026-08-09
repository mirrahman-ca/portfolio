import { profile } from "@/data/profile";

const siteUrl = "https://mirrahman.ca";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const dynamic = "force-static";

export function GET() {
  const projectItems = profile.projects
    .map((project) => {
      const projectId = slugify(project.title);

      return `
    <item>
      <title>${escapeXml(project.title)}</title>
      <link>${siteUrl}/#projects</link>
      <guid isPermaLink="false">${siteUrl}/projects/${projectId}</guid>
      <category>${escapeXml(project.domain)}</category>
      <description>${escapeXml(`${project.description} Technologies: ${project.technologies}`)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${profile.name} — ${profile.title}`)}</title>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(profile.summary)}</description>
    <language>en-ca</language>
    <managingEditor>${escapeXml(`${profile.email} (${profile.name})`)}</managingEditor>
    <copyright>Copyright ${escapeXml(profile.name)}</copyright>
    <item>
      <title>${escapeXml(`${profile.name} — ${profile.title}`)}</title>
      <link>${siteUrl}/</link>
      <guid isPermaLink="true">${siteUrl}/</guid>
      <description>${escapeXml(`${profile.statement} ${profile.availability}`)}</description>
    </item>
    <item>
      <title>${escapeXml(`${profile.name} — Résumé`)}</title>
      <link>${siteUrl}/resume.pdf</link>
      <guid isPermaLink="true">${siteUrl}/resume.pdf</guid>
      <category>Résumé</category>
      <description>Download ${escapeXml(`${profile.name}'s résumé for experience, skills, certifications, and selected technical work.`)}</description>
    </item>${projectItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
