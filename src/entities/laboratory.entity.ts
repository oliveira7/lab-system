import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Exam } from './exam.entity';

@Entity('laboratories')
export class Laboratory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ default: true })
  status: boolean;

  @JoinTable()
  @ManyToMany(() => Exam, (exam: Exam) => exam.laboratories)
  exams: Exam[];
}
