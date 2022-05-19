import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Buys } from "./buys.entity";
import { Product } from "./product.entity";

@Entity()
export class Order {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => Buys, buy => buy.order)
  buy: Buys[];

  @ManyToOne((type) => Product, product => product.order)
  product: Product[];

}