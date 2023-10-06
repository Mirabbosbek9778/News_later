import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-image: url("https://www.tiffest.uz/assets/bg-decor-7d21ae27.svg");
  background-position: center center;
  background-image: ${({ hello }) =>
    hello ? "none" : "https://www.tiffest.uz/assets/bg-decor-7d21ae27.svg"};
  background-size: 100%;
  background-color: #181818;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 140px 0 140px;
  background-color: ${({ hello }) => {
    hello ? "#111" : "#181818";
  }};
`;

export const Box = styled.div`
  max-width: 1440px;
  min-width: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 32px 0 32px;
`;

export const Text = styled.div`
  color: #f2f2f2;
  font-size: ${({ tex }) => (tex ? "40px" : "18px")};
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: ${({ tex }) => (tex ? "500" : "700")};
  line-height: ${({ tex }) => (tex ? "24px" : "30px")};
  line-height: 48px;
  font-size: ${({ smal }) => (smal ? "16px" : "20px")};
  line-height: ${({ smal }) => (smal ? "32px" : "20px")};
  width: ${({ wid }) => (wid ? "743px" : "500px")};
  font-size: ${({ titl }) => (titl ? "40px" : "20px")};
`;
