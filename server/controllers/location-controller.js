const Location = require("../model/location-model")

createLocation = async(req, res) => {
    try {
        const {image_url, options, answer_index} = req.body;

    if(!image_url || !options || !answer_index) {
        return res.status(400)
        .json({
            errorMessage:"Please enter all required fields"
        })
    }

    const newLocation = Location({
        image_url, options, answer_index
    })
    newLocation.save();

    return res.status(200)
    .json({
        location: newLocation,
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
    createLocation
}