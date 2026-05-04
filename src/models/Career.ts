import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class Career extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public requirements!: string;
  public status!: string;
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
