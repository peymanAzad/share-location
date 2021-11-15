import { Map as LeafletMap } from "leaflet";
import * as React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MAP_CENTER_LOCATION } from "../../utils/constants";
import { useLocations } from "../../utils/locationCtx";
import MapPopup from "./MapPopup";

type MapProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Map: React.FC<MapProps> = (props) => {
	const [map, setMap] = React.useState<LeafletMap>();
	const locationStore = useLocations();

	const handleClosePopup = () => {
		if (map) map.closePopup();
	};
	return (
		<MapContainer
			{...props}
			center={MAP_CENTER_LOCATION}
			zoom={13}
			scrollWheelZoom={true}
			whenCreated={setMap}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{locationStore.locations.map((location) => (
				<Marker
					key={location.id}
					position={[location.mapLocation[0], location.mapLocation[1]]}
				>
					<Popup closeButton={false} minWidth={250} maxHeight={200}>
						<MapPopup onClose={handleClosePopup} location={location} />
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default Map;
