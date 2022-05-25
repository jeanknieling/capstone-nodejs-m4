import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { Order } from "./order.entity";
import { Product } from "./product.entity";
import { User } from "./user.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Buys {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => User, (user) => user.buys)
  user: User;

  @ManyToMany((type) => Product, {
    eager: true
  })@JoinTable()
  products: Product[]

  @Column("float")
  total: number

  // @OneToMany((type) => Order, (order) => order.buy)
  // order: Order[];

  // @Column()
  // status: string;

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
  }
  
}
