// const { Sequelize } = require("sequelize");
// const dbConfig = require("../Db/db"); // Adjust the path as needed

// const db = {};

// // Create a Sequelize instance to handle both database creation and connection
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: 'mysql', // Specify the dialect as 'mysql'
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

// (async () => {
//   try {
//     // Create the database if it doesn't exist
//     await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.DB}`);
//     console.log(`Database ${dbConfig.DB} has been created or already exists.`);

//     // Test and authenticate the main connection
//     await sequelize.authenticate();
//     console.log("Database connected successfully ...");

//     const Student = require("../Model/student.js")(sequelize, Sequelize);
//     db.Student = Student;
//     db.Sequelize = Sequelize;
//   } catch (error) {
//     console.error("Error:", error);
//   } 
// })();

// module.exports = db;
const { Sequelize } = require("sequelize");
const dbConfig = require("../Db/db"); // Adjust the path as needed

const db = {};

// Create a Sequelize instance to handle both database creation and connection
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'mysql', // Specify the dialect as 'mysql'
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

(async () => {
  try {
    // Create the database if it doesn't exist
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.DB}`);
    console.log(`Database ${dbConfig.DB} has been created or already exists.`);

    // Test and authenticate the main connection
    await sequelize.authenticate();
    console.log("Database connected successfully ...");

    // Define the Student model
    const Student = require("../Model/student.js")(sequelize, Sequelize);

    // Synchronize the models with the database
    await sequelize.sync({ force: true }); // Use { force: true } to drop and recreate tables (in development)

    db.Student = Student;
    db.Sequelize = Sequelize;
  } catch (error) {
    console.error("Error:", error);
  } 
})();

module.exports = db;
