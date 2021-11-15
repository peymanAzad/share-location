import * as React from "react";
import { useParams } from "react-router";
import LocationCard from "../components/location_card/LocationCard";
import { useLocations } from "../utils/locationCtx";

interface EditProps {}

const Edit: React.FC<EditProps> = ({}) => {
	const params = useParams();
	const locationStore = useLocations();
	const id = params["locationId"];
	if (id) {
		const location = locationStore.get(id);
		if (location) return <LocationCard location={location} />;
		return <h1>Location was not found</h1>;
	}
	return <h1>Parameter location id required</h1>;
};

export default Edit;
