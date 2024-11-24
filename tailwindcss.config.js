print("Program started")# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          wood: {
            50: '#faf6f1',
            100: '#f0e6d5',
            200: '#e5d4b9',
            300: '#d9c19c',
            400: '#cead80',
            500: '#c29a63',
            600: '#b68746',
            700: '#9a732a',
            800: '#7d5e0d',
            900: '#614800',
          },
        },
      },
    },
    p