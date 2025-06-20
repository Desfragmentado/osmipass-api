import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'
const rawBodyMiddleware = () => import('#middleware/rawBody')

router.get('/health', () => ({ status: 'ok' }))

router.group(() => {
  // 🎫 Eventos
  router.get('/events', '#controllers/events_controller.index')
  router.get('/events/:id', '#controllers/events_controller.show')
  router.post('/events', '#controllers/events_controller.store')

  // 🎟️ Boletos por categoría
  router.get('/categories/:category_id/tickets', '#controllers/tickets_controller.available')
  
  // Verificación de boletos
  router.get('/tickets/verify/:code', '#controllers/tickets_controller.verify')

  // 💳 Checkout (Stripe)
  router.post('/checkout', '#controllers/PagosController.checkout')

  // 🪝 Webhook (Stripe)
  router.post('/stripe/webhook', '#controllers/PagosController.webhook').use([rawBodyMiddleware])

}).prefix('/api')

// 📘 Swagger Docs
router.get('/swagger', async () => AutoSwagger.default.docs(router.toJSON(), swagger))
router.get('/docs', async () => AutoSwagger.default.ui('/swagger', swagger))
