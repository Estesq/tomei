const { Sequelize } = require('sequelize')

module.exports = async () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME || 'users',
    process.env.DB_USER || 'root',
    process.env.DB_PASS || '',
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mariadb'
    }
  )
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
  return sequelize
}
