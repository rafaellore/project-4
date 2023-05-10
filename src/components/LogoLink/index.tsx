import { Heading } from '../Heading';
import * as Styled from './styles';
import Link from 'next/link';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
};

export const LogoLink = ({ text, srcImg = '', link }: LogoLinkProps) => {
  const nextLink = link?.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.Container>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }

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
