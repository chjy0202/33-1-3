import { GlobalStyle } from '../../styles/globalStyle';
import styled from 'styled-components';

export interface SquareLinkProps {
  link: string;
  width: string | number;
  height: string | number;
  children: string;
  backgroundColor: string;
  color: string;
  borderColor: string;
  transition: boolean;
}

export interface StyledLinkProps {
  backgroundColor: string;
  borderColor: string;
  transition: boolean;
  color: string;
}

export const StyledLink = styled.a<StyledLinkProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.3125rem;
  text-decoration: none;
  font-weight: 700;

  ${({ transition, backgroundColor, color }) => {
    return transition
      ? /*css*/ `
    &:hover,
    &:focus {
    transition: 0.3s ease-out;
    color: ${backgroundColor};
    background-color: ${color};
  }`
      : null;
  }}

  &:focus {
    cursor: pointer;
    outline: 0.2em solid hsl(219deg 63% 44%);
    outline-offset: 0.2em;
  }
`;

const SquareLink = ({
  link,
  width,
  height,
  children,
  backgroundColor,
  color,
  borderColor,
  transition,
}: SquareLinkProps) => {
  return (
    <>
      <GlobalStyle />
      <StyledLink
        href={link}
        style={{ width, height }}
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        transition={transition}
      >
        {children}
      </StyledLink>
    </>
  );
};

SquareLink.defaultProps = {
  height: 40,
  backgroundColor: 'var(--purple-900)',
  color: 'var(--white)',
  borderColor: 'var(--purple-900)',
  transition: false,
};

export default SquareLink;