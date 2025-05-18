import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

export const palette = {
  primary: {
    light: "rgb(150, 150, 190)",
    main: "rgb(80, 80, 120)",
    dark: "rgb(50, 50, 90)",
  },
  secondary: {
    light: grey[200],
    main: grey[400],
    dark: grey[600],
  },
  error: {
    main: red[700],
  },
};

const theme = createTheme({
  palette,
});

export default theme;
