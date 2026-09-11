export default function Header() {
  return (
    <header className="flex w-full shrink-0 items-center justify-between px-6 pt-6 text-base font-bold tracking-wide uppercase md:px-10 md:pt-10">
      <div className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-mark.svg" alt="" className="size-4" />
        <p>Matheus Rocha</p>
      </div>
      <p>
        <span className="md:hidden">Designer</span>
        <span className="hidden md:inline">Brazilian Designer</span>
      </p>
    </header>
  );
}
