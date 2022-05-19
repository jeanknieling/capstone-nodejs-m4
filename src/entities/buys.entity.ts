import { Entity, Column, PrimaryColumn, OneToOne, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Buys {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne(type => User, user => user.buys)
  @JoinColumn({ name: "user_id" })
  user: User

  @Column()
  status: string;
  
  @Column({ name: "created_at" })
  created_at: Date;

  @Column({ name: "updated_at" })
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