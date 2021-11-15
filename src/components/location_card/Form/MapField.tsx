import { useField } from "formik";
import { useMemo, useRef } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

interface GeoLocation {
	lat: number;
	lng: number;
}

interface DraggableMarkerProps {
	name: string;
}

const DraggableMarker: React.FC<DraggableMarkerProps> = ({ name }) => {
	const [field, meta, helpers] = useField(name);
	const setPosition = (geoLoc: GeoLocation) => {
		helpers.setValue([geoLoc.lat, geoLoc.lng]);
	};
	//const [position, setPosition] = useState(center);
	const markerRef = useRef<any>(null);
	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker = markerRef.current;
				if (marker != null) {
					setPosition(marker.getLatLng());
				}
			},
		}),
		[]
	);

	return (
		<Marker
			draggable
			eventHandlers={eventHandlers}
			position={field.value}
			ref={markerRef}
		></Marker>
	);
};

interface MapFieldProps {
	className?: string;
	name: string;
	center: { lat: number; lng: number };
}

const MapField: React.FC<MapFieldProps> = ({ className, name, center }) => {
	return (
		<MapContainer
			className={className}
			center={center}
			zoom={13}
			scrollWheelZoom
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<DraggableMarker name={name} />
		</MapContainer>
	);
};

export default MapField;
