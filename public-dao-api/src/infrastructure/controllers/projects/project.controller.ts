import { Controller, Get, Inject } from '@nestjs/common';
import { UsecasesProxyModule } from '../../../infrastructure/usecases-proxy/usecases-proxy.module';
import { UseCaseProxy } from '../../../infrastructure/usecases-proxy/usecases-proxy';
import { getAllProjectsUseCase } from '../../../application/use-cases/projects/getAllProjects.usecase';

@Controller('projects')
export class ProjectController {
  constructor(
    @Inject(UsecasesProxyModule.GET_PROJECTS_USECASES_PROXY)
    private readonly getAllProjectsUseCase: UseCaseProxy<getAllProjectsUseCase>,
  ) {}

  @Get('')
  async getAllProjects() {
    const result = await this.getAllProjectsUseCase.getInstance().execute();
    return {
      status: 'OK',
      code: 200,
      message: 'Get data success',
      data: result,
    };
  }
}
