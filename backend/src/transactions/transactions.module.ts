import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { TransactionsController } from "./transactions.controller";
import { Transaction, TransactionSchema } from "./transactions.schema";
import { TransactionsService } from "./transactions.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }])],
  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports: [TransactionsService],
})
export class TransactionsModule {}