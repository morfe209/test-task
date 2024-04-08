import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ShippingModule } from './shipping/shipping.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    CustomersModule,
    OrdersModule,
    ShippingModule,
    PaymentModule,
  ],

})
export class AppModule {}
