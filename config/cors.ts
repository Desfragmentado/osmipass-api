import { defineConfig } from '@adonisjs/cors'

/*const corsConfig = defineConfig({
  enabled: true,
  origin: ['http://localhost:4200'],
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  headers: true,
  exposeHeaders: [],
  credentials: true,
  maxAge: 90,
})

export default corsConfig*/

/*produccion*/
const corsConfig = defineConfig({
  enabled: true,
  origin: ['https://osmipass.onrender.com'], // el dominio final del frontend
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  headers: true,
  exposeHeaders: [],
  credentials: true,
  maxAge: 90,
})

export default corsConfig