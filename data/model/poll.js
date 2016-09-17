/**
 * Dependencies.
 */
const mongoose = require('../connection');

/**
 * Client document definition.
 */
const polls = mongoose.Schema({
    answer: String
});

/**
 * Export client model.
 */
module.exports = mongoose.model('Polls', polls);
