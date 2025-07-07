import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { DekrLogoGreen1 } from "../../icons/DekrLogoGreen1";
import { DekrLogoGreen2 } from "../../icons/DekrLogoGreen2";
import { DekrLogoGreen3 } from "../../icons/DekrLogoGreen3";
import { Discordlogo1 } from "../../icons/Discordlogo1";
import { FormatStrokeWeightLight1 } from "../../icons/FormatStrokeWeightLight1";
import { FormatStrokeWeightRegular2 } from "../../icons/FormatStrokeWeightRegular2";
import { List1 } from "../../icons/List1";
import { Numbercirclefour1 } from "../../icons/Numbercirclefour1";
import { Numbercircleone2 } from "../../icons/Numbercircleone2";
import { Numbercircletwo3 } from "../../icons/Numbercircletwo3";
import { Frame } from "./sections/Frame";
import { Top } from "./sections/Top";

export const ElementLandingPage = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className={`flex flex-col items-start bg-dekr-color-manilla-manilla-300 relative ${screenWidth < 768 ? "min-w-80" : (screenWidth >= 768 && screenWidth < 1200) ? "min-w-[768px]" : screenWidth >= 1200 && screenWidth < 1728 ? "min-w-[1200px]" : screenWidth >= 1728 ? "min-w-[1728px]" : ""}`}
      data-model-id="577:1230"
    >
      <div
        className={`w-full flex self-stretch items-center [-webkit-backdrop-filter:blur(4.45px)_brightness(100%)] bg-[#f6f0dfa6] backdrop-blur-[4.45px] backdrop-brightness-[100%] relative ${screenWidth < 768 ? "gap-[184px]" : (screenWidth >= 768 && screenWidth < 1200) ? "gap-[634px]" : screenWidth >= 1200 && screenWidth < 1728 ? "gap-[55px]" : screenWidth >= 1728 ? "gap-[389px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) || screenWidth < 768 ? "flex-[0_0_auto]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) || screenWidth < 768 ? "p-5" : (screenWidth >= 1728) ? "px-[100px] py-5" : ""} ${screenWidth >= 1728 ? "h-[106px]" : ""}`}
      >
        {((screenWidth >= 768 && screenWidth < 1200) || screenWidth < 768) && (
          <>
            <DekrLogoGreen3 className="!relative !w-[63px] !h-[22px]" />
            <List1
              className={
                screenWidth < 768
                  ? "!relative !w-8 !h-8"
                  : screenWidth >= 768 && screenWidth < 1200
                    ? "!relative !w-8 !h-8 !mr-[-1.00px]"
                    : undefined
              }
              color="#425627"
            />
          </>
        )}

        {screenWidth >= 1200 && screenWidth < 1728 && (
          <>
            <DekrLogoGreen2 className="!relative !w-[140px] !h-12" />
            <div className="flex items-center gap-[52px] relative flex-1 grow">
              <div className="inline-flex items-center gap-[70px] px-5 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-dark-teal-dark-teal-400 text-xl text-center tracking-[0] leading-[25px] whitespace-nowrap">
                  How Dekr Works
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-dark-teal-dark-teal-400 text-xl text-center tracking-[0] leading-[25px] whitespace-nowrap">
                  Learn
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-dark-teal-dark-teal-400 text-xl text-center tracking-[0] leading-[25px] whitespace-nowrap">
                  Community
                </div>
              </div>

              <div className="flex items-center gap-3 relative flex-1 grow">
                <div className="inline-flex pt-[var(--dekr-2-5)] pr-[var(--dekr-3-5)] pb-[var(--dekr-2-5)] pl-[var(--dekr-3-5)] bg-dekr-color-warm-pink-warm-pink-500 border-dekr-theme-border items-center justify-center gap-[var(--primitives-tailwindcss-spacing-1-5)] relative flex-[0_0_auto] rounded-[var(--primitives-tailwindcss-radius-md)] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] shadow-[2px_2px_0px_#c0b9a282]">
                  <FormatStrokeWeightRegular2
                    className="!relative !w-6 !h-6"
                    color="#425627"
                  />
                  <div className="text-[color:var(--dekr-theme-secondary-text)] text-[length:var(--text-lg-medium-font-size)] relative w-fit mt-[-3.00px] font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-center tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] whitespace-nowrap [font-style:var(--text-lg-medium-font-style)]">
                    Join the Waitlist
                  </div>
                </div>

                <a
                  className="inline-flex pt-[var(--dekr-2-5)] pr-[var(--dekr-3-5)] pb-[var(--dekr-2-5)] pl-[var(--dekr-3-5)] bg-dekr-color-mustard-mustard-200 border-dekr-color-smoke-purple-smoke-purple-500 items-center justify-center gap-[var(--primitives-tailwindcss-spacing-1-5)] relative flex-[0_0_auto] rounded-[var(--primitives-tailwindcss-radius-md)] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] shadow-[2px_2px_0px_#c0b9a282]"
                  href="https://discord.gg/wQdWAVNzBN"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Discordlogo1 className="!relative !w-6 !h-6" />
                  <div className="relative w-fit mt-[-3.00px] font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-dekr-color-smoke-purple-smoke-purple-500 text-[length:var(--text-lg-medium-font-size)] text-center tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] whitespace-nowrap [font-style:var(--text-lg-medium-font-style)]">
                    Join the Discord
                  </div>
                </a>
              </div>
            </div>
          </>
        )}

        {screenWidth >= 1728 && (
          <>
            <DekrLogoGreen1 className="!relative !w-[123px] !h-[43px]" />
            <div className="inline-flex items-center gap-[73px] relative flex-[0_0_auto]">
              <div className="flex w-[541px] items-center gap-[68px] px-5 py-0 relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-dark-teal-dark-teal-400 text-xl text-center tracking-[0] leading-[25px] whitespace-nowrap">
                  How Dekr Works
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-dark-teal-dark-teal-400 text-xl text-center tracking-[0] leading-[25px] whitespace-nowrap">
                  Learn
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-dark-teal-dark-teal-400 text-xl text-center tracking-[0] leading-[25px] whitespace-nowrap">
                  Community
                </div>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="inline-flex pt-[var(--dekr-2-5)] pr-[var(--dekr-3-5)] pb-[var(--dekr-2-5)] pl-[var(--dekr-3-5)] bg-dekr-color-warm-pink-warm-pink-500 border-dekr-theme-border items-center justify-center gap-[var(--primitives-tailwindcss-spacing-1-5)] relative flex-[0_0_auto] rounded-[var(--primitives-tailwindcss-radius-md)] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] shadow-[2px_2px_0px_#c0b9a282]">
                  <FormatStrokeWeightRegular2
                    className="!relative !w-6 !h-6"
                    color="#425627"
                  />
                  <div className="text-[color:var(--dekr-theme-secondary-text)] text-[length:var(--text-lg-medium-font-size)] relative w-fit mt-[-3.00px] font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-center tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] whitespace-nowrap [font-style:var(--text-lg-medium-font-style)]">
                    Join the Waitlist
                  </div>
                </div>

                <a
                  className="inline-flex pt-[var(--dekr-2-5)] pr-[var(--dekr-3-5)] pb-[var(--dekr-2-5)] pl-[var(--dekr-3-5)] bg-dekr-color-mustard-mustard-200 border-dekr-color-smoke-purple-smoke-purple-500 items-center justify-center gap-[var(--primitives-tailwindcss-spacing-1-5)] relative flex-[0_0_auto] rounded-[var(--primitives-tailwindcss-radius-md)] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] shadow-[2px_2px_0px_#c0b9a282]"
                  href="https://discord.gg/wQdWAVNzBN"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Discordlogo1 className="!relative !w-6 !h-6" />
                  <div className="relative w-fit mt-[-3.00px] font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-dekr-color-smoke-purple-smoke-purple-500 text-[length:var(--text-lg-medium-font-size)] text-center tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] whitespace-nowrap [font-style:var(--text-lg-medium-font-style)]">
                    Join the Discord
                  </div>
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="w-full flex self-stretch flex-col items-start flex-[0_0_auto] relative">
        {screenWidth < 768 && (
          <>
            <Top />
            <Frame />
          </>
        )}

        {((screenWidth >= 1200 && screenWidth < 1728) ||
          screenWidth >= 1728 ||
          (screenWidth >= 768 && screenWidth < 1200)) && (
          <>
            <div
              className={`w-full flex self-stretch flex-col items-start flex-[0_0_auto] relative ${screenWidth >= 1200 && screenWidth < 1728 ? "gap-[50px]" : ""}`}
            >
              <div
                className={`flex flex-col items-start gap-2.5 relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1200 && screenWidth < 1728) ? "w-[1200px]" : screenWidth >= 1728 ? "w-[1728px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "flex-[0_0_auto]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "px-10 py-0" : ""} ${screenWidth >= 1728 ? "h-[1736px]" : ""}`}
              >
                {screenWidth >= 768 && screenWidth < 1200 && (
                  <>
                    <img
                      className="absolute w-[768px] h-[321px] top-0 left-0"
                      alt="Frame"
                      src="/img/frame-67-1.png"
                    />

                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col items-center gap-5 px-0 py-5 relative self-stretch w-full flex-[0_0_auto] z-[1]">
                        <p className="mt-[-1.00px] [font-family:'Austin_News_Headline_Cond-Medium',Helvetica] font-medium text-dekr-color-mustard-mustard-600 text-8xl text-center leading-[83.5px] relative self-stretch tracking-[0]">
                          Stack the Future in Your Favor with Dekr.
                        </p>

                        <div className="relative w-[512px] h-[462px] bg-[url(/img/frame-56-1.png)] bg-cover bg-[50%_50%]" />

                        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex flex-col items-center pt-5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex-col items-start gap-5 flex relative self-stretch w-full flex-[0_0_auto]">
                              <p className="relative self-stretch mt-[-1.00px] font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                Dekr combines real-time market signals with
                                interactive financial education and an AI chat
                                coach to help you invest confidently—even if
                                you&#39;re just starting out.
                              </p>

                              <button className="all-[unset] box-border flex items-center justify-center gap-[var(--primitives-tailwindcss-spacing-1-5)] pt-[var(--dekr-5)] pr-[var(--dekr-5)] pb-[var(--dekr-5)] pl-[var(--dekr-5)] relative self-stretch w-full flex-[0_0_auto] bg-dekr-theme-primary-background rounded-[var(--primitives-tailwindcss-radius-md)] border-solid [border-top-style:solid] [border-right-style:solid] [border-bottom-style:solid] [border-left-style:solid] border-dekr-theme-border shadow-[2px_2px_0px_#c0b9a282]">
                                <div className="relative w-fit mt-[-3.00px] font-text-xl-medium font-[number:var(--text-xl-medium-font-weight)] text-dekr-theme-primary-text text-[length:var(--text-xl-medium-font-size)] text-center tracking-[var(--text-xl-medium-letter-spacing)] leading-[var(--text-xl-medium-line-height)] whitespace-nowrap [font-style:var(--text-xl-medium-font-style)]">
                                  Join the Waitlist
                                </div>
                              </button>

                              <div className="gap-2.5 flex flex-col items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
                                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                                  <div className="relative w-fit mt-[-1.00px] font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] whitespace-nowrap [font-style:var(--marketing-pagagraph-font-style)]">
                                    or
                                  </div>

                                  <a
                                    className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-blue-blue-500 text-xl tracking-[0] leading-8 underline whitespace-nowrap"
                                    href="https://discord.gg/wQdWAVNzBN"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Join our Discord
                                  </a>
                                </div>

                                <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  to help shape the future of investing
                                  together.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="gap-2.5 px-0 py-1 z-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="border-t [border-top-style:solid] border-dekr-color-green-green-500 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex flex-col items-start gap-10 px-0 py-10 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex-col items-start gap-2 flex relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative self-stretch mt-[-1.00px] font-marketing-headline-1 font-[number:var(--marketing-headline-1-font-weight)] text-dekr-color-green-green-500 text-[length:var(--marketing-headline-1-font-size)] tracking-[var(--marketing-headline-1-letter-spacing)] leading-[var(--marketing-headline-1-line-height)] [font-style:var(--marketing-headline-1-font-style)]">
                                  Hit Your Real-Life Goals
                                </div>

                                <p className="relative self-stretch font-monospace-text font-[number:var(--monospace-text-font-weight)] text-dekr-color-green-green-500 text-[length:var(--monospace-text-font-size)] tracking-[var(--monospace-text-letter-spacing)] leading-[var(--monospace-text-line-height)] [font-style:var(--monospace-text-font-style)]">
                                  IF YOUR MONEY’S JUST SITTING, IT’S NOT
                                  GROWING.
                                </p>
                              </div>

                              <div className="h-[272px] flex flex-col items-start gap-7">
                                <p className="self-stretch text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] leading-[var(--marketing-pagagraph-line-height)] relative font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    Smart investing turns “maybe someday” into
                                    “definitely happening”:
                                    <br />
                                  </span>
                                </p>

                                <p className="self-stretch text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] leading-[var(--marketing-pagagraph-line-height)] relative font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    Save for a down payment
                                    <br />
                                  </span>
                                </p>

                                <p className="self-stretch text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] leading-[var(--marketing-pagagraph-line-height)] relative font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    Take that dream vacation
                                    <br />
                                  </span>
                                </p>

                                <p className="self-stretch text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] leading-[var(--marketing-pagagraph-line-height)] relative font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    Build a nest egg that actually matters
                                    <br />
                                  </span>
                                </p>

                                <p className="self-stretch text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] leading-[var(--marketing-pagagraph-line-height)] relative font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    Fund your kid’s college dreams
                                    <br />
                                  </span>
                                </p>

                                <p className="self-stretch text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] leading-[var(--marketing-pagagraph-line-height)] relative font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    Retire the way you want
                                    <br />
                                  </span>
                                </p>

                                <p className="self-stretch text-dekr-color-green-green-500 text-[length:var(--marketing-pagagraph-font-size)] leading-[var(--marketing-pagagraph-line-height)] relative font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#536b31] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    With Dekr, you’re not just throwing
                                    darts—you’re taking shots with a coach who
                                    knows where the target is.
                                  </span>
                                </p>
                              </div>

                              <div className="flex flex-col w-[281px] h-[1042px] items-start absolute top-[-45px] left-0">
                                <div className="relative self-stretch w-full h-[719px]" />

                                <img
                                  className="relative w-[281px] h-[323px]"
                                  alt="Screenshot"
                                  src="/img/screenshot-2025-04-24-at-3-41-57-pm-1-3.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {((screenWidth >= 1200 && screenWidth < 1728) ||
                  screenWidth >= 1728) && (
                  <>
                    <div
                      className={`flex left-0 flex-col items-start top-0 absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1200px]" : (screenWidth >= 1728) ? "w-[1729px]" : ""}`}
                    >
                      <div
                        className={`flex flex-col items-start bg-[#f6f0df] relative ${screenWidth >= 1200 && screenWidth < 1728 ? "w-full" : (screenWidth >= 1728) ? "w-[1728px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "self-stretch" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[1205.56px]" : (screenWidth >= 1728) ? "h-[1736px]" : ""}`}
                      >
                        <div
                          className={`w-full self-stretch relative ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[977.08px]" : (screenWidth >= 1728) ? "h-[1407px]" : ""}`}
                        >
                          <div
                            className={`bg-[100%_100%] relative ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1146px]" : (screenWidth >= 1728) ? "w-[1650px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[27px]" : (screenWidth >= 1728) ? "left-[39px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[969px]" : (screenWidth >= 1728) ? "h-[1395px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "bg-[url(/img/group-97.png)]" : (screenWidth >= 1728) ? "bg-[url(/img/group.png)]" : ""}`}
                          >
                            <img
                              className={`left-0 top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1146px]" : (screenWidth >= 1728) ? "w-[1650px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[958px]" : (screenWidth >= 1728) ? "h-[1379px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-98.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-2.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`left-0 top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1146px]" : (screenWidth >= 1728) ? "w-[1650px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[947px]" : (screenWidth >= 1728) ? "h-[1363px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-99.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-4.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`left-0 top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1146px]" : (screenWidth >= 1728) ? "w-[1649px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[936px]" : (screenWidth >= 1728) ? "h-[1347px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-100.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-5.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1146px]" : (screenWidth >= 1728) ? "w-[1649px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-0" : (screenWidth >= 1728) ? "left-px" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[925px]" : (screenWidth >= 1728) ? "h-[1332px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-101.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-6.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`left-px top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1145px]" : (screenWidth >= 1728) ? "w-[1648px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[915px]" : (screenWidth >= 1728) ? "h-[1317px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-102.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-7.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1144px]" : (screenWidth >= 1728) ? "w-[1647px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-px" : (screenWidth >= 1728) ? "left-0.5" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[905px]" : (screenWidth >= 1728) ? "h-[1303px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-103.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-8.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`left-0.5 top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1143px]" : (screenWidth >= 1728) ? "w-[1645px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[896px]" : (screenWidth >= 1728) ? "h-[1290px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-104.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-9.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1141px]" : (screenWidth >= 1728) ? "w-[1643px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-0.5" : (screenWidth >= 1728) ? "left-[3px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[887px]" : (screenWidth >= 1728) ? "h-[1276px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-105.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-10.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1140px]" : (screenWidth >= 1728) ? "w-[1640px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[3px]" : (screenWidth >= 1728) ? "left-[5px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[878px]" : (screenWidth >= 1728) ? "h-[1264px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-106.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-11.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1137px]" : (screenWidth >= 1728) ? "w-[1637px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-1" : (screenWidth >= 1728) ? "left-1.5" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[870px]" : (screenWidth >= 1728) ? "h-[1252px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-107.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-12.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1135px]" : (screenWidth >= 1728) ? "w-[1633px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-1.5" : (screenWidth >= 1728) ? "left-2" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[862px]" : (screenWidth >= 1728) ? "h-[1241px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-108.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-13.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1132px]" : (screenWidth >= 1728) ? "w-[1629px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[7px]" : (screenWidth >= 1728) ? "left-[11px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[854px]" : (screenWidth >= 1728) ? "h-[1230px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-109.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-14.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1128px]" : (screenWidth >= 1728) ? "w-[1624px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[9px]" : (screenWidth >= 1728) ? "left-[13px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[847px]" : (screenWidth >= 1728) ? "h-[1220px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-110.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-15.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1124px]" : (screenWidth >= 1728) ? "w-[1618px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[11px]" : (screenWidth >= 1728) ? "left-4" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[841px]" : (screenWidth >= 1728) ? "h-[1211px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-111.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-16.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1120px]" : (screenWidth >= 1728) ? "w-[1612px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[13px]" : (screenWidth >= 1728) ? "left-[19px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[835px]" : (screenWidth >= 1728) ? "h-[1202px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-112.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-17.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1115px]" : (screenWidth >= 1728) ? "w-[1604px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-4" : (screenWidth >= 1728) ? "left-[23px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[829px]" : (screenWidth >= 1728) ? "h-[1194px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-113.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-18.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1109px]" : (screenWidth >= 1728) ? "w-[1597px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[18px]" : (screenWidth >= 1728) ? "left-[27px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[824px]" : (screenWidth >= 1728) ? "h-[1186px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-114.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-19.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1104px]" : (screenWidth >= 1728) ? "w-[1588px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[21px]" : (screenWidth >= 1728) ? "left-[31px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[819px]" : (screenWidth >= 1728) ? "h-[1179px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-115.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-20.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1097px]" : (screenWidth >= 1728) ? "w-[1579px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[25px]" : (screenWidth >= 1728) ? "left-[35px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[815px]" : (screenWidth >= 1728) ? "h-[1173px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-116.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-21.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1090px]" : (screenWidth >= 1728) ? "w-[1569px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-7" : (screenWidth >= 1728) ? "left-10" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[811px]" : (screenWidth >= 1728) ? "h-[1168px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-117.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-22.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1083px]" : (screenWidth >= 1728) ? "w-[1559px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-8" : (screenWidth >= 1728) ? "left-[45px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[808px]" : (screenWidth >= 1728) ? "h-[1163px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-118.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-23.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1075px]" : (screenWidth >= 1728) ? "w-[1548px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-9" : (screenWidth >= 1728) ? "left-[51px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[805px]" : (screenWidth >= 1728) ? "h-[1158px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-119.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-24.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1067px]" : (screenWidth >= 1728) ? "w-[1536px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-10" : (screenWidth >= 1728) ? "left-[57px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[802px]" : (screenWidth >= 1728) ? "h-[1154px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-120.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-25.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1058px]" : (screenWidth >= 1728) ? "w-[1523px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-11" : (screenWidth >= 1728) ? "left-[63px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[800px]" : (screenWidth >= 1728) ? "h-[1151px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-121.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-26.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1049px]" : (screenWidth >= 1728) ? "w-[1510px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[49px]" : (screenWidth >= 1728) ? "left-[70px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[798px]" : (screenWidth >= 1728) ? "h-[1148px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-122.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-27.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1040px]" : (screenWidth >= 1728) ? "w-[1496px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[53px]" : (screenWidth >= 1728) ? "left-[77px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[796px]" : (screenWidth >= 1728) ? "h-[1146px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-123.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-28.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1030px]" : (screenWidth >= 1728) ? "w-[1482px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[58px]" : (screenWidth >= 1728) ? "left-[84px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[794px]" : (screenWidth >= 1728) ? "h-[1144px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-124.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-29.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`top-0 mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1019px]" : (screenWidth >= 1728) ? "w-[1467px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-16" : (screenWidth >= 1728) ? "left-[91px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[793px]" : (screenWidth >= 1728) ? "h-[1142px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-125.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-30.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1008px]" : (screenWidth >= 1728) ? "w-[1451px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[69px]" : (screenWidth >= 1728) ? "left-[99px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-0" : (screenWidth >= 1728) ? "top-px" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[792px]" : (screenWidth >= 1728) ? "h-[1140px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-126.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-31.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[997px]" : (screenWidth >= 1728) ? "w-[1435px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[74px]" : (screenWidth >= 1728) ? "left-[107px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-px" : (screenWidth >= 1728) ? "top-0.5" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[791px]" : (screenWidth >= 1728) ? "h-[1138px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-127.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-32.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[986px]" : (screenWidth >= 1728) ? "w-[1419px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-20" : (screenWidth >= 1728) ? "left-[115px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-px" : (screenWidth >= 1728) ? "top-0.5" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[789px]" : (screenWidth >= 1728) ? "h-[1136px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-128.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-33.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[974px]" : (screenWidth >= 1728) ? "w-[1402px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[86px]" : (screenWidth >= 1728) ? "left-[124px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-0.5" : (screenWidth >= 1728) ? "top-[3px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[789px]" : (screenWidth >= 1728) ? "h-[1135px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-129.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-34.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[962px]" : (screenWidth >= 1728) ? "w-[1384px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[92px]" : (screenWidth >= 1728) ? "left-[133px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-0.5" : (screenWidth >= 1728) ? "top-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[788px]" : (screenWidth >= 1728) ? "h-[1134px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-130.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-35.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[949px]" : (screenWidth >= 1728) ? "w-[1366px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[99px]" : (screenWidth >= 1728) ? "left-[142px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-0.5" : (screenWidth >= 1728) ? "top-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[788px]" : (screenWidth >= 1728) ? "h-[1133px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-131.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-36.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[936px]" : (screenWidth >= 1728) ? "w-[1348px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[105px]" : (screenWidth >= 1728) ? "left-[151px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[3px]" : (screenWidth >= 1728) ? "top-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[787px]" : (screenWidth >= 1728) ? "h-[1133px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-132.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-37.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[923px]" : (screenWidth >= 1728) ? "w-[1329px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-28" : (screenWidth >= 1728) ? "left-40" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[3px]" : (screenWidth >= 1728) ? "top-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[787px]" : (screenWidth >= 1728) ? "h-[1133px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-133.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-38.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[910px]" : (screenWidth >= 1728) ? "w-[1310px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[118px]" : (screenWidth >= 1728) ? "left-[170px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[3px]" : (screenWidth >= 1728) ? "top-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[787px]" : (screenWidth >= 1728) ? "h-[1133px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-134.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-39.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[896px]" : (screenWidth >= 1728) ? "w-[1290px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[125px]" : (screenWidth >= 1728) ? "left-[180px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[3px]" : (screenWidth >= 1728) ? "top-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[787px]" : (screenWidth >= 1728) ? "h-[1133px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-135.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-40.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[883px]" : (screenWidth >= 1728) ? "w-[1270px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[132px]" : (screenWidth >= 1728) ? "left-[190px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[3px]" : (screenWidth >= 1728) ? "top-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[787px]" : (screenWidth >= 1728) ? "h-[1133px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-136.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-41.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[869px]" : (screenWidth >= 1728) ? "w-[1250px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[139px]" : (screenWidth >= 1728) ? "left-[200px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[3px]" : (screenWidth >= 1728) ? "top-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[787px]" : (screenWidth >= 1728) ? "h-[1133px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-137.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-42.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[855px]" : (screenWidth >= 1728) ? "w-[1230px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[146px]" : (screenWidth >= 1728) ? "left-[210px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[3px]" : (screenWidth >= 1728) ? "top-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[787px]" : (screenWidth >= 1728) ? "h-[1132px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-138.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-43.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[840px]" : (screenWidth >= 1728) ? "w-[1210px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[153px]" : (screenWidth >= 1728) ? "left-[220px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[3px]" : (screenWidth >= 1728) ? "top-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[787px]" : (screenWidth >= 1728) ? "h-[1132px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-139.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-44.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[826px]" : (screenWidth >= 1728) ? "w-[1189px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-40" : (screenWidth >= 1728) ? "left-[230px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[3px]" : (screenWidth >= 1728) ? "top-[5px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[786px]" : (screenWidth >= 1728) ? "h-[1131px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-140.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-45.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[812px]" : (screenWidth >= 1728) ? "w-[1168px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[167px]" : (screenWidth >= 1728) ? "left-[241px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[3px]" : (screenWidth >= 1728) ? "top-[5px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[786px]" : (screenWidth >= 1728) ? "h-[1131px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-141.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-46.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[797px]" : (screenWidth >= 1728) ? "w-[1148px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[174px]" : (screenWidth >= 1728) ? "left-[251px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-1" : (screenWidth >= 1728) ? "top-1.5" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[785px]" : (screenWidth >= 1728) ? "h-[1130px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-142.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-47.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[783px]" : (screenWidth >= 1728) ? "w-[1127px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[182px]" : (screenWidth >= 1728) ? "left-[262px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-1" : (screenWidth >= 1728) ? "top-1.5" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[784px]" : (screenWidth >= 1728) ? "h-[1128px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-143.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-48.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[768px]" : (screenWidth >= 1728) ? "w-[1106px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[189px]" : (screenWidth >= 1728) ? "left-[272px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[5px]" : (screenWidth >= 1728) ? "top-[7px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[783px]" : (screenWidth >= 1728) ? "h-[1126px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-144.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-49.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[754px]" : (screenWidth >= 1728) ? "w-[1085px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[196px]" : (screenWidth >= 1728) ? "left-[282px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-1.5" : (screenWidth >= 1728) ? "top-2" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[781px]" : (screenWidth >= 1728) ? "h-[1124px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-145.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-50.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[740px]" : (screenWidth >= 1728) ? "w-[1064px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[203px]" : (screenWidth >= 1728) ? "left-[293px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-1.5" : (screenWidth >= 1728) ? "top-2.5" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[779px]" : (screenWidth >= 1728) ? "h-[1122px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-146.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-51.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[725px]" : (screenWidth >= 1728) ? "w-[1044px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[210px]" : (screenWidth >= 1728) ? "left-[303px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[7px]" : (screenWidth >= 1728) ? "top-[11px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[777px]" : (screenWidth >= 1728) ? "h-[1119px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-147.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-52.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[711px]" : (screenWidth >= 1728) ? "w-[1024px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[218px]" : (screenWidth >= 1728) ? "left-[313px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[9px]" : (screenWidth >= 1728) ? "top-[13px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[775px]" : (screenWidth >= 1728) ? "h-[1116px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-148.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-53.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[697px]" : (screenWidth >= 1728) ? "w-[1003px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[225px]" : (screenWidth >= 1728) ? "left-[323px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-2.5" : (screenWidth >= 1728) ? "top-[15px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[772px]" : (screenWidth >= 1728) ? "h-[1112px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-149.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-54.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[683px]" : (screenWidth >= 1728) ? "w-[983px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[231px]" : (screenWidth >= 1728) ? "left-[333px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[11px]" : (screenWidth >= 1728) ? "top-[17px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[769px]" : (screenWidth >= 1728) ? "h-[1107px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-150.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-55.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[670px]" : (screenWidth >= 1728) ? "w-[964px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[238px]" : (screenWidth >= 1728) ? "left-[343px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[13px]" : (screenWidth >= 1728) ? "top-[19px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[766px]" : (screenWidth >= 1728) ? "h-[1103px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-151.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-56.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[656px]" : (screenWidth >= 1728) ? "w-[945px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[245px]" : (screenWidth >= 1728) ? "left-[353px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[15px]" : (screenWidth >= 1728) ? "top-[22px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[763px]" : (screenWidth >= 1728) ? "h-[1097px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-152.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-57.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[643px]" : (screenWidth >= 1728) ? "w-[926px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[252px]" : (screenWidth >= 1728) ? "left-[362px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[17px]" : (screenWidth >= 1728) ? "top-[25px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[759px]" : (screenWidth >= 1728) ? "h-[1092px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-153.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-58.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[630px]" : (screenWidth >= 1728) ? "w-[907px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[258px]" : (screenWidth >= 1728) ? "left-[371px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[19px]" : (screenWidth >= 1728) ? "top-7" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[754px]" : (screenWidth >= 1728) ? "h-[1086px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-154.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-59.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[618px]" : (screenWidth >= 1728) ? "w-[889px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[264px]" : (screenWidth >= 1728) ? "left-[380px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[21px]" : (screenWidth >= 1728) ? "top-[31px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[750px]" : (screenWidth >= 1728) ? "h-[1079px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-155.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-60.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[606px]" : (screenWidth >= 1728) ? "w-[872px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[270px]" : (screenWidth >= 1728) ? "left-[389px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-6" : (screenWidth >= 1728) ? "top-[35px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[745px]" : (screenWidth >= 1728) ? "h-[1072px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-156.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-61.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[594px]" : (screenWidth >= 1728) ? "w-[855px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[276px]" : (screenWidth >= 1728) ? "left-[397px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[26px]" : (screenWidth >= 1728) ? "top-[38px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[739px]" : (screenWidth >= 1728) ? "h-[1064px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-157.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-62.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[583px]" : (screenWidth >= 1728) ? "w-[838px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[282px]" : (screenWidth >= 1728) ? "left-[406px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[29px]" : (screenWidth >= 1728) ? "top-[42px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[734px]" : (screenWidth >= 1728) ? "h-[1056px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-158.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-63.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[572px]" : (screenWidth >= 1728) ? "w-[822px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[287px]" : (screenWidth >= 1728) ? "left-[414px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-8" : (screenWidth >= 1728) ? "top-[47px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[728px]" : (screenWidth >= 1728) ? "h-[1048px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-159.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-64.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[561px]" : (screenWidth >= 1728) ? "w-[807px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[293px]" : (screenWidth >= 1728) ? "left-[421px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[35px]" : (screenWidth >= 1728) ? "top-[51px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[722px]" : (screenWidth >= 1728) ? "h-[1039px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-160.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-65.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[551px]" : (screenWidth >= 1728) ? "w-[793px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[298px]" : (screenWidth >= 1728) ? "left-[429px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[39px]" : (screenWidth >= 1728) ? "top-14" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[715px]" : (screenWidth >= 1728) ? "h-[1030px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-161.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-66.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[541px]" : (screenWidth >= 1728) ? "w-[779px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[303px]" : (screenWidth >= 1728) ? "left-[436px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[42px]" : (screenWidth >= 1728) ? "top-[61px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[709px]" : (screenWidth >= 1728) ? "h-[1020px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-162.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-67.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[532px]" : (screenWidth >= 1728) ? "w-[765px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[307px]" : (screenWidth >= 1728) ? "left-[442px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[45px]" : (screenWidth >= 1728) ? "top-[66px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[701px]" : (screenWidth >= 1728) ? "h-[1010px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-163.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-68.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[523px]" : (screenWidth >= 1728) ? "w-[753px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[312px]" : (screenWidth >= 1728) ? "left-[448px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[49px]" : (screenWidth >= 1728) ? "top-[71px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[694px]" : (screenWidth >= 1728) ? "h-[999px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-164.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-69.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[515px]" : (screenWidth >= 1728) ? "w-[741px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[316px]" : (screenWidth >= 1728) ? "left-[454px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[53px]" : (screenWidth >= 1728) ? "top-[76px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[686px]" : (screenWidth >= 1728) ? "h-[988px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-165.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-70.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[507px]" : (screenWidth >= 1728) ? "w-[730px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-80" : (screenWidth >= 1728) ? "left-[460px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[57px]" : (screenWidth >= 1728) ? "top-[82px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[679px]" : (screenWidth >= 1728) ? "h-[977px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-166.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-71.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[500px]" : (screenWidth >= 1728) ? "w-[719px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[323px]" : (screenWidth >= 1728) ? "left-[465px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[61px]" : (screenWidth >= 1728) ? "top-[88px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[670px]" : (screenWidth >= 1728) ? "h-[965px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-167.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-72.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[493px]" : (screenWidth >= 1728) ? "w-[709px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[327px]" : (screenWidth >= 1728) ? "left-[470px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[65px]" : (screenWidth >= 1728) ? "top-[94px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[662px]" : (screenWidth >= 1728) ? "h-[953px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-168.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-73.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[487px]" : (screenWidth >= 1728) ? "w-[700px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[330px]" : (screenWidth >= 1728) ? "left-[475px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[69px]" : (screenWidth >= 1728) ? "top-[100px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[654px]" : (screenWidth >= 1728) ? "h-[941px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-169.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-74.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[481px]" : (screenWidth >= 1728) ? "w-[692px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[333px]" : (screenWidth >= 1728) ? "left-[479px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[74px]" : (screenWidth >= 1728) ? "top-[106px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[645px]" : (screenWidth >= 1728) ? "h-[928px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-170.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-75.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[476px]" : (screenWidth >= 1728) ? "w-[685px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[335px]" : (screenWidth >= 1728) ? "left-[483px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[78px]" : (screenWidth >= 1728) ? "top-[113px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[636px]" : (screenWidth >= 1728) ? "h-[915px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-171.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-76.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[471px]" : (screenWidth >= 1728) ? "w-[678px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[338px]" : (screenWidth >= 1728) ? "left-[486px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[83px]" : (screenWidth >= 1728) ? "top-[119px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[627px]" : (screenWidth >= 1728) ? "h-[902px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-172.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-77.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[467px]" : (screenWidth >= 1728) ? "w-[672px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[340px]" : (screenWidth >= 1728) ? "left-[489px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[87px]" : (screenWidth >= 1728) ? "top-[126px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[618px]" : (screenWidth >= 1728) ? "h-[889px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-173.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-78.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[463px]" : (screenWidth >= 1728) ? "w-[666px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[342px]" : (screenWidth >= 1728) ? "left-[492px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[92px]" : (screenWidth >= 1728) ? "top-[133px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[608px]" : (screenWidth >= 1728) ? "h-[875px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-174.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-79.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[460px]" : (screenWidth >= 1728) ? "w-[661px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[343px]" : (screenWidth >= 1728) ? "left-[494px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[97px]" : (screenWidth >= 1728) ? "top-[140px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[599px]" : (screenWidth >= 1728) ? "h-[862px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-175.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-80.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[457px]" : (screenWidth >= 1728) ? "w-[657px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[345px]" : (screenWidth >= 1728) ? "left-[496px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[102px]" : (screenWidth >= 1728) ? "top-[147px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[589px]" : (screenWidth >= 1728) ? "h-[848px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-176.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-81.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[454px]" : (screenWidth >= 1728) ? "w-[653px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[346px]" : (screenWidth >= 1728) ? "left-[498px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[107px]" : (screenWidth >= 1728) ? "top-[154px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[579px]" : (screenWidth >= 1728) ? "h-[834px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-177.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-82.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[452px]" : (screenWidth >= 1728) ? "w-[650px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[347px]" : (screenWidth >= 1728) ? "left-[500px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[111px]" : (screenWidth >= 1728) ? "top-[161px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[569px]" : (screenWidth >= 1728) ? "h-[820px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-178.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-83.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[450px]" : (screenWidth >= 1728) ? "w-[648px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[348px]" : (screenWidth >= 1728) ? "left-[501px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[116px]" : (screenWidth >= 1728) ? "top-[168px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[560px]" : (screenWidth >= 1728) ? "h-[805px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-179.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-84.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[448px]" : (screenWidth >= 1728) ? "w-[645px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[349px]" : (screenWidth >= 1728) ? "left-[502px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[121px]" : (screenWidth >= 1728) ? "top-[175px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[550px]" : (screenWidth >= 1728) ? "h-[791px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-180.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-85.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[447px]" : (screenWidth >= 1728) ? "w-[644px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[350px]" : (screenWidth >= 1728) ? "left-[503px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[126px]" : (screenWidth >= 1728) ? "top-[182px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[540px]" : (screenWidth >= 1728) ? "h-[777px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-181.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-86.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[446px]" : (screenWidth >= 1728) ? "w-[642px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[350px]" : (screenWidth >= 1728) ? "left-[504px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[131px]" : (screenWidth >= 1728) ? "top-[189px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[530px]" : (screenWidth >= 1728) ? "h-[763px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-182.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-87.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[445px]" : (screenWidth >= 1728) ? "w-[641px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[350px]" : (screenWidth >= 1728) ? "left-[504px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[136px]" : (screenWidth >= 1728) ? "top-[196px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[520px]" : (screenWidth >= 1728) ? "h-[748px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-183.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-88.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[445px]" : (screenWidth >= 1728) ? "w-[640px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[351px]" : (screenWidth >= 1728) ? "left-[505px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[141px]" : (screenWidth >= 1728) ? "top-[204px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[510px]" : (screenWidth >= 1728) ? "h-[734px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-184.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-89.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[444px]" : (screenWidth >= 1728) ? "w-[639px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[351px]" : (screenWidth >= 1728) ? "left-[505px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[146px]" : (screenWidth >= 1728) ? "top-[211px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[500px]" : (screenWidth >= 1728) ? "h-[720px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-185.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-90.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[444px]" : (screenWidth >= 1728) ? "w-[639px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[351px]" : (screenWidth >= 1728) ? "left-[505px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[151px]" : (screenWidth >= 1728) ? "top-[218px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[490px]" : (screenWidth >= 1728) ? "h-[706px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-186.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-91.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[444px]" : (screenWidth >= 1728) ? "w-[639px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[351px]" : (screenWidth >= 1728) ? "left-[506px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[156px]" : (screenWidth >= 1728) ? "top-[225px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[481px]" : (screenWidth >= 1728) ? "h-[692px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-187.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-92.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[444px]" : (screenWidth >= 1728) ? "w-[638px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[351px]" : (screenWidth >= 1728) ? "left-[506px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[161px]" : (screenWidth >= 1728) ? "top-[231px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[471px]" : (screenWidth >= 1728) ? "h-[678px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-188.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-93.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[443px]" : (screenWidth >= 1728) ? "w-[638px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[351px]" : (screenWidth >= 1728) ? "left-[506px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[165px]" : (screenWidth >= 1728) ? "top-[238px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[462px]" : (screenWidth >= 1728) ? "h-[665px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-189.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-94.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[443px]" : (screenWidth >= 1728) ? "w-[638px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[351px]" : (screenWidth >= 1728) ? "left-[506px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[170px]" : (screenWidth >= 1728) ? "top-[245px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[453px]" : (screenWidth >= 1728) ? "h-[651px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-190.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-95.png"
                                    : undefined
                              }
                            />

                            <img
                              className={`mix-blend-screen absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[443px]" : (screenWidth >= 1728) ? "w-[638px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[351px]" : (screenWidth >= 1728) ? "left-[506px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-[174px]" : (screenWidth >= 1728) ? "top-[251px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[444px]" : (screenWidth >= 1728) ? "h-[638px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-191.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-96.png"
                                    : undefined
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-full flex self-stretch flex-col items-start relative ${screenWidth >= 1200 && screenWidth < 1728 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 1728 ? "h-[1489px]" : ""}`}
                    >
                      <div
                        className={`flex flex-col items-center gap-[60px] flex-[0_0_auto] z-[1] pt-[95px] pb-8 px-0 relative ${screenWidth >= 1200 && screenWidth < 1728 ? "w-full" : (screenWidth >= 1728) ? "w-[1728px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "self-stretch" : ""}`}
                      >
                        <p className="[font-family:'Austin_News_Headline_Cond-Medium',Helvetica] w-[1010px] mt-[-1.00px] tracking-[0] text-9xl text-dekr-color-mustard-mustard-600 relative font-medium text-center leading-[113px]">
                          Stack the Future in Your Favor with Dekr.
                        </p>

                        <div className="w-full flex self-stretch items-start flex-[0_0_auto] justify-between relative">
                          <div
                            className={`flex flex-col items-end overflow-hidden relative ${screenWidth >= 1728 ? "w-[838px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "grow" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "flex-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[567px]" : ""}`}
                          >
                            <img
                              className={`relative ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[600px]" : (screenWidth >= 1728) ? "w-[838px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[558px]" : (screenWidth >= 1728) ? "h-[730.89px]" : ""}`}
                              alt="Group"
                              src={
                                screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-4-2.png"
                                  : screenWidth >= 1728
                                    ? "/img/group-4-1.png"
                                    : undefined
                              }
                            />

                            <div
                              className={`w-[962px] h-[26px] relative ${screenWidth >= 1200 && screenWidth < 1728 ? "ml-[-362.00px]" : (screenWidth >= 1728) ? "ml-[-124.00px]" : ""}`}
                            />
                          </div>

                          <div
                            className={`flex flex-col items-center pl-0 pr-[95px] pt-[95px] pb-0 relative ${screenWidth >= 1728 ? "w-[838px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "grow" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "flex-1" : ""}`}
                          >
                            <div className="w-full flex self-stretch items-start flex-[0_0_auto] relative">
                              <div
                                className={`flex flex-col items-start gap-6 relative ${screenWidth >= 1728 ? "w-[742px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "grow" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "flex-1" : ""}`}
                              >
                                <p className="font-marketing-paragraph-24 self-stretch mt-[-1.00px] tracking-[var(--marketing-paragraph-24-letter-spacing)] text-[length:var(--marketing-paragraph-24-font-size)] [font-style:var(--marketing-paragraph-24-font-style)] text-dekr-color-dark-teal-dark-teal-500 h-[133px] font-[number:var(--marketing-paragraph-24-font-weight)] leading-[var(--marketing-paragraph-24-line-height)] relative">
                                  Dekr combines real-time market signals with
                                  interactive financial education and an AI chat
                                  coach to help you invest confidently—even if
                                  you&#39;re just starting out.
                                </p>

                                <button className="all-[unset] box-border border-dekr-theme-border flex items-center border-solid flex-[0_0_auto] shadow-[2px_2px_0px_#c0b9a282] pt-[var(--dekr-5)] pr-[var(--dekr-5)] pb-[var(--dekr-5)] pl-[var(--dekr-5)] relative [border-right-style:solid] w-[222px] [border-top-style:solid] rounded-[var(--primitives-tailwindcss-radius-md)] gap-[var(--primitives-tailwindcss-spacing-1-5)] [border-left-style:solid] bg-dekr-theme-primary-background [border-bottom-style:solid] justify-center">
                                  <div className="font-text-xl-medium w-fit mt-[-3.00px] tracking-[var(--text-xl-medium-letter-spacing)] text-[length:var(--text-xl-medium-font-size)] [font-style:var(--text-xl-medium-font-style)] text-dekr-theme-primary-text font-[number:var(--text-xl-medium-font-weight)] text-center whitespace-nowrap leading-[var(--text-xl-medium-line-height)] relative">
                                    Join the Waitlist
                                  </div>
                                </button>

                                <div
                                  className={`w-full flex self-stretch gap-2.5 flex-[0_0_auto] relative ${screenWidth >= 1200 && screenWidth < 1728 ? "flex-col" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "items-start" : (screenWidth >= 1728) ? "items-end" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "justify-end" : ""}`}
                                >
                                  <div className="font-marketing-paragraph-24 w-fit mt-[-1.00px] tracking-[var(--marketing-paragraph-24-letter-spacing)] text-[length:var(--marketing-paragraph-24-font-size)] [font-style:var(--marketing-paragraph-24-font-style)] text-dekr-color-dark-teal-dark-teal-500 font-[number:var(--marketing-paragraph-24-font-weight)] leading-[var(--marketing-paragraph-24-line-height)] whitespace-nowrap relative">
                                    or
                                  </div>

                                  <a
                                    className={`font-marketing-hyperlink w-fit tracking-[var(--marketing-hyperlink-letter-spacing)] [font-style:var(--marketing-hyperlink-font-style)] text-[length:var(--marketing-hyperlink-font-size)] text-dekr-color-blue-blue-500 underline font-[number:var(--marketing-hyperlink-font-weight)] leading-[var(--marketing-hyperlink-line-height)] whitespace-nowrap relative ${screenWidth >= 1728 ? "mt-[-1.00px]" : ""}`}
                                    href="https://discord.gg/wQdWAVNzBN"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Join our Discord
                                  </a>

                                  <p
                                    className={`font-marketing-paragraph-24 w-fit tracking-[var(--marketing-paragraph-24-letter-spacing)] [font-style:var(--marketing-paragraph-24-font-style)] text-[length:var(--marketing-paragraph-24-font-size)] text-dekr-color-dark-teal-dark-teal-500 font-[number:var(--marketing-paragraph-24-font-weight)] leading-[var(--marketing-paragraph-24-line-height)] whitespace-nowrap relative ${screenWidth >= 1728 ? "mt-[-1.00px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "mr-[-11.00px]" : (screenWidth >= 1728) ? "mr-[-5.00px]" : ""}`}
                                  >
                                    to help shape the future of investing
                                    together.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-full flex self-stretch flex-col items-start gap-2.5 z-0 relative ${screenWidth >= 1200 && screenWidth < 1728 ? "mt-[-9px]" : (screenWidth >= 1728) ? "-mt-6" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "px-10 py-1" : (screenWidth >= 1728) ? "px-[103px] py-1" : ""} ${screenWidth >= 1728 ? "h-[635px]" : ""} ${screenWidth >= 1728 ? "mb-[-291.89px]" : ""}`}
                      >
                        <div
                          className={`flex items-start absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1200px]" : (screenWidth >= 1728) ? "w-[1731px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "left-[135px]" : (screenWidth >= 1728) ? "left-0" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "top-28" : (screenWidth >= 1728) ? "top-0" : ""}`}
                        >
                          <div className="grow flex-1 h-[407px] bg-[#f6f0df] relative" />

                          <img
                            className={`h-[635px] relative ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[500px]" : (screenWidth >= 1728) ? "w-[635px]" : ""}`}
                            alt="Screenshot"
                            src={
                              screenWidth >= 1200 && screenWidth < 1728
                                ? "/img/screenshot-2025-04-24-at-3-41-57-pm-1-2.png"
                                : screenWidth >= 1728
                                  ? "/img/screenshot-2025-04-24-at-3-41-57-pm-1-1.png"
                                  : undefined
                            }
                          />
                        </div>

                        <div
                          className={`border-dekr-color-green-green-500 border-t flex items-start [border-top-style:solid] flex-[0_0_auto] relative ${screenWidth >= 1200 && screenWidth < 1728 ? "w-full" : (screenWidth >= 1728) ? "w-[1525px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "self-stretch" : ""} ${screenWidth >= 1728 ? "mr-[-3.00px]" : ""}`}
                        >
                          <div className="flex items-start grow gap-10 flex-1 px-0 py-10 relative">
                            <div
                              className={`flex items-start gap-10 relative ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[994px]" : (screenWidth >= 1728) ? "w-[1525px]" : ""}`}
                            >
                              <div
                                className={`flex flex-col items-start gap-2 relative ${screenWidth >= 1728 ? "w-[740px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "grow" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "flex-1" : ""}`}
                              >
                                <div
                                  className={`font-marketing-headline-1 mt-[-1.00px] tracking-[var(--marketing-headline-1-letter-spacing)] text-[length:var(--marketing-headline-1-font-size)] [font-style:var(--marketing-headline-1-font-style)] text-dekr-color-green-green-500 font-[number:var(--marketing-headline-1-font-weight)] leading-[var(--marketing-headline-1-line-height)] relative ${screenWidth >= 1728 ? "w-fit" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "self-stretch" : ""} ${screenWidth >= 1728 ? "whitespace-nowrap" : ""}`}
                                >
                                  Hit Your Real-Life Goals
                                </div>

                                <p className="font-monospace-text self-stretch tracking-[var(--monospace-text-letter-spacing)] [font-style:var(--monospace-text-font-style)] text-[length:var(--monospace-text-font-size)] text-dekr-color-green-green-500 h-8 font-[number:var(--monospace-text-font-weight)] leading-[var(--monospace-text-line-height)] whitespace-nowrap relative">
                                  IF YOUR MONEY’S JUST SITTING, IT’S NOT
                                  GROWING.
                                </p>
                              </div>

                              <div
                                className={`flex flex-col items-start gap-7 ${screenWidth >= 1728 ? "w-[745px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "h-[381px]" : (screenWidth >= 1728) ? "h-[338px]" : ""}`}
                              >
                                <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-green-green-500 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#536b31] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                    Smart investing turns “maybe someday” into
                                    “definitely happening”:
                                    <br />
                                  </span>
                                </p>

                                <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-green-green-500 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#536b31] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                    Save for a down payment
                                    <br />
                                  </span>
                                </p>

                                <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-green-green-500 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#536b31] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                    Take that dream vacation
                                    <br />
                                  </span>
                                </p>

                                <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-green-green-500 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#536b31] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                    Build a nest egg that actually matters
                                    <br />
                                  </span>
                                </p>

                                <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-green-green-500 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#536b31] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                    Fund your kid’s college dreams
                                    <br />
                                  </span>
                                </p>

                                <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-green-green-500 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#536b31] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                    Retire the way you want
                                    <br />
                                  </span>
                                </p>

                                <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-green-green-500 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#536b31] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                    With Dekr, you’re not just throwing
                                    darts—you’re taking shots with a coach who
                                    knows where the target is.
                                    <br />
                                  </span>
                                </p>

                                <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-green-green-500 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#536b31] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                    {""}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div
                className={`w-full flex self-stretch gap-2.5 relative ${screenWidth >= 1728 ? "mt-[-203px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-col" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "items-start" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "items-center" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "flex-[0_0_auto]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "p-10" : (screenWidth >= 1728) ? "p-[99px]" : ""} ${screenWidth >= 1728 ? "h-[1855px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "justify-around" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "bg-dekr-theme-border" : (screenWidth >= 1200 && screenWidth < 1728) ? "bg-[#425627]" : ""}`}
              >
                <div
                  className={`left-0 absolute ${screenWidth >= 768 && screenWidth < 1200 ? "w-80" : (screenWidth >= 1200 && screenWidth < 1728) ? "w-[1201px]" : screenWidth >= 1728 ? "w-[1728px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "top-[998px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "top-0" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "h-[382px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "h-[1855px]" : ""}`}
                >
                  <div
                    className={`${screenWidth >= 768 && screenWidth < 1200 ? "h-[382px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "h-[1855px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "relative" : ""}`}
                  >
                    {screenWidth >= 768 && screenWidth < 1200 && (
                      <div className="relative w-80 h-[382px]">
                        <img
                          className="absolute w-80 h-[335px] top-[47px] left-0"
                          alt="Screenshot"
                          src="/img/screenshot-2025-05-02-at-7-12-38-am-1-3.png"
                        />

                        <img
                          className="absolute w-[95px] h-[191px] top-0 left-px"
                          alt="Ellipse"
                          src="/img/ellipse-3-3.svg"
                        />
                      </div>
                    )}

                    {((screenWidth >= 1200 && screenWidth < 1728) ||
                      screenWidth >= 1728) && (
                      <>
                        <div
                          className={`left-px top-0 h-[1855px] bg-[color:var(--dekr-theme-secondary-text)] absolute ${screenWidth >= 1200 && screenWidth < 1728 ? "w-[1200px]" : (screenWidth >= 1728) ? "w-[1727px]" : ""}`}
                        />

                        <div className="w-[924px] left-0 top-[673px] h-[1103px] absolute">
                          <div className="h-[1103px] relative">
                            <img
                              className="w-[924px] left-0 top-[137px] h-[966px] absolute"
                              alt="Screenshot"
                              src="/img/screenshot-2025-05-02-at-7-12-38-am-1-2.png"
                            />

                            <img
                              className="w-[275px] left-0.5 top-0 h-[551px] absolute"
                              alt="Ellipse"
                              src="/img/ellipse-3-2.svg"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div
                  className={`flex flex-col items-start relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1728) ? "w-[1529px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "grow" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-5" : (screenWidth >= 1200 && screenWidth < 1728) ? "gap-[60px]" : screenWidth >= 1728 ? "gap-[136px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-[0_0_auto]" : (screenWidth >= 1200 && screenWidth < 1728) ? "flex-1" : ""}`}
                >
                  <div
                    className={`w-full flex self-stretch flex-col items-center flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "gap-5" : (screenWidth >= 1200 && screenWidth < 1728) ? "gap-10" : screenWidth >= 1728 ? "gap-[85px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "pt-0 pb-10 px-0" : ""}`}
                  >
                    <div
                      className={`self-stretch mt-[-1.00px] text-dekr-theme-secondary-background text-center relative ${screenWidth >= 768 && screenWidth < 1200 ? "[font-family:'Austin_News_Headline_Cond-Medium',Helvetica]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-marketing-headline-1" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[0]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "tracking-[var(--marketing-headline-1-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-5xl" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-[length:var(--marketing-headline-1-font-size)]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "[font-style:var(--marketing-headline-1-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-medium" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-[number:var(--marketing-headline-1-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[57.6px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[var(--marketing-headline-1-line-height)]" : ""}`}
                    >
                      How Dekr Works
                    </div>

                    <div
                      className={`w-full flex self-stretch flex-[0_0_auto] relative ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "flex-col" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "items-start" : (screenWidth >= 1728) ? "items-center" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-[30px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "gap-[39px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "justify-center" : ""}`}
                    >
                      {(screenWidth >= 1728 ||
                        (screenWidth >= 768 && screenWidth < 1200)) && (
                        <>
                          <div
                            className={`flex flex-col items-center relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1728) ? "w-[352px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-2.5" : (screenWidth >= 1728) ? "gap-[31px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 1728 ? "h-[368px]" : ""}`}
                          >
                            <div
                              className={`w-full flex self-stretch flex-col flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "items-center" : (screenWidth >= 1728) ? "items-start" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-2.5" : (screenWidth >= 1728) ? "gap-4" : ""}`}
                            >
                              <Numbercircleone2
                                className="!relative !w-[65px] !h-[65px]"
                                color="#F9E1D2"
                              />
                              <div
                                className={`self-stretch text-dekr-color-warm-pink-warm-pink-400 relative ${screenWidth >= 768 && screenWidth < 1200 ? "font-mobile-headline" : (screenWidth >= 1728) ? "font-marketing-headline-2" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[var(--mobile-headline-letter-spacing)]" : (screenWidth >= 1728) ? "tracking-[var(--marketing-headline-2-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "[font-style:var(--mobile-headline-font-style)]" : (screenWidth >= 1728) ? "[font-style:var(--marketing-headline-2-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-[length:var(--mobile-headline-font-size)]" : (screenWidth >= 1728) ? "text-[length:var(--marketing-headline-2-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-[number:var(--mobile-headline-font-weight)]" : (screenWidth >= 1728) ? "font-[number:var(--marketing-headline-2-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-center" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[var(--mobile-headline-line-height)]" : (screenWidth >= 1728) ? "leading-[var(--marketing-headline-2-line-height)]" : ""}`}
                              >
                                Discover Investment Opportunities
                              </div>
                            </div>

                            <p
                              className={`font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] relative ${screenWidth >= 1728 ? "flex-1" : ""}`}
                            >
                              Swipe through curated stock and crypto cards
                              powered by Dekr’s momentum model, showing you
                              what’s heating up (and why).
                            </p>
                          </div>

                          <div
                            className={`flex flex-col items-center relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1728) ? "w-[352px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-2.5" : (screenWidth >= 1728) ? "gap-[31px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 1728 ? "h-[368px]" : ""}`}
                          >
                            <div
                              className={`w-full flex self-stretch flex-col gap-4 flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "items-center" : (screenWidth >= 1728) ? "items-start" : ""}`}
                            >
                              <Numbercircletwo3
                                className="!relative !w-[65px] !h-[65px]"
                                color="#F9E1D2"
                              />
                              <div
                                className={`self-stretch text-dekr-color-warm-pink-warm-pink-400 relative ${screenWidth >= 768 && screenWidth < 1200 ? "font-mobile-headline" : (screenWidth >= 1728) ? "font-marketing-headline-2" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[var(--mobile-headline-letter-spacing)]" : (screenWidth >= 1728) ? "tracking-[var(--marketing-headline-2-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "[font-style:var(--mobile-headline-font-style)]" : (screenWidth >= 1728) ? "[font-style:var(--marketing-headline-2-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-[length:var(--mobile-headline-font-size)]" : (screenWidth >= 1728) ? "text-[length:var(--marketing-headline-2-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-[number:var(--mobile-headline-font-weight)]" : (screenWidth >= 1728) ? "font-[number:var(--marketing-headline-2-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-center" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[var(--mobile-headline-line-height)]" : (screenWidth >= 1728) ? "leading-[var(--marketing-headline-2-line-height)]" : ""}`}
                              >
                                Learn with Every Interaction
                              </div>
                            </div>

                            <div
                              className={`flex flex-col items-start gap-7 ${screenWidth >= 1728 ? "min-h-[140px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "h-[109px]" : ""}`}
                            >
                              <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] relative">
                                <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  Every card teaches you something—fast facts,
                                  plain-English explanations, and smart moves.{" "}
                                  <br />
                                </span>
                              </p>

                              <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] relative">
                                <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  No MBA required.
                                </span>
                              </p>
                            </div>
                          </div>

                          <div
                            className={`flex flex-col items-center relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1728) ? "w-[352px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-2.5" : (screenWidth >= 1728) ? "gap-[31px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 1728 ? "h-[368px]" : ""}`}
                          >
                            <div
                              className={`w-full flex self-stretch flex-col gap-4 flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "items-center" : (screenWidth >= 1728) ? "items-start" : ""}`}
                            >
                              <FormatStrokeWeightLight1
                                className="!relative !w-[65px] !h-[65px]"
                                color="#F9E1D2"
                              />
                              <p
                                className={`self-stretch text-dekr-color-warm-pink-warm-pink-400 relative ${screenWidth >= 768 && screenWidth < 1200 ? "font-mobile-headline" : (screenWidth >= 1728) ? "font-marketing-headline-2" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[var(--mobile-headline-letter-spacing)]" : (screenWidth >= 1728) ? "tracking-[var(--marketing-headline-2-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "[font-style:var(--mobile-headline-font-style)]" : (screenWidth >= 1728) ? "[font-style:var(--marketing-headline-2-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-[length:var(--mobile-headline-font-size)]" : (screenWidth >= 1728) ? "text-[length:var(--marketing-headline-2-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-[number:var(--mobile-headline-font-weight)]" : (screenWidth >= 1728) ? "font-[number:var(--marketing-headline-2-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-center" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[var(--mobile-headline-line-height)]" : (screenWidth >= 1728) ? "leading-[var(--marketing-headline-2-line-height)]" : ""}`}
                              >
                                Chat with Your AI Financial Coach
                              </p>
                            </div>

                            <p
                              className={`font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] relative ${screenWidth >= 1728 ? "flex-1" : ""}`}
                            >
                              Got a question? Confused by a term? Just ask. Our
                              AI coach explains it clearly, instantly, like your
                              smartest friend would.
                            </p>
                          </div>

                          <div
                            className={`flex flex-col items-center relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1728) ? "w-[352px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-2.5" : (screenWidth >= 1728) ? "gap-[31px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 1728 ? "h-[368px]" : ""}`}
                          >
                            <div
                              className={`w-full flex self-stretch flex-col gap-4 flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "items-center" : (screenWidth >= 1728) ? "items-start" : ""}`}
                            >
                              <Numbercirclefour1
                                className="!relative !w-[65px] !h-[65px]"
                                color="#F9E1D2"
                              />
                              <p
                                className={`self-stretch text-dekr-color-warm-pink-warm-pink-400 relative ${screenWidth >= 768 && screenWidth < 1200 ? "font-mobile-headline" : (screenWidth >= 1728) ? "font-marketing-headline-2" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[var(--mobile-headline-letter-spacing)]" : (screenWidth >= 1728) ? "tracking-[var(--marketing-headline-2-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "[font-style:var(--mobile-headline-font-style)]" : (screenWidth >= 1728) ? "[font-style:var(--marketing-headline-2-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-[length:var(--mobile-headline-font-size)]" : (screenWidth >= 1728) ? "text-[length:var(--marketing-headline-2-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-[number:var(--mobile-headline-font-weight)]" : (screenWidth >= 1728) ? "font-[number:var(--marketing-headline-2-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-center" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[var(--mobile-headline-line-height)]" : (screenWidth >= 1728) ? "leading-[var(--marketing-headline-2-line-height)]" : ""}`}
                              >
                                Build and Manage Your Portfolio
                              </p>
                            </div>

                            <div
                              className={`flex flex-col items-start gap-7 ${screenWidth >= 1728 ? "min-h-[140px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "h-[109px]" : ""}`}
                            >
                              <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] relative">
                                <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  Create your personalized deck of investments,
                                  track performance, and adjust with confidence.{" "}
                                  <br />
                                </span>
                              </p>

                              <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] relative">
                                <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                                  Swipe left on confusion.
                                </span>
                              </p>
                            </div>
                          </div>
                        </>
                      )}

                      {screenWidth >= 1200 && screenWidth < 1728 && (
                        <>
                          <div className="flex items-center gap-[39px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-center gap-[31px] relative flex-1 grow">
                              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                                <Numbercircleone2
                                  className="!relative !w-[65px] !h-[65px]"
                                  color="#F9E1D2"
                                />
                                <div className="relative self-stretch font-marketing-headline-2 font-[number:var(--marketing-headline-2-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-headline-2-font-size)] tracking-[var(--marketing-headline-2-letter-spacing)] leading-[var(--marketing-headline-2-line-height)] [font-style:var(--marketing-headline-2-font-style)]">
                                  Discover Investment Opportunities
                                </div>
                              </div>

                              <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                Swipe through curated stock and crypto cards
                                powered by Dekr’s momentum model, showing you
                                what’s heating up (and why).
                              </p>
                            </div>

                            <div className="flex flex-col items-center gap-[31px] relative flex-1 grow">
                              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                                <Numbercircletwo3
                                  className="!relative !w-[65px] !h-[65px]"
                                  color="#F9E1D2"
                                />
                                <div className="relative self-stretch font-marketing-headline-2 font-[number:var(--marketing-headline-2-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-headline-2-font-size)] tracking-[var(--marketing-headline-2-letter-spacing)] leading-[var(--marketing-headline-2-line-height)] [font-style:var(--marketing-headline-2-font-style)]">
                                  Learn with Every Interaction
                                </div>
                              </div>

                              <div className="h-[109px] flex flex-col items-start gap-7">
                                <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#f9e1d2] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    Every card teaches you something—fast facts,
                                    plain-English explanations, and smart moves.{" "}
                                    <br />
                                  </span>
                                </p>

                                <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#f9e1d2] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    No MBA required.
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-[39px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-center gap-[31px] relative flex-1 grow">
                              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                                <FormatStrokeWeightLight1
                                  className="!relative !w-[65px] !h-[65px]"
                                  color="#F9E1D2"
                                />
                                <p className="relative self-stretch font-marketing-headline-2 font-[number:var(--marketing-headline-2-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-headline-2-font-size)] tracking-[var(--marketing-headline-2-letter-spacing)] leading-[var(--marketing-headline-2-line-height)] [font-style:var(--marketing-headline-2-font-style)]">
                                  Chat with Your AI Financial Coach
                                </p>
                              </div>

                              <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                Got a question? Confused by a term? Just ask.
                                Our AI coach explains it clearly, instantly,
                                like your smartest friend would.
                              </p>
                            </div>

                            <div className="flex flex-col items-center gap-[31px] relative flex-1 grow">
                              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                                <Numbercirclefour1
                                  className="!relative !w-[65px] !h-[65px]"
                                  color="#F9E1D2"
                                />
                                <p className="relative self-stretch font-marketing-headline-2 font-[number:var(--marketing-headline-2-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-headline-2-font-size)] tracking-[var(--marketing-headline-2-letter-spacing)] leading-[var(--marketing-headline-2-line-height)] [font-style:var(--marketing-headline-2-font-style)]">
                                  Build and Manage Your Portfolio
                                </p>
                              </div>

                              <div className="h-[109px] flex flex-col items-start gap-7">
                                <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#f9e1d2] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    Create your personalized deck of
                                    investments, track performance, and adjust
                                    with confidence. <br />
                                  </span>
                                </p>

                                <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-warm-pink-warm-pink-400 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#f9e1d2] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                    Swipe left on confusion.
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div
                    className={`border-dekr-color-warm-pink-warm-pink-200 w-full flex self-stretch border-t items-start [border-top-style:solid] flex-[0_0_auto] px-0 py-10 relative ${screenWidth >= 768 && screenWidth < 1200 ? "flex-col" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-5" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "gap-10" : ""}`}
                  >
                    <div
                      className={`flex flex-col items-start gap-5 relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1728) ? "w-[482px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "grow" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-[0_0_auto]" : (screenWidth >= 1200 && screenWidth < 1728) ? "flex-1" : ""}`}
                    >
                      <p
                        className={`self-stretch mt-[-1.00px] text-dekr-color-warm-pink-warm-pink-400 relative ${screenWidth >= 768 && screenWidth < 1200 ? "font-mobile-headline" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-marketing-headline-2" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[var(--mobile-headline-letter-spacing)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "tracking-[var(--marketing-headline-2-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-[length:var(--mobile-headline-font-size)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-[length:var(--marketing-headline-2-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "[font-style:var(--mobile-headline-font-style)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "[font-style:var(--marketing-headline-2-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-[number:var(--mobile-headline-font-weight)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-[number:var(--marketing-headline-2-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[var(--mobile-headline-line-height)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[var(--marketing-headline-2-line-height)]" : ""}`}
                      >
                        Why Financial Literacy (and a Good Coach) Matters
                      </p>

                      <div className="font-monospace-text self-stretch [font-style:var(--monospace-text-font-style)] tracking-[var(--monospace-text-letter-spacing)] text-[length:var(--monospace-text-font-size)] text-dekr-color-warm-pink-warm-pink-200 font-[number:var(--monospace-text-font-weight)] leading-[var(--monospace-text-line-height)] relative">
                        {screenWidth >= 768 && screenWidth < 1200 && (
                          <p>
                            STACK THE FUTURE IN YOUR FAVOR WITH SKILLS THAT
                            STICK.
                          </p>
                        )}

                        {((screenWidth >= 1200 && screenWidth < 1728) ||
                          screenWidth >= 1728) && (
                          <p>
                            STACK THE FUTURE IN YOUR FAVOR <br />
                            WITH SKILLS THAT STICK.
                          </p>
                        )}
                      </div>
                    </div>

                    <div
                      className={`flex flex-col items-start gap-7 ${screenWidth >= 1728 ? "w-[482px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "h-[218px]" : (screenWidth >= 1200 && screenWidth < 1728) ? "h-[353px]" : screenWidth >= 1728 ? "h-[272px]" : ""}`}
                    >
                      <p className="[font-family:'Graphik-Regular',Helvetica] self-stretch tracking-[0] text-xl text-dekr-color-warm-pink-warm-pink-400 font-normal leading-[27px] relative">
                        <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                          Smart money moves aren&#39;t just about picking the
                          right stocks. They&#39;re about understanding the game
                          you&#39;re playing. 
                          <br />
                        </span>
                      </p>

                      <p className="[font-family:'Graphik-Regular',Helvetica] self-stretch tracking-[0] text-xl text-dekr-color-warm-pink-warm-pink-400 font-normal leading-[27px] relative">
                        <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                          Studies show that people with strong financial
                          knowledge are:
                          <br />
                        </span>
                      </p>

                      <p className="[font-family:'Graphik-Regular',Helvetica] self-stretch tracking-[0] text-xl text-dekr-color-warm-pink-warm-pink-400 font-normal leading-[27px] relative">
                        <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                          More likely to invest successfully
                        </span>

                        <span className="text-[#8098c0] underline">
                          *<br />
                        </span>
                      </p>

                      <p className="[font-family:'Graphik-Regular',Helvetica] self-stretch tracking-[0] text-xl text-dekr-color-warm-pink-warm-pink-400 font-normal leading-[27px] relative">
                        <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                          Better at saving and planning for real goals
                          <br />
                        </span>
                      </p>

                      <p className="[font-family:'Graphik-Regular',Helvetica] self-stretch tracking-[0] text-xl text-dekr-color-warm-pink-warm-pink-400 font-normal leading-[27px] relative">
                        <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                          Less likely to panic when the market wobbles
                        </span>
                      </p>
                    </div>

                    <div
                      className={`flex flex-col items-start gap-7 ${screenWidth >= 1728 ? "w-[482px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "h-[109px]" : (screenWidth >= 1200 && screenWidth < 1728) ? "h-[190px]" : screenWidth >= 1728 ? "h-[136px]" : ""}`}
                    >
                      <p className="font-marketing-pagagraph self-stretch [font-style:var(--marketing-pagagraph-font-style)] tracking-[var(--marketing-pagagraph-letter-spacing)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                        <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                          Yet too many people are left to figure it out alone. 
                          <br />
                        </span>
                      </p>

                      <p className="font-marketing-pagagraph self-stretch [font-style:var(--marketing-pagagraph-font-style)] tracking-[var(--marketing-pagagraph-letter-spacing)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                        <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                          Dekr changes that—with built-in education, real talk,
                          and an AI coach who’s always ready to explain things
                          without the jargon.
                        </span>
                      </p>
                    </div>
                  </div>

                  <div
                    className={`border-dekr-color-warm-pink-warm-pink-400 w-full flex self-stretch border-t items-start [border-top-style:solid] flex-[0_0_auto] px-0 py-10 relative ${screenWidth >= 768 && screenWidth < 1200 ? "flex-col" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-5" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "gap-10" : ""}`}
                  >
                    <div
                      className={`flex flex-col items-start gap-5 relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1728) ? "w-[482px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "grow" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-[0_0_auto]" : (screenWidth >= 1200 && screenWidth < 1728) ? "flex-1" : ""}`}
                    >
                      <p
                        className={`self-stretch mt-[-1.00px] text-dekr-color-warm-pink-warm-pink-400 relative ${screenWidth >= 768 && screenWidth < 1200 ? "font-mobile-headline" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-marketing-headline-2" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[var(--mobile-headline-letter-spacing)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "tracking-[var(--marketing-headline-2-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-[length:var(--mobile-headline-font-size)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-[length:var(--marketing-headline-2-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "[font-style:var(--mobile-headline-font-style)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "[font-style:var(--marketing-headline-2-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-[number:var(--mobile-headline-font-weight)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-[number:var(--marketing-headline-2-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[var(--mobile-headline-line-height)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[var(--marketing-headline-2-line-height)]" : ""}`}
                      >
                        Beat the Bad Habits of Investing
                      </p>

                      <p className="font-monospace-text self-stretch tracking-[var(--monospace-text-letter-spacing)] [font-style:var(--monospace-text-font-style)] text-[length:var(--monospace-text-font-size)] text-dekr-color-warm-pink-warm-pink-400 relative font-[number:var(--monospace-text-font-weight)] leading-[var(--monospace-text-line-height)]">
                        KNOW WHAT YOU&#39;RE DOING
                        <br />
                        —AND WHY YOU’RE DOING IT.
                      </p>
                    </div>

                    <div
                      className={`flex flex-col items-start gap-[34px] relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1728) ? "w-[485px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "grow" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-[0_0_auto]" : (screenWidth >= 1200 && screenWidth < 1728) ? "flex-1" : ""}`}
                    >
                      <div className="w-full flex self-stretch flex-col items-start gap-2.5 flex-[0_0_auto] relative">
                        <div className="w-full flex self-stretch flex-col items-start gap-2 flex-[0_0_auto] relative">
                          <div
                            className={`[font-family:'Graphik-Semibold',Helvetica] mt-[-1.00px] tracking-[0] text-2xl text-dekr-color-warm-pink-warm-pink-400 relative font-normal leading-[27px] ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-[351px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "mr-[-4.33px]" : ""}`}
                          >
                            Loss Aversion
                          </div>

                          <p
                            className={`font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-[351px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "mr-[-4.33px]" : ""}`}
                          >
                            Fear of losing = selling too soon.
                          </p>
                        </div>

                        <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] relative">
                          <a
                            className="[font-family:'Geist_Mono',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-dekr-color-blue-blue-200 relative font-normal whitespace-nowrap leading-10"
                            href="https://en.wikipedia.org/wiki/Disposition_effect"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            DISPOSITION EFFECT
                          </a>

                          <img
                            className="w-[14.56px] mr-[-0.75px] h-[14.56px] relative"
                            alt="Group"
                            src={
                              screenWidth >= 1728 ||
                              (screenWidth >= 768 && screenWidth < 1200)
                                ? "/img/group-1-7.png"
                                : screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-1-5.png"
                                  : undefined
                            }
                          />
                        </div>
                      </div>

                      <div className="w-full flex self-stretch flex-col items-start gap-2.5 flex-[0_0_auto] relative">
                        <div className="w-full flex self-stretch flex-col items-start gap-2 flex-[0_0_auto] relative">
                          <div className="[font-family:'Graphik-Semibold',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-2xl text-dekr-color-warm-pink-warm-pink-400 relative font-normal leading-[27px]">
                            Overconfidence
                          </div>

                          <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                            Thinking you’re invincible = big mistakes.
                          </p>
                        </div>

                        <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] relative">
                          <a
                            className="[font-family:'Geist_Mono',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-dekr-color-blue-blue-200 relative font-normal whitespace-nowrap leading-10"
                            href="https://kossolinger.com/investor-psychology-behavioral-biases-that-can-lead-to-costly-mistakes/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            BEHAVIORAL BIASES
                          </a>

                          <img
                            className="w-[14.56px] mr-[-0.75px] h-[14.56px] relative"
                            alt="Group"
                            src={
                              screenWidth >= 1728 ||
                              (screenWidth >= 768 && screenWidth < 1200)
                                ? "/img/group-1-7.png"
                                : screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-1-5.png"
                                  : undefined
                            }
                          />
                        </div>
                      </div>

                      <div className="w-full flex self-stretch flex-col items-start gap-2.5 flex-[0_0_auto] relative">
                        <div className="w-full flex self-stretch flex-col items-start gap-2 flex-[0_0_auto] relative">
                          <div className="[font-family:'Graphik-Semibold',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-2xl text-dekr-color-warm-pink-warm-pink-400 relative font-normal leading-[27px]">
                            Herd Mentality
                          </div>

                          <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 relative h-7 font-[number:var(--marketing-pagagraph-font-weight)] whitespace-nowrap leading-[var(--marketing-pagagraph-line-height)]">
                            Following the crowd off a cliff.
                          </p>
                        </div>

                        <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] relative">
                          <a
                            className="[font-family:'Geist_Mono',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-dekr-color-blue-blue-200 relative font-normal whitespace-nowrap leading-10"
                            href="https://online.mason.wm.edu/blog/behavioral-biases-that-can-impact-investing-decisions"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            BEHAVIORAL BIASES
                          </a>

                          <img
                            className="w-[14.56px] mr-[-0.75px] h-[14.56px] relative"
                            alt="Group"
                            src={
                              screenWidth >= 1728 ||
                              (screenWidth >= 768 && screenWidth < 1200)
                                ? "/img/group-1-7.png"
                                : screenWidth >= 1200 && screenWidth < 1728
                                  ? "/img/group-1-5.png"
                                  : undefined
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col items-start gap-7 ${screenWidth >= 1728 ? "w-[482px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "h-[191px]" : (screenWidth >= 1200 && screenWidth < 1728) ? "h-[272px]" : screenWidth >= 1728 ? "h-[218px]" : ""}`}
                    >
                      <p className="font-marketing-pagagraph self-stretch [font-style:var(--marketing-pagagraph-font-style)] tracking-[var(--marketing-pagagraph-letter-spacing)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                        <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                          Investors lose money not just because of bad picks—but
                          because of bad psychology.
                          <br />
                        </span>
                      </p>

                      <p className="font-marketing-pagagraph self-stretch [font-style:var(--marketing-pagagraph-font-style)] tracking-[var(--marketing-pagagraph-letter-spacing)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                        <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                          Dekr fixes this.  
                          <br />
                        </span>
                      </p>

                      <p className="font-marketing-pagagraph self-stretch [font-style:var(--marketing-pagagraph-font-style)] tracking-[var(--marketing-pagagraph-letter-spacing)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-400 relative font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                        <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#f9e1d2] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                          Our smart insights, bite-sized lessons, and steady
                          coaching help you invest with *brains over feelings*.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col flex-[0_0_auto] relative ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "w-full" : (screenWidth >= 1728) ? "w-[1728px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "self-stretch" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "items-start" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "items-center" : ""}`}
            >
              <div
                className={`flex flex-col items-center gap-2.5 flex-[0_0_auto] bg-dekr-color-dark-teal-dark-teal-500 relative ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "w-full" : (screenWidth >= 1728) ? "w-[1728px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "self-stretch" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "p-10" : (screenWidth >= 1200 && screenWidth < 1728) ? "px-[474px] py-[50px]" : screenWidth >= 1728 ? "px-[474px] py-[79px]" : ""}`}
              >
                <div
                  className={`flex flex-col items-center gap-7 flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "w-[780px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "mr-[-264.00px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "ml-[-264.00px]" : ""}`}
                >
                  <div
                    className={`self-stretch mt-[-1.00px] text-dekr-color-warm-pink-warm-pink-500 relative text-center ${screenWidth >= 768 && screenWidth < 1200 ? "font-mobile-headline" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-marketing-headline-2" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[var(--mobile-headline-letter-spacing)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "tracking-[var(--marketing-headline-2-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-[length:var(--mobile-headline-font-size)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-[length:var(--marketing-headline-2-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "[font-style:var(--mobile-headline-font-style)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "[font-style:var(--marketing-headline-2-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-[number:var(--mobile-headline-font-weight)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-[number:var(--marketing-headline-2-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[var(--mobile-headline-line-height)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[var(--marketing-headline-2-line-height)]" : ""}`}
                  >
                    Momentum Model Performance
                  </div>

                  <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-500 relative font-[number:var(--marketing-pagagraph-font-weight)] text-center leading-[var(--marketing-pagagraph-line-height)]">
                    Smart investing isn&#39;t luck—it&#39;s strategy. Here&#39;s
                    the proof:
                  </p>

                  <div
                    className={`border border-solid border-dekr-color-warm-pink-warm-pink-500 w-full flex self-stretch flex-col items-start flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "gap-2.5" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "gap-[38px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "p-5" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "p-10" : ""}`}
                  >
                    <div
                      className={`w-full flex self-stretch flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "items-start" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "items-center" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-[18px]" : ""}`}
                    >
                      <div
                        className={`[font-family:'Graphik-Semibold',Helvetica] mt-[-1.00px] tracking-[0] text-dekr-color-warm-pink-warm-pink-500 relative h-[25px] font-normal ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-[300px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-base" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-2xl" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-1" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "whitespace-nowrap" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[19.2px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[25px]" : ""}`}
                      >
                        Strategy
                      </div>

                      <div
                        className={`[font-family:'Graphik-Semibold',Helvetica] mt-[-1.00px] tracking-[0] text-dekr-color-warm-pink-warm-pink-500 relative h-[25px] font-normal ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-[200px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-base" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-2xl" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-1" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "whitespace-nowrap" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[19.2px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[25px]" : ""}`}
                      >
                        5-Year Return
                      </div>

                      <div
                        className={`[font-family:'Graphik-Semibold',Helvetica] mt-[-1.00px] tracking-[0] text-dekr-color-warm-pink-warm-pink-500 relative font-normal ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-fit" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-base" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-2xl" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-1" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "whitespace-nowrap" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[19.2px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[25px]" : ""}`}
                      >
                        1-Year Return
                      </div>
                    </div>

                    <div
                      className={`w-full flex self-stretch items-start flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "gap-[18px]" : ""}`}
                    >
                      <p
                        className={`[font-family:'Graphik-Regular',Helvetica] mt-[-1.00px] tracking-[0] text-dekr-color-warm-pink-warm-pink-500 relative h-[50px] font-normal ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-[300px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-base" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-xl" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-1" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[19.2px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[25px]" : ""}`}
                      >
                        NASDAQ-100 <br />
                        Buy and Hold (QQQ)
                      </p>

                      <div
                        className={`[font-family:'Graphik-Regular',Helvetica] mt-[-1.00px] tracking-[0] text-dekr-color-warm-pink-warm-pink-500 relative h-[25px] font-normal ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-[200px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-base" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-xl" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-1" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "whitespace-nowrap" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[19.2px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[25px]" : ""}`}
                      >
                        +154%
                      </div>

                      <div
                        className={`[font-family:'Graphik-Regular',Helvetica] mt-[-1.00px] tracking-[0] text-dekr-color-warm-pink-warm-pink-500 relative font-normal ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-fit" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-base" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-xl" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-1" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "whitespace-nowrap" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[19.2px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[25px]" : ""}`}
                      >
                        +25%
                      </div>
                    </div>

                    <div
                      className={`w-full flex self-stretch items-center flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "gap-[18px]" : ""}`}
                    >
                      <div
                        className={`[font-family:'Graphik-Regular',Helvetica] mt-[-1.00px] tracking-[0] text-dekr-color-warm-pink-warm-pink-500 relative font-normal ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-[300px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-base" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-xl" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-1" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "h-[25px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "whitespace-nowrap" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[19.2px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[25px]" : ""}`}
                      >
                        Dekr Momentum Model
                      </div>

                      <div
                        className={`[font-family:'Graphik-Regular',Helvetica] mt-[-1.00px] tracking-[0] text-dekr-color-warm-pink-warm-pink-500 relative font-normal ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-[200px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-base" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-xl" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-1" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "h-[25px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "whitespace-nowrap" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[19.2px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[25px]" : ""}`}
                      >
                        +200%
                      </div>

                      <div
                        className={`[font-family:'Graphik-Regular',Helvetica] mt-[-1.00px] tracking-[0] text-dekr-color-warm-pink-warm-pink-500 font-normal relative ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-fit" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-base" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-xl" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-1" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[19.2px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[25px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "whitespace-nowrap" : ""}`}
                      >
                        +35%
                      </div>
                    </div>
                  </div>

                  <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-color-warm-pink-warm-pink-500 relative font-[number:var(--marketing-pagagraph-font-weight)] text-center leading-[var(--marketing-pagagraph-line-height)]">
                    That&#39;s nearly $5,000 more—simply by following smarter
                    signals.
                  </p>

                  <p className="font-monospace-text self-stretch tracking-[var(--monospace-text-letter-spacing)] [font-style:var(--monospace-text-font-style)] text-[length:var(--monospace-text-font-size)] text-dekr-color-warm-pink-warm-pink-500 relative font-[number:var(--monospace-text-font-weight)] text-center leading-[var(--monospace-text-line-height)]">
                    LESSON: CATCH THE RIGHT TRENDS, AND YOU RIDE HIGHER.
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-col items-center flex-[0_0_auto] relative ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "w-full" : (screenWidth >= 1728) ? "w-[1528px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "self-stretch" : ""}`}
              >
                <div
                  className={`flex flex-col items-center bg-cover gap-[46px] flex-[0_0_auto] bg-[url(/img/join-a-community-3.png)] bg-[50%_50%] relative ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "w-full" : (screenWidth >= 1728) ? "w-[1728px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "self-stretch" : ""} ${screenWidth >= 1728 ? "mr-[-100.00px]" : ""} ${screenWidth >= 1728 ? "ml-[-100.00px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "p-10" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "px-0 py-[95px]" : ""}`}
                >
                  <p
                    className={`self-stretch mt-[-1.00px] text-[color:var(--dekr-theme-secondary-text)] relative text-center ${screenWidth >= 768 && screenWidth < 1200 ? "font-mobile-headline" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-marketing-headline-2" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[var(--mobile-headline-letter-spacing)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "tracking-[var(--marketing-headline-2-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-[length:var(--mobile-headline-font-size)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-[length:var(--marketing-headline-2-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "[font-style:var(--mobile-headline-font-style)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "[font-style:var(--marketing-headline-2-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-[number:var(--mobile-headline-font-weight)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-[number:var(--marketing-headline-2-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[var(--mobile-headline-line-height)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[var(--marketing-headline-2-line-height)]" : ""}`}
                  >
                    Join a Community of Learners
                  </p>

                  <div
                    className={`flex flex-col items-start gap-7 ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-[406px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "h-[136px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "h-[217px]" : ""}`}
                  >
                    <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[color:var(--dekr-theme-secondary-text)] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] relative">
                      <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#425627] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                        Investing shouldn&#39;t feel lonely. With Dekr, you
                        join:
                        <br />
                      </span>
                    </p>

                    <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[color:var(--dekr-theme-secondary-text)] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] relative">
                      <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#425627] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                        A friendly Discord community
                        <br />
                      </span>
                    </p>

                    <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[color:var(--dekr-theme-secondary-text)] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] relative">
                      <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#425627] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                        A growing network of smart, curious investors
                        <br />
                      </span>
                    </p>

                    <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[color:var(--dekr-theme-secondary-text)] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)] relative">
                      <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#425627] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                        A movement to make investing simple, social, and
                        actually enjoyable
                      </span>
                    </p>
                  </div>

                  <p className="font-monospace-text self-stretch tracking-[var(--monospace-text-letter-spacing)] [font-style:var(--monospace-text-font-style)] text-[length:var(--monospace-text-font-size)] text-[color:var(--dekr-theme-secondary-text)] relative font-[number:var(--monospace-text-font-weight)] text-center leading-[var(--monospace-text-line-height)]">
                    LEARN FROM OTHERS. SHARE WINS. CELEBRATE PROGRESS.
                  </p>
                </div>

                <div
                  className={`flex items-start flex-[0_0_auto] bg-[#f6f0df] relative ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "w-full" : (screenWidth >= 1728) ? "w-[1728px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "self-stretch" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-col" : ""} ${screenWidth >= 1728 ? "mr-[-100.00px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-5" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "gap-[131px]" : ""} ${screenWidth >= 1728 ? "ml-[-100.00px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "p-10" : (screenWidth >= 1200 && screenWidth < 1728) ? "px-10 py-[95px]" : screenWidth >= 1728 ? "p-[95px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "justify-center" : ""}`}
                >
                  <p
                    className={`mt-[-1.00px] text-dekr-color-dark-teal-dark-teal-500 relative ${screenWidth >= 768 && screenWidth < 1200 ? "font-mobile-headline" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-marketing-headline-1" : ""} ${screenWidth >= 1728 ? "w-[653px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[var(--mobile-headline-letter-spacing)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "tracking-[var(--marketing-headline-1-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-[length:var(--mobile-headline-font-size)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-[length:var(--marketing-headline-1-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "[font-style:var(--mobile-headline-font-style)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "[font-style:var(--marketing-headline-1-font-style)]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "flex-1" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-[number:var(--mobile-headline-font-weight)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-[number:var(--marketing-headline-1-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-center" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[var(--mobile-headline-line-height)]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[var(--marketing-headline-1-line-height)]" : ""}`}
                  >
                    Ready to Stack the Future in Your Favor?
                  </p>

                  <div
                    className={`flex flex-col items-start relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1728) ? "w-[744px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "grow" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-2.5" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "gap-10" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-[0_0_auto]" : (screenWidth >= 1200 && screenWidth < 1728) ? "flex-1" : ""}`}
                  >
                    <p
                      className={`[font-family:'Graphik-Semibold',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-dekr-color-dark-teal-dark-teal-500 relative font-normal leading-[35px] ${screenWidth >= 768 && screenWidth < 1200 ? "text-2xl" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-[32px]" : ""}`}
                    >
                      Join the Dekr Waitlist Today
                    </p>

                    <div
                      className={`${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "font-marketing-paragraph-24" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "self-stretch" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "tracking-[var(--marketing-paragraph-24-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-col" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "text-[length:var(--marketing-paragraph-24-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "items-start" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "[font-style:var(--marketing-paragraph-24-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-7" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "text-dekr-color-dark-teal-dark-teal-500" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "relative" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "h-[136px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "font-[number:var(--marketing-paragraph-24-font-weight)]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "leading-[var(--marketing-paragraph-24-line-height)]" : ""}`}
                    >
                      {screenWidth >= 768 && screenWidth < 1200 && (
                        <>
                          <p className="text-dekr-color-dark-teal-dark-teal-500 relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                            <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#0c3434] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                              Early users get:
                              <br />
                            </span>
                          </p>

                          <p className="text-dekr-color-dark-teal-dark-teal-500 relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                            <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#0c3434] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                              Exclusive early access
                              <br />
                            </span>
                          </p>

                          <p className="text-dekr-color-dark-teal-dark-teal-500 relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                            <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#0c3434] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                              Founding member perks
                              <br />
                            </span>
                          </p>

                          <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                            <span className="font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-[#0c3434] text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                              A front-row seat to the future of investing and
                              learning
                            </span>
                          </p>
                        </>
                      )}

                      {((screenWidth >= 1200 && screenWidth < 1728) ||
                        screenWidth >= 1728) && (
                        <p>
                          Early users get:
                          <br />
                          Exclusive early access
                          <br />
                          Founding member perks
                          <br />A front-row seat to the future of investing and
                          learning
                        </p>
                      )}
                    </div>

                    <button
                      className={`all-[unset] box-border border-dekr-theme-border flex items-center border-solid flex-[0_0_auto] shadow-[2px_2px_0px_#c0b9a282] pt-[var(--dekr-5)] pr-[var(--dekr-5)] pb-[var(--dekr-5)] pl-[var(--dekr-5)] relative [border-right-style:solid] [border-top-style:solid] rounded-[var(--primitives-tailwindcss-radius-md)] gap-[var(--primitives-tailwindcss-spacing-1-5)] [border-left-style:solid] bg-dekr-theme-primary-background [border-bottom-style:solid] justify-center ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "w-[222px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""}`}
                    >
                      <div className="font-text-xl-medium w-fit mt-[-3.00px] tracking-[var(--text-xl-medium-letter-spacing)] text-[length:var(--text-xl-medium-font-size)] [font-style:var(--text-xl-medium-font-style)] text-dekr-theme-primary-text relative font-[number:var(--text-xl-medium-font-weight)] text-center whitespace-nowrap leading-[var(--text-xl-medium-line-height)]">
                        Join the Waitlist
                      </div>
                    </button>

                    <div
                      className={`relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "inline-flex" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "flex-col" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "items-start" : (screenWidth >= 1728) ? "items-end" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "flex-[0_0_auto]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "gap-2.5" : ""} ${screenWidth >= 1728 ? "h-[35px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "justify-end" : ""}`}
                    >
                      <div
                        className={`relative ${screenWidth >= 768 && screenWidth < 1200 ? "font-marketing-pagagraph" : (screenWidth >= 1728) ? "font-marketing-paragraph-24" : ""} ${screenWidth >= 1728 || (screenWidth >= 768 && screenWidth < 1200) ? "w-fit" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "inline-flex" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "mt-[-1.00px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[var(--marketing-pagagraph-letter-spacing)]" : (screenWidth >= 1728) ? "tracking-[var(--marketing-paragraph-24-letter-spacing)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-[length:var(--marketing-pagagraph-font-size)]" : (screenWidth >= 1728) ? "text-[length:var(--marketing-paragraph-24-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "[font-style:var(--marketing-pagagraph-font-style)]" : (screenWidth >= 1728) ? "[font-style:var(--marketing-paragraph-24-font-style)]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "items-center" : ""} ${screenWidth >= 1728 || (screenWidth >= 768 && screenWidth < 1200) ? "text-dekr-color-dark-teal-dark-teal-500" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "gap-2.5" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-[number:var(--marketing-pagagraph-font-weight)]" : (screenWidth >= 1728) ? "font-[number:var(--marketing-paragraph-24-font-weight)]" : ""} ${screenWidth >= 1728 || (screenWidth >= 768 && screenWidth < 1200) ? "whitespace-nowrap" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[var(--marketing-pagagraph-line-height)]" : (screenWidth >= 1728) ? "leading-[var(--marketing-paragraph-24-line-height)]" : ""}`}
                      >
                        {(screenWidth >= 1728 ||
                          (screenWidth >= 768 && screenWidth < 1200)) && (
                          <p>Or come say hello in</p>
                        )}

                        {screenWidth >= 1200 && screenWidth < 1728 && (
                          <>
                            <p className="relative w-fit font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] whitespace-nowrap [font-style:var(--marketing-pagagraph-font-style)]">
                              Or come say hello in
                            </p>

                            <a
                              className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-blue-blue-500 text-xl tracking-[0] leading-8 underline whitespace-nowrap"
                              href="https://discord.gg/wQdWAVNzBN"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Discord
                            </a>
                          </>
                        )}
                      </div>

                      <div
                        className={`gap-px flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : (screenWidth >= 1200 && screenWidth < 1728) ? "w-[407px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "flex" : (screenWidth >= 1728) ? "inline-flex" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 1728 || (screenWidth >= 768 && screenWidth < 1200) ? "items-end" : (screenWidth >= 1200 && screenWidth < 1728) ? "items-start" : ""}`}
                      >
                        {((screenWidth >= 1200 && screenWidth < 1728) ||
                          (screenWidth >= 768 && screenWidth < 1200)) && (
                          <div
                            className={`relative ${screenWidth >= 768 && screenWidth < 1200 ? "flex" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "mt-[-1.00px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "[font-style:var(--marketing-pagagraph-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "items-start" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-1" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "text-dekr-color-dark-teal-dark-teal-500" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "leading-[var(--marketing-pagagraph-line-height)]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "font-marketing-pagagraph" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "w-fit" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-col" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "grow" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "font-[number:var(--marketing-pagagraph-font-weight)]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "whitespace-nowrap" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "text-[length:var(--marketing-pagagraph-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-px" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "tracking-[var(--marketing-pagagraph-letter-spacing)]" : ""}`}
                          >
                            {screenWidth >= 768 && screenWidth < 1200 && (
                              <>
                                <a
                                  className="relative w-fit mt-[-1.00px] [font-family:'Graphik-Semibold',Helvetica] font-normal text-dekr-color-blue-blue-500 text-xl tracking-[0] leading-8 underline whitespace-nowrap"
                                  href="https://discord.gg/wQdWAVNzBN"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Discord
                                </a>

                                <div className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-pagagraph-font-size)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
                                  —we’re building something special.
                                </div>
                              </>
                            )}

                            {screenWidth >= 1200 && screenWidth < 1728 && (
                              <>—we’re building something special.</>
                            )}
                          </div>
                        )}

                        {screenWidth >= 1728 && (
                          <>
                            <a
                              className="relative w-fit mt-[-1.00px] font-marketing-hyperlink font-[number:var(--marketing-hyperlink-font-weight)] text-dekr-color-blue-blue-500 text-[length:var(--marketing-hyperlink-font-size)] tracking-[var(--marketing-hyperlink-letter-spacing)] leading-[var(--marketing-hyperlink-line-height)] underline whitespace-nowrap [font-style:var(--marketing-hyperlink-font-style)]"
                              href="https://discord.gg/wQdWAVNzBN"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Discord
                            </a>

                            <div className="relative w-fit mt-[-1.00px] font-marketing-paragraph-24 font-[number:var(--marketing-paragraph-24-font-weight)] text-dekr-color-dark-teal-dark-teal-500 text-[length:var(--marketing-paragraph-24-font-size)] tracking-[var(--marketing-paragraph-24-letter-spacing)] leading-[var(--marketing-paragraph-24-line-height)] whitespace-nowrap [font-style:var(--marketing-paragraph-24-font-style)]">
                              —we’re building something special.
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer
                className={`flex flex-col items-center bg-[color:var(--dekr-color-green-green-600)] relative ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "w-full" : (screenWidth >= 1728) ? "w-[1728px]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || (screenWidth >= 768 && screenWidth < 1200) ? "self-stretch" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "gap-10" : (screenWidth >= 1200 && screenWidth < 1728) ? "gap-[67px]" : screenWidth >= 1728 ? "gap-[129px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "px-10 py-5" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "px-[532px] py-[50px]" : ""} ${screenWidth >= 1728 || (screenWidth >= 768 && screenWidth < 1200) ? "h-[496px]" : ""}`}
              >
                <div
                  className={`items-center gap-[3px] flex-[0_0_auto] relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "inline-flex" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "flex-col" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "mr-[-262.00px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "ml-[-262.00px]" : ""}`}
                >
                  <p
                    className={`font-marketing-paragraph-24 mt-[-1.00px] tracking-[var(--marketing-paragraph-24-letter-spacing)] text-[length:var(--marketing-paragraph-24-font-size)] [font-style:var(--marketing-paragraph-24-font-style)] text-dekr-theme-primary-text relative font-[number:var(--marketing-paragraph-24-font-weight)] text-center leading-[var(--marketing-paragraph-24-line-height)] ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "w-fit" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "whitespace-nowrap" : ""}`}
                  >
                    Have questions or feedback? Reach us at
                  </p>

                  <a
                    className={`font-marketing-hyperlink w-fit tracking-[var(--marketing-hyperlink-letter-spacing)] [font-style:var(--marketing-hyperlink-font-style)] text-[length:var(--marketing-hyperlink-font-size)] text-dekr-color-blue-blue-300 relative underline font-[number:var(--marketing-hyperlink-font-weight)] text-center whitespace-nowrap leading-[var(--marketing-hyperlink-line-height)] ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "mt-[-1.00px]" : ""}`}
                    href="mailto:support@dekr.io"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    support@dekr.io
                  </a>
                </div>

                <div
                  className={`border-dekr-theme-secondary-background flex border-t flex-col items-start [border-top-style:solid] gap-6 flex-[0_0_auto] px-0 py-5 relative ${screenWidth >= 768 && screenWidth < 1200 ? "w-full" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "w-[481px]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "self-stretch" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "mr-[-172.50px]" : ""} ${screenWidth >= 1200 && screenWidth < 1728 ? "ml-[-172.50px]" : ""}`}
                >
                  <p className="font-marketing-pagagraph self-stretch mt-[-1.00px] tracking-[var(--marketing-pagagraph-letter-spacing)] text-[length:var(--marketing-pagagraph-font-size)] [font-style:var(--marketing-pagagraph-font-style)] text-dekr-theme-primary-text relative font-[number:var(--marketing-pagagraph-font-weight)] text-center leading-[var(--marketing-pagagraph-line-height)]">
                    © 2025 Dekr, Inc. All rights reserved.
                  </p>

                  <p
                    className={`self-stretch text-dekr-theme-primary-text relative text-center ${screenWidth >= 768 && screenWidth < 1200 ? "[font-family:'Graphik-Regular',Helvetica]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-marketing-pagagraph" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "tracking-[0]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "tracking-[var(--marketing-pagagraph-letter-spacing)]" : ""} ${(screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728 ? "[font-style:var(--marketing-pagagraph-font-style)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "text-xl" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "text-[length:var(--marketing-pagagraph-font-size)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "font-normal" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "font-[number:var(--marketing-pagagraph-font-weight)]" : ""} ${screenWidth >= 768 && screenWidth < 1200 ? "leading-[27px]" : ((screenWidth >= 1200 && screenWidth < 1728) || screenWidth >= 1728) ? "leading-[var(--marketing-pagagraph-line-height)]" : ""}`}
                  >
                    By joining our waitlist, you agree to receive occasional
                    updates, product news, and insider tips. No spam—we promise.
                  </p>

                  <p className="font-marketing-pagagraph self-stretch tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-dekr-theme-primary-text relative font-[number:var(--marketing-pagagraph-font-weight)] text-center leading-[var(--marketing-pagagraph-line-height)]">
                    <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#8098c0] underline font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                      Privacy Policy
                    </span>

                    <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#fdf6f1] font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                      {" "}
                      |{" "}
                    </span>

                    <span className="font-marketing-pagagraph tracking-[var(--marketing-pagagraph-letter-spacing)] [font-style:var(--marketing-pagagraph-font-style)] text-[length:var(--marketing-pagagraph-font-size)] text-[#8098c0] underline font-[number:var(--marketing-pagagraph-font-weight)] leading-[var(--marketing-pagagraph-line-height)]">
                      Terms of Service
                    </span>
                  </p>
                </div>
              </footer>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
