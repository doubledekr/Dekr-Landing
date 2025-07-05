import React from "react";

export const LearnWithDekrSection = () => {
  const benefits = [
    "Exclusive early access",
    "Founding member perks",
    "A front-row seat to the future of investing and learning",
  ];

  return (
    <section className="inline-flex items-start gap-[131px] absolute top-[5072px] left-[301px]">
      <header className="relative w-[653px] mt-[-1.00px]">
        <h2 className="font-marketing-headline-1 font-[number:var(--marketing-headline-1-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-headline-1-font-size)] tracking-[var(--marketing-headline-1-letter-spacing)] leading-[var(--marketing-headline-1-line-height)] [font-style:var(--marketing-headline-1-font-style)]">
          Ready to Stack the Future in Your Favor?
        </h2>
      </header>

      <div className="flex flex-col w-[744px] items-start gap-10 relative">
        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-dark-teal-dark-teal-500 text-[32px] tracking-[0] leading-[35px]">
          Join the Dekr Waitlist Today
        </h3>

        <div className="relative self-stretch font-marketing-paragraph-24 font-[number:var(--marketing-paragraph-24-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-paragraph-24-font-size)] tracking-[var(--marketing-paragraph-24-letter-spacing)] leading-[var(--marketing-paragraph-24-line-height)] [font-style:var(--marketing-paragraph-24-font-style)]">
          <p className="mb-0">Early users get:</p>
          <ul className="list-none p-0 m-0">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <button
          className="all-[unset] box-border flex w-[222px] items-center justify-center gap-[var(--primitives-tailwindcss-spacing-1-5)] pt-[var(--dekr-5)] pr-[var(--dekr-5)] pb-[var(--dekr-5)] pl-[var(--dekr-5)] relative flex-[0_0_auto] bg-dekr-theme-primary-background rounded-[var(--primitives-tailwindcss-radius-md)] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] border-dekr-theme-border shadow-[2px_2px_0px_#c0b9a282] cursor-pointer hover:shadow-[1px_1px_0px_#c0b9a282] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-dekr-theme-border focus:ring-offset-2"
          type="button"
          aria-label="Join the Dekr waitlist"
        >
          <span className="text-dekr-theme-primary-text text-[length:var(--text-xl-medium-font-size)] relative w-fit mt-[-3.00px] font-text-xl-medium font-[number:var(--text-xl-medium-font-weight)] text-center tracking-[var(--text-xl-medium-letter-spacing)] leading-[var(--text-xl-medium-line-height)] whitespace-nowrap [font-style:var(--text-xl-medium-font-style)]">
            Join the Waitlist
          </span>
        </button>

        <div className="inline-flex h-[35px] items-end gap-2.5 relative">
          <p className="relative w-fit mt-[-1.00px] font-marketing-paragraph-24 font-[number:var(--marketing-paragraph-24-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-paragraph-24-font-size)] tracking-[var(--marketing-paragraph-24-letter-spacing)] leading-[var(--marketing-paragraph-24-line-height)] whitespace-nowrap [font-style:var(--marketing-paragraph-24-font-style)]">
            Or come say hello in
          </p>

          <div className="inline-flex items-end gap-px relative flex-[0_0_auto]">
            <a
              className="relative w-fit font-marketing-hyperlink font-[number:var(--marketing-hyperlink-font-weight)] text-dekr-color-blue-blue-500 text-[length:var(--marketing-hyperlink-font-size)] tracking-[var(--marketing-hyperlink-letter-spacing)] leading-[var(--marketing-hyperlink-line-height)] underline whitespace-nowrap [font-style:var(--marketing-hyperlink-font-style)] hover:text-dekr-color-blue-blue-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-dekr-color-blue-blue-500 focus:ring-offset-2 rounded-sm"
              href="https://discord.gg/wQdWAVNzBN"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Join our Discord community"
            >
              Discord
            </a>

            <span className="relative w-fit mt-[-1.00px] font-marketing-paragraph-24 font-[number:var(--marketing-paragraph-24-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-paragraph-24-font-size)] tracking-[var(--marketing-paragraph-24-letter-spacing)] leading-[var(--marketing-paragraph-24-line-height)] whitespace-nowrap [font-style:var(--marketing-paragraph-24-font-style)]">
              —we&apos;re building something special.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
