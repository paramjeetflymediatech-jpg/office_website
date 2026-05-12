import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class Portfolio extends Model {
  declare id: number;
  declare title: string;
  declare imageUrl: string;
  declare category: string | null;
  declare location: string | null;
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
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'australia',
    },
  },
  {
    sequelize,
    modelName: 'Portfolio',
  }
);

export default Portfolio;
