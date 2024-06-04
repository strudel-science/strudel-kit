/**
 * Configure global options and content for your app.
 */
export const config = {
  title: 'STRUDEL + React + MUI',
  navbar: {
    title: 'My Project',
    logo: 'strudel-logo-icon.png',
    items: [
      {
        label: 'Playground',
        path: '/playground'
      }
    ]
  },
  footer: {
    info: 'Describe your project, place a copyright statement, or credit your funding organizations.',
    image: 'strudel-logo-header.png',
    links: [
      {
        label: 'Playground',
        path: '/playground'
      },
    ]
  },
  theme: {
    mode: 'light',
    primaryColor: '#1976d2',
    secondaryColor: '#9c27b0',
    backgroundColor: '#F5F5F6',
    paperBackgroundColor: '#FFFFFF',
    fontFamily: '"Helvetica", "Verdana", "Arial", sans-serif'
  }
}