import { Types, Document } from 'mongoose';
import { AttributeEnum } from '../enum/attribute.enum';
import { AlignmentEnum } from '../enum/alignment.enum';
import { MovesDto } from 'src/moves/dto/moves.dto';
import { RacesDto } from 'src/races/dto/races.dto';
import { ClassesDto } from 'src/classes/dto/classes.dto';

export type Attribute = {
  name: AttributeEnum;
  value: number;
  modifier: number;
  hasDebility: boolean;
};

export type Bond = {
  text: string;
  options: string[];
};

export type CharacterResponse = {
  _id: Types.ObjectId;
  name: string;
  appearance: string;
  race: Types.ObjectId | RacesDto;
  class: Types.ObjectId | ClassesDto;
  armor: number;
  maxHealth: number;
  currentHealth: number;
  maxLoad: number;
  currentLoad: number;
  level: number;
  exp: number;
  attributes: Attribute[];
  alignment: AlignmentEnum;
  bonds: Bond[];
  moves?: MovesDto[];
};

export type CharacterDocument = CharacterResponse & Document;