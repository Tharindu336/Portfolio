/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050506",
        panel: "#0b1015",
        slateGlass: "rgba(15, 23, 32, 0.76)",
        cyan: "#00f0ff",
        magenta: "#ff007f"
      },
      fontFamily: {
        display: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        cyan: "0 0 22px rgba(0, 240, 255, 0.38)",
        magenta: "0 0 22px rgba(255, 0, 127, 0.28)",
        panel: "inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 80px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "digital-grid":
          "linear-gradient(rgba(0,240,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.07) 1px, transparent 1px)",
        "dot-matrix":
          "radial-gradient(circle, rgba(0,240,255,0.13) 1px, transparent 1.5px)"
      }
    }
  },
  plugins: []
};
