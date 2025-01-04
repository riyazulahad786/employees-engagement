const mongoose = require('mongoose');

const kudoSchema = new mongoose.Schema({
    giver: { type: String, },
    receiver: { type: String,},
    message: String,
    timestamp: { type: Date, default: Date.now },
});

const Kudo = mongoose.model('Kudo', kudoSchema);
module.exports = Kudo;
