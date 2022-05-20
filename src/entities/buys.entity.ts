import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Order } from "./order.entity";
import { User } from "./user.entity";

@Entity()
export class Buys {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne(type => User, user => user.buys)
  @JoinColumn()
  user: User

  @OneToMany((type) => Order, order => order.buy)
  order: Order[]

  @Column()
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
  }
}