import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Webhook extends Document {
  @Prop({ required: true })
  school_id: string;

  @Prop({ required: true })
  collect_request_id: string;

  @Prop({ required: true })
  status: string; 
  @Prop({ required: true })
  amount: number;

  @Prop({ type: Object }) 
  rawResponse: any;
}

export const WebhookSchema = SchemaFactory.createForClass(Webhook);
