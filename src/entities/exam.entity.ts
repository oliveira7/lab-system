import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Laboratory } from './laboratory.entity';

export enum type {
  CLINIC = 'analise clinica',
  IMAGE = 'imagem',
}

@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: type,
  })
  type: type;

  @Column({ default: true })
  status: boolean;

  @ManyToMany((type) => Laboratory, (laboratory) => laboratory.exams, {
    cascade: true,
  })
  @JoinTable()
  laboratories: Laboratory[];
}
