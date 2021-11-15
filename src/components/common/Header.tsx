import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	margin: 0;
	position: sticky;
	height: 30px;
	padding-left: 50px;
	padding-right: 50px;
	background-color: #448bc9;
	display: flex;
	justify-content: space-between;
`;
const HeaderLink = styled(Link)`
	appearance: unset;
	color: white;
	text-decoration: none;
	display: block;
	margin-left: 20px;
`;
const Brand = styled(HeaderLink)`
	font-weight: bold;
	font-size: 24px;
	flex: 0.5;
	margin: 0;
`;
const NavHolder = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	flex: 0.5;
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<Container>
			<Brand to="/">Share Location</Brand>
			<NavHolder>
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="create">Create</HeaderLink>
			</NavHolder>
		</Container>
	);
};

export default Header;
