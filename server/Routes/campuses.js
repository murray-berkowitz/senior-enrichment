const router = require('express').Router();
const model = require('../../db/models');
const Student = model.Student;
const Campus = model.Campus;
router.get('/hi', function(req,res,next){
    res.send({hi:'bitch'})
})

router.get('/', function(req,res,next){
    Campus.findAll({
        include: [{
            model: Student
        }]
    })
    .then(campuses => res.json(campuses))
    .catch(next);
})

router.get('/campus/:id', function(req,res,next){
    Campus.findOne({
        where: {
            id: req.params.id*1
        },
        include: [{
            model: Student
        }]
    })
    .then(campus => res.json(campus))
    .catch(next)
})

router.delete('/campus/:id', function(req,res,next){
    Campus.destroy({
        where: {
            id: req.params.id*1
        }
    })
    .then(campus => res.json(campus))
    .catch(next)
})

router.post('/', function(req,res,next){
    Campus.create({
        name: req.body.campusName
    })
    .then(campus => res.json(campus))
    .catch(next)
})

module.exports = router;