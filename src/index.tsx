import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom/client";


const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);


root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)