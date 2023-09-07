import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity"; // Import the User entity
import { LangOrTech } from "./lang_or_tech.entity";
@Entity()
export class UserMastery {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @ManyToOne(() => LangOrTech)
    @JoinColumn({ name: "language_or_technology_id" })
    languageOrTechnology: LangOrTech;

    @Column()
    points: number;
}
