import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterRepository } from './character.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './character.schema';

@Module({
  providers: [CharacterService, CharacterRepository],
  exports: [CharacterService],
  imports: [MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }])],
})
export class CharacterModule {}
