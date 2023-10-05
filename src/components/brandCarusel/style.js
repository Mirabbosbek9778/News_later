import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  padding: 140px 256px 140px 256px;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;

`;

export { Container, Wrapper };
