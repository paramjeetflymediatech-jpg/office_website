import { Model, DataTypes } from 'sequelize';
import sequelize from '@/lib/db';

class PageSEO extends Model {
  declare id: number;
  declare pageUrl: string;
  declare title: string;
  declare description: string | null;
  declare keywords: string | null;
  declare customSchema: string | null;
  declare ogTitle: string | null;
  declare ogDescription: string | null;
  declare ogImage: string | null;
  declare canonicalUrl: string | null;
  declare metaRobots: string | null;
  declare twitterCard: string | null;
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
    ogTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ogDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ogImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    canonicalUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    metaRobots: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'index, follow',
    },
    twitterCard: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'summary_large_image',
    },
  },
  {
    sequelize,
    modelName: 'PageSEO',
    tableName: 'pageseos',
  }
);

export default PageSEO;
