import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
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
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne((type) => Category, category => category.product, {
    eager: true
  })
  category: Category

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
    if (!this.updated_at) {
      this.updated_at = new Date();
    }
  }
}

// @CreateDateColumn({
//   type: "timestamp",
//   default: () => "CURRENT_TIMESTAMP(6)",
// })
// public created_at: Date;

// @UpdateDateColumn({
//   type: "timestamp",
//   default: () => "CURRENT_TIMESTAMP(6)",
//   onUpdate: "CURRENT_TIMESTAMP(6)",
// })
// public updated_at: Date;