import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { StripeModule } from './processors/stripe/stripe.module';
import { PayPalModule } from './processors/paypal/paypal.module';
import { BraintreeModule } from './processors/braintree/braintree.module';

@Module({
  imports: [StripeModule, PayPalModule, BraintreeModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
