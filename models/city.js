/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    name: {
      type: DataTypes.CHAR(35),
      allowNull: false,
      defaultValue: '',
      field: 'Name'
    },
    countryCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: '',
      references: {
        model: 'country',
        key: 'Code'
      },
      field: 'CountryCode'
    },
    district: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: '',
      field: 'District'
    },
    population: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'Population'
    }
  }, {
    tableName: 'city'
  }, {
    classMethods: {
      associate: function(models) {
        //association tables can be defined here
      }
    }
  });
};
