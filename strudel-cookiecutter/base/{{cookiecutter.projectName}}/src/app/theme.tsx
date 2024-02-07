import { createTheme } from "@mui/material";

/**
 * MUI Theme object for setting app-wide and component-wide styles.
 * Specify colors, spacing, fonts, and more.
 * Learn more about theme options: https://mui.com/material-ui/customization/theming/
 */
export const theme = createTheme({
  /** Color palette to use throughout the app */
  palette: {
    background: {
      default: '#F5F5F6'
    },
    neutral: {
      main: '#DADADA',
      light: '#e0e0e0',
      dark: '#828282'
    }
  },
  /** Default options for MUI components used throughout the app */
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { color: 'neutral' },
          style: {
            backgroundColor: 'white',
            borderColor: '#bdbdbd',
            color: '#757575'
          },
        },
      ],
    },
    MuiStack: {
      defaultProps: {
        spacing: 2
      },
    },
  },
});