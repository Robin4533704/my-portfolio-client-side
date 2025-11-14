/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // এই লাইনটি নিশ্চিত করুন
  theme: {
    extend: {
      // আপনার custom theme extensions এখানে থাকতে পারে
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark"], // শুধুমাত্র light এবং dark themes
    darkTheme: "dark", // explicitly dark theme সেট করুন
    base: true,
    styled: true,
    utils: true,
  },
}