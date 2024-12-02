import { Types } from "mongoose";

export type RacesResponse = {
	_id: Types.ObjectId;
	name: string;
	description: string;
	abilities: string[];
}