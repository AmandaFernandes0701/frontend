import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ChatPage from "../pages/ChatPage/ChatPage";
import PropTypes from "prop-types";

const AppRoutes = ({ therapyMethod, setTherapyMethod }) => {
  return (
    <Routes>
      <Route path="/" element={<Home setTherapyMethod={setTherapyMethod} />} />
      <Route
        path="/chat"
        element={<ChatPage therapyMethod={therapyMethod} />}
      />
    </Routes>
  );
};

AppRoutes.propTypes = {
  setTherapyMethod: PropTypes.func.isRequired,
  therapyMethod: PropTypes.string.isRequired,
};

export default AppRoutes;
