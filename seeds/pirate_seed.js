
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({name: 'Bob', poison: 'Rum',
    accessory: 'Sword',
    image_url: 'http://harry.enzoverder.be/cats/funny-pictures-pirate-cat.jpg'}),
    knex('pirates').insert({name: 'Jim', poison: 'Tequila',
    accessory: 'Patch',
    image_url: 'http://harry.enzoverder.be/cats/funny-pictures-pirate-cat.jpg'}),
    knex('pirates').insert({name: 'Denise', poison: 'Vodka',
    accessory: 'Club',
    image_url: 'http://harry.enzoverder.be/cats/funny-pictures-pirate-cat.jpg'})
  );
};
