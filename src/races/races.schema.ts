import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export type RacesDocument = Races & Document; 

@Schema()
export class Races {
	_id: Types.ObjectId;
	
	@Prop()
	name: string;

	@Prop()
	description: string;

	@Prop()
	abilities: string[];
}

export const RacesSchema = SchemaFactory.createForClass(Races);