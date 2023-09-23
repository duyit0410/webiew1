import Router from "@router";
import React, { useEffect } from "react";
import "./styles/App.scss";
import { Provider } from "react-redux";
import { store } from "@redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
