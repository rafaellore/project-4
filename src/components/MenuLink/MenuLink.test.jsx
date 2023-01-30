import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link, by default in same page', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('to match snapshot', () => {
    // use the container.fisrtChild to do snapshot to remove the div
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        Children
      </MenuLink>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1rem;
        padding: 1rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 7.5px;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_self"
      >
        Children
      </a>
    `);
  });
});
