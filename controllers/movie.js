const { MovieModel } = require('./../models')

class Movie {

    get(req, res){//request e response
        MovieModel.findAll({ raw: true })
            .then((result) => res.status(200).json(result))
            .catch((error) => res.status(500).json(error))
    } 

    getById(req, res){
        MovieModel.findByPk(req.params.id)
            .then((result) => res.status(200).json(result))
            .catch((error) => res.status(500).json(error))
    }
}

module.exports = new Movie()