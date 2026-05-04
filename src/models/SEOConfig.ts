import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class SEOConfig extends Model {
  public id!: number;
  public businessName!: string | null;
  public businessDescription!: string | null;
  public logoUrl!: string | null;
  public phone!: string | null;
  public email!: string | null;
  public streetAddress!: string | null;
  public city!: string | null;
  public state!: string | null;
  public postalCode!: string | null;
  public countryCode!: string | null;
  public latitude!: string | null;
  public longitude!: string | null;
  public socialLinks!: string | null; // JSON string of social URLs
  public googleAnalyticsId!: string | null;
  public googleTagManagerId!: string | null;
  public globalSchema!: string | null; // Custom fallback JSON
  public headerScripts!: string | null;
  public footerScripts!: string | null;
}

SEOConfig.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
  }
);

export default SEOConfig;
