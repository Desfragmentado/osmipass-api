import router from '@adonisjs/core/services/router';
import AutoSwagger from 'adonis-autoswagger';
import swagger from '#config/swagger';
const rawBodyMiddleware = () => import('#middleware/rawBody');
router.get('/health', () => ({ status: 'ok' }));
router.group(() => {
    router.get('/events', '#Controllers/events_controller.index');
    router.get('/events/:id', '#Controllers/events_controller.show');
    router.post('/events', '#Controllers/events_controller.store');
    router.get('/categories/:category_id/tickets', '#Controllers/tickets_controller.available');
    router.get('/tickets/verify/:code', '#Controllers/tickets_controller.verify');
    router.post('/checkout', '#Controllers/PagosController.checkout');
    router.post('/stripe/webhook', '#Controllers/PagosController.webhook').use([rawBodyMiddleware]);
}).prefix('/api');
router.get('/swagger', async () => AutoSwagger.default.docs(router.toJSON(), swagger));
router.get('/docs', async () => AutoSwagger.default.ui('/swagger', swagger));
//# sourceMappingURL=routes.js.map