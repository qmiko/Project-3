module.exports = function (sequelize, DataTypes) {
    var Items = sequelize.define("Items", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });
    return Items;
};