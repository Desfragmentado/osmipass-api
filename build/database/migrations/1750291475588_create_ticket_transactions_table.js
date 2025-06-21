import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'ticket_transactions';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table
                .integer('ticket_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('tickets')
                .onDelete('CASCADE');
            table
                .integer('transaction_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('transactions')
                .onDelete('CASCADE');
            table.primary(['ticket_id', 'transaction_id']);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1750291475588_create_ticket_transactions_table.js.map