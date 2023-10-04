import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-image: url("https://www.tiffest.uz/assets/main-bg-2674f033.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 140px 256px 134px 256px;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
`;

const Linefilm = styled.div`
  max-width: 1440px;
  width: 100%;
  height: ${({ indent }) => (indent ? "2px" : "3px")};
  background: ${({ indent }) => (indent ? "yellow" : "white")};
`;
export { Wrapper, Container, Linefilm };
