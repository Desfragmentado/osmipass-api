import { defineConfig } from '@adonisjs/cors';
const corsConfig = defineConfig({
    enabled: true,
    origin: ['https://osmipass.onrender.com'],
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
    headers: true,
    exposeHeaders: [],
    credentials: true,
    maxAge: 90,
});
export default corsConfig;
//# sourceMappingURL=cors.js.map