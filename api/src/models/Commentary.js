const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Commentary', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull:false,
    },
    email: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false ,
    
  }
  );
};