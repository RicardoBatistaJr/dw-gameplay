import { Injectable } from '@nestjs/common';
import { RacesRepository } from './races.repository';
import { Races as RacesSchema } from './races.schema';

@Injectable()
export class RacesService {
	  constructor(
		private readonly repository: RacesRepository,
	  ) {}

	  async create(data: RacesSchema): Promise<RacesSchema> {
		const response = await this.repository.create(data);

		if(!response) {
		  throw new Error('Error creating')
		}
		return response;
	  }
}
