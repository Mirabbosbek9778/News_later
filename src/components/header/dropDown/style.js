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

const DropdownSelect = styled.div`
  background-color: black;
  flex-direction: column;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: 1px solid #ebad2d;
  border-radius: 15px;
  h1:hover {
    color: ${({ press }) => (press ? "#ebad2d" : "white")};
    background-color: #454545;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Monserrat, sans-serif;
    border-radius: 10px;
  }
  width: 200px;
  height: 125px;
`;

export { Button, Image, DropdownSelect };
