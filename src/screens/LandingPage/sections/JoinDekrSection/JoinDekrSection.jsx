import React from "react";

export const JoinDekrSection = () => {
  const footerLinks = [
    { text: "Privacy Policy", href: "#", color: "#8098c0" },
    { text: "Terms of Service", href: "#", color: "#8098c0" },
  ];

  return (
    <footer className="flex flex-col w-[1726px] h-[496px] items-center gap-[129px] px-[532px] py-[50px] absolute top-[5295px] left-0.5 bg-[color:var(--dekr-color-green-green-600)]">
      <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
        <p className="relative w-fit mt-[-1.00px] font-marketing-paragraph-24 font-[number:var(--marketing-paragraph-24-font-weight)] text-dekr-theme-primary-text text-[length:var(--marketing-paragraph-24-font-size)] text-center tracking-[var(--marketing-paragraph-24-letter-spacing)] leading-[var(--marketing-paragraph-24-line-height)] whitespace-nowrap [font-style:var(--marketing-paragraph-24-font-style)]">
          Have questions or feedback? Reach us at
        </p>

        <a
          className="relative w-fit font-marketing-hyperlink font-[number:var(--marketing-hyperlink-font-weight)] text-dekr-color-blue-blue-300 text-[length:var(--marketing-hyperlink-font-size)] text-center tracking-[var(--marketing-hyperlink-letter-spacing)] leading-[var(--marketing-hyperlink-line-height)] underline whitespace-nowrap [font-style:var(--marketing-hyperlink-font-style)]"
          href="mailto:support@dekr.io"
          rel="noopener noreferrer"
          target="_blank"
        >
          support@dekr.io
        </a>
      </div>

      <div className="flex flex-col w-[481px] items-start gap-6 px-0 py-5 relative flex-[0_0_auto] border-t [border-top-style:solid] border-dekr-theme-secondary-background">
        <p className="relative self-stretch mt-[-1.00px] font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-theme-primary-text text-[length:var(--marketing-pagagraph-font-size)] text-center tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
          © 2025 Dekr, Inc. All rights reserved.
        </p>

        <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-theme-primary-text text-[length:var(--marketing-pagagraph-font-size)] text-center tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
          By joining our waitlist, you agree to receive occasional updates,
          product news, and insider tips. No spam—we promise.
        </p>

        <p className="relative self-stretch font-marketing-pagagraph font-[number:var(--marketing-pagagraph-font-weight)] text-dekr-theme-primary-text text-[length:var(--marketing-pagagraph-font-size)] text-center tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] [font-style:var(--marketing-pagagraph-font-style)]">
          {footerLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.href}
                className="text-[#8098c0] underline font-marketing-pagagraph [font-style:var(--marketing-pagagraph-font-style)] font-[number:var(--marketing-pagagraph-font-weight)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] text-[length:var(--marketing-pagagraph-font-size)] hover:opacity-80 transition-opacity"
              >
                {link.text}
              </a>
              {index < footerLinks.length - 1 && (
                <span className="text-[#fdf6f1] font-marketing-pagagraph [font-style:var(--marketing-pagagraph-font-style)] font-[number:var(--marketing-pagagraph-font-weight)] tracking-[var(--marketing-pagagraph-letter-spacing)] leading-[var(--marketing-pagagraph-line-height)] text-[length:var(--marketing-pagagraph-font-size)]">
                  {" "}
                  |{" "}
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
    </footer>
  );
};
