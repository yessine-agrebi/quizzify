import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { Quizcategories } from "./quiz_categories.entity";
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
}