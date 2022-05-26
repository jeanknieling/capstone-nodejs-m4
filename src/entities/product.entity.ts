import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Buy } from "./buy.entity";
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

  @Column({ default: 0 })
  likes: number;

  @ManyToOne((type) => Buy, (buy) => buy.products)
  buy: Buy;

  @ManyToOne((type) => Category, (category) => category.product, {
    eager: true,
    onDelete: "SET NULL",
  })
  category: Category;

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
