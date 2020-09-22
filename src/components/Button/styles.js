import styled, { css } from 'styled-components';

const variants = {
  secondary: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.secondary};
    :hover {
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.label};
    }
  `,
  transparent: css`
    background: transparent;
  `,
};

export const Container = styled.button`
  ${({ theme, variant, color, background }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${background || theme.colors.background};
    border: 0;
    padding: 0.8rem 2.4rem;
    color: ${color || theme.colors.secondary};
    transition: ${theme.transition.default};
    * {
      transition: ${theme.transition.default};
    }
    ${variant && variants[variant]};
    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`;
