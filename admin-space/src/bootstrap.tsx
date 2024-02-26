import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App/App";
import {Provider} from "react-redux";
import {store} from "./store";

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root);

container.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
