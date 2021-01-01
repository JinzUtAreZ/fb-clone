import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, {
  initialState,
} from "./components/contextReact/reducerContext/reducer";
import { StateProvider } from "./components/contextReact/StateProvider";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
