import * as React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Location } from "../../utils/types";
import defaultLogo from "../../icons/default-logo.svg";

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 10px 15px;
`;
const LogoContainer = styled.div`
	flex: 0.3;
	margin-right: 10px;
`;
const InfoContainer = styled.div`
	flex: 0.7;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
const PopupHeader = styled.div`
	margin: 0;
	color: #69bd6a;
	background-color: #e0f0d7;
	padding: 10px 15px;
	font-size: 14px;
	font-weight: bold;
`;
const Btn = styled.button`
	color: white;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	padding: 5px;
	width: 50px;
	float: right;
	&:hover {
		cursor: pointer;
	}
`;
const EditBtn = styled(Btn)`
	background-color: #5cbfdf;
	margin-left: 10px;
`;
const CloseBtn = styled(Btn)`
	background-color: #edad52;
`;

interface MapPopupProps {
	location: Location;
	onClose: () => void;
}

const MapPopup: React.FC<MapPopupProps> = ({ location, onClose }) => {
	const navigate = useNavigate();
	const objectUrl = location.logo ? URL.createObjectURL(location.logo) : null;
	React.useEffect(() => () => {
		if (objectUrl) URL.revokeObjectURL(objectUrl);
	});
	return (
		<>
			<PopupHeader>Lcation Details</PopupHeader>
			<Container>
				<LogoContainer>
					<div style={{ height: "40px" }}>
						<img
							style={{ display: "block", height: "100%", maxWidth: "80px" }}
							src={objectUrl ?? defaultLogo}
							alt="logo image"
						/>
					</div>
				</LogoContainer>
				<InfoContainer>
					<div
						style={{ flexBasis: "100%", marginBottom: "5px", fontSize: "16px" }}
					>
						{location.locationName}
					</div>
					<div style={{ flexBasis: "100%" }}>
						<EditBtn
							onClick={() => {
								navigate(`edit/${location.id}`);
							}}
						>
							Edit
						</EditBtn>
						<CloseBtn onClick={onClose}>Close</CloseBtn>
					</div>
				</InfoContainer>
			</Container>
		</>
	);
};

export default MapPopup;
