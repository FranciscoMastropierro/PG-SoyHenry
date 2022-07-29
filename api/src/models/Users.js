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
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
    password:{
      type: DataTypes.STRING,
    },
    membership: {
      type: DataTypes.ENUM,
      values: ['Basic', 'Banned', 'Admin'],
      defaultValue: 'Basic',
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