import { useField } from "formik";
import React from "react";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

const TextFieldInput = styled.input`
	appearance: none;
	width: calc(100% - 48px);
	height: 50px;
	margin: 0px;
	padding: 0px 24px;
	font-size: 16px;
	line-height: 1.75;
	color: #333;
	background-color: #ffffff;
	background-image: none;
	border-radius: 5px;
	border: 1px solid #cccccc;
	-ms-word-break: normal;
	word-break: normal;
`;

interface TextFieldProps {
	id: string;
	name: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
	const [field, meta] = useField(props);
	return (
		<>
			<TextFieldInput {...field} {...props} />{" "}
			{meta.touched && meta.error && <ErrorMessage message={meta.error} />}
		</>
	);
};
export default TextField;
