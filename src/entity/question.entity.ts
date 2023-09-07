import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Quiz } from "./quiz.entity"; // Make sure to import the correct entity for the relationship

@Entity()
export class Questions {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    question_text: string;

    @Column()
    correct_answer: string;

    @ManyToOne(() => Quiz, quiz => quiz.questions)
    @JoinColumn({ name: "quiz_id" })
    quiz: Quiz;
}
