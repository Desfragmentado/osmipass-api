import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TicketTransaction extends BaseModel {
  static table = 'ticket_transactions'

  @column({ isPrimary: true })
  declare ticketId: number

  @column({ isPrimary: true })
  declare transactionId: number
}
