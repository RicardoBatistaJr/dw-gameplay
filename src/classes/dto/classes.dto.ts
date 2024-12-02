import { ClassesTypes } from "../enums/classes-types";

export type ClassesDto = {
	type: ClassesTypes;
	description: string
	damageDice: number	
	healthModifier: number
}

export type ClassesDocument = ClassesDto & Document;