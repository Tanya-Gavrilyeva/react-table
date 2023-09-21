import styled from "styled-components";

export const StyledMainParagraph = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  color: #464141;
`;

export const StyledTime = styled.p`
  font-size: 14px;
  color: grey;
  white-space: nowrap;
`;

export const StyledPrice = styled.p`
  font-weight: bold;
  color: black;
`;

export const StyledIsFraud = styled.p`
  font-size: 12px;
  color: red;
`;

export const StyledIsNotFraud = styled.p`
  font-size: 12px;
  color: grey;
`;
