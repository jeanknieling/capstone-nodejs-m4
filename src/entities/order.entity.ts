import { Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Buys } from "./buys.entity";
import { Product } from "./product.entity";

@Entity()
export class Order {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => Buys, (buy) => buy.order, { nullable: false })
  buy: Buys[];

  @OneToMany((type) => Product, (product) => product.id, { nullable: false })
  product: Product[];
  // @ManyToOne((type) => Product, (product) => product.order, { nullable: false })
  // product: Product[];
}
