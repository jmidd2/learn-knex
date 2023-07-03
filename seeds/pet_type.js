/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async knex => {
  // Deletes ALL existing entries
  await knex('pet_type').del();
  await knex('pet_type').insert([
    { id: 1, name: 'Bird' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Fish' },
  ]);
};

export default seed;
