import Button from "../../components/UI/Button/Button";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Container, ButtonContainer, Title } from "./styles";

const Home = ({ setTherapyMethod }) => {
  const navigate = useNavigate();

  const handleTherapySelection = (method) => {
    setTherapyMethod(method);
    navigate("/chat");
  };

  return (
    <Container>
      <Title>Choose Your Therapy</Title>
      <ButtonContainer>
        <Button
          method="Cognitive Behavioral Therapy"
          setTherapyMethod={handleTherapySelection}
        />
        <Button
          method="Psychoanalysis"
          setTherapyMethod={handleTherapySelection}
        />
        <Button
          method="Humanistic Therapy"
          setTherapyMethod={handleTherapySelection}
        />
      </ButtonContainer>
    </Container>
  );
};

Home.propTypes = {
  setTherapyMethod: PropTypes.func.isRequired,
};

export default Home;
