import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'events';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.text('description').nullable();
            table.timestamp('start_date', { useTz: true }).notNullable();
            table.timestamp('end_date', { useTz: true }).notNullable();
            table.string('location', 255).notNullable();
            table.text('venue_details').nullable();
            table.boolean('is_active').defaultTo(true);
            table.string('image_url', 512).nullable();
            table.timestamp('created_at', { useTz: true }).defaultTo(this.now());
            table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1750291459943_create_events_table.js.map