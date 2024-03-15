import { createHashRouter, Navigate } from "react-router-dom";
import { HomePage } from "./home/HomePage";

/**
 * App Router
 * Registers URL paths to page components.
 */
export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
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