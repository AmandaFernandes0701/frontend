import styled from "styled-components";

export const Container = styled.button`
  background-color: #3a3a3a;
  color: white;
  border: 1px solid #6a4f97;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a4f97;
  }
`;
