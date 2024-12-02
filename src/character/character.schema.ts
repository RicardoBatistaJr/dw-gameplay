import { Classes } from 'src/classes/classes.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { PaginatePlugin } from 'src/utils/persistence.types';
import { AttributeEnum } from './enum/attribute.enum';
import { Moves } from 'src/moves/moves.schema';
import { AlignmentEnum } from './enum/alignment.enum';
import { Races } from 'src/races/races.schema';

export type CharacterDocument = Character & Document;

@Schema()
export class Attribute {
  @Prop()
  name: AttributeEnum;

  @Prop()
  value: number;

  @Prop()
  modifier: number;

  @Prop()
  hasDebility: boolean;
}

@Schema()
export class Bond {
  @Prop({ required: true })
  text: string;

  @Prop({ type: [String], required: true })
  options: string[];
}

@Schema({
  timestamps: true,
})
export class Character {
  _id: Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  appearance: string;

  @Prop({ type: Types.ObjectId, ref: Races.name })
  race: Types.ObjectId;
  
  @Prop({ type: Types.ObjectId, ref: Classes.name })
  class: Types.ObjectId;
  
  @Prop({ type: Number, default: 0})
  armor: number;

  @Prop({ type: Number, default: 1})
  maxHealth: number;

  @Prop({ type: Number, default: 1})
  currentHealth: number;

  @Prop({ type: Number, default: 0})
  maxLoad: number;

  @Prop({ type: Number, default: 0})
  currentLoad: number;

  @Prop({ type: Number, default: 1})
  level: number;

  @Prop({ type: Number, default: 1})
  exp: number;

  @Prop({
    type: [Attribute],
    required: true,
    _id: false,
  })
  attributes: Attribute[];

  @Prop({type: String, enum: AlignmentEnum, required: true})
  alignment: AlignmentEnum;

  @Prop({type: [Bond], required: true})
  bonds: Bond[];

  @Prop( { type: [Moves], required: true })
  moves?: Moves[];

}

export const CharacterSchema = SchemaFactory.createForClass(Character);
CharacterSchema.plugin(PaginatePlugin);
