/** @type {import('tailwindcss').Config} */

import sharedConfig from "tailwind-config/tailwind.config.js";

module.exports = {
    ...sharedConfig,
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ]
}