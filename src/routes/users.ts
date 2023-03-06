import expres, { Request, Response } from 'express';
import { User } from '../models/User';
import { sequelize } from '../db/db';
import { v4 as uuidv4} from 'uuid';
import { IUserAccount } from '../types/interface';

export const router = expres.Router();


router.post('/user', async (req, res) => {  
  const { email, name, password, number } = req.body;

  try {
    const user = await User.create({
      email: email,
      name: name,
      number: number,
      password: password,
      id: uuidv4()
    });
    res.status(201).json(user); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }

})

// router.get('/users', async (req, res) => {
//   const users = await User.findAll();

//   res.json(users);
// })

router.get("/teste/user", async(req, res) => {
  res.json('caio')
})
