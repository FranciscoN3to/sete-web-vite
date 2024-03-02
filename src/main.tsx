import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

Array.prototype.joinValid = function (value = "") {
    return this.filter(Boolean).join(value);
};
console.log("OLAAA")
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
