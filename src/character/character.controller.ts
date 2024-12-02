import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character as CharacterSchema } from './character.schema';
import { CharacterResponse } from './dto/character.response';
import { Types } from 'mongoose';

@Controller('character')
export class CharacterController {
	constructor(private readonly characterService: CharacterService) {}

	@Post()
	async create(@Body() data: Partial<CharacterSchema>): Promise<CharacterSchema> {
		return this.characterService.create(data);
	}

	@Get(':id')
	async getById(@Param('id') id: Types.ObjectId): Promise<CharacterResponse> {
		return await this.characterService.getById(id);
		
	}
}
