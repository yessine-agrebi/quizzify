import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { LangOrTech } from './lang_or_tech.entity';
@Entity()
export class Quizcategories {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  lang_tech_id: number;
  @ManyToOne(() => LangOrTech)
  @JoinColumn({ name: 'lang_tech_id' })
  languageOrTechnology: LangOrTech;
}
