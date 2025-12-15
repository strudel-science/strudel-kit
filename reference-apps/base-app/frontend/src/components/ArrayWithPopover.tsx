import { Box, Stack, Chip, Popover, Grid } from '@mui/material';
import { useState } from 'react';

interface ArrayWithPopoverProps {
  values: string[] | number[];
}

/**
 * Array of Chips with a popover to show the full list.
 * This is used to render arrays in table cells where the
 * list is cut off by the edge of the cell.
 */
export const ArrayWithPopover: React.FC<ArrayWithPopoverProps> = ({
  values,
}) => {
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
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{ height: '100%' }}
      >
        {values.map((v) => (
          <Chip key={v} label={v} size="small" />
        ))}
      </Stack>
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
        <Grid
          container
          rowGap={1}
          columnGap={1}
          sx={{
            maxWidth: '300px',
            padding: 2,
          }}
        >
          {values.map((v) => (
            <Grid key={v} item>
              <Chip label={v} size="small" />
            </Grid>
          ))}
        </Grid>
      </Popover>
    </Box>
  );
};
