import React, { HTMLAttributes, ReactNode } from 'react';
import { Button, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';

export interface CodeAndPreviewButtonsProps {
  codeUrl?: string;
  previewUrl?: string;
}

/**
 * Display a Code and a Preview button side-by-side that link to respective locations
 */
export const CodeAndPreviewButtons: React.FC<CodeAndPreviewButtonsProps> = ({
  codeUrl,
  previewUrl,
}) => {
  return (
    <Stack direction="row" spacing={1}>
      {codeUrl && (
        <a href={codeUrl} target="_blank">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<CodeIcon />}
            size="small"
          >
            <span>Code</span>
          </Button>
        </a>
      )}
      {previewUrl && (
        <a href={previewUrl} target="_blank">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<VisibilityIcon />}
            size="small"
          >
            <span>Preview</span>
          </Button>
        </a>
      )}
    </Stack>
  );
};
