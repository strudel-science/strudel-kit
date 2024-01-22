import { Palette, PaletteOptions } from '@mui/material/styles';

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Partial<Color>;
  }
  interface PaletteOptions {
    neutral: Partial<Color>;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}