import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ required: true })
  school_id: string;

  @Prop({ required: true })
  trustee_id: string;

  @Prop({
    type: {
      name: String,
      id: String,
      email: String,
       _id: false,
    },
    required: true,
  })
  student_info: {
    name: string;
    id: string;
    email: string;
  };

  @Prop({ required: true })
  gateway_name: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
