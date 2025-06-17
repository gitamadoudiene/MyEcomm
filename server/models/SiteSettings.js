const mongoose = require('mongoose');

const siteSettingsSchema = new mongoose.Schema({
    logo: String,
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('SiteSettings', siteSettingsSchema);