import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
    confirmAssitance: Boolean,
    name: String,
    lastName: String,
    personsNumber: Number,
    comments: String
});

const model = mongoose.model('Guests', mySchema);
export default model;