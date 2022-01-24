import * as React from "react";
import * as ReactDOM from "react-dom";
import AppRoutes from "./Routes";

const PathApp = () => {
	return <AppRoutes />;
};

function render() {
	ReactDOM.render(
		<React.StrictMode>
			<PathApp />
		</React.StrictMode>,
		document.getElementById("root")
	);
}

render();
