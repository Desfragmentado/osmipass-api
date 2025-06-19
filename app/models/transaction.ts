import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Customer from './customer.js'
import Ticket from './ticket.js'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare customerId: number | null

  @column()
  declare amount: number

  @column()
  declare status: 'pending' | 'completed' | 'failed' | 'refunded'

  @column()
  declare stripeSessionId: string

  @column()
  declare stripePaymentIntentId: string

  @column()
  declare paymentMethod: string

  @column()
  declare customerEmail: string

  @column()
  declare customerName: string

  @column()
  declare receiptUrl: string

  @column()
  declare metadata: Record<string, any>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Customer)
  declare customer: BelongsTo<typeof Customer>

  @hasMany(() => Ticket)
  declare tickets: HasMany<typeof Ticket>
}
