import { Injectable } from "@nestjs/common";
import { Character as CharacterSchema, CharacterDocument } from "./character.schema";
import { Model, Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CharacterRepository {
	constructor(@InjectModel(CharacterSchema.name) private characterModel: Model<CharacterDocument>) {}

	async create(character: Partial<CharacterSchema>): Promise<CharacterSchema> {
		const createdCharacter = new this.characterModel(character);
		return (await createdCharacter.save()).toObject();
	}

	async getById(id: Types.ObjectId): Promise<CharacterSchema | null >  {
		return this.characterModel.findById(id).populate('race').populate('class').lean();
	}
}