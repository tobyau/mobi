module.exports = (db, Sequelize) => {
    return db.define('users', {
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING, allowNull: false },
      username: { type: Sequelize.TEXT, validate: { isEmail: true } },
      password: { type: Sequelize.STRING, allowNull: false },
    });
  }