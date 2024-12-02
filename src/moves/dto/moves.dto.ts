import { Types } from "mongoose";
import { ClassesTypes } from "src/classes/enums/classes-types";
import { MovesTypesEnum } from "../enum/moves-types.enum";

export type Choice = {
	text: string;
	options: string[];
	choicesQuantity: number;
	currentOption: string; 
}

export type MovesDto = {
	_id: Types.ObjectId; 
	name: string;
	description: string[];
	choices: Choice[];
	class: ClassesTypes;
	type: MovesTypesEnum;
}