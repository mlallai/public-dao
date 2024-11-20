import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { UsecasesProxyModule } from '../../../infrastructure/usecases-proxy/usecases-proxy.module';

describe('ProjectController', () => {
  let projectController: ProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [
        {
          provide: UsecasesProxyModule.GET_PROJECTS_USECASES_PROXY,
          useValue: {
            getInstance: jest.fn().mockReturnValue({
              execute: jest.fn().mockResolvedValue([]),
            }),
          },
        },
        {
          provide: UsecasesProxyModule.CREATE_PROJECT_USECASES_PROXY,
          useValue: {
            getInstance: jest.fn().mockReturnValue({
              execute: jest.fn().mockResolvedValue({}),
            }),
          },
        },
      ],
    }).compile();

    projectController = module.get<ProjectController>(ProjectController);
  });

  it('should be defined', () => {
    expect(projectController).toBeDefined();
  });
});
