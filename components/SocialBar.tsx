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
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="flex size-11 shrink-0 items-center justify-center"
        >
          <span className="mix-blend-plus-lighter flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={link.icon} alt="" className="size-4" />
          </span>
        </a>
      ))}
    </footer>
  );
}
