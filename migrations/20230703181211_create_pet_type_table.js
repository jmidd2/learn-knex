/**
 * @param { import("knex").Knex } knex
 */
export function up(knex) {
  return knex.schema.createTable('pet_type', tableBuilder => {
    tableBuilder.increments('id'); // Primary Key
    tableBuilder.string('name'); // Name of type
    tableBuilder.timestamps(true, true); // Adds created_at and modified_at
  });
}

/**
 * @param { import("knex").Knex } knex
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('pet_type');
}
