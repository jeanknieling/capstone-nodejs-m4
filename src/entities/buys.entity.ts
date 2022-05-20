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

@Entity()
export class Buys {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => User, (user) => user.buys)
  @JoinColumn()
  user: User;

  @OneToMany((type) => Order, (order) => order.buy)
  order: Order[];

  @Column()
  status: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at: Date;
  
}
