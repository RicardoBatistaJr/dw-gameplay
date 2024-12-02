import { Body, Controller, Post } from '@nestjs/common';
import { MovesService } from './moves.service';
import { Moves } from './moves.schema';

@Controller('moves')
export class MovesController {

	constructor(private readonly service: MovesService) {}

	@Post()
	async createMove(@Body() data: Partial<Moves>) {
		return this.service.create(data);
	}
}
