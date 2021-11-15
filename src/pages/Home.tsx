import * as React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Map from "../components/map/Map";

const MapContainer = styled(Map)`
	height: calc(100vh - 30px);
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
	return (
		<div>
			<Header />
			<MapContainer />
		</div>
	);
};
export default Home;
