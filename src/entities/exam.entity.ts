import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { Laboratory } from './laboratory.entity';

export enum type {
  CLINIC = 'analise clinica',
  IMAGE = 'imagem',
}

@Entity('exams')
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
  
  @ManyToMany(() => Laboratory, (laboratory: Laboratory) => laboratory.exams)
  laboratories: Laboratory[];
}
