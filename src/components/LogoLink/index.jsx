import P from 'prop-types';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Styled.Container href={link}>
      {!!srcImg && <img src={srcImg} alt={text} />}
      {!srcImg && (
        <Heading size="small" uppercase>
          {text}
        </Heading>
      )}
    </Styled.Container>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
