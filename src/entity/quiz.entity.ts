import {Entity, PrimaryGeneratedColumn, Column,OneToMany, ManyToOne, JoinColumn} from "typeorm"
import { Quizcategories } from "./quiz_categories.entity";
import { Questions } from "./question.entity";
@Entity()
export class Quiz {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    difficulty_level: number;
    @Column()
    category_id: number;
    @ManyToOne(() => Quizcategories)
    @JoinColumn({ name: "category_id" })
    category: Quizcategories;
    @OneToMany(() => Questions, question => question.quiz)
    questions: Questions[];
}