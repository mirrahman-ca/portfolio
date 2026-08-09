"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-heading",
  ".about-copy",
  ".impact-card",
  ".impact-callout",
  ".timeline-item",
  ".project-card",
  ".skill-row",
  ".certification-card",
  ".recommendations-name-note",
  ".recommendation-card",
  ".beyond-card",
  ".contact-inner > *",
].join(",");

export function AnimationController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    elements.forEach((element) => {
      const siblings = Array.from(element.parentElement?.children ?? []).filter((child) =>
        (child as HTMLElement).matches?.(revealSelector),
      );
      const position = siblings.indexOf(element);
      element.style.setProperty("--reveal-delay", `${Math.min(Math.max(position, 0), 5) * 70}ms`);
      element.classList.add("reveal-pending");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -9%", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
