import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Text } from '.';
import { theme } from '../../styles/theme';

describe('<Text />', () => {
  it('should render', () => {
    renderTheme(<Text>Simple text</Text>);
  });

  it('renders the p tag correctly', () => {
    const { container } = renderTheme(<Text>Simple text</Text>);

    const div = container.querySelector('div');

    expect(div.tagName.toLowerCase()).toBe('div');
  });

  it('renders the text currectly', () => {
    renderTheme(<Text>Simple text</Text>);

    expect(screen.getByText('Simple text')).toBeInTheDocument();
  });

  it('renders with the currect size', () => {
    renderTheme(<Text>Simple text</Text>);

    const paragraph = screen.getByText('Simple text');

    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Text>Simple text</Text>);

    // with firstChild this gets only the p tag
    expect(container.firstChild).toMatchSnapshot();
  });
});
