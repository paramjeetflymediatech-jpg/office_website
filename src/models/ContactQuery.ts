import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class ContactQuery extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string | null;
  public message!: string;
  public status!: string;
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
