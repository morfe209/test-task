import { Injectable } from '@nestjs/common';
import { Stripe } from 'stripe';
import { STRIPE_API_KEY } from './stripe.constants.js';

@Injectable()
export class StripeService {
  private stripeClient: Stripe;

  constructor() {
    this.stripeClient = new Stripe(STRIPE_API_KEY, {
      apiVersion: '2020-08-27',
    });
  }

  async createPaymentIntent(amount: number, currency: string): Promise<any> {
    // Logic to create a payment intent using Stripe API
  }
}
