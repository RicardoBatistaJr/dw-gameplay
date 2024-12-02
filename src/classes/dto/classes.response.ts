import { Types } from "mongoose";
import { ClassesTypes } from "../enums/classes-types";

export type ClassesResponse = {
	_id: Types.ObjectId;
	type: ClassesTypes;
	description: string
	damageDice: number	
	healthModifier: number
}

export type ClassesDocument = ClassesResponse & Document;