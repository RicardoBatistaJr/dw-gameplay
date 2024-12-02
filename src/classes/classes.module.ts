import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { ClassesRepository } from './classes.repository';
import { Classes, ClassesSchema } from './classes.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MovesModule } from 'src/moves/moves.module';

@Module({
  controllers: [ClassesController],
  imports: [MongooseModule.forFeature([{ name: Classes.name, schema: ClassesSchema }]), MovesModule],
  providers: [ClassesService, ClassesRepository],
  exports: [ClassesRepository],
})
export class ClassesModule {}
