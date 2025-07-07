/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dekr-color-blue-blue-200": "var(--dekr-color-blue-blue-200)",
        "dekr-color-blue-blue-300": "var(--dekr-color-blue-blue-300)",
        "dekr-color-blue-blue-500": "var(--dekr-color-blue-blue-500)",
        "dekr-color-dark-teal-dark-teal-400":
          "var(--dekr-color-dark-teal-dark-teal-400)",
        "dekr-color-dark-teal-dark-teal-500":
          "var(--dekr-color-dark-teal-dark-teal-500)",
        "dekr-color-green-green-500": "var(--dekr-color-green-green-500)",
        "dekr-color-manilla-manilla-300":
          "var(--dekr-color-manilla-manilla-300)",
        "dekr-color-mustard-mustard-200":
          "var(--dekr-color-mustard-mustard-200)",
        "dekr-color-mustard-mustard-600":
          "var(--dekr-color-mustard-mustard-600)",
        "dekr-color-smoke-purple-smoke-purple-500":
          "var(--dekr-color-smoke-purple-smoke-purple-500)",
        "dekr-color-warm-pink-warm-pink-200":
          "var(--dekr-color-warm-pink-warm-pink-200)",
        "dekr-color-warm-pink-warm-pink-400":
          "var(--dekr-color-warm-pink-warm-pink-400)",
        "dekr-color-warm-pink-warm-pink-500":
          "var(--dekr-color-warm-pink-warm-pink-500)",
        "dekr-theme-border": "var(--dekr-theme-border)",
        "dekr-theme-primary-background": "var(--dekr-theme-primary-background)",
        "dekr-theme-primary-text": "var(--dekr-theme-primary-text)",
        "dekr-theme-secondary-background":
          "var(--dekr-theme-secondary-background)",
        "variable-collection-transparent-light-pink":
          "var(--variable-collection-transparent-light-pink)",
      },
      fontFamily: {
        "marketing-headline-1": "var(--marketing-headline-1-font-family)",
        "marketing-headline-2": "var(--marketing-headline-2-font-family)",
        "marketing-hyperlink": "var(--marketing-hyperlink-font-family)",
        "marketing-pagagraph": "var(--marketing-pagagraph-font-family)",
        "marketing-paragraph-24": "var(--marketing-paragraph-24-font-family)",
        "mobile-headline": "var(--mobile-headline-font-family)",
        "monospace-text": "var(--monospace-text-font-family)",
        "text-lg-medium": "var(--text-lg-medium-font-family)",
        "text-xl-medium": "var(--text-xl-medium-font-family)",
      },
    },
  },
  plugins: [],
};
