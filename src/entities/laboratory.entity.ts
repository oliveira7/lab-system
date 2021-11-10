import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { Exam } from './exam.entity';

@Entity()
export class Laboratory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  adress: string;

  @Column({ default: true })
  status: boolean;

  @ManyToMany((type) => Exam, (exam) => exam.laboratories)
  exams: Exam[];
}
