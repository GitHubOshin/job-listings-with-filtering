module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      // Primary
      desaturatedDarkCyan: 'hsl(180, 29%, 50%)',
      //Neutral
      bgLightGrayishCyan: 'hsl(180, 52%, 96%)',
      ftLightGrayishCyan: 'hsl(180, 31%, 95%)',
      darkGrayishCyan: 'hsl(180, 8%, 52%)',
      veryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
      // Othere colours
      white: '#ffffff',
      black: '#000000',
      slate800: '#1e293b',
      slate500: '#64748b',
      slate300: '#94a3b8',
      pink300: '#f9a8d4',
      sky500: ' #0ea5e9'
    },
    extend: {
      fontFamily: {
        leagueSpartan: ['League Spartan']
      }
    }
  },
  plugins: []
}
