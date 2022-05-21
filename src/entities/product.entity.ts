import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./category.entity";

@Entity()
export class Product {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  likes: number;

  @Column()
  category_id: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  constructor() {
    if (!this.created_at) {
      this.created_at = new Date();
    }
    if (!this.updated_at) {
      this.updated_at = new Date();
    }
    if (!this.id) {
      this.id = uuid();
    }
  }
}
