import React, { HTMLAttributes, ReactNode } from 'react';
import { Box, Card, CardActionArea, CardActionAreaProps, CardContent, Stack, Typography } from '@mui/material';

export interface LinkCardProps {
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  label?: ReactNode;
  image?: ReactNode;
  description?: ReactNode;

}

/**
 * Component for displaying a flat list of label-value pairs
 * in a two column table.
 */
export const LinkCard: React.FC<LinkCardProps> = ({
  href,
  target = '_blank',
  label,
  image,
  description
}) => {
  return (
    <Card
      sx={{ 
        background: 'none',
        border: '1px solid',
        height: '100%',
        '.MuiCardActionArea-root:hover': {
          textDecoration: 'none'
        }
      }}>
      <CardActionArea href={href} target={target} sx={{ height: '100%' }}>
        <CardContent>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              {image && (
                <Box
                  sx={{
                    height: '40px',
                    position: 'relative',
                    'img': {
                      height: '100%',
                      width: 'auto'
                    }
                  }}
                >
                  {image}
                </Box>
              )}
              <Typography gutterBottom variant="h6" component="div">
                {label}
              </Typography>
            </Stack>
            {description && (
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            )}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}