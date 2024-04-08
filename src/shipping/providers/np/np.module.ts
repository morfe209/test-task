import { Module } from '@nestjs/common';
import { NpService } from './np.service';

@Module({
  providers: [NpService],
  exports: [NpService],
})
export class NpModule {}
