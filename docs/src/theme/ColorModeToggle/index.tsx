import React, { useEffect } from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import type ColorModeToggleType from '@theme/ColorModeToggle';
import type {WrapperProps} from '@docusaurus/types';
import { useColorScheme } from '@mui/material';

type Props = WrapperProps<typeof ColorModeToggleType>;

export default function ColorModeToggleWrapper(props: Props): JSX.Element {
  // Get the MUI hook
  const { setMode } = useColorScheme();

  // Extract the docusaurus theme from the component properties
  const { value } = props;

  // Whenever the theme changes in docusaurus, trigger the change in MUI
  useEffect(() => {
    setMode(value);
  }, [value]);
  
  return (
    <>
      <ColorModeToggle {...props} />
    </>
  );
}
