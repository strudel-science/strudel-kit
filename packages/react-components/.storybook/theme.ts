import { create } from 'storybook/theming';
// @ts-expect-error -- no type needed for image
import logo from '../public/strudel-logo-transp.png';
 
export default create({
  base: 'light',
  brandTitle: 'STRUDEL Kit React Components',
  brandUrl: 'https://strudel.science',
  brandImage: logo,
  brandTarget: '_self',
});