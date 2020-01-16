const axios = require("axios");
const Dev = require("./../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

//index, show, store, update, destroy

module.exports = {
  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;
    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name = login, avatar_url, bio } = apiResponse.data;
      const techsArray = parseStringAsArray(techs);
      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return response.json(dev);
  },

  async index(request, response) {
    const devs = await Dev.find();
    return response.json(devs);
  },
  async update(request, response) {
    const { _id } = request.query;
    const { github_username, techs, latitude, longitude } = request.body; 
    let dev = await Dev.findOne(
      {
        _id
      },
      function(err, dev) {
        if (err) {
          console.log(dev);
          return response.status(404).json({ msg: "Usuario nao encontrado!" });
        }
      }
    );

    
    


    return response.json(dev);
  },
   async destroy(request, response){
    const{ _id } = request.query;
    await Dev.findByIdAndDelete({
        _id
    }, function(err, dev){
        console.log(dev);
        if(err){
            return response.status(404).json({msg: "Não foi possivel realizar a operação"})
        }
    })
    return response.json({msg: "Dev removido com sucesso"});

   }
};
