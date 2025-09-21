import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order } from "./orders.schema";

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async createOrder(data: any): Promise<Order> {
    const order = new this.orderModel(data);
    return order.save();
  }

  async getAllOrders(): Promise<Order[]> {
    return this.orderModel.find();
  }
}