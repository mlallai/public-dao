import { ProjectM } from '../../../domain/models/project.model';
import { ProjectRepository } from '../../../domain/repositories/projectRepository.interface';

export class getAllProjectsUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(): Promise<ProjectM[]> {
    return await this.projectRepository.findAll();
  }
}
