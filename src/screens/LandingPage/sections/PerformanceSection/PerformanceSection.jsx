import React from "react";

export const PerformanceSection = () => {
  const performanceData = [
    {
      strategy: "NASDAQ-100\nBuy and Hold (QQQ)",
      fiveYearReturn: "+154%",
      oneYearReturn: "+25%",
    },
    {
      strategy: "Dekr Momentum Model",
      fiveYearReturn: "+200%",
      oneYearReturn: "+35%",
    },
  ];

  return (
    <section className="flex flex-col w-[1728px] h-[683px] items-start gap-2.5 px-[474px] py-[79px] absolute top-[3726px] left-[201px] bg-dekr-color-dark-teal-dark-teal-500">
      <div className="flex flex-col w-[780px] items-center gap-7 relative flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] font-marketing-headline-2 font-[number:var(--marketing-headline-2-font-weight)] text-dekr-color-warm-pink-warm-pink-500 text-[length:var(--marketing-headline-2-font-size)] text-center tracking-[var(--marketing-headline-2-letter-spacing)] leading-[var(--marketing-headline-2-line-height)] [font-style:var(--marketing-headline-2-font-style)]">
          Momentum Model Performance
        </h2>

        <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-500 text-[length:var(--marketing-pagagraph-font-size)] text-center tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
          Smart investing isn&#39;t luck—it&#39;s strategy. Here&#39;s the
          proof:
        </p>

        <div
          className="flex flex-col items-start gap-[38px] p-10 relative self-stretch w-full flex-[0_0_auto] border border-solid border-dekr-color-warm-pink-warm-pink-500"
          role="table"
          aria-label="Performance comparison table"
        >
          <div
            className="flex items-center relative self-stretch w-full flex-[0_0_auto]"
            role="row"
          >
            <div
              className="relative w-[300px] h-[25px] mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-warm-pink-warm-pink-500 text-2xl tracking-[0] leading-[25px] whitespace-nowrap"
              role="columnheader"
            >
              Strategy
            </div>

            <div
              className="relative w-[200px] h-[25px] mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-warm-pink-warm-pink-500 text-2xl tracking-[0] leading-[25px] whitespace-nowrap"
              role="columnheader"
            >
              5-Year Return
            </div>

            <div
              className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-warm-pink-warm-pink-500 text-2xl tracking-[0] leading-[25px] whitespace-nowrap"
              role="columnheader"
            >
              1-Year Return
            </div>
          </div>

          {performanceData.map((row, index) => (
            <div
              key={index}
              className="flex items-start relative self-stretch w-full flex-[0_0_auto]"
              role="row"
            >
              <div
                className="relative w-[300px] h-[50px] mt-[-1.00px] [font-family:'Graphik-Regular',Helvetica] font-normal text-dekr-color-warm-pink-warm-pink-500 text-xl tracking-[0] leading-[25px]"
                role="cell"
              >
                {row.strategy.split("\n").map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < row.strategy.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>

              <div
                className="w-[200px] h-[25px] mt-[-1.00px] text-dekr-color-warm-pink-warm-pink-500 leading-[25px] whitespace-nowrap relative [font-family:'Graphik-Regular',Helvetica] font-normal text-xl tracking-[0]"
                role="cell"
              >
                {row.fiveYearReturn}
              </div>

              <div
                className="w-fit mt-[-1.00px] text-dekr-color-warm-pink-warm-pink-500 leading-[25px] whitespace-nowrap relative [font-family:'Graphik-Regular',Helvetica] font-normal text-xl tracking-[0]"
                role="cell"
              >
                {row.oneYearReturn}
              </div>
            </div>
          ))}
        </div>

        <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-500 text-[length:var(--marketing-pagagraph-font-size)] text-center tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
          That&#39;s nearly $5,000 more—simply by following smarter signals.
        </p>

        <p className="relative self-stretch font-monospace-text font-[number:var(--monospace-text-font-weight)] text-dekr-color-warm-pink-warm-pink-500 text-[length:var(--monospace-text-font-size)] text-center tracking-[var(--monospace-text-letter-spacing)] leading-[var(--monospace-text-line-height)] [font-style:var(--monospace-text-font-style)]">
          LESSON: CATCH THE RIGHT TRENDS, AND YOU RIDE HIGHER.
        </p>
      </div>
    </section>
  );
};
