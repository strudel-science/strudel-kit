import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useFilters } from '../FilterContext/useFilters';
import { hasValue } from '../../utils';
import { FilterFieldProps } from '../FilterField/FilterField';

interface FilterGroupProps {
  label?: React.ReactNode;
  groupId: string | number;
  children: React.ReactNode;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  label,
  groupId,
  children,
}) => {
  const { activeFilters, expandedGroup, dispatch } = useFilters();

  /**
   * Count the number of active filters in this group by using
   * the `field` prop from the FilterField children to look up
   * that filter in `activeFilters`
   */
  let activeChildren = 0;
  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement(child) &&
     (child.props as FilterFieldProps).field &&
      hasValue(activeFilters.find((f) => f.field === (child.props as FilterFieldProps).field))
    ) {
      return activeChildren++;
    }
  });

  const handleChange =
    (panel: string | number) =>
    (_event: React.SyntheticEvent, newExpanded: boolean) => {
      dispatch({
        type: 'SET_EXPANDED_GROUP',
        payload: newExpanded ? panel : false,
      });
    };

  return (
    <Accordion
      disableGutters
      elevation={0}
      expanded={expandedGroup === groupId}
      onChange={handleChange(groupId)}
      sx={{
        borderTop: '1px solid',
        borderTopColor: 'grey.300',
        '&:first-of-type': {
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
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography fontSize="large">{label}</Typography>
          {activeChildren > 0 && (
            <Chip
              label={`${activeChildren} active`}
              color="primary"
              size="small"
            />
          )}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>{children}</Stack>
      </AccordionDetails>
    </Accordion>
  );
};
