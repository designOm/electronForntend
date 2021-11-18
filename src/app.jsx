import * as React from "react";
import * as ReactDOM from "react-dom";
import {MemoryRouter} from "react-router";
import App from "./app/index";

function render() {
	ReactDOM.render(
		<MemoryRouter>
			<App />
		</MemoryRouter>,
		document.getElementById("root")
	);
}

render();
