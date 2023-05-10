import * as Styled from './styles';

export type TextProps = {
  children: string;
};

export const Text = ({ children }: TextProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};
