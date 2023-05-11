import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 54px;

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;
