import { Entity, Column, PrimaryColumn, OneToOne, OneToMany, ManyToOne } from "typeorm";


@Entity()
export class Buys {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  status: string;

  @ManyToOne( )
  client_id: number;

  
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