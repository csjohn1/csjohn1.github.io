module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      charcoal: "#1E2124",
      gray: "#767676",
      "highlight-gray": "#1E212454",
      white: "#FFFFFF",
    },
    fontFamily: {
      body: ["AllianceNo1", "system-ui", "sans-serif"],
      heading: ["AllianceNo2", "ui-monospace", "SFMono-Regular"],
    },
    extend: {
      keyframes: {
        "move-from-left": {
          "0%": { transform: "translate(-100%, 0px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        "move-to-right": {
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(101%, 0px)" },
        },
      },
      animation: {
        "move-from-left": "move-from-left 0.5s ease-in-out",
        "move-to-right": "move-to-right 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
