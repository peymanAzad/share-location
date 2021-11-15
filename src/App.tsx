import * as React from "react";
import Router from "./Router";
import { LocationProvider } from "./utils/locationCtx";

const App: React.FC = () => {
	return (
		<LocationProvider locations={[]}>
			<Router />
		</LocationProvider>
	);
};
export default App;
