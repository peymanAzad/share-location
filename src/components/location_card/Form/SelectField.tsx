import { useField } from "formik";
import React from "react";
import styled from "styled-components";
import svg from "../../../icons/chevron.svg";
import ErrorMessage from "./ErrorMessage";

const SelectInput = styled.select`
	appearance: none;
	width: 100%;
	height: 50px;
	margin: 0px;
	padding-left: 24px;
	font-size: 16px;
	line-height: 1.75;
	color: #333;
	border-radius: 5px;
	background-color: #ffffff;
	background-image: none;
	border: 1px solid #cccccc;
	-ms-word-break: normal;
	word-break: normal;
	background-image: url(${svg});
	background-repeat: no-repeat;
	background-position: 100% center;
`;

interface SelectFieldProps {
	id: string;
	name: string;
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
	const [field, meta] = useField(props);
	return (
		<>
			<SelectInput {...field} {...props}>
				{props.children}
			</SelectInput>{" "}
			{meta.touched && meta.error && <ErrorMessage message={meta.error} />}
		</>
	);
};
export default SelectField;
