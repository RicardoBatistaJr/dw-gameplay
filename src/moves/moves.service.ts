import { Injectable } from '@nestjs/common';
import { MovesRepository } from './moves.repository';
import { Moves } from './moves.schema';

@Injectable()
export class MovesService {
	constructor(private readonly repository : MovesRepository) {}
	
	async create(data: Partial<Moves>): Promise<Moves> {
		const createdMove = await this.repository.create(data);
		return createdMove;
	}
}
