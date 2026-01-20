import { Link } from '@mui/material';
import { createLink } from '@tanstack/react-router';

/**
 * Link component for in-app links.
 * Connects the tanstack link props to the MUI Link component
 */
export const AppLink = createLink(Link);
