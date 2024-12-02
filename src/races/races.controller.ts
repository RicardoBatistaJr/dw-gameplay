import { Controller, Post } from '@nestjs/common';
import { RacesService } from './races.service';
import { Races } from './races.schema';
import { Body } from '@nestjs/common';

@Controller('races')
export class RacesController {
  constructor(private readonly racesService: RacesService) {}


  @Post()
  async createNewRace(@Body() race : Races): Promise<Races> {
	return await this.racesService.create(race);
}
}
