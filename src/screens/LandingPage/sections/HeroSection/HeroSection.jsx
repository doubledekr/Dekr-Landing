import React from "react";

export const HeroSection = () => {
  const navigationItems = [
    { label: "How Dekr Works", href: "#how-it-works" },
    { label: "Learn", href: "#learn" },
    { label: "Community", href: "#community" },
  ];

  return (
    <header className="flex w-[1728px] h-[106px] items-center gap-[389px] px-[100px] py-5 absolute top-[310px] left-[202px] bg-[#f6f0dfa6] backdrop-blur-[4.45px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.45px)_brightness(100%)]">
      <img
        className="relative w-[123px] h-[43px]"
        alt="Dekr logo green"
        src="/img/dekr-logo-green.svg"
      />

      <nav className="inline-flex items-center gap-[73px] relative flex-[0_0_auto]">
        <ul className="flex w-[541px] items-center gap-[68px] px-5 py-0 relative list-none m-0">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-dark-teal-dark-teal-400 text-xl text-center tracking-[0] leading-[25px] whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <button
            type="button"
            className="all-[unset] box-border bg-dekr-color-warm-pink-warm-pink-500 border-dekr-theme-border inline-flex items-center justify-center gap-[var(--primitives-tailwindcss-spacing-1-5)] pt-[var(--dekr-2-5)] pr-[var(--dekr-3-5)] pb-[var(--dekr-2-5)] pl-[var(--dekr-3-5)] relative flex-[0_0_auto] rounded-[var(--primitives-tailwindcss-radius-md)] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] shadow-[2px_2px_0px_#c0b9a282] hover:transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#c0b9a282] transition-all cursor-pointer"
            aria-label="Join the waitlist"
          >
            <img
              className="relative w-6 h-6"
              alt=""
              src="/img/sealcheck.svg"
              aria-hidden="true"
            />

            <span className="relative w-fit mt-[-3.00px] font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-[color:var(--dekr-theme-secondary-text)] text-[length:var(--text-lg-medium-font-size)] text-center tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] whitespace-nowrap [font-style:var(--text-lg-medium-font-style)]">
              Join the Waitlist
            </span>
          </button>

          <a
            className="bg-dekr-color-mustard-mustard-200 border-dekr-color-smoke-purple-smoke-purple-500 inline-flex items-center justify-center gap-[var(--primitives-tailwindcss-spacing-1-5)] pt-[var(--dekr-2-5)] pr-[var(--dekr-3-5)] pb-[var(--dekr-2-5)] pl-[var(--dekr-3-5)] relative flex-[0_0_auto] rounded-[var(--primitives-tailwindcss-radius-md)] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] shadow-[2px_2px_0px_#c0b9a282] hover:transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#c0b9a282] transition-all"
            href="https://discord.gg/wQdWAVNzBN"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Join the Discord community"
          >
            <img
              className="relative w-6 h-6"
              alt=""
              src="/img/discordlogo.svg"
              aria-hidden="true"
            />

            <span className="text-dekr-color-smoke-purple-smoke-purple-500 text-[length:var(--text-lg-medium-font-size)] relative w-fit mt-[-3.00px] font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-center tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] whitespace-nowrap [font-style:var(--text-lg-medium-font-style)]">
              Join the Discord
            </span>
          </a>
        </div>
      </nav>

      <div className="relative w-[1728px] h-[93px] mt-[-13.50px] mb-[-13.50px] mr-[-2116.00px] bg-[#d9d9d9] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]" />
    </header>
  );
};
