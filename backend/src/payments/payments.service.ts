import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PaymentService {
  private pgKey = process.env.PG_KEY!;
private apiKey = process.env.PAYMENT_API_KEY!;
private baseUrl = process.env.PAYMENT_BASE_URL!;


  constructor(private readonly httpService: HttpService) {}

  async createPayment(schoolId: string, amount: string, callbackUrl: string) {
    
    const payload = { school_id: schoolId, amount, callback_url: callbackUrl };
    const sign = jwt.sign(payload, this.pgKey);

    
    const body = { school_id: schoolId, amount, callback_url: callbackUrl, sign };

    
    const response = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/create-collect-request`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
      })
    );

    return response.data; 
  }

  async checkPaymentStatus(schoolId: string, collectRequestId: string) {
    
    const payload = { school_id: schoolId, collect_request_id: collectRequestId };
    const sign = jwt.sign(payload, this.pgKey);

   
    const response = await firstValueFrom(
      this.httpService.get(
        `${this.baseUrl}/collect-request/${collectRequestId}?school_id=${schoolId}&sign=${sign}`,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
          },
        }
      )
    );

    return response.data;
  }
}
