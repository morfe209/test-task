import { Injectable } from '@nestjs/common';
import { PaymentDto } from './dto/payment.dto';

@Injectable()
export class PaymentService {
  async makePayment(paymentDto: PaymentDto): Promise<string> {
    // Logic for making payment
    // Example: Call external payment gateway

    return `Payment of ${paymentDto.amount} successfully made for order ${paymentDto.orderId}.`;
  }
}
