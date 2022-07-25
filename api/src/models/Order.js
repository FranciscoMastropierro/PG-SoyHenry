const { DataTypes, NOW } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Order', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW
    },
    payment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
    },
    pay: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    shipmentAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    }

    

  },
  {
    timestamps: false ,
    
  }
  );
};