/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countrylanguage', {
    countryCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      references: {
        model: 'country',
        key: 'Code'
      },
      field: 'CountryCode'
    },
    language: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      field: 'Language'
    },
    isOfficial: {
      type: DataTypes.ENUM('T','F'),
      allowNull: false,
      defaultValue: 'F',
      field: 'IsOfficial'
    },
    percentage: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.0',
      field: 'Percentage'
    }
  }, {
    tableName: 'countrylanguage',
    timestamps: false,
  },{
    classMethods: {
      associate: function(models) {
        //association tables can be defined here
      }
    }
  });
  return CountryLanguage;
};
