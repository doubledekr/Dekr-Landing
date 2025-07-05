import React from "react";

export const GoalsSection = () => {
  const benefitsData = [
    {
      text: "Smart money moves aren't just about picking the right stocks. They're about understanding the game you're playing.",
      hasBreak: true,
    },
    {
      text: "Studies show that people with strong financial knowledge are:",
      hasBreak: true,
    },
    {
      text: "More likely to invest successfully",
      hasAsterisk: true,
    },
    {
      text: "Better at saving and planning for real goals",
      hasBreak: true,
    },
    {
      text: "Less likely to panic when the market wobbles",
      hasBreak: false,
    },
  ];

  const conclusionData = [
    {
      text: "Yet too many people are left to figure it out alone.",
      hasBreak: true,
    },
    {
      text: "Dekr changes that—with built-in education, real talk, and an AI coach who's always ready to explain things without the jargon.",
      hasBreak: false,
    },
  ];

  return (
    <section className="flex w-[1526px] items-start gap-10 px-0 py-10 absolute top-[2722px] left-[302px] border-t [border-top-style:solid] border-dekr-color-warm-pink-warm-pink-200">
      <header className="flex flex-col w-[482px] items-start gap-5 relative">
        <h2 className="relative self-stretch mt-[-1.00px] font-marketing-headline-2 font-[number:var(--marketing-headline-2-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-headline-2-font-size)] tracking-[var(--marketing-headline-2-letter-spacing)] leading-[var(--marketing-headline-2-line-height)] [font-style:var(--marketing-headline-2-font-style)]">
          Why Financial Literacy (and a Good Coach) Matters
        </h2>

        <p className="relative self-stretch font-monospace-text font-[number:var(--monospace-text-font-weight)] text-dekr-color-warm-pink-warm-pink-200 text-[length:var(--monospace-text-font-size)] tracking-[var(--monospace-text-letter-spacing)] leading-[var(--monospace-text-line-height)] [font-style:var(--monospace-text-font-style)]">
          STACK THE FUTURE IN YOUR FAVOR <br />
          WITH SKILLS THAT STICK.
        </p>
      </header>

      <div className="w-[482px] h-[272px] flex flex-col items-start gap-7">
        {benefitsData.map((benefit, index) => (
          <p
            key={index}
            className="self-stretch text-dekr-color-warm-pink-warm-pink-400 leading-[27px] relative [font-family:'Graphik-Regular',Helvetica] font-normal text-xl tracking-[0]"
          >
            <span className="text-[#f9e1d2] font-marketing-pagagraph [font-style:var(--marketing-pagagraph-font-style)] font-[number:var(--marketing-pagagraph-font-weight)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] text-[length:var(--marketing-pagagraph-font-size)]">
              {benefit.text}
            </span>
            {benefit.hasAsterisk && (
              <span className="text-[#8098c0] underline">
                *<br />
              </span>
            )}
            {benefit.hasBreak && !benefit.hasAsterisk && <br />}
          </p>
        ))}
      </div>

      <div className="w-[482px] h-[136px] flex flex-col items-start gap-7">
        {conclusionData.map((conclusion, index) => (
          <p
            key={index}
            className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]"
          >
            <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#f9e1d2] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
              {conclusion.text}
              {conclusion.hasBreak && <br />}
            </span>
          </p>
        ))}
      </div>
    </section>
  );
};
