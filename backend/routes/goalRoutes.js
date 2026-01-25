const express = require('express');

const router = express.Router();


const{getgoals ,setgoals ,Updategoals ,Deletegoals}=require('../controllers/goalcontroller')
 


router.get('/' , getgoals)

router.post('/' ,setgoals) 


router.put('/:id' ,Updategoals) 


router.delete('/:id' ,Deletegoals) 




module.exports = router;