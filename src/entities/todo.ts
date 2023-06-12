import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Todo')
export class Todo {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  text!: string;

  @Column()
  isComplete!: boolean;
}
