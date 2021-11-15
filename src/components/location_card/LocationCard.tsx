import * as React from "react";
import styled from "styled-components";
import Card from "./Card";
import CardHeader from "./CardHeader";
import FormField from "./Form/FormField";
import SelectField from "./Form/SelectField";
import TextField from "./Form/TextField";
import MapField from "./Form/MapField";
import DropField from "./Form/DropField";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import { useLocations } from "../../utils/locationCtx";
import { Location } from "../../utils/types";
import { MAP_CENTER_LOCATION } from "../../utils/constants";
import { locationSchema } from "../../schemas/locationSchema";

const MapFieldContainer = styled(MapField)`
	height: 250px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const BtnWrap = styled.div`
	flex-basis: 50%;
	width: 100%;
	direction: rtl;
	margin: 10px 0;
`;

const ActionBtn = styled.button`
	margin-left: 10px;
	color: white;
	font-weight: bold;
	padding: 10px 20px;
	font-size: 18px;
	border: none;
	border-radius: 5px;
	&:hover {
		cursor: pointer;
	}
`;

interface LocationCardProps {
	location?: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
	const navigate = useNavigate();
	const locationStore = useLocations();
	const mapCenter = location
		? { lat: location.mapLocation[0], lng: location.mapLocation[1] }
		: MAP_CENTER_LOCATION;
	const initialVal: Location = location
		? { ...location }
		: {
				id: "",
				locationName: "",
				locationType: "bussiness",
				mapLocation: [MAP_CENTER_LOCATION.lat, MAP_CENTER_LOCATION.lng],
				logo: null,
		  };
	return (
		<Formik
			initialValues={initialVal}
			validationSchema={locationSchema}
			onSubmit={(val) => {
				console.log(val);
				if (location) locationStore.edit(val);
				else locationStore.add(val);
				navigate("/");
			}}
		>
			<Form>
				<Container>
					<Card>
						<CardHeader>Share Location</CardHeader>
						<FormContainer>
							<FormField label="Location Name">
								<TextField id="location-name" name="locationName" />
							</FormField>
							<FormField label="Location Type">
								<SelectField id="location-type" name="locationType">
									<option value="bussiness">Bussiness</option>
									<option value="personal">Personal</option>
									<option value="public">Public</option>
								</SelectField>
							</FormField>
							<FormField label="Map Location">
								<MapFieldContainer center={mapCenter} name="mapLocation" />
							</FormField>
							<FormField label="Logo">
								<DropField id="logo" name="logo" />
							</FormField>
						</FormContainer>
					</Card>
					<div style={{ flexBasis: "100%", height: 0 }}> </div>
					<BtnWrap>
						<ActionBtn style={{ backgroundColor: "#448bc9" }} type="submit">
							{location ? "Edit" : "Create"}
						</ActionBtn>
						<ActionBtn
							style={{ backgroundColor: "darkgray" }}
							onClick={() => {
								navigate("/");
							}}
						>
							Cancel
						</ActionBtn>
					</BtnWrap>
				</Container>
			</Form>
		</Formik>
	);
};
export default LocationCard;
