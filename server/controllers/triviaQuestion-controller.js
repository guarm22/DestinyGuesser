const TriviaQuestion = require("../model/triviaQuestion-model")

createTriviaQuestion = async(req, res) => {
    try {
        const {question, options, answer_index} = req.body;

    if(!image_url || !options || !answer_index) {
        return res.status(400)
        .json({
            errorMessage:"Please enter all required fields"
        })
    }

    const newTrivia = TriviaQuestion({
        question, options, answer_index
    })
    newTrivia.save();

    return res.status(200)
    .json({
        triviaQuestion: newTrivia,
        success:true,
    })

    }
    catch(err) {
        return res.status(500)
        .json({
            error: err
        })
    }
}

module.exports = {
    createTriviaQuestion
}