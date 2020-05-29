import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: rgb(47, 179, 240);
  border-color: rgb(47, 179, 240);
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 25px;
  :active {
    outline: none;
    transform: translateY(1px);
  }
`;
