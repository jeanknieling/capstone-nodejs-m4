import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Address } from "./address.entity";
import { Buys } from "./buys.entity";
import { Order } from "./order.entity";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  birthday: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany((type) => Address, (address) => address.usuario, {
    eager: true,
    onDelete: "SET NULL"
  })
  address: Address[];

  @OneToMany((type) => Buys, (buys) => buys.user, {
    eager: true,
  })
  buys: Buys[];

  @OneToMany((type) => Order, (order) => order.usuario, {
    eager: true
  })
  order: Order

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
