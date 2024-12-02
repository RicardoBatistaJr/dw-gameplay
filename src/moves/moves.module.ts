import { Module } from '@nestjs/common';
import { MovesController } from './moves.controller';
import { MovesRepository } from './moves.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Moves, MovesSchema } from './moves.schema';
import { MovesService } from './moves.service';

@Module({
  controllers: [MovesController],
  imports: [MongooseModule.forFeature([{ name: Moves.name, schema: MovesSchema }])],
  providers: [MovesService, MovesRepository],
  exports: [MovesRepository],
})
export class MovesModule {}
