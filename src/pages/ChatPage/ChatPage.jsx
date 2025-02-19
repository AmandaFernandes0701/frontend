import { useState } from "react";
import {
  Container,
  ChatContainer,
  UserInput,
  Button,
  ChatMessage,
} from "./styles";
import PropTypes from "prop-types";

const ChatPage = ({ therapyMethod }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim()) {
      setMessages([...messages, { text: userInput, sender: "user" }]);
      setUserInput("");
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: userInput, sender: "user" },
          {
            text: `This is your ${therapyMethod} response.`,
            sender: "therapist",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <Container>
      <ChatContainer>
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender}>
            {msg.text}
          </ChatMessage>
        ))}
      </ChatContainer>
      <UserInput
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type a message..."
      />
      <Button onClick={handleSend}>Send</Button>
    </Container>
  );
};

ChatPage.propTypes = {
  therapyMethod: PropTypes.string.isRequired,
};

export default ChatPage;
