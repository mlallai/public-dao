import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ProjectStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { nullable: false })
  description: string;

  @Column({
    type: 'enum',
    enum: ProjectStatus,
    default: ProjectStatus.INACTIVE,
  })
  status: ProjectStatus;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
