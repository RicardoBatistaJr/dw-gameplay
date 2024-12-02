import { InjectModel } from "@nestjs/mongoose";
import { MovesDocument, Moves as MovesSchema } from "./moves.schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { ClassesTypes } from "src/classes/enums/classes-types";
import { MovesTypesEnum } from "./enum/moves-types.enum";

@Injectable()
export class MovesRepository {
	constructor(
		@InjectModel(MovesSchema.name) private movesModel: Model<MovesDocument>,
	){}

	async create(data: Partial<MovesSchema>): Promise<MovesSchema> {
		const createdMove = await this.movesModel.create(data);
		return createdMove.toObject();
	}

	async findByClassType(getAnyMoves: boolean, classType: ClassesTypes): Promise<MovesSchema[]> {

		const filter = {
			$and: [{ class: classType }],
			type: MovesTypesEnum.BASIC,
		  };

		  if(getAnyMoves){
			filter.$and.push({ class: ClassesTypes.ANY });
		  }

		return this.movesModel.find(filter).lean();
	  }
	  
}