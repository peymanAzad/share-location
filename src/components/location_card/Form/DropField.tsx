import { useField } from "formik";
import * as React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import uploadLogo from "../../../icons/upload-logo.svg";

const getColor = (props: any) => {
	if (props.isDragAccept) {
		return "rgba(0, 119, 255, 0.5)";
	}
	if (props.isDragReject) {
		return "#ff1744";
	}
	if (props.isDragActive) {
		return "#2196f3";
	}
	return "#eeeeee";
};

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* padding: 20px; */
	padding-bottom: 20px;
	border-width: 2px;
	border-radius: 2px;
	border-color: ${(props) => getColor(props)};
	border-style: dashed;
	background-color: #fafafa;
	color: #bdbdbd;
	outline: none;
	transition: border 0.24s ease-in-out;
	background-color: ${(props) => getColor(props)};
	&:hover {
		cursor: pointer;
	}
`;

const UploadImg = styled.img`
	display: block;
	height: 50px;
	width: auto;
`;
const UploadHeader = styled.div`
	width: 100%;
	height: 30px;
	background-color: #1a77d2;
	color: white;
	text-align: center;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 24px;
	font-weight: bold;
`;

interface DropFieldProps {
	id: string;
	name: string;
}

const DropField: React.FC<DropFieldProps> = (props) => {
	//const [objectUrl, setObjectUrl] = React.useState<any>();
	React.useEffect(() => cleanUpObjectUrl, []);
	const [field, meta, helpers] = useField(props.name);

	const cleanUpObjectUrl = () => {
		if (field.value) {
			URL.revokeObjectURL(field.value);
		}
	};

	const onDrop = React.useCallback((acceptedFiles) => {
		if (acceptedFiles[0]) cleanUpObjectUrl();
		helpers.setValue(acceptedFiles[0]);
	}, []);

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({ accept: "image/*", onDrop, maxFiles: 1, maxSize: 8000 });

	return (
		<div className="container">
			<Container
				{...getRootProps({ isDragActive, isDragAccept, isDragReject })}
			>
				<input {...getInputProps()} />
				<UploadHeader>
					<div>Upload</div>
				</UploadHeader>
				<UploadImg
					src={field.value ? URL.createObjectURL(field.value) : uploadLogo}
				/>
			</Container>
		</div>
	);
};
export default DropField;
