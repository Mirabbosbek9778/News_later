import styled from "styled-components";

const Button = styled.div`
  &:hover {
    border: ${({ press }) => (press ? "#ebad2d" : "none")};
    color: ${({ press }) => (press ? "red" : "#ebad2d")};
  }
`;

export { Button };
