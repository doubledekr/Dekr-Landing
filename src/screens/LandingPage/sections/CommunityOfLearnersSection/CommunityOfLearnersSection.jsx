import React from "react";

export const CommunityOfLearnersSection = () => {
  const howDekrWorksSteps = [
    {
      id: 1,
      icon: "/img/numbercircleone.svg",
      title: "Discover Investment Opportunities",
      description:
        "Swipe through curated stock and crypto cards powered by Dekr's momentum model, showing you what's heating up (and why).",
    },
    {
      id: 2,
      icon: "/img/numbercircletwo.svg",
      title: "Learn with Every Interaction",
      descriptions: [
        "Every card teaches you something—fast facts, plain-English explanations, and smart moves.",
        "No MBA required.",
      ],
    },
    {
      id: 3,
      icon: "/img/numbercirclethree.svg",
      title: "Chat with Your AI Financial Coach",
      description:
        "Got a question? Confused by a term? Just ask. Our AI coach explains it clearly, instantly, like your smartest friend would.",
    },
    {
      id: 4,
      icon: "/img/numbercirclefour.svg",
      title: "Build and Manage Your Portfolio",
      descriptions: [
        "Create your personalized deck of investments, track performance, and adjust with confidence.",
        "Swipe left on confusion.",
      ],
    },
  ];

  return (
    <section className="flex flex-col w-[1525px] items-center gap-[85px] absolute top-[2049px] left-[302px]">
      <header className="relative self-stretch mt-[-1.00px] font-marketing-headline-1 font-[number:var(--marketing-headline-1-font-weight)] text-dekr-theme-secondary-background text-[length:var(--marketing-headline-1-font-size)] text-center tracking-[var(--marketing-headline-1-letter-spacing)] leading-[var(--marketing-headline-1-line-height)] [font-style:var(--marketing-headline-1-font-style)]">
        How Dekr Works
      </header>

      <div className="flex items-center gap-[39px] relative self-stretch w-full flex-[0_0_auto]">
        {howDekrWorksSteps.map((step) => (
          <article
            key={step.id}
            className="flex flex-col w-[352px] h-[368px] items-center gap-[31px] relative"
          >
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[65px] h-[65px]"
                alt={`Step ${step.id} icon`}
                src={step.icon}
              />

              <h3 className="relative self-stretch font-marketing-headline-2 font-[number:var(--marketing-headline-2-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-headline-2-font-size)] tracking-[var(--marketing-headline-2-letter-spacing)] leading-[var(--marketing-headline-2-line-height)] [font-style:var(--marketing-headline-2-font-style)]">
                {step.title}
              </h3>
            </div>

            {step.description ? (
              <p className="relative flex-1 self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                {step.description}
              </p>
            ) : (
              <div className="min-h-[142px] flex flex-col items-start gap-7">
                {step.descriptions.map((desc, index) => (
                  <p
                    key={index}
                    className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]"
                  >
                    <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#f9e1d2] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                      {desc}
                      {index === 0 && step.descriptions.length > 1 && <br />}
                    </span>
                  </p>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
