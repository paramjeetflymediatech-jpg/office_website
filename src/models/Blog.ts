import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class Blog extends Model {
  declare id: number;
  declare title: string;
  declare slug: string;
  declare image: string;
  declare date: string;
  declare views: number;
  declare excerpt: string;
  declare content: string;
  declare category: string;
  declare region: string;
  declare metaTitle: string;
  declare metaDescription: string;
  declare focusKeyword: string;
  declare keywords: string;
  declare schema: string;
  declare ogTitle: string;
  declare ogDescription: string;
  declare ogImage: string;
  declare canonicalUrl: string;
  declare metaRobots: string;
  declare twitterCard: string;
}

Blog.init(
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
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'global',
    },
    metaTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    metaDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    focusKeyword: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    schema: {
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
    modelName: 'Blog',
    tableName: 'blogs',
  }
);

export default Blog;
