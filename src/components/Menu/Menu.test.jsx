import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';

import mock from '../NavLinks/mock';
import { theme } from '../../styles/theme';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={mock} logoData={logoData} />,
    );

    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();

    expect(
      screen.getByRole('navigation', { name: 'main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={mock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close menu');

    // this gets the component next to
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');

    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={[]} />);

    expect(
      screen.queryByRole('navigation', { name: 'main menu' }).firstChild,
    ).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
