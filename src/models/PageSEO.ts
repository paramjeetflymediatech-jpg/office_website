import { Model, DataTypes } from 'sequelize';
import sequelize from '@/lib/db';

class PageSEO extends Model {
  declare id: number;
  declare pageUrl: string;
  declare title: string;
  declare description: string | null;
  declare keywords: string | null;
  declare customSchema: string | null;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

PageSEO.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    customSchema: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'PageSEO',
  }
);

export default PageSEO;
