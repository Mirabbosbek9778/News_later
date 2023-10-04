import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-image: url("https://www.tiffest.uz/assets/main-bg-2674f033.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 140px 0 140px;
`;

export const Box = styled.div`
  max-width: 1440px;
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