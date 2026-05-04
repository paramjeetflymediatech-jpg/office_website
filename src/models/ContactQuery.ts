import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class ContactQuery extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare phone: string | null;
  declare subject: string | null;
  declare message: string;
  declare status: string;
}

ContactQuery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'NEW',
    },
  },
  {
    sequelize,
    modelName: 'ContactQuery',
  }
);

export default ContactQuery;
