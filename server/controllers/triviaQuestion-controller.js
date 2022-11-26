const TriviaQuestion = require("../model/triviaQuestion-model")

createTriviaQuestion = async(req, res) => {

    try {
        const {question, options, answer_index} = req.body;

    // if(!question || !options || !answer_index) {
    //     return res.status(400)
    //     .json({
    //         errorMessage:"Please enter all required fields"
    //     })
    // }

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

getTriviaQuestion = async(req, res) => {

    let question;

    try {
        TriviaQuestion.count().exec(function(err, count){

            var random = Math.floor(Math.random() * count);
            
            question = TriviaQuestion.findOne().skip(random).exec(
                function (err, result) {
                    return res.status(200)
                    .json({
                        triviaQuestion: result
                    });
                }
            );
        });

    } catch (err) {
        return res.status(500)
        .json({
            error: err
        })
    }
}

getAllTriviaQuestions = async(req, res) => {
    try {
        
    } catch (err) {
        return res.status(500)
        .json({
            error: err
        })
    }
}

module.exports = {
    createTriviaQuestion,
    getTriviaQuestion
}