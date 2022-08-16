import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";



const App = () => {
    return (
        <div id="my-app">
            <h1>Adopt Me!</h1>
            <SearchParams></SearchParams>
        </div>
    );
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet),
//     React.createElement(Pet),
//     React.createElement(Pet),
//   ]);
// };

render(<App/>, document.getElementById("root"));
