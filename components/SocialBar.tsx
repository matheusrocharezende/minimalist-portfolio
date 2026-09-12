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

export default function SocialBar() {
  return (
    <footer className="flex w-full shrink-0 items-center justify-center gap-3 pb-4">
      {links.map((link) => {
        const isExternal = !link.href.startsWith("mailto:");

        return (
          <a
            key={link.name}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={link.name}
            className="mix-blend-plus-lighter flex size-11 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={link.icon} alt="" className="size-5" />
          </a>
        );
      })}
    </footer>
  );
}
