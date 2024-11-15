import { DynamicModule, Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { DatabaseProjectRepository } from '../repositories/project.repository';
import { UseCaseProxy } from './usecases-proxy';
import { getAllProjectsUseCase } from '../../application/use-cases/projects/getAllProjects.usecase';
import { createProjectUseCase } from '../../application/use-cases/projects/createProject.usecase';

@Module({
  imports: [EnvironmentConfigModule, RepositoriesModule],
})
export class UsecasesProxyModule {
  // Projects
  static GET_PROJECTS_USECASES_PROXY = 'getProjectsUsecasesProxy';
  static CREATE_PROJECT_USECASES_PROXY = 'createProjectUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        // Projects
        {
          inject: [DatabaseProjectRepository],
          provide: UsecasesProxyModule.GET_PROJECTS_USECASES_PROXY,
          useFactory: (databaseProjectRepository: DatabaseProjectRepository) =>
            new UseCaseProxy(
              new getAllProjectsUseCase(databaseProjectRepository),
            ),
        },
        {
          inject: [DatabaseProjectRepository],
          provide: UsecasesProxyModule.CREATE_PROJECT_USECASES_PROXY,
          useFactory: (databaseProjectRepository: DatabaseProjectRepository) =>
            new UseCaseProxy(
              new createProjectUseCase(databaseProjectRepository),
            ),
        },
      ],
      exports: [
        // Projects
        UsecasesProxyModule.GET_PROJECTS_USECASES_PROXY,
        UsecasesProxyModule.CREATE_PROJECT_USECASES_PROXY,
      ],
    };
  }
}
