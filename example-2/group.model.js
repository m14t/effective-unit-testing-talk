const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  isFeatured: {
    default: false,
    type: Boolean,
  },
  name: {
    required: true,
    type: String,
    unique: true,
  },
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
