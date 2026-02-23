import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.jsx";
import Api from "./Api.jsx";
import Home from "./Home.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <Home/> */}
      <App />
      {/* <Api/> */}
    </Provider>
  </StrictMode>
);
