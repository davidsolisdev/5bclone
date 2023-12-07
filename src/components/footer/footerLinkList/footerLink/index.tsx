import React from "react";

interface FooterLinkProps {
  href: string;
  text: string;
}

function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <li className="mb-4">
      <a
        href={href}
        className="text-xl hover:text-primary hover:underline hover:underline-offset-3"
      >
        {text}
      </a>
    </li>
  );
}

export default FooterLink;
