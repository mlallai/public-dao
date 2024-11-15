import { CreateProjectDto, ProjectProps, ProjectStatus } from '../types/types';

export class ProjectAggregate {
  constructor(public readonly props: ProjectProps) {}

  create(createParams: CreateProjectDto) {
    this.props.name = createParams.name;
    this.props.description = createParams.description;
    this.props.status = ProjectStatus.ACTIVE;
  }
}
