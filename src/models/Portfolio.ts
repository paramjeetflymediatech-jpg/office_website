import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class Portfolio extends Model {
  public id!: number;
  public title!: string;
  public imageUrl!: string;
  public category!: string | null;
}

Portfolio.init(
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
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Portfolio',
  }
);

export default Portfolio;
