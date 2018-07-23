const mongoose = require('mongoose');
const {Schema} = mongoose;
import recipientSchema from './Recipient';

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'UserModel'},
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);