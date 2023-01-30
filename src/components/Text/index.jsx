import P from 'prop-types';
import * as Styled from './styles';

export const Text = ({ children }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

Text.propTypes = {
  children: P.node.isRequired,
};
