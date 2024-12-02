import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AppService } from "./app.service";
import { CharacterController } from "./character/character.controller";
import { CharacterModule } from "./character/character.module";
import { MovesModule } from "./moves/moves.module";
import { MovesService } from "./moves/moves.service";
import { ClassesModule } from './classes/classes.module';
import { RacesModule } from './races/races.module';

@Module({
  imports: [
    CharacterModule,
    MovesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/api-dw'),
    ClassesModule,
    RacesModule,
  ],
  controllers: [AppController, CharacterController],
  providers: [AppService, MovesService],
})
export class AppModule {}
