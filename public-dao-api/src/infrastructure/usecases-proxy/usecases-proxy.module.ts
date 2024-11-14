import { DynamicModule, Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { DatabaseProjectRepository } from '../repositories/project.repository';
import { UseCaseProxy } from './usecases-proxy';
import { getAllProjectsUseCase } from '../../application/use-cases/projects/getAllProjects.usecase';
import { LoggerService } from '../logger/logger.service';

@Module({
  imports: [EnvironmentConfigModule, RepositoriesModule],
})
export class UsecasesProxyModule {
  // Projects
  static GET_PROJECTS_USECASES_PROXY = 'getProjectsUsecasesProxy';

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
      ],
      exports: [
        // Projects
        UsecasesProxyModule.GET_PROJECTS_USECASES_PROXY,
      ],
    };
  }
}
