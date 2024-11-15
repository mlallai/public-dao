import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UsecasesProxyModule } from '../../../infrastructure/usecases-proxy/usecases-proxy.module';
import { UseCaseProxy } from '../../../infrastructure/usecases-proxy/usecases-proxy';
import { getAllProjectsUseCase } from '../../../application/use-cases/projects/getAllProjects.usecase';
import { CreateProjectControllerDto } from '../../../infrastructure/dtos/project.dtos';
import { createProjectUseCase } from '../../../application/use-cases/projects/createProject.usecase';

@Controller('projects')
export class ProjectController {
  constructor(
    @Inject(UsecasesProxyModule.GET_PROJECTS_USECASES_PROXY)
    private readonly getAllProjectsUseCase: UseCaseProxy<getAllProjectsUseCase>,
    @Inject(UsecasesProxyModule.CREATE_PROJECT_USECASES_PROXY)
    private readonly createProjectUseCase: UseCaseProxy<createProjectUseCase>,
  ) {}

  @Get('')
  async getAllProjects() {
    const result = await this.getAllProjectsUseCase.getInstance().execute();
    return {
      status: 'OK',
      code: 200,
      message: 'Get all projects data success',
      data: result,
    };
  }
  @Post('')
  async createProject(@Body() createProjectDto: CreateProjectControllerDto) {
    const { name, description } = createProjectDto;
    const result = await this.createProjectUseCase
      .getInstance()
      .execute({ name, description });
    return {
      status: 'OK',
      code: 200,
      message: 'Create project success',
      data: result,
    };
  }
}
