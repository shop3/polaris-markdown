export const themes = {
  light: {
    colorScheme: 'light',
  },
  dark: {
    colorScheme: 'dark',
  },
};

export const getTheme = (themeName) => {
  return themes[themeName];
};
