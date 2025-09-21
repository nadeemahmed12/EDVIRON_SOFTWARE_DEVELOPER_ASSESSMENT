export class WebhookOrderInfoDto {
  order_id: string;
  order_amount: number;
  transaction_amount: number;
  payment_mode: string;
  payment_details: string;
  bank_reference: string;
  payment_message: string;
  status: string;
  error_message: string;
  payment_time: Date;
}

export class WebhookDto {
  school_id: string;
  collect_request_id: string;
  status: string; 
  amount: number;
  order_info?: WebhookOrderInfoDto;
}
