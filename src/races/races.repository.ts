import { Injectable } from "@nestjs/common";
import { RacesDocument, Races as RacesSchema } from "./races.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class RacesRepository {
	constructor(@InjectModel(RacesSchema.name) private racesModel: Model<RacesDocument>) {}

	async create(data: Partial<RacesSchema>): Promise<RacesSchema> {
		const createdRace = await this.racesModel.create(data);
		return createdRace.toObject();
	}
}
