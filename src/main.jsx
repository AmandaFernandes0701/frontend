import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import AppRoutes from "./routes/Routes";

const App = () => {
  const [, setTherapyMethod] = useState("");

  return (
    <Router>
      <GlobalStyle />
      <AppRoutes setTherapyMethod={setTherapyMethod} />
    </Router>
  );
};

export default App;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
