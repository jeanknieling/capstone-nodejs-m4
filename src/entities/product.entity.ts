import { Entity, Column, PrimaryColumn, ManyToOne,CreateDateColumn,UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./category.entity";
import { Order } from "./order.entity";


@Entity()
export class Product {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  likes: number;

  @Column()
  category_id: number;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public created_at: Date;


  @ManyToOne((type) => Category, category => category.product)
  category: Category

  @OneToMany((type) => Order, order => order.product)
  order: Order[]

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updated_at: Date;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

// @CreateDateColumn({
//   type: "timestamp",
//   default: () => "CURRENT_TIMESTAMP(6)",
// })
// public created_at: Date;

// @UpdateDateColumn({
//   type: "timestamp",
//   default: () => "CURRENT_TIMESTAMP(6)",
//   onUpdate: "CURRENT_TIMESTAMP(6)",
// })
// public updated_at: Date;