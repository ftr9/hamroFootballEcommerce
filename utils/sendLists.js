const bundesligaModel = require("../models/footballmodels/bundesligaModel");
const championsLeagueModel = require("../models/footballmodels/championsLeagueModel");
const englishPremiereLeagueModel = require("../models/footballmodels/englishPremiereLeague");
const ereDiviseModel = require("../models/footballmodels/ereDiviseModel");
const league1Model = require("../models/footballmodels/league1Model");
const majorLeagueSoccerModel = require("../models/footballmodels/majorLeagueSoccerModel");
const serieATMModel = require("../models/footballmodels/serieATMModel");
const worldCupModel = require("../models/footballmodels/worldCupModel");

module.exports = async (parameter) => {

    switch (parameter) {
        case "bundesliga":
            const lists = await bundesligaModel.find();
            return lists;

        case "championsLeague":
            const lists1 = await championsLeagueModel.find();
            return lists1;

        case "englishpremiereleague":
            const lists2 = await englishPremiereLeagueModel.find();
            return lists2;

        case "eredivise":
            const lists3 = await ereDiviseModel.find();
            return lists3;

        case "ligue1":
            const lists4 = await league1Model.find();
            return lists4;

        case "majorLeagueSoccer":
            const lists5 = await majorLeagueSoccerModel.find();
            return lists5;

        case "serieATM":
            const lists6 = await serieATMModel.find();
            return lists6;

        case "worldCup":
            const lists7 = await worldCupModel.find();
            return lists7;

        default:
            throw (new Error("the requested parameter is not found"));
    }

}