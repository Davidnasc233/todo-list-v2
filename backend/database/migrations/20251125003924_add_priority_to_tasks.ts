import type { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.table('tasks', function (table) {
    table.integer('priority').defaultTo(0);
  });
}

export async function down(knex: Knex) {
  return knex.schema.table('tasks', function (table) {
    table.dropColumn('priority');
  });
}
