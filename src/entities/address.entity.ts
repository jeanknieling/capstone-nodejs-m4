import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { User } from "./user.entity";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  zipcode: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  neighborhood: string;

  @Column()
  complement: string;

  @ManyToOne((type) => User, (user) => user.address, {
    onDelete: "CASCADE",
  })
  user: User;

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
