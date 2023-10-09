import styled from "styled-components";

const Button = styled.div`
  display: flex;
  border: none;
  align-items: center;
  gap: 8px;
  &:hover {
    border: ${({ press }) => (press ? "#ebad2d" : "none")};
    color: ${({ press }) => (press ? "red" : "#ebad2d")};
  }
`;

const Image = styled.img`
  &:hover {
    border: ${({ press }) => (press ? "#ebad2d" : "none")};
    color: ${({ press }) => (press ? "red" : "#ebad2d")};
  }
`;

export { Button, Image };
