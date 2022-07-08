import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from './redux/configureStore'; // added
import { Provider as ReduxProvider } from 'react-redux'; // added

// update entrypoint to configure the store
// could pass initial state into store here if server rendering or initializing Redux store w/ data from localStorage
const store = configureStore();

render(
    <ReduxProvider store={store}>  
        <Router>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById("app")
);