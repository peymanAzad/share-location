import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
	color: red;
	font-weight: 400;
	font-size: 12px;
`;

interface ErrorMessageProps {
	message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
	return <Container>{message}</Container>;
};

export default ErrorMessage;
