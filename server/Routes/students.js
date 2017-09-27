const router = require('express').Router();
const model = require('../../db/models');
const Student = model.Student;
const Campus = model.Campus;
router.get('/hi', function(req,res,next){
    res.send({hi:'bitch'})
})

router.get('/', function(req,res,next){
    Student.findAll()
    .then(students => res.json(students))
    .catch(next);
})

router.get('/student/:id', function(req,res,next){
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(student => res.json(student))
    .catch(next)
})

module.exports = router;