import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity"; // Import the User entity
import { Quiz } from "./quiz.entity"; // Import the Quiz entity

@Entity()
export class QuizResult {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @ManyToOne(() => Quiz)
    @JoinColumn({ name: "quiz_id" })
    quiz: Quiz;

    @Column()
    score: number;
}
