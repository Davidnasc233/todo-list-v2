import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable('tasks', (table) => {
		table.string('title', 255).notNullable().defaultTo('');
	});
}


export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('tasks', (table) => {
		table.dropColumn('title');
	});
}

