const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const TriviaQuestionSchema = new Schema(
    {
        question: {type: String, required: true},
        options: { type: [String], required: true },
        answer_index: {type: Number, required:true} //index of the correct answer in array of options
    },
    { timestamps: true },
)

module.exports = mongoose.model('TriviaQuestion', TriviaQuestionSchema)
