import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import AppRoutes from "./routes/Routes";

const App = () => {
  const [therapyMethod, setTherapyMethod] = useState(() => {
    return localStorage.getItem("therapyMethod") || "";
  });

  const handleTherapyMethod = (method) => {
    localStorage.setItem("therapyMethod", method);
    setTherapyMethod(method);
  };

  return (
    <Router>
      <GlobalStyle />
      <AppRoutes
        therapyMethod={therapyMethod}
        setTherapyMethod={handleTherapyMethod}
      />
    </Router>
  );
};

export default App;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
