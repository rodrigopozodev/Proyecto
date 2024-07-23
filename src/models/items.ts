import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

// Define una instancia de Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path_to_your_database.sqlite', // Cambia esta ruta según sea necesario
});

// Define la interfaz de los atributos del modelo
interface SneakersAttributes {
  id: number;
  name: string;
  color: string;
  photo: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define la interfaz de atributos opcionales (para la creación del modelo)
interface SneakersCreationAttributes extends Optional<SneakersAttributes, 'id'> {}

// Define el modelo de Sequelize
class Sneakers extends Model<SneakersAttributes, SneakersCreationAttributes>
  implements SneakersAttributes {
  public id!: number;
  public name!: string;
  public color!: string;
  public photo!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

// Inicializa el modelo
Sneakers.init(
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
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'sneakers', // Nombre de la tabla en la base de datos
    timestamps: true,
    underscored: true,
  }
);

export default Sneakers;
