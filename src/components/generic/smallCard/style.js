import styled from "styled-components";

const Container = styled.div`
  width: 453px;
  height: 169px;
  border-radius: 14px;
  border: 2px solid #ebad2d;
  background: #454545;
`;

const LinesCard = styled.div`
  width: 405px;
  height: 1px;
  background: #8e8e8e;
  border: 1px solid white;
`;
const Box = styled.div`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  font-size: ${({ title }) => (title ? "16px" : "20px")};
  font-weight: ${({ title }) => (title ? "500" : "600")};
  font-weight: ${({ colur }) => (colur ? "500" : "600")};
  color: ${({ colur }) => (colur ? "#EBAD2D" : "#FFF")};
`;

export { Container, LinesCard, Box };
