import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  padding: 20px;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 14px;
  margin-right: -4px;

  &::-webkit-scrollbar {
    width: 8px;
    margin-right: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 4px;
    margin-right: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #3a3a3a;
    border-radius: 4px;
    margin-right: 10px;

    &:hover {
      background: #4a4a4a;
    }
  }
`;

export const ChatMessage = styled.div`
  background-color: ${(props) =>
    props.sender === "user" ? "#3a3a3a" : "#6a4f97"};
  color: white;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 60%;
  align-self: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
`;

export const UserInput = styled.input`
  background-color: #2c2c2c;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #6a4f97;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #5c4382;
  }
`;
