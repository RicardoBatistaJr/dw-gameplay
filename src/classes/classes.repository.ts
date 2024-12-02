import { InjectModel } from "@nestjs/mongoose";
import { ClassesDocument, Classes as ClassesSchema } from "./classes.schema";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";

@Injectable()
export class ClassesRepository {
	constructor(@InjectModel(ClassesSchema.name) private classesModel: Model<ClassesDocument>){}

	async create(data: Partial<ClassesSchema>): Promise<ClassesSchema> {
		const createdClass = await this.classesModel.create(data);
		return createdClass.toObject();
	}
}