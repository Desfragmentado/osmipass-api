import type { HttpContext } from '@adonisjs/core/http'
import Env from '#start/env'
import Stripe from 'stripe'
import StripeService from '#services/StripeService'
import MailService from '#services/MailService'

const stripe = new Stripe(Env.get('STRIPE_SECRET_KEY')!, {
  apiVersion: '2024-04-10' as any,
})

export default class PagosController {
  /**
   * Crea una sesión de pago con Stripe
   */
  public async checkout({ request, response }: HttpContext) {
    const { customerEmail, customerName, metadata } = request.only([
      'customerEmail',
      'customerName',
      'metadata',
    ])

    try {
      // Validación y conversión del monto
      const amount = parseInt(metadata.monto, 10)
      const folio = metadata.folio

      if (!customerEmail || !customerName) {
        return response.badRequest({ error: 'Nombre y correo electrónico son requeridos' })
      }

      if (isNaN(amount) || amount <= 0) {
        return response.badRequest({ error: 'El monto debe ser un número positivo' })
      }

      if (!folio) {
        return response.badRequest({ error: 'El folio es requerido' })
      }

      const stripeService = new StripeService()
      const session = await stripeService.createCheckoutSession({
        customerEmail,
        customerName,
        metadata: {
          ...metadata,
          amount: amount.toString(),
        },
      })

      console.log('Sesión de Stripe creada:', session.id)

      // Enviar correo previo (opcional)
      await new MailService().sendPaymentConfirmation(customerEmail, {
        customerName,
        folio,
        amount: (amount / 100).toString(),
      })

      return response.ok({ 
        id: session.id,
        url: session.url
      })

    } catch (error: any) {
      console.error('[ERROR checkout]', error)
      return response.internalServerError({
        error: 'Error al procesar el pago',
        details: error.message,
      })
    }
  }

  /**
   * Recibe y procesa el webhook de Stripe
   */
  public async webhook({ request, response }: HttpContext) {
    const rawBody = request.raw()
    const signature = request.header('stripe-signature') || ''

    if (!rawBody) {
      return response.status(400).send('Cuerpo de webhook vacío')
    }

    try {
      const event = stripe.webhooks.constructEvent(
        Buffer.from(rawBody),
        signature,
        Env.get('STRIPE_WEBHOOK_SECRET')!
      )

      switch (event.type) {
        case 'checkout.session.completed': {
          const session = event.data.object as Stripe.Checkout.Session
          const metadata = session.metadata || {}
          const email = session.customer_details?.email || metadata?.email
          const name = session.customer_details?.name || metadata?.name
          const folio = metadata.folio
          const amount = metadata.amount

          if (!email || !name || !folio || !amount) {
            console.error('[Webhook] Datos incompletos:', { email, name, folio, amount })
            return response.badRequest('Datos incompletos en webhook')
          }

          // En el método webhook
          await new MailService().sendPaymentSuccess(email, {
            customerName: name,
            folio,
            amount,
            event: metadata.event,
            venue: metadata.venue,
            date: metadata.date
          })
          
          break
        }

        default:
          console.log(`[Webhook] Evento no manejado: ${event.type}`)
      }

      return response.status(200).send('Webhook recibido con éxito')
    } catch (error: any) {
      console.error('[ERROR Webhook Stripe]', error.message)
      return response.status(400).send(`Webhook error: ${error.message}`)
    }
  }
}