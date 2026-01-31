import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Getting Started', 
          ['Introduction', 'Installation', 'Quickstart', 'Template Structure', 'Usage with AI', 'External Resources'], 
          'Customization', 
          ['Connecting Data', 'Combining Sections', 'Connecting Task Flows', 'Columns'], 
          'Components'
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
