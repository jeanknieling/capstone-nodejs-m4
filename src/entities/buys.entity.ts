import { v4 as uuid } from "uuid";

import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

import { Order } from "./order.entity";
import { User } from "./user.entity";
import { Product } from "./product.entity";

@Entity()
export class Buys {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => User, (user) => user.buys)
  // @JoinColumn()
  usuario: User;

  @OneToMany((type) => Product, (product) => product.buys,{
    eager: true,
  })
  product: Product[];

  @Column({
    default:"Em aberto."
  })
  status: string;

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
    if (!this.id){
      this.id = uuid()
    }
  }
  
}
