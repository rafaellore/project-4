import Home from '.';
import { renderTheme } from '../../styles/render-theme';

test('renders learn react link', () => {
  //example of debug
  const { debug } = renderTheme(<Home />);
  debug();
});
