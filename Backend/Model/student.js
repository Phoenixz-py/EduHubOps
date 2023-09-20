// module.exports = (sequelize, Sequelize) => {
//   const Student = sequelize.define("student", {
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     age: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//     },
//     email:{},
//     class: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//     },
//   });

//   return Student;
// };
module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name cannot be null.",
        },
        notEmpty: {
          msg: "Name cannot be empty.",
        },
      },
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Age cannot be null.",
        },
        isInt: {
          msg: "Age must be an integer.",
        },
        min: {
          args: [1],
          msg: "Age must be at least 1.",
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true, // Allow null for email
      validate: {
        isEmail: {
          msg: "Invalid email format.",
        },
      },
    },
    class: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Class cannot be null.",
        },
        isInt: {
          msg: "Class must be an integer.",
        },
        min: {
          args: [1],
          msg: "Class must be at least 1.",
        },
      },
    },
  });

  return Student;
};
