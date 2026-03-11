const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-functions": {
      functions: {
        fluidCalc: (min, max, minViewport = 400, maxViewport = 1366) => {
          const base = 16; // 1rem = 16px
          const pxToRem = (px) => parseFloat(px) / base;

          const minRem = pxToRem(min);
          const maxRem = pxToRem(max);

          const minVwRem = minViewport / base;
          const maxVwRem = maxViewport / base;

          const slope = (maxRem - minRem) / (maxVwRem - minVwRem);
          const slopeFormatted = slope.toFixed(5).replace(/\.?0+$/, "");

          return `clamp(${minRem}rem, calc(${slopeFormatted} * (100vw - ${minVwRem}rem) + ${minRem}rem), ${maxRem}rem)`;
        },
      },
    },
  },
};
export default config;
