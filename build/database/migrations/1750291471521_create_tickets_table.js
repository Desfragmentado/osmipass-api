import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'tickets';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table
                .integer('category_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('categories')
                .onDelete('CASCADE');
            table
                .integer('transaction_id')
                .unsigned()
                .nullable()
                .references('id')
                .inTable('transactions')
                .onDelete('SET NULL');
            table.string('code', 50).unique().notNullable();
            table
                .enum('status', ['available', 'reserved', 'sold', 'used', 'cancelled'])
                .defaultTo('available');
            table.string('seat_number', 20).nullable();
            table.decimal('price', 10, 2).notNullable();
            table.timestamp('created_at', { useTz: true }).defaultTo(this.now());
            table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
            table.index(['category_id'], 'idx_tickets_category_id');
            table.index(['transaction_id'], 'idx_tickets_transaction_id');
            table.index(['code'], 'idx_tickets_code');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1750291471521_create_tickets_table.js.map