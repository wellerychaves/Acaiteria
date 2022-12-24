import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import Globalstyle from "./styles/globalstyle";
import Providers from "./Providers";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Globalstyle />
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>
);
