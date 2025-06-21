import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'categories';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table
                .integer('event_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('events')
                .onDelete('CASCADE');
            table.string('name', 100).notNullable();
            table.text('description').nullable();
            table.decimal('price', 10, 2).notNullable();
            table.integer('quantity_available').notNullable();
            table.integer('max_tickets_per_order').defaultTo(10);
            table.boolean('is_active').defaultTo(true);
            table.timestamp('created_at', { useTz: true }).defaultTo(this.now());
            table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1750291463937_create_categories_table.js.map