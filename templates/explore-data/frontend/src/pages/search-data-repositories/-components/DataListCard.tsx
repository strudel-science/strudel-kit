import { Box, Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import { AppLink } from '../../../components/AppLink';

interface DataListCardProps {
  item: any;
  previewItem: any;
  setPreviewItem: React.Dispatch<React.SetStateAction<any>>;
}

/**
 * Card to show in the main list of the `<DatasetExplorer>`.
 * The fields that are displayed in the cards are originally
 * configured in `defintions.cards.main`.
 */
export const DataListCard: React.FC<DataListCardProps> = ({
  item,
  previewItem,
  setPreviewItem,
}) => {
  const handleItemClick = () => {
    setPreviewItem(item);
  };

  return (
    <Stack
      className={previewItem?.id === item.id ? 'selected' : ''}
      data-testid="sdr-data-list-card"
      direction="row"
      onClick={() => handleItemClick()}
      sx={{
        padding: 1,
        transition: '0.25s',
        '&:hover': {
          bgcolor: 'neutral.light',
        },
        '&.selected': {
          bgcolor: blue[50],
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'neutral.dark',
          height: 70,
          width: 70,
        }}
      >
        <Typography fontSize="small">{'<Image>'}</Typography>
      </Box>
      <Box flex={1}>
        <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          <AppLink
            to="/search-data-repositories/$id"
            params={{ id: item.id }}
            underline="hover"
          >
            {/* CUSTOMIZE: item title field */}
            {item.title}
          </AppLink>
        </Typography>
        {item.summary && (
          <Typography
            sx={{
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2',
              display: '-webkit-box',
              overflow: 'hidden',
            }}
          >
            {/* CUSTOMIZE: item summary field */}
            {item.summary}
          </Typography>
        )}
        {item.tags && (
          <Typography
            sx={{
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '1',
              display: '-webkit-box',
              fontStyle: 'italic',
              overflow: 'hidden',
            }}
          >
            {/* CUSTOMIZE: item tags field */}
            {item.tags.map((tag: string, i: number) => {
              if (i < item.tags.length - 1) {
                return (
                  <Typography
                    key={`${tag}-${i}`}
                    component="span"
                    sx={{ fontSize: 'small', marginRight: 0.5 }}
                  >
                    {tag},
                  </Typography>
                );
              } else {
                return (
                  <Typography
                    key={`${tag}-${i}`}
                    component="span"
                    sx={{ fontSize: 'small' }}
                  >
                    {tag}
                  </Typography>
                );
              }
            })}
          </Typography>
        )}
      </Box>
    </Stack>
  );
};
