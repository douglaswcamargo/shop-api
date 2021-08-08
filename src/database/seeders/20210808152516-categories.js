module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories',
      [
        {
          id: 1,
          image_id: 'f3fbf57b118fa9',
          name: 'Bakery',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          image_id: 'b271afbefdc554',
          name: 'Entrees',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          image_id: 'eba73b2361fae3',
          name: 'Drinks',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  }
}
