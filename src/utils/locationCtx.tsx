import * as React from "react";
import { Location } from "./types";

interface LocationContext {
	locations: Location[];
	get: (id: string) => Location | null;
	add: (loc: Location) => void;
	edit: (loc: Location) => void;
}

const locationCtx = React.createContext<LocationContext>({
	locations: [],
	get: (id: string) => {
		return null;
	},
	add: (loc) => {},
	edit: (loc) => {},
});

interface LocationProviderProps {
	locations: Location[];
}

export const LocationProvider: React.FC<LocationProviderProps> = ({
	locations: init,
	children,
}) => {
	const [locations, setLocations] = React.useState<Location[]>(init);
	const addLocation = (location: Location) => {
		const lastId = locations.reduce(
			(max, current) => (Number(current.id) > max ? Number(current.id) : max),
			0
		);
		location.id = (lastId + 1).toString();
		setLocations([...locations, location]);
	};
	const editLocation = (location: Location) => {
		const old = getLocation(location.id);
		if (!old) return;
		const index = locations.indexOf(old);
		locations[index] = location;
		setLocations([...locations]);
	};
	const getLocation = (id: string) => {
		for (let location of locations) {
			if (location.id === id) return location;
		}
		return null;
	};

	return (
		<locationCtx.Provider
			value={{
				locations,
				add: addLocation,
				edit: editLocation,
				get: getLocation,
			}}
		>
			{children}
		</locationCtx.Provider>
	);
};

export const useLocations = () => React.useContext(locationCtx);
