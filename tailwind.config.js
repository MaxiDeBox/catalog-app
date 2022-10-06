process.env.TAILWIND_MODE =
  process.env.NODE_ENV === 'production' ||
  [' build', ':build', 'ng b', 'production'].some(function (command) {
    return process.argv.join(' ').toLowerCase().includes(command);
  })
    ? 'build'
    : 'watch';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
