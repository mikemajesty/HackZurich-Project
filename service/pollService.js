
const Poll = require('../data/model/poll');

const save = (poll) => {
    pollDB = new Poll(poll);
    pollDB.save();
}

module.exports = {
    save
}
