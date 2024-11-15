import { CreateProjectControllerDto } from 'src/infrastructure/dtos/project.dtos';
import { ProjectRepository } from '../../../domain/repositories/projectRepository.interface';

export class createProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(createProjectDto: CreateProjectControllerDto) {
    return await this.projectRepository.create(createProjectDto);
  }
}
