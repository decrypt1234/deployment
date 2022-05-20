const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    logoImage: String,
    coverImage: String,
    description: String,
    salesCount: {
        type: Number,
        default: 0
    },
    nftCount: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    lastUpdatedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    lastUpdatedOn: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Brand', brandSchema);