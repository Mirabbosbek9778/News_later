import styled from "styled-components";

export const Line = styled.div`
  width: ${({ indent }) => (indent ? "1408px" : "0px")};
  height: ${({ indent }) => (indent ? "2px" : "3px")};
  background: ${({ indent }) => (indent ? "white" : "black")};
  width: ${({ generline }) => (generline ? "100%" : "0px")};
  height: ${({ generline }) => (generline ? "6px" : "1px")};
  background: ${({ generline }) => (generline ? "#c38814" : "yellow")};
`;
