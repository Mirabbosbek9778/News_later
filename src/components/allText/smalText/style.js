import styled from "styled-components";

const Wrapper = styled.div`
  color: #f2f2f2;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: ${({ size }) => (size ? "500" : "700")};
  line-height: ${({ size }) => (size ? "32px" : "24px")};
  font-size: ${({ size }) => (size ? "18px " : "24px")};
`;
export { Wrapper };
