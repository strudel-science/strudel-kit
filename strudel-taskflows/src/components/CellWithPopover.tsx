import { Box, Popover } from '@mui/material';
import { PropsWithChildren, useState } from 'react';

/**
 * Generic inner cell content with a popover to show the full contents.
 * This is used to render cells with too much content to display
 * inside a single cell. Full content is displayed on hover in a popover box.
 */
export const CellWithPopover: React.FC<PropsWithChildren> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box sx={{ height: '100%' }}>
      <Box
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          height: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {children}
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box
          sx={{
            maxWidth: '300px',
            padding: 2,
          }}
        >
          {children}
        </Box>
      </Popover>
    </Box>
  );
};
