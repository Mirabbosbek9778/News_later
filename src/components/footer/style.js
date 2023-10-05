import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 140px 256px 140px 256px;
  background-image: url("	https://www.tiffest.uz/assets/bg-decor-7d21ae27.svg");
  background-position: center center;
  background-size: 100%;
  background-color: #181818;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const TextFooter = styled.div`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-size: ${({ size }) => (size ? "18px" : "24px")};
  color: ${({ coler }) => (coler ? "#EBAD2D" : "#f2f2f2")};
  :hover {
    border-bottom: ${({ coler }) =>
      coler ? "1px solid white" : "1px solid red"};
  }
  font-weight: ${({ size }) => (size ? "400" : "600")};
  line-height: ${({ size }) => (size ? "24px" : "32px")};
`;

export { Wrapper, Container, TextFooter };
