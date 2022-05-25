import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Buys } from "./buys.entity";
import { Product } from "./product.entity";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity()
export class Order {
  @PrimaryColumn("uuid")
  readonly id: string;
  
  @Column('float')
  subtotal: number

  @ManyToOne((type) => User, (user) => user.order)
  usuario: User;


  @ManyToMany((type) => Product,  { 
    eager: true,
   })@JoinTable()
  products: Product[];

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}
