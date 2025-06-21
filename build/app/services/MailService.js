import mail from '@adonisjs/mail/services/main';
export default class MailService {
    async sendPaymentConfirmation(to, data) {
        const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4CAF50;">¡Hola ${data.customerName}!</h2>
        <p>Tu intento de compra con folio <strong>${data.folio}</strong> por <strong>$${data.amount}</strong> ha sido iniciado.</p>
        <p>Recibirás otra confirmación cuando el pago sea exitoso.</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <p style="margin: 0;">Equipo OsmiPass</p>
        </div>
      </div>
    `;
        await mail.send((message) => {
            message
                .from('tuboleto@dsmfamilia.com')
                .to(to)
                .subject('Confirmación de inicio de pago - OsmiPass')
                .html(html);
        }).catch(error => {
            console.error('Error enviando correo de confirmación:', error);
        });
    }
    async sendPaymentSuccess(to, data) {
        const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4CAF50;">🎉 ¡Pago recibido, ${data.customerName}!</h2>
        <p>Tu compra con folio <strong>${data.folio}</strong> fue completada con éxito.</p>
        <p>Monto pagado: <strong>$${data.amount}</strong></p>
        
        ${data.event ? `
        <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <h3 style="margin-top: 0;">Detalles del Evento</h3>
          <p><strong>Evento:</strong> ${data.event}</p>
          <p><strong>Lugar:</strong> ${data.venue}</p>
          <p><strong>Fecha:</strong> ${data.date}</p>
        </div>
        ` : ''}
        
        <p>Gracias por usar OsmiPass. ¡Nos vemos en el evento!</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e9; border-radius: 5px;">
          <p style="margin: 0;">Si tienes alguna pregunta, contáctanos en <a href="mailto:soporte@osmipass.com">soporte@osmipass.com</a></p>
        </div>
      </div>
    `;
        await mail.send((message) => {
            message
                .from('tuboleto@dsmfamilia.com')
                .to(to)
                .subject('✅ Pago exitoso - OsmiPass')
                .html(html);
        }).catch(error => {
            console.error('Error enviando correo de éxito:', error);
        });
    }
}
//# sourceMappingURL=MailService.js.map