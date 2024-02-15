import { ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import "./App.scss";
import store from "./redux/store";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
