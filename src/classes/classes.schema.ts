import { Types } from "mongoose";
import { ClassesTypes } from "./enums/classes-types";
import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Moves } from "src/moves/moves.schema";

export type ClassesDocument = Classes & Document;

@Schema()
export class Classes {
	_id: Types.ObjectId;

	@Prop({ type: String, enum: ClassesTypes, required: true })
	type: ClassesTypes;

	@Prop({ type: String, required: true })
	description: string

	@Prop({ type: Number, required: true })
	damageDice: number	

	@Prop({ type: Number, required: true })
	healthModifier: number

	@Prop({ type: Types.ObjectId, ref: Moves.name})
	moves?: Types.ObjectId[];

}

export const ClassesSchema = SchemaFactory.createForClass(Classes);