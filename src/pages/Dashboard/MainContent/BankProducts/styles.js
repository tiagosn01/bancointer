import styled, { css } from 'styled-components';
import { Container as ButtonContainer } from '../../../../components/Button/styles';
import ButtonBackground from '../../../../assets/images/illustrations/button-background.svg';
import { Navigation, Card } from '../NavigationCards/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-radius: ${theme.radius.default};
    box-shadow: ${theme.shadows.default};
    padding: 2.4rem;
    max-height: 34.2rem;
    height: -webkit-fill-available;
    width: 100%;

    > div {
      display: flex;
      justify-content: space-between;

      + div {
        margin-top: 2.4rem;
        height: 100%;
      }
    }
  `}
`;
export const Products = styled(Navigation)`
  ${() => css`
    flex-grow: 0;
    grid-template-columns: repeat(5, minmax(6.4rem, 1fr));
    margin-left: 0.8rem;
  `}
`;

export const ProductCards = styled(Card)`
  ${({ theme }) => css`
    box-shadow: none;
    background: none;
    font-size: ${theme.fontSizes.small};
    padding: 0;

    > div {
      margin-bottom: auto;
    }

    svg {
      stroke: none;

      :nth-child(3) {
        margin-left: -0.4;
      }
    }
  `}
`;

export const ShoppingButton = styled(ButtonContainer)`
  ${({ theme }) => css`
    padding: 1.6rem 2.4rem;
    justify-content: space-between;
    max-width: 35.2rem;
    width: 100%;
    border-radius: ${theme.radius.default};
    flex: 1 0 100%;

    svg:first-of-type {
      margin-left: 1.4rem;
    }

    > div {
      color: ${theme.colors.grey};
      font-size: ${theme.fontSizes.small};
      text-align: left;
      max-width: 12rem;
      width: 100%;
      margin-left: -3.8rem;
    }

    > h3 {
      color: ${theme.colors.darkGrey};
      font-size: ${theme.fontSizes.large};
    }
  `}
`;

export const EquityButton = styled(ButtonContainer)`
  ${({ theme }) => css`
    padding: 1.6rem 2.4rem;
    justify-content: space-between;
    max-width: 38.4rem;
    width: 100%;
    max-height: 18.4rem;
    height: 100%;
    color: ${theme.colors.yellow};
    flex-direction: column;
    align-items: flex-start;
    border-radius: ${theme.radius.default};
    background-image: url(${ButtonBackground});

    > h3 {
      font-size: ${theme.fontSizes.large};
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      > ul {
        color: ${theme.colors.background};
        li {
          display: flex;
          align-items: center;
          svg {
            stroke-width: 1.5;
            margin-right: 0.8rem;
            flex-grow: 0;
          }
        }
      }

      > button {
        font-size: ${theme.fontSizes.small};
        font-weight: 700;
        padding: 0.8rem 1.6rem;
      }
    }
  `}
`;
export const LoanButton = styled(EquityButton)`
  ${({ theme }) => css`
    background-image: none;
    > h3 {
      text-align: left;
      > span {
        display: block;
        font-weight: 300;
        color: ${theme.colors.background};
      }
    }
    > div {
      > ul {
        li {
          align-items: flex-start;
          svg {
            margin-top: 0.3rem;
          }
          span {
            max-width: 12rem;
          }
        }
      }
    }
  `}
`;
