/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 5s linear infinite",
            },
            colors: {
                "text-primary": "#eff0f0",
                background: "#0f1729",
                primary: "#171e30",
                secondary: "#1b2435",
                accent: "#a855f7",
            },
        },
    },
    plugins: [],
};
