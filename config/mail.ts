import env from '#start/env'
import { defineConfig, transports } from '@adonisjs/mail'

const mailConfig = defineConfig({
  default: 'smtp',

  mailers: {
    smtp: transports.smtp({
      host: env.get('SMTP_HOST'),
      port: env.get('SMTP_PORT'),
      auth: {
        type: 'login', // Tipo de autenticación requerido
        user: env.get('SMTP_USERNAME'),
        pass: env.get('SMTP_PASSWORD')
      },
      secure: false, // true para puerto 465, false para otros
      tls: {
        rejectUnauthorized: false // Solo para desarrollo
      }
    })
  },
})

export default mailConfig

declare module '@adonisjs/mail/types' {
  export interface MailersList extends InferMailers<typeof mailConfig> {}
}