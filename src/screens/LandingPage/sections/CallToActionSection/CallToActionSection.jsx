import React from "react";

export const CallToActionSection = () => {
  const behavioralBiases = [
    {
      title: "Loss Aversion",
      description: "Fear of losing = selling too soon.",
      linkText: "DISPOSITION EFFECT",
      linkUrl: "https://en.wikipedia.org/wiki/Disposition_effect",
    },
    {
      title: "Overconfidence",
      description: "Thinking you're invincible = big mistakes.",
      linkText: "BEHAVIORAL BIASES",
      linkUrl:
        "https://kossolinger.com/investor-psychology-behavioral-biases-that-can-lead-to-costly-mistakes/",
    },
    {
      title: "Herd Mentality",
      description: "Following the crowd off a cliff.",
      linkText: "BEHAVIORAL BIASES",
      linkUrl:
        "https://online.mason.wm.edu/blog/behavioral-biases-that-can-impact-investing-decisions",
    },
  ];

  return (
    <section className="inline-flex items-start gap-10 px-0 py-10 absolute top-[3212px] left-[302px] border-t [border-top-style:solid] border-dekr-color-warm-pink-warm-pink-400">
      <header className="flex flex-col w-[482px] items-start gap-5 relative">
        <h2 className="relative self-stretch mt-[-1.00px] font-marketing-headline-2 font-[number:var(--marketing-headline-2-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-headline-2-font-size)] tracking-[var(--marketing-headline-2-letter-spacing)] leading-[var(--marketing-headline-2-line-height)] [font-style:var(--marketing-headline-2-font-style)]">
          Beat the Bad Habits of Investing
        </h2>

        <p className="relative self-stretch font-monospace-text font-[number:var(--monospace-text-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--monospace-text-font-size)] tracking-[var(--monospace-text-letter-spacing)] leading-[var(--monospace-text-line-height)] [font-style:var(--monospace-text-font-style)]">
          KNOW WHAT YOU&#39;RE DOING
          <br />
          —AND WHY YOU&apos;RE DOING IT.
        </p>
      </header>

      <div className="flex flex-col w-[485px] items-start gap-[34px] relative">
        {behavioralBiases.map((bias, index) => (
          <article
            key={index}
            className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
          >
            <div className="flex-col gap-2 self-stretch w-full flex-[0_0_auto] flex items-start relative">
              <h3
                className={`relative ${index === 0 ? "w-[351px]" : "self-stretch"} mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-warm-pink-warm-pink-400 text-2xl tracking-[0] leading-[27px]`}
              >
                {bias.title}
              </h3>

              <p
                className={`relative ${index === 0 ? "w-[351px]" : index === 2 ? "self-stretch h-7 whitespace-nowrap" : "self-stretch"} font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]`}
              >
                {bias.description}
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <a
                className="relative w-fit mt-[-1.00px] [font-family:'Geist_Mono',Helvetica] font-normal text-dekr-color-blue-blue-200 text-base tracking-[0] leading-10 whitespace-nowrap"
                href={bias.linkUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {bias.linkText}
              </a>

              <img
                className="relative w-[14.56px] h-[14.56px] mr-[-0.75px]"
                alt="External link"
                src="/img/group-1-1.png"
              />
            </div>
          </article>
        ))}
      </div>

      <div className="w-[482px] h-[218px] flex flex-col items-start gap-7">
        <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
          <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#f9e1d2] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
            Investors lose money not just because of bad picks—but because of
            bad psychology.
            <br />
          </span>
        </p>

        <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
          <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#f9e1d2] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
            Dekr fixes this.
            <br />
          </span>
        </p>

        <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
          <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#f9e1d2] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
            Our smart insights, bite-sized lessons, and steady coaching help you
            invest with *brains over feelings*.
          </span>
        </p>
      </div>
    </section>
  );
};
