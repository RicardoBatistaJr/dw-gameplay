import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { ClassesTypes } from "src/classes/enums/classes-types";
import { MovesTypesEnum } from "./enum/moves-types.enum";

export type MovesDocument = Moves & Document; 

@Schema({_id: false})
export class Choice {
	@Prop({ required: true })
	text: string;

	@Prop({ type: [String], required: true })
	options: string[];

	@Prop({ required: true })
	choicesQuantity: number;

	@Prop()
	currentOption: string; 
}

@Schema({timestamps: true})
export class Moves {
	_id: Types.ObjectId;

	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	description: string[];

	@Prop({ type: [Choice], required: true })
	choices: Choice[];

	@Prop({ required: true })
	class: ClassesTypes;

	@Prop({type: String, enum: MovesTypesEnum, required: true})
	type: MovesTypesEnum;
}

export const MovesSchema = SchemaFactory.createForClass(Moves);