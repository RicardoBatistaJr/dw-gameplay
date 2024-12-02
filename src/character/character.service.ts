import { Injectable, NotFoundException } from '@nestjs/common';
import { CharacterRepository } from './character.repository';
import { Character as CharacterSchema } from './character.schema';
import { Types } from 'mongoose';
import { CharacterResponse } from './dto/character.response';

@Injectable()
export class CharacterService {
	constructor( private readonly characterRepository: CharacterRepository ) {}

	async create(character: Partial<CharacterSchema>): Promise<CharacterSchema> {
		return this.characterRepository.create(character);
	}

	async getById(id: Types.ObjectId): Promise<CharacterResponse> {

		const character = await this.characterRepository.getById(id);

		if(!character) {
			throw new NotFoundException('Character not found');
		}

		return this.characterRepository.getById(id);
	}
}
