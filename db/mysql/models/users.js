module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "username is missing",
            },
            notEmpty: {
              msg: "username must not be empty",
            },
            not: {
              args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
              msg: "username must only contain letters",
            },
          },
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Name is missing",
            },
            notEmpty: {
              msg: "Name must not be empty",
            },
            not: {
              args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
              msg: "Name must only contain letters",
            },
          },
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Lastname is missing",
            },
            notEmpty: {
              msg: "Lastname must not be empty",
            },
            not: {
              args: /[`~,<>;':"/[\]|{}()=_+-\d]/,
              msg: "Lastname must only contain letters",
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Email is missing",
            },
            notEmpty: {
              msg: "Email must not be empty",
            },
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Password is missing",
            },
            notEmpty: {
              msg: "Password must not be empty",
            },
          },
        },
        state: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          validate: {
            notNull: {
              msg: "state is missing",
            },
            notEmpty: {
              msg: "state must not be empty",
            },
            isIn: {
              args: [[true, false]],
              msg: "state not allowed",
            },
          },
        },
        createdAt: {
          field: "created_at",
          type: DataTypes.DATE,
        },
        updatedAt: {
          field: "updated_at",
          type: DataTypes.DATE,
        },
      },
      {
        tableName: "USER",
        underscored: false,
        name: {
          singular: "USER",
          plural: "USERS",
        },
        sequelize,
      }
    );
    User.associate=(models) => {
    };
    return User;
  };
  