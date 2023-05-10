import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading/>', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Simple text</Heading>);

    const heading = screen.getByRole('heading', { name: 'Simple text' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with correct with white text', () => {
    renderTheme(<Heading colorDark={false}>Simple text</Heading>);

    const heading = screen.getByRole('heading', { name: 'Simple text' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(
      <Heading size="small">Simple text</Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'Simple text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Simple text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Simple text' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Simple text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Simple text' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Simple text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Simple text' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">Simple text</Heading>);

    const heading = screen.getByRole('heading', { name: 'Simple text' });

    // when we use media with toHaveStyleRule, is like to set an window size
    // and the another fields is the expects
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(
      <Heading size="huge" uppercase>
        Simple text
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: 'Simple text' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Simple text</Heading>);

    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>Simple text</Heading>);

    // with firstChild this gets only the p tag
    expect(container).toMatchSnapshot();
  });
});
