import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Todo')
export class Todo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  text!: string;

  @Column()
  isComplete!: boolean;
}
