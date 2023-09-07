import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class LangOrTech {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}