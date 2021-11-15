import * as yup from "yup";

export const locationSchema = yup.object().shape({
	id: yup.string(),
	locationName: yup.string().trim().required("Location Name is required"),
	locationType: yup
		.string()
		.required()
		.oneOf(["bussiness", "personal", "public"]),
	mapLocation: yup.array().of(yup.number()).length(2),
	logo: yup.object().nullable(true),
});
