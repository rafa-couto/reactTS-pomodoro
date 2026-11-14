export const defaultTheme = {
  white: '#FFF',
  primary: '#8257e6',
  secondary: 'orange',

  'gray-100': '#E1E1E6',
  'gray-300': '#C4C4CC',
  'gray-400': '#8D8D99',
  'gray-500': '#9696A3',
  'gray-600': '#323238',
  'gray-700': '#29292E',
  'gray-800': '#202024',
  'gray-900': '#121214',

  'green-300': '#00B37E',
  'green-500': '#00845C',
  'green-700': '#015F43',

  'red-500': '#F07580',
  'red-700': '#7A1921',

  'yellow-500': '#FBA94C',
}

export const lightTheme: typeof defaultTheme = {
  ...defaultTheme,
  'gray-100': '#202024',
  'gray-300': '#41414b',
  'gray-400': '#62626e',
  'gray-500': '#686875',
  'gray-600': '#d8dedb',
  'gray-700': '#e9edea',
  'gray-800': '#ffffff',
  'gray-900': '#f0f2f1',
  'green-300': '#007853',
  'yellow-500': '#946000',
  'red-500': '#AB222E',
}
