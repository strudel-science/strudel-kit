import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

interface FilterGroupProps {
  label?: React.ReactNode;
  children: React.ReactNode;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  label,
  children
}) => {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion 
      disableGutters
      elevation={0}
      expanded={expanded === 'panel1'} 
      onChange={handleChange('panel1')}
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