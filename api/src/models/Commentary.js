const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Commentary', {
    text: {
        type: DataTypes.TEXT,
        allowNull:false,
    },
  },
  {
    timestamps: false ,
    
  }
  );
};