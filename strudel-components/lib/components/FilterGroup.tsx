import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { setExpandedGroup, useFilters } from './FilterContext';

interface FilterGroupProps {
  label?: React.ReactNode;
  groupId: string | number;
  children: React.ReactNode;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  label,
  groupId,
  children
}) => {
  const { state, dispatch } = useFilters();

  const handleChange = (panel: string | number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    dispatch(setExpandedGroup(newExpanded ? panel : false));
  };

  return (
    <Accordion 
      disableGutters
      elevation={0}
      expanded={state.expandedGroup === groupId} 
      onChange={handleChange(groupId)}
      sx={{
        borderTop: '1px solid',
        borderTopColor: 'grey.300',
        '&:first-child': {
          borderTop: 'none',
        },
        '&::before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon />} 
        aria-controls="panel1d-content" 
        id="panel1d-header"
        sx={{
          flexDirection: 'row-reverse',
          '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': {
            fontSize: '1rem',
          },
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
          },
          '& .MuiAccordionSummary-content': {
            marginLeft: 1,
            marginTop: 2,
            marginBottom: 2,
          },
        }}
      >
        <Typography fontSize="large">{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          {children}
        </Stack>
      </AccordionDetails>
    </Accordion>

  )
}