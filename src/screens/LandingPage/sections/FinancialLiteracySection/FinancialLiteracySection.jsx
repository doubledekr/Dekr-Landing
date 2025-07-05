import React from "react";

export const FinancialLiteracySection = () => {
  const goalsList = [
    "Save for a down payment",
    "Take that dream vacation",
    "Build a nest egg that actually matters",
    "Fund your kid's college dreams",
    "Retire the way you want",
  ];

  return (
    <section className="inline-flex items-start gap-10 px-0 py-10 absolute top-[1543px] left-[305px] border-t [border-top-style:solid] border-dekr-color-green-green-500">
      <div className="w-[1525px] gap-10 flex items-start relative">
        <header className="flex flex-col w-[740px] items-start gap-2 relative">
          <h2 className="relative w-fit mt-[-1.00px] font-marketing-headline-1 font-[number:var(--marketing-headline-1-font-weight)] text-dekr-color-green-green-500 text-[length:var(--marketing-headline-1-font-size)] tracking-[var(--marketing-headline-1-letter-spacing)] leading-[var(--marketing-headline-1-line-height)] whitespace-nowrap [font-style:var(--marketing-headline-1-font-style)]">
            Hit Your Real-Life Goals
          </h2>

          <p className="relative self-stretch h-8 font-monospace-text font-[number:var(--monospace-text-font-weight)] text-dekr-color-green-green-500 text-[length:var(--monospace-text-font-size)] tracking-[var(--monospace-text-letter-spacing)] leading-[var(--monospace-text-line-height)] whitespace-nowrap [font-style:var(--monospace-text-font-style)]">
            IF YOUR MONEY&apos;S JUST SITTING, IT&apos;S NOT GROWING.
          </p>
        </header>

        <div className="w-[745px] h-[338px] flex flex-col items-start gap-7">
          <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
            <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
              Smart investing turns &quot;maybe someday&quot; into
              &quot;definitely happening&quot;:
              <br />
            </span>
          </p>

          {goalsList.map((goal, index) => (
            <p
              key={index}
              className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]"
            >
              <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                {goal}
                <br />
              </span>
            </p>
          ))}

          <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
            <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
              With Dekr, you&apos;re not just throwing darts—you&apos;re taking
              shots with a coach who knows where the target is.
              <br />
            </span>
          </p>

          <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
            <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
              {""}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
