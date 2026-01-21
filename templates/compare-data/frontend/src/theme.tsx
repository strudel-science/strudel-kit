import { createTheme } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';

/**
 * MUI Theme object for setting app-wide and component-wide styles.
 * Specify colors, spacing, fonts, and more.
 * Learn more about theme options: https://mui.com/material-ui/customization/theming/
 */
export const theme = createTheme({
  // Color palette to use throughout the app
  palette: {
    mode: 'light',
    background: {
      default: '#F5F5F6',
      paper: '#fff',
    },
    primary: {
      main: '#1976d2',
      // Exclude light, dark, or contrastText to have them
      // calculated automatically based on the main color.
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fff',
    },
    neutral: {
      main: '#DADADA',
      light: '#e0e0e0',
      dark: '#828282',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    grey: {
      50: '#ddd',
      500: '#999',
      900: '#444',
    },
  },
  // Control the default border radius
  shape: {
    borderRadius: 4,
  },
  // Control the font, size, and font weights
  typography: {
    htmlFontSize: 16,
    fontFamily: `"Helvetica", "Verdana", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  // Default options for MUI components used throughout the app
  components: {
    /**
     * Example component customization.
     * Learn more at https://mui.com/material-ui/customization/theme-components/
     * 
        MuiComponentName: {
          defaultProps: {
            // Put prop names and values here
          },
          styleOverrides: {
            root: {
              // Put styles here
            }
          },
          // Create new custom variants of certain components
          variants: [
            {
              props: { variant: '' },
              style: {
                // Put styles here
              },
            },
          ],
        },
     *
     */
    MuiButton: {
      variants: [
        {
          props: { color: 'neutral' },
          style: {
            backgroundColor: 'white',
            borderColor: '#bdbdbd',
            color: '#757575',
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 2,
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 0,
          '& .MuiDataGrid-cell:focus-within': {
            outline: 'none',
          },
          '& .MuiDataGrid-overlayWrapper': {
            minHeight: '4rem',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            color: 'grey.900',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          },
        },
      },
    },
  },
});
