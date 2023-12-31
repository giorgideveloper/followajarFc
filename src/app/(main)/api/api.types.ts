export type RegistrationType = {
	object_name: string;
	object_type: number;
	name: string;
	last_name: string;
	address: string;
	id_number: Blob;
	email: string;
	mobile: string;
	time_from: null;
	time_to: null;
	discount: number;
	facebook: string;
	instagram: string;
	description: string;
	password: string;
	image1: FileList;
	image2: FileList;
	image3: FileList;
};

export type RegistrationResponse = {
	message: string;
};

export interface ObjectType {
	id: number;
	object_name: string;
	object_type: null;
	address: string;
	id_number: string;
	time_from: string;
	time_to: string;
	discount: null;
	description: string;
	image1: string;
}
