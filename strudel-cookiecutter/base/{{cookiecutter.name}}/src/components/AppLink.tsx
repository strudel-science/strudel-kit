import React from 'react';
import { Link, LinkProps } from '@mui/material';
import { Link as RouterLink, To } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
  to: To;
}
/**
 * Link component for in-app links.
 * Wrapper for the MUI Link component with the 
 * react-router Link injected as the component so 
 * that in-app links work.
 */
export const AppLink: React.FC<AppLinkProps> = ({ to, ...rest}) => {
  return (
    <Link
      {...rest} 
      to={to}
      component={RouterLink}
    />
  )
}