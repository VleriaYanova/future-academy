import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { store } from "./redux";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement)

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);