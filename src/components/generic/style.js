import styled from "styled-components";

const Img = styled.img`
  max-width: 334px;
  height: 206px;
  width: 100%;
`;
const Content = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: ${({ size }) => (size ? "14px" : "16px")};
  color: ${({ colur }) => (colur ? "#EBAD2D" : "#f2f2f2")};
  font-weight: ${({ size }) => (size ? "500" : "600")};
  padding-top: ${({ left }) => (left ? "16px" : "0")};
  padding-top: ${({ top }) => (top ? "68px" : "0")};
  padding-left: ${({ left }) => (left ? "16px" : "0")};
  line-height: ${({ size }) => (size ? "16px" : "24px")};
  display: ${({ flex }) => (flex ? " flex" : "")};
  justify-content: ${({ flex }) => (flex ? " space-between" : "")};
  padding-right: ${({ flex }) => (flex ? "16px" : "")};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 334px;
  height: 434px;
  background-color: #454545;
  gap: 30px;
  &:hover {
    border: 1px solid #ebad2d;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Icon = styled.img``;
export { Container, Img, Content, Wrapper, Box, Icon };
