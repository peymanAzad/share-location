export interface Location {
	id: string;
	locationName: string;
	locationType: "bussiness" | "personal" | "public";
	mapLocation: number[];
	logo: any;
}
