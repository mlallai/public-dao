import { ProjectStatus } from '../types/types';

export class ProjectM {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
}
