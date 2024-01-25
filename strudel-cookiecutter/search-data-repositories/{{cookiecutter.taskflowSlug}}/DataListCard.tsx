import React, { useState } from 'react';
import { Box, BoxProps, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Link, Pagination, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAnalytics } from '../../components/contexts/analytics/AnalyticsProvider';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { DataGrid } from '../../components/DataGrid';
import { GridEventListener } from '@mui/x-data-grid';
import { blue } from '@mui/material/colors';
import { setPreviewItem, setSearch } from '../../components/contexts/analytics/actions';

interface DataListCardProps {
  item: any;
}

export const DataListCard: React.FC<DataListCardProps> = ({ item }) => { 
  const {state, dispatch} = useAnalytics();

  const handleItemClick = (item: any) => {
    dispatch(setPreviewItem(item))
  };
  
  return (
    <Stack 
      className={state.previewItem?.id === item.id ? 'selected' : ''}
      direction="row" 
      onClick={() => handleItemClick(item)}
      sx={{ "{{" }}
        padding: 1,
        transition: '0.25s',
        '&:hover': {
          bgcolor: 'neutral.light'
        },
        '&.selected': {
          bgcolor: blue[50]
        }
      {{ "}}" }}
    >
      <Box 
        sx={{ "{{" }} 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: "center", 
          bgcolor: "neutral.dark", 
          height: 70,
          width: 70 
        {{ "}}" }}
      >
        <Typography fontSize="small">{'<Image>'}</Typography>
      </Box>
      <Box flex={1}>
        <Typography sx={{ "{{" }} color: 'primary.main', fontWeight: 'bold' {{ "}}" }}>
          <Link component={RouterLink} to={`./${item['id']}`} underline="hover">
            {item.title}
          </Link>
        </Typography>
        <Typography
          sx={{ "{{" }}
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '2',
            display: '-webkit-box',
            overflow: 'hidden'
          {{ "}}" }}
        >
          {item.summary}
        </Typography>
        <Typography
          sx={{ "{{" }}
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '1',
            display: '-webkit-box',
            fontStyle: 'italic',
            overflow: 'hidden'
          {{ "}}" }}
        >
          <Typography 
            component="span" 
            sx={{ "{{" }} 
              fontSize: 'small', 
              fontWeight: 'bold', 
              marginRight: 0.5 
            {{ "}}" }}
          >
            Tags:
          </Typography>
          {item.tags.map((tag: string, i: number) => {
            if (i < item.tags.length -1) {
              return <Typography component="span" sx={{ "{{" }} fontSize: 'small', marginRight: 0.5 {{ "}}" }}>{tag},</Typography>
            } else {
              return <Typography component="span" sx={{ "{{" }} fontSize: 'small' {{ "}}" }}>{tag}</Typography>
            }
          })}
        </Typography>                
      </Box>
    </Stack>
  )
}