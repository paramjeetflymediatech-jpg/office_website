import { Model, DataTypes } from 'sequelize';
import sequelize from '@/lib/db';

class PageSEO extends Model {
  public id!: number;
  public pageUrl!: string; // e.g., '/', '/about', '/services/web-design'
  public title!: string;
  public description!: string | null;
  public keywords!: string | null;
  public customSchema!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
