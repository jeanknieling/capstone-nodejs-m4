import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./category.entity";
import { Order } from "./order.entity";

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

  @ManyToOne((type) => Category, (category) => category.product, {
    eager: true,
    onDelete: "SET NULL"
  })
  category: Category;

  @OneToMany((type) => Order, (order) => order.product, {
    eager: true,
  })
  order: Order[];

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
