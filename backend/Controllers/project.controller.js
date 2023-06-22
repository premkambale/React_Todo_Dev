const validate = require("../Middlewares/validate");
const { projectCollection, userCollection } = require("../Models");
const { projectValidation } = require("../Validations");
const { user } = require("../services");

const addProject = async (req, res) => {
  try {
    const { error, value } = validate(projectValidation.addproject)(req.body);

    if (error) return res.status(401).send({ message: error.details[0].message });

    const newproject = await new projectCollection({
      ...value, //if data changed after validation then data will be ovverride ex: trim
      isCompleted: false,
      isPending: true,
      date: new Date(),
    })
      .save()
      .then(async (response) => {
        const data = await user.findUserById(req);
        if(data){
                data.project.push(response._id)
                await data.save()
            return res.status(201).send({message : 'new Project added successfully'});
        }else {
            return res.send({message : 'invalid token'})
        }
      })
      .catch((err) => {
        return res.status(401).send({ message: err.message });
      });
  } catch (err) {
    res.send(err.message)
  }
};

module.exports = {
  addProject,
};
