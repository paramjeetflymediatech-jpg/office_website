import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class Career extends Model {
  declare id: number;
  declare title: string;
  declare post: string;
  declare vacancies: string;
  declare experience: string;
  declare description: string;
  declare requirements: string;
  declare status: string;
}

Career.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vacancies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    requirements: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'OPEN',
    },
  },
  {
    sequelize,
    modelName: 'Career',
  }
);

export default Career;
