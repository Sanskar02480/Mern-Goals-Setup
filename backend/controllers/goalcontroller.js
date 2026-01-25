const asynchandler =require('express-async-handler')




const getgoals =asynchandler(async(req, res) => {
  res.json({ message: 'Get Goals' })
})

const setgoals = asynchandler(async (req, res) => {
  if (!req.body || !req.body.text) {
    return res.status(400).json({ error: 'Please add a text field' })
  }

  res.json({ message: 'Create Goals' })
})


const Updategoals = asynchandler(async (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` })
})

const Deletegoals = asynchandler(async (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` })
})

module.exports = {
  getgoals,
  setgoals,
  Updategoals,
  Deletegoals,
}
