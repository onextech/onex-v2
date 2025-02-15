/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Custom
    "../../packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: '#__next',
  theme: { extend: {} },
  corePlugins: { preflight: false },
  plugins: [],
}
