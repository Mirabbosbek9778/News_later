import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-image: url("	https://www.tiffest.uz/assets/bg-decor-7d21ae27.svg");
  background-position: center center;
  background-size: 100%;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 140px 256px 134px 256px;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  min-width: 390px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 32px 0 32px;
`;

const Linefilm = styled.div`
  max-width: 1440px;
  width: 100%;
  height: ${({ indent }) => (indent ? "2px" : "3px")};
  background: ${({ indent }) => (indent ? "#ABABAB" : "yellow")};
`;

const ButtonFilm = styled.button`
  color: white;
  background-color: #454545;
  width: 180px;
  height: 48px;
  border-radius: 8px;
  &:hover {
    border: 1px solid #ebad2d;
    color: #ebad2d;
  }
`;

export { Wrapper, Container, Linefilm, ButtonFilm };
