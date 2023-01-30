import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import { baseMock } from './mock';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...baseMock} />);

    expect(container).toMatchSnapshot();
  });
});
