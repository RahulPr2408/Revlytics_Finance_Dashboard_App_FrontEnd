// export const tokens = {
//   grey: {
//     100: "#f0f0f3",
//     200: "#e1e2e7",
//     300: "#d1d3da",
//     400: "#c2c5ce",
//     500: "#b3b6c2",
//     600: "#8f929b",
//     700: "#6b6d74",
//     800: "#48494e",
//     900: "#242427",
//   },
//   primary: {
//     // light green
//     100: "#d0fcf4",
//     200: "#a0f9e9",
//     300: "#71f5de",
//     400: "#41f2d3",
//     500: "#12efc8",
//     600: "#0ebfa0",
//     700: "#0b8f78",
//     800: "#076050",
//     900: "#043028",
//   },
//   secondary: {
//     // yellow
//     100: "#fcf0dd",
//     200: "#fae1bb",
//     300: "#f7d299",
//     400: "#f5c377",
//     500: "#f2b455",
//     600: "#c29044",
//     700: "#916c33",
//     800: "#614822",
//     900: "#302411",
//   },
//   tertiary: {
//     // purple
//     500: "#8884d8",
//   },
//   background: {
//     light: "#2d2d34",
//     main: "#1f2026",
//   },
// };

// // mui theme settings
// export const themeSettings = {
//   palette: {
//     primary: {
//       ...tokens.primary,
//       main: tokens.primary[500],
//       light: tokens.primary[400],
//     },
//     secondary: {
//       ...tokens.secondary,
//       main: tokens.secondary[500],
//     },
//     tertiary: {
//       ...tokens.tertiary,
//     },
//     grey: {
//       ...tokens.grey,
//       main: tokens.grey[500],
//     },
//     background: {
//       default: tokens.background.main,
//       light: tokens.background.light,
//     },
//   },
//   typography: {
//     fontFamily: ["Inter", "sans-serif"].join(","),
//     fontSize: 12,
//     h1: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 32,
//     },
//     h2: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 24,
//     },
//     h3: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 20,
//       fontWeight: 800,
//       color: tokens.grey[200],
//     },
//     h4: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 14,
//       fontWeight: 600,
//       color: tokens.grey[300],
//     },
//     h5: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 12,
//       fontWeight: 400,
//       color: tokens.grey[500],
//     },
//     h6: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 10,
//       color: tokens.grey[700],
//     },
//   },
// };

export const tokens = {
  blue: {
    100: "#e0e7ff",
    200: "#b1c4ff",
    300: "#82a1ff",
    400: "#5380ff",
    500: "#255dff",
    600: "#1e4bcc",
    700: "#163999",
    800: "#0f2666",
    900: "#071333",
  },
  green: {
    100: "#e0ffe9",
    200: "#b3ffcc",
    300: "#80ffae",
    400: "#4dff91",
    500: "#1aff73",
    600: "#14cc5c",
    700: "#0f9945",
    800: "#0a662e",
    900: "#053318",
  },
  gold: {
    100: "#fff7e0",
    200: "#ffe8b3",
    300: "#ffd980",
    400: "#ffca4d",
    500: "#ffbb1a",
    600: "#cc9614",
    700: "#99700f",
    800: "#664a0a",
    900: "#332505",
  },
  grey: {
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  tertiary: {
    // light purple for accent
    500: "#b39ddb",
  },
  background: {
    light: "#23272e",
    main: "#1a1d23",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.blue,
      main: tokens.blue[500],
      light: tokens.blue[400],
    },
    secondary: {
      ...tokens.green,
      main: tokens.green[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    accent: {
      ...tokens.gold,
      main: tokens.gold[500],
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
