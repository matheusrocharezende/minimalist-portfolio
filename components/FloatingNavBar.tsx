"use client";

import { useScrollRevealed } from "./ScrollRevealProvider";

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/matheusrocharezende/",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/matheuspic/",
    icon: "/icons/instagram.svg",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/matheus60144783",
    icon: "/icons/x-twitter.svg",
  },
  {
    name: "Email",
    href: "mailto:matheuxdesigner@gmail.com",
    icon: "/icons/mail.svg",
  },
];

export default function FloatingNavBar() {
  const revealed = useScrollRevealed();

  return (
    <nav
      aria-hidden={!revealed}
      className={`fixed inset-x-0 bottom-6 z-50 mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 ease-out ${
        revealed
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      {links.map((link) => {
        const isExternal = !link.href.startsWith("mailto:");

        return (
          <a
            key={link.name}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={link.name}
            tabIndex={revealed ? 0 : -1}
            className="flex size-11 shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/15 active:scale-95"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={link.icon} alt="" className="size-5" />
          </a>
        );
      })}
    </nav>
  );
}
