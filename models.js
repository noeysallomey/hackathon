const Sequelize = require('sequelize');
const database = require('./database');

const Concern = database.define('concernsdbs', {
	 	concernNo: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},

		concernBuilding:{
				type: Sequelize.STRING,
				allowNull: false
		},

		concernBuildingFloor:{
				type: Sequelize.INTEGER,
				allowNull: false
		},

		concernLocation: {
        type: Sequelize.STRING,
        allowNull: false
    },

    concernMsg: {
        type: Sequelize.STRING,
        allowNull: false
    },

		dateLogged: {
				type: Sequelize.DATEONLY,
				allowNull: false
		},

    studentID: {
        type: Sequelize.STRING,
        allowNull: false
    },
},{
	timestamps: false
});

database.sync();

module.exports.Concern = Concern;
