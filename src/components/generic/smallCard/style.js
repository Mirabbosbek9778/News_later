import styled from "styled-components";

const Container = styled.div`
  width: 453px;
  height: 169px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #454545;
  gap: 16px;
  cursor: pointer;
  padding: 24px 24px 24px 24px;
`;

const LinesCard = styled.div`
  width: 405px;
  height: 1px;
  border: 1px solid #8e8e8e;
`;
const Box = styled.div`
  font-family: Montserrat, system-ui, -apple-system;
  font-style: normal;
  line-height: 24px;
  font-size: ${({ title }) => (title ? "16px" : "20px")};
  font-weight: ${({ title }) => (title ? "500" : "600")};
  font-weight: ${({ colur }) => (colur ? "500" : "600")};
  color: ${({ colur }) => (colur ? "#EBAD2D" : "#FFF")};
`;
const Content = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

export { Container, LinesCard, Box, Content };
