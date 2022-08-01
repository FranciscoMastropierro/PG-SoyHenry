const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "The firstname can only contain letters"
        },
        len: {
          args: [2, 255],
          msg: "The firstname must be at least two characters"
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "The lastname can only contain letters"
        },
        len: {
          args: [2, 255],
          msg: "The lastname must be at least two characters"
        }
      } 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
        validate: {
          isEmail: {
            msg: "The email must be a valid email"
          }
        }
    },
    address:{
      type :DataTypes.STRING,
     
    },
    postalCode : {
      type: DataTypes.INTEGER,
     
    },
    username: {
      type :DataTypes.STRING,
      unique: true,
    },
    profileImage:{
      type: DataTypes.TEXT,
    },
    disable:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    timestamps: false ,
    
  }
  );
};