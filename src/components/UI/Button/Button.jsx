import { Container } from "./styles";
import PropTypes from "prop-types";

const Button = ({ method, setTherapyMethod }) => {
  return (
    <Container onClick={() => setTherapyMethod(method)}>{method}</Container>
  );
};

Button.propTypes = {
  method: PropTypes.string.isRequired,
  setTherapyMethod: PropTypes.func.isRequired,
};

export default Button;
