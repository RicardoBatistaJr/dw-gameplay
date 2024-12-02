import { Module } from '@nestjs/common';
import { RacesService } from './races.service';
import { RacesController } from './races.controller';
import { RacesRepository } from './races.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Races, RacesSchema } from './races.schema';

@Module({
  controllers: [RacesController],
  imports: [MongooseModule.forFeature([{ name: Races.name, schema: RacesSchema }]),],
  providers: [RacesService, RacesRepository],
})
export class RacesModule {}
