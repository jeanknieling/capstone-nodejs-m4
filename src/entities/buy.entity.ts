import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity()
export class Buy {
  @PrimaryColumn("uuid")
  readonly id: string;
  
  @Column({
    default: "Em aberto"
  })
  status: string;

  @Column()
  total: number;

  @ManyToMany((type) => Product, {
    eager: true
  })
  @JoinTable()
  products: Product []

  @ManyToOne((type) => User, (user) => user.buys)
  user: User;

  @OneToMany((type) => Product, (product) => product.buy,{
    eager: true,
  })
  product: Product[];

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

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
