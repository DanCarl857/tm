import { gray, grayDark } from "@radix-ui/colors";
import { scrollbarWidth } from "tailwind-scrollbar-utilities";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
// import themes from "tailwindcss-themer";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
      mono: ["var(--font-space-mono)"],
    },

    extend: {
      dropShadow: {
        DEFAULT: "0px 0px 2px #E0E0E0",
        lg: "0px 0px 12px #E0E0E0",
        xl: "0px 0px 16px #E0E0E0",
        "bottom-md": "0px 2px 8px rgba(224, 224, 224, 0.25)",
      },
      spacing: {
        "15": "15px",
        "45": "45px",
        "56": "56px",
      },
      fontSize: {
        "extra-large": "56px",
        large: "42px",
        heading0: "36px",
        heading1: "32px",
        heading2: "22px",
        heading3: "18px",
        heading4: "16px",
        small: "12px",
        "extra-small": "11px",
        "20": "20px",
        "17": "17px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        inherit: "inherit",
        current: "current",
        transparent: "transparent",
        surface: "hsl(0, 0%, 100%)",
        foreground: "hsl(0, 0%, 0%)",
        destructive: "#F46A6A",
        primary: {
          1: "#67B06C",
          2: "#346537",
          3: "#578C5B",
          4: "#709d73",
          5: "#67b06c69",
          6: "#F452651A",
          7: "#F45265",
          8: "#6CE38633",
          9: "#528356",
          10: "#558758",
          11: "#46CF9F",
          12: "#02C57F",
          13: "#2EDCAD",
          14: "#69B0501A",
          15: "#35EF8A1A",
          16: "rgba(53,239,138,0.10)",
          17: "#65A76A",
          18: "#E3F9E5",
          19: "#69B050",
          20: "#EBFDF3",
          21: "#65A76A",
          22: "#75D2A0",
        },
        secondary: {
          1: "#E2DF95",
          2: "#D84343",
          3: "#B83838",
          4: "#FCA3B0",
        },
        error: {
          1: "#F46A6A",
          2: "rgba(238, 82, 83,0.4)",
        },
        background: {
          1: "#F9F9F9",
        },
        black: {
          1: "#000000",
          2: "#252525",
          3: "#313131",
          4: "#1E1E1E",
          5: "#0b0b0b",
          6: "#1C1C1C",
          7: "#31313166",
          8: "#3F3C3C66",
        },
        blue: {
          1: "#18A4CC",
          2: "#4AD7FF26",
          3: "#7AA8D21A",
          4: "#51AFCA",
          5: "#51AFCA26",
          6: "#EAF5F6",
          7: "#2053B7",
          8: "#5683DD",
        },
        purple: {
          1: "#9F3FFF",
          2: "#B65AD61A",
        },
        warning: {
          1: "#FEF2DF",
        },
        info: {
          1: "",
        },
        neutral: {
          1: gray.gray1,
          2: gray.gray2,
          3: gray.gray3,
          4: gray.gray4,
          5: gray.gray5,
          6: gray.gray6,
          7: gray.gray7,
          8: gray.gray8,
          9: gray.gray9,
          10: gray.gray10,
          11: gray.gray11,
          12: gray.gray12,
        },
        "neutral-inverted": {
          1: grayDark.gray1,
          2: grayDark.gray2,
          3: grayDark.gray3,
          4: grayDark.gray4,
          5: grayDark.gray5,
          6: grayDark.gray6,
          7: grayDark.gray7,
          8: grayDark.gray8,
          9: grayDark.gray9,
          10: grayDark.gray10,
          11: grayDark.gray11,
          12: grayDark.gray12,
        },
        grey: {
          1: "#D9D9D9",
          2: "#848484",
          3: "#68737F33",
          4: "#8E969F33",
          5: "#E9E9E9",
          6: "#7D7D7D",
          7: "#CED4DA",
          8: "#E4E4E4",
          9: "#303032",
          10: "#7D7D7D",
          11: "#E0E0E0",
        },
        white: {
          1: "#FFF",
          3: "#68737F33",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
  },
  plugins: [animate, scrollbarWidth()],
};
export default config;
