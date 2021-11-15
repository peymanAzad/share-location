import React from "react";
import styled from "styled-components";

const FormFieldContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 15px 30px;
`;

const FormLabel = styled.div`
	flex: 0.4;
	margin-top: 10px;
`;
const FormInput = styled.div`
	flex: 0.6;
`;

interface FormFieldProps {
	label: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, children }) => {
	return (
		<FormFieldContainer>
			<FormLabel>
				<label>{label}:</label>
			</FormLabel>
			<FormInput>{children}</FormInput>
		</FormFieldContainer>
	);
};
export default FormField;
