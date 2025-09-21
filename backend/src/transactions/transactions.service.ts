import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Transaction } from "./transactions.schema";

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private readonly txModel: Model<Transaction>
  ) {}


  async createTransaction(data: any): Promise<Transaction> {
    if (data.collect_id) {
      data.collect_id = new Types.ObjectId(String(data.collect_id));
    }

    const tx = new this.txModel(data);
    return tx.save();
  }

  
  async getAllTransactions() {
    return this.txModel.aggregate([
      {
        $lookup: {
          from: 'orders',           
          localField: 'collect_id', 
          foreignField: '_id',      
          as: 'order_info',
        },
      },
      { $unwind: '$order_info' },
      {
        $project: {
          _id: 0,
          collect_id: '$order_info._id',
          school_id: '$order_info.school_id',
          gateway_name: '$order_info.gateway_name',
          order_amount: 1,
          transaction_amount: 1,
          status: 1,
          custom_order_id: '$_id',
          payment_time: '$payment_time',
        },
      },
    ]);
  }

  
async getTransactionsBySchool(schoolId: string) {
  return this.txModel.aggregate([
    {
      $match: { school_id: new Types.ObjectId(schoolId) }, 
    },
    {
      $lookup: {
        from: 'orders',
        localField: 'collect_id',
        foreignField: '_id',
        as: 'order_info',
      },
    },
    { $unwind: '$order_info' },
    {
      $project: {
        _id: 0,
        collect_id: '$order_info._id',
        school_id: 1,  
        gateway_name: '$order_info.gateway_name',
        order_amount: 1,
        transaction_amount: 1,
        status: 1,
        custom_order_id: '$_id',
        payment_time: 1,
      },
    },
  ]);
}

  
  async getTransactionStatus(customOrderId: string) {
    return this.txModel.aggregate([
      {
        $match: { _id: new Types.ObjectId(customOrderId) },
      },
      {
        $lookup: {
          from: 'orders',
          localField: 'collect_id',
          foreignField: '_id',
          as: 'order_info',
        },
      },
      { $unwind: '$order_info' },
      {
        $project: {
          _id: 0,
          collect_id: '$order_info._id',
          school_id: '$order_info.school_id',
          gateway_name: '$order_info.gateway_name',
          order_amount: 1,
          transaction_amount: 1,
          status: 1,
          custom_order_id: '$_id',
          payment_time: 1,
        },
      },
    ]);
  }
}
