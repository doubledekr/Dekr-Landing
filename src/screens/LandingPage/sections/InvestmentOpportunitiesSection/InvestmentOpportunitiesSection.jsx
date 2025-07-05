import React from "react";

export const InvestmentOpportunitiesSection = () => {
  const communityFeatures = [
    "Investing shouldn't feel lonely. With Dekr, you join:",
    "A friendly Discord community",
    "A growing network of smart, curious investors",
    "A movement to make investing simple, social, and actually enjoyable",
  ];

  return (
    <section className="flex flex-col w-[738px] items-center gap-[46px] absolute top-[4477px] left-[696px]">
      <h2 className="relative self-stretch mt-[-1.00px] font-marketing-headline-2 font-[number:var(--marketing-headline-2-font-weight)] text-[color:var(--dekr-theme-secondary-text)] text-[length:var(--marketing-headline-2-font-size)] text-center tracking-[var(--marketing-headline-2-letter-spacing)] leading-[var(--marketing-headline-2-line-height)] [font-style:var(--marketing-headline-2-font-style)]">
        Join a Community of Learners
      </h2>

      <div className="w-[406px] h-[217px] flex flex-col items-start gap-7">
        {communityFeatures.map((feature, index) => (
          <p
            key={index}
            className="self-stretch text-[color:var(--dekr-theme-secondary-text)] leading-[var(--marketing-pagagraph-line-height)] relative font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)]"
          >
            <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#425627] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
              {feature}
              {index < communityFeatures.length - 1 && <br />}
            </span>
          </p>
        ))}
      </div>

      <p className="relative self-stretch font-monospace-text font-[number:var(--monospace-text-font-weight)] text-[color:var(--dekr-theme-secondary-text)] text-[length:var(--monospace-text-font-size)] text-center tracking-[var(--monospace-text-letter-spacing)] leading-[var(--monospace-text-line-height)] [font-style:var(--monospace-text-font-style)]">
        LEARN FROM OTHERS. SHARE WINS. CELEBRATE PROGRESS.
      </p>
    </section>
  );
};
