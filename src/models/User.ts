import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string; // Hashed
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
