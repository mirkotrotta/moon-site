"use client";

import { LogoGithub, LogoLinkedin, Email } from "@carbon/icons-react";
import clsx from "clsx";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={clsx("flex gap-4", className)}>
      <a href="https://github.com/mirkotrotta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <LogoGithub size={36} className="hover:text-gray-900 dark:hover:text-white" />
      </a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LogoLinkedin size={36} className="hover:text-gray-900 dark:hover:text-white" />
      </a>
      <a href="mailto:you@example.com" aria-label="Email">
        <Email size={36} className="hover:text-gray-900 dark:hover:text-white" />
      </a>
    </div>
  );
}
