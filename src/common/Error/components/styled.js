import { styled } from "styled-components";

export const StyledDangerIcon = styled.svg`
  display: block;
  max-width: 120px;
  max-height: 120px;
  margin: 174px auto 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    margin: 90px auto 0 auto;
  }
`;
