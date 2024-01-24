import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import { TaskFlowsPage } from './home/TaskFlowsPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

/**
 * TODO: Add more comments...
 * Maybe even for every attribute
 * TODO: Add link to MUI docs
 */
const theme = createTheme({
  /** What is palette? */
  palette: {
    background: {
      default: '#F5F5F6'
    },
    neutral: {
      main: '#DADADA',
      light: '#e0e0e0',
      dark: '#828282'
    }
  },
  /** What are components? */
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { color: 'neutral' },
          style: {
            backgroundColor: 'white',
            borderColor: '#bdbdbd',
            color: '#757575'
          },
        },
      ],
    },
    MuiStack: {
      defaultProps: {
        spacing: 2
      },
    },
  },
});

export const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

/**
 * TODO: comment
 */
const router = createHashRouter([
  {
    path: "/",
    element: <TaskFlowsPage />,
  },
  /**
   * Add more routes to task flows below.
   * 
   * Example:
   *   
      {
        path: "/my-task-flow",
        element: <MyTaskFlowWrapper />,
        children: [
          {
            index: true,
            element: <TaskFlowStart />
          },
          {
            path: 'two',
            element: <TaskFlowPageTwo />
          },
          {
            path: 'three',
            element: <TaskFlowPageThree />
          },
        ]
      },
   */
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
]);

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
