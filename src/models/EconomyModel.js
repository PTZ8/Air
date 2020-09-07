const mongoose = require('mongoose');

const EconomySchema = new mongoose.Schema({
    userId: { type: String, required: false },
    coinsInWallet: { type: Number, required: false, default: 0 },
    coinsInBank: { type: Number, required: false, default: 0 },
    bankSpace: { type: Number, required: false, default: 1000 },
    work: {
        job: { type: String, default: 'none' },
        moneyEarned: { type: String, default: 0 }
    },
    items: { type: Array, required: false },
    dailyStreak: { type: Date, required: false, default: new Date(Date.now() - 86400000) }
});

module.exports = mongoose.model('economy', EconomySchema);