import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';

import { theme } from '../../styles/theme';
import { mock } from './mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);

    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);

    // only works with jest styled
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
