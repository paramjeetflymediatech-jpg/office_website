import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class FAQ extends Model {
  public id!: number;
  public question!: string;
  public answer!: string;
  public order!: number;
}

FAQ.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'FAQ',
  }
);

export default FAQ;
