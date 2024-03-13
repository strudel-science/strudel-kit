import { Box, Link, Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSearchDataRepositories } from './context/ContextProvider';
import { setPreviewItem } from './context/actions';

interface DataListCardProps {
  item: any;
}

export const DataListCard: React.FC<DataListCardProps> = ({ item }) => { 
  const {state, dispatch} = useSearchDataRepositories();

  const handleItemClick = (item: any) => {
    dispatch(setPreviewItem(item))
  };
  
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
            {item.title}
          </Link>
        </Typography>
        <Typography
          sx={{
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '2',
            display: '-webkit-box',
            overflow: 'hidden'
          }}
        >
          {item.summary}
        </Typography>
        <Typography
          sx={{
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '1',
            display: '-webkit-box',
            fontStyle: 'italic',
            overflow: 'hidden'
          }}
        >
          <Typography 
            component="span" 
            sx={{ 
              fontSize: 'small', 
              fontWeight: 'bold', 
              marginRight: 0.5 
            }}
          >
            Tags:
          </Typography>
          {item.tags.map((tag: string, i: number) => {
            if (i < item.tags.length -1) {
              return <Typography component="span" sx={{ fontSize: 'small', marginRight: 0.5 }}>{tag},</Typography>
            } else {
              return <Typography component="span" sx={{ fontSize: 'small' }}>{tag}</Typography>
            }
          })}
        </Typography>                
      </Box>
    </Stack>
  )
}