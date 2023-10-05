import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 140px 256px 140px 256px;
  background-image: url("https://www.tiffest.uz/assets/main-bg-2674f033.png");
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Ruler = styled.div`
  width: 100%;
  height: 1px;
  background: #ababab;
`;

export { Container, Wrapper, Ruler };
