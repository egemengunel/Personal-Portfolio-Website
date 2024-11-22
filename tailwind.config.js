/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  safelist: [
    'dark:bg-gray-800',
    'dark:text-white',
    'dark:hover:bg-gray-600',
    'dark:bg-gray-700',
    'dark:text-gray-400'
  ]
}