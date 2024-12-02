import { Injectable } from '@nestjs/common';
import { ClassesRepository } from './classes.repository';
import { Classes as ClassesSchema  } from './classes.schema';
import { MovesRepository } from 'src/moves/moves.repository';


@Injectable()
export class ClassesService {
	constructor(private readonly classesRepository: ClassesRepository,
				private readonly movesRepository: MovesRepository,
	) {}

  async create(classCreate : Partial<ClassesSchema>) {
	const moves = await this.movesRepository.findByClassType(true, classCreate.type);

	const movesIds = moves.map(move => move._id);

	classCreate.moves = movesIds;

	return await this.classesRepository.create(classCreate);
  }

  findAll() {
    return `This action returns all classes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: any) {
	console.log (updateClassDto);
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
