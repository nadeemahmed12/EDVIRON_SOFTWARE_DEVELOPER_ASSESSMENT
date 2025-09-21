import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { OrdersController } from "./orders.controller";
import { Order, OrderSchema } from "./orders.schema";
import { OrdersService } from "./orders.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}