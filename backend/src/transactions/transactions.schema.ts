import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose'; 

@Schema({ timestamps: true })
export class Transaction extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
  collect_id: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true })
  school_id: mongoose.Types.ObjectId;

  @Prop({ required: true })
  order_amount: number;

  @Prop({ required: true })
  transaction_amount: number;

  @Prop()
  payment_mode: string;

  @Prop()
  payment_details: string;

  @Prop()
  bank_reference: string;

  @Prop()
  payment_message: string;

  @Prop()
  status: string;

  @Prop()
  error_message: string;

  @Prop({ type: Date, default: Date.now })
  payment_time: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
