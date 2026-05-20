import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class SEOConfig extends Model {
  declare id: number;
  declare region: string | null;
  declare businessName: string | null;
  declare businessDescription: string | null;
  declare logoUrl: string | null;
  declare phone: string | null;
  declare email: string | null;
  declare streetAddress: string | null;
  declare city: string | null;
  declare state: string | null;
  declare postalCode: string | null;
  declare countryCode: string | null;
  declare latitude: string | null;
  declare longitude: string | null;
  declare socialLinks: string | null;
  declare googleAnalyticsId: string | null;
  declare googleTagManagerId: string | null;
  declare globalSchema: string | null;
  declare headerScripts: string | null;
  declare footerScripts: string | null;
}

SEOConfig.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'global',
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    businessDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    logoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    streetAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    socialLinks: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    googleAnalyticsId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    googleTagManagerId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    globalSchema: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    headerScripts: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    footerScripts: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'SEOConfig',
    tableName: 'seoconfigs',
  }
);

export default SEOConfig;
