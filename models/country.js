/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var country = sequelize.define('country', {
    code: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      field: 'Code'
    },
    name: {
      type: DataTypes.CHAR(52),
      allowNull: false,
      defaultValue: '',
      field: 'Name'
    },
    continent: {
      type: DataTypes.ENUM('Asia','Europe','North America','Africa','Oceania','Antarctica','South America'),
      allowNull: false,
      defaultValue: 'Asia',
      field: 'Continent'
    },
    region: {
      type: DataTypes.CHAR(26),
      allowNull: false,
      defaultValue: '',
      field: 'Region'
    },
    surfaceArea: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.00',
      field: 'SurfaceArea'
    },
    indepYear: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'IndepYear'
    },
    population: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'Population'
    },
    lifeExpectancy: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'LifeExpectancy'
    },
    gnp: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'GNP'
    },
    gnpOld: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'GNPOld'
    },
    localName: {
      type: DataTypes.CHAR(45),
      allowNull: false,
      defaultValue: '',
      field: 'LocalName'
    },
    governmentForm: {
      type: DataTypes.CHAR(45),
      allowNull: false,
      defaultValue: '',
      field: 'GovernmentForm'
    },
    headOfState: {
      type: DataTypes.CHAR(60),
      allowNull: true,
      field: 'HeadOfState'
    },
    capital: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'Capital'
    },
    code2: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      field: 'Code2'
    }
  }, {
    tableName: 'country',
    timestamps : false
  });
  
  country.associate = function(models){
    country.hasMany(models.city)
  }
  return country;
};
