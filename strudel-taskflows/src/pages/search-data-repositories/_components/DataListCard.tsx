import { Box, Link, Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSearchDataRepositories } from '../_context/ContextProvider';
import { setPreviewItem } from '../_context/actions';

interface DataListCardProps {
  item: any;
}

/**
 * Card to show in the main list of the `<DatasetExplorer>`.
 * The fields that are displayed in the cards are originally  
 * configured in `defintions.cards.main`.
 */
export const DataListCard: React.FC<DataListCardProps> = ({ item }) => { 
  const {state, dispatch} = useSearchDataRepositories();

  const handleItemClick = (item: any) => {
    dispatch(setPreviewItem(item))
  };
  
  /**
   * Content to render on the page for this component
   */
  return (
    <Stack 
      className={state.previewItem?.id === item.id ? 'selected' : ''}
      direction="row" 
      onClick={() => handleItemClick(item)}
      sx={{
        padding: 1,
        transition: '0.25s',
        '&:hover': {
          bgcolor: 'neutral.light'
        },
        '&.selected': {
          bgcolor: blue[50]
        }
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: "center", 
          bgcolor: "neutral.dark", 
          height: 70,
          width: 70 
        }}
      >
        <Typography fontSize="small">{'<Image>'}</Typography>
      </Box>
      <Box flex={1}>
        <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          <Link component={RouterLink} to={`./${item['id']}`} underline="hover">
            {item[state.cardFields.title]}
          </Link>
        </Typography>
        {state.cardFields.content && (
          <Typography
            sx={{
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2',
              display: '-webkit-box',
              overflow: 'hidden'
            }}
          >
            {item[state.cardFields.content]} test
          </Typography>
        )}
        {state.cardFields.tags && (
          <Typography
            sx={{
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '1',
              display: '-webkit-box',
              fontStyle: 'italic',
              overflow: 'hidden'
            }}
          >
            {item[state.cardFields.tags].map((tag: string, i: number) => {
              if (i < item['tags'].length -1) {
                return <Typography key={`${tag}-${i}`} component="span" sx={{ fontSize: 'small', marginRight: 0.5 }}>{tag},</Typography>
              } else {
                return <Typography key={`${tag}-${i}`} component="span" sx={{ fontSize: 'small' }}>{tag}</Typography>
              }
            })}
          </Typography>  
        )}
        
                      
      </Box>
    </Stack>
  )
}