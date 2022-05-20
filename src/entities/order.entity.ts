import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Buys } from "./buys.entity";
import { Product } from "./product.entity";

@Entity()
export class Order {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => Buys, (buy) => buy.order, { nullable: false })
  buy: Buys[];

  @ManyToOne((type) => Product, (product) => product.order, { nullable: false })
  product: Product[];
}
