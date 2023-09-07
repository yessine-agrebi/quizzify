import { Entity, PrimaryGeneratedColumn, Unique, Column } from "typeorm";

@Entity()
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    created_at: Date;
    @Column()
    updated_at: Date;
}