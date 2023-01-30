import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;

    // to import styles from another place and edit himself
    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    // to import styles from another place and edit himself
    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    //media querie
    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible()}

      //styles from another place inside media querie
      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacings.large};
        margin: 0 auto;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    //media querie
    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    display: none;
    opacity: 0;
    visibility: hidden;

    // needs this to work
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;

      opacity: initial;
      visibility: visible;
    }

    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`;
