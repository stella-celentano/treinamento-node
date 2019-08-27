module.exports = (sequelize, DataTypes) => {

    const MovieModel = sequelize.define('MovieModel', {

        ID: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        TITLE: {
            type: DataTypes.STRING,
            required: true,
            max: 100,
            allowNull: false
        },
        DATE_PREMIERE: {
            type: DataTypes.DATE,
            required: true,
            allowNull: false
        },
        AGE: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        },
        DURATION: {
            type: DataTypes.TIME,
            required: true,
            allowNull: false
        },
        GENRE: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
            max: 50
        },
        STORYLINE: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
            max: 1000
        },
        POSTER_URL: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
            max: 2083
        },
        TRAILER_URL: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
            max: 2083
        }
    },
        {
            tableName: 'MOVIE',
            timestamps: false
        }
    )
        return MovieModel
} 