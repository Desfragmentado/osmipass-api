import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('customer_id')
        .unsigned()
        .references('id')
        .inTable('customers')
        .onDelete('SET NULL')

      table.decimal('amount', 10, 2).notNullable()

      table
        .enum('status', ['pending', 'completed', 'failed', 'refunded'])
        .defaultTo('pending')

      table.string('stripe_session_id', 255).nullable()
      table.string('stripe_payment_intent_id', 255).nullable()
      table.string('payment_method', 50).nullable()
      table.string('customer_email', 255).notNullable()
      table.string('customer_name', 255).notNullable()
      table.string('receipt_url', 512).nullable()
      table.jsonb('metadata').nullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
