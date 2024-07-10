const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        loginId: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        userPw: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        address: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        profileImg: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        userNick: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.NOW
        },
        updateAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.NOW
        }
    }, {
        freezeTableName: true
    })

    return User
}

module.exports = userModel;