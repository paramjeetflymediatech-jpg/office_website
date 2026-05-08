import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class Application extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare phone: string;
  declare position: string;
  declare resumeUrl: string;
  declare message: string;
}

Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumeUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Application',
    tableName: 'applications',
  }
);

export default Application;
