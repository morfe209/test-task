import { Module } from '@nestjs/common';
import { BraintreeService } from './braintree.service';

@Module({
  providers: [
    {
      provide: BraintreeService,
      useValue: new BraintreeService(),
    },
  ],
  exports: [BraintreeService],
})
export class BraintreeModule {}
