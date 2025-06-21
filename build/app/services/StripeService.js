import Env from '#start/env';
import Stripe from 'stripe';
const stripe = new Stripe(Env.get('STRIPE_SECRET_KEY'), {
    apiVersion: '2024-04-10',
});
export default class StripeService {
    async createCheckoutSession(data) {
        const amount = parseInt(data.metadata.amount, 10);
        if (isNaN(amount) || amount <= 0) {
            throw new Error('El monto debe ser un número positivo en centavos');
        }
        return await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            customer_email: data.customerEmail,
            metadata: data.metadata,
            line_items: [
                {
                    price_data: {
                        currency: 'mxn',
                        product_data: {
                            name: 'Boleto OsmiPass',
                            description: `Folio: ${data.metadata.folio}`,
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            success_url: Env.get('STRIPE_SUCCESS_URL'),
            cancel_url: Env.get('STRIPE_CANCEL_URL'),
        });
    }
}
//# sourceMappingURL=StripeService.js.map