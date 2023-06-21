const validate = require("../Middlewares/validate");
const { taskCollection, userCollection } = require("../Models");
const { taskValidation } = require("../Validations");

const addTask = async (req, res) => {
  try {
    const { error, value } = validate(taskValidation.addTask)(req.body);

    if (error) return res.staus(401).send({ message: error });

    const newTask = await new taskCollection({
      ...req.body,
      ...value, //if data changed after validation then data will be ovverride ex: trim
      isCompleted: false,
      isPending: true,
      date: new Date(),
    })
      .save()
      .then(async (response) => {
        const data = await userCollection.findOne({ _id: req.user_id });
        if(data){
                data.tasks.push(response._id)
                await data.save()
            return res.send('data pushed');
        }else {
            return res.send({message : 'invalid token'})
        }

      })
      .catch((err) => {
        return res.status(401).send({ message: err });
      });
  } catch (err) {
    return res.status(401).send({ message: err });
  }

  //   postedTask = await taskCollection.res.status(401).send("task added");
};

module.exports = {
  addTask,
};
