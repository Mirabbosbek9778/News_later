import styled from "styled-components";

const Container = styled.div`
  width: 334px;
  height: 434px;
  cursor: pointer;
  border: 1px solid white;
`;

const Img = styled.div`
  width: 100%;
  min-width: 100%;
  max-height: 100px;
  min-height: 200px;
`;

const Content = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: ${({ size }) => (size ? "14px" : "16px")};
  color: ${({ colur }) => (colur ? "#EBAD2D" : "#f2f2f2")};
  font-weight: ${({ size }) => (size ? "500" : "600")};
  padding-top: ${({ size }) => (size ? "68px" : "0")};
  line-height: ${({ size }) => (size ? "16px" : "24px")};
`;

export { Container, Img, Content };
