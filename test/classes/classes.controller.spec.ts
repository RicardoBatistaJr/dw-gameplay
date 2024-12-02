import { Test, TestingModule } from '@nestjs/testing';
import { ClassesController } from 'src/classes/classes.controller';
import { ClassesService } from 'src/classes/classes.service';


describe('ClassesController', () => {
  let controller: ClassesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassesController],
      providers: [ClassesService],
    }).compile();

    controller = module.get<ClassesController>(ClassesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
