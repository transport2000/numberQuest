'use strict';

var QuestContract = function () {


};
QuestContract.prototype = {
    init: function () {
    },
    setQuest: function (questKey, value) {
        if (questKey === "" || value === "") {
            throw new Error("key and value is null");
        }


        LocalContractStorage.set(questKey, value);

    },
    getQuest: function (questKey) {
        if (questKey === "") {
            throw new Error("key is null");
        }
        return  LocalContractStorage.get(questKey);

    },
    delQuest: function (questKey) {
        return LocalContractStorage.del(questKey);

    }
};

module.exports = QuestContract;