const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/matheusrocharezende/",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Email",
    href: "mailto:matheuxdesigner@gmail.com",
    icon: "/icons/mail.svg",
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
];

export default function SocialBar() {
  return (
    <footer className="flex w-full shrink-0 items-center justify-center gap-10 px-6 pb-10 md:gap-20 md:px-10 md:py-10">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="size-6 shrink-0 opacity-90 transition-opacity hover:opacity-100 md:size-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={link.icon} alt="" className="size-full" />
        </a>
      ))}
    </footer>
  );
}
