import React from "react";

export const HowDekrWorksSection = () => {
  return (
    <section className="flex flex-col w-[742px] items-start gap-6 absolute top-[871px] left-[1087px]">
      <p className="relative self-stretch h-[133px] mt-[-1.00px] font-marketing-paragraph-24 font-[number:var(--marketing-paragraph-24-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-paragraph-24-font-size)] tracking-[var(--marketing-paragraph-24-letter-spacing)] leading-[var(--marketing-paragraph-24-line-height)] [font-style:var(--marketing-paragraph-24-font-style)]">
        Dekr combines real-time market signals with interactive financial
        education and an AI chat coach to help you invest confidently—even if
        you&#39;re just starting out.
      </p>

      <button
        className="all-[unset] box-border flex w-[222px] items-center justify-center gap-[var(--primitives-tailwindcss-spacing-1-5)] pt-[var(--dekr-5)] pr-[var(--dekr-5)] pb-[var(--dekr-5)] pl-[var(--dekr-5)] relative flex-[0_0_auto] bg-dekr-theme-primary-background rounded-[var(--primitives-tailwindcss-radius-md)] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] border-dekr-theme-border shadow-[2px_2px_0px_#c0b9a282] cursor-pointer hover:shadow-[1px_1px_0px_#c0b9a282] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-dekr-theme-border focus:ring-offset-2"
        type="button"
        aria-label="Join the Dekr waitlist"
      >
        <span className="text-dekr-theme-primary-text text-[length:var(--text-xl-medium-font-size)] relative w-fit mt-[-3.00px] font-text-xl-medium font-[number:var(--text-xl-medium-font-weight)] text-center tracking-[var(--text-xl-medium-letter-spacing)] leading-[var(--text-xl-medium-line-height)] whitespace-nowrap [font-style:var(--text-xl-medium-font-style)]">
          Join the Waitlist
        </span>
      </button>

      <div className="flex items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <span className="relative w-fit mt-[-1.00px] font-marketing-paragraph-24 font-[number:var(--marketing-paragraph-24-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-paragraph-24-font-size)] tracking-[var(--marketing-paragraph-24-letter-spacing)] leading-[var(--marketing-paragraph-24-line-height)] whitespace-nowrap [font-style:var(--marketing-paragraph-24-font-style)]">
          or
        </span>

        <a
          className="relative w-fit font-marketing-hyperlink font-[number:var(--marketing-hyperlink-font-weight)] text-dekr-color-blue-blue-500 text-[length:var(--marketing-hyperlink-font-size)] tracking-[var(--marketing-hyperlink-letter-spacing)] leading-[var(--marketing-hyperlink-line-height)] underline whitespace-nowrap [font-style:var(--marketing-hyperlink-font-style)] hover:text-dekr-color-blue-blue-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-dekr-color-blue-blue-500 focus:ring-offset-2 rounded-sm"
          href="https://discord.gg/wQdWAVNzBN"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Join our Discord community"
        >
          Join our Discord
        </a>

        <span className="relative w-fit mt-[-1.00px] mr-[-5.00px] font-marketing-paragraph-24 font-[number:var(--marketing-paragraph-24-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-paragraph-24-font-size)] tracking-[var(--marketing-paragraph-24-letter-spacing)] leading-[var(--marketing-paragraph-24-line-height)] whitespace-nowrap [font-style:var(--marketing-paragraph-24-font-style)]">
          to help shape the future of investing together.
        </span>
      </div>
    </section>
  );
};
