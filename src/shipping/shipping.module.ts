import { Module } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { ShippingController } from './shipping.controller';
import { UpsModule } from './providers/ups/ups.module';
import { NpModule } from './providers/np/np.module';

@Module({
  imports: [UpsModule, NpModule],
  controllers: [ShippingController],
  providers: [ShippingService],
})
export class ShippingModule {}
