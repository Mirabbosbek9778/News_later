import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #111;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 24px 24px 24px 24px;
`;

const TextNavbar = styled.h1`
  color: #c7c7c7;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  font-size: ${({ column }) => (column ? "40px" : "20px")};
  color: ${({ column }) => (column ? "#F2F2F2" : "#c7c7c7")};
  &:hover {
    color: #c38814;
    border-bottom: ${({ none }) => (none ? "none" : "2px solid #c38814")};
  }
`;

export { Wrapper, TextNavbar };
