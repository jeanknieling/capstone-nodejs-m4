import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Address } from "./address.entity";
import { Buys } from "./buys.entity";

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
  isAdm: string;

  @Column({ name: "created_at" })
  created_at: Date;

  @Column({ name: "updated_at" })
  updated_at: Date;

  @OneToMany((type) => Address, address => address.user, {
    eager: true
  })
  address: Address[];

  @OneToMany(type => Buys, buys => buys.user, {
    eager: true
  })
  buys: Buys[];

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