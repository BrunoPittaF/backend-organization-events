import express, { NextFunction, Request, Response } from 'express';
import { IUserAccount } from './types/interface';
import { router as usersRouter } from './routes/users';
import { sequelize } from './db/db';

const app = express()
app.use(express.json());
app.use('/api', usersRouter);


const port = process.env.PORT || 8080;

// // middleware 
// const verifiyUserExist = (req: Request, res: Response, next: NextFunction) => {
//   const { id } = req.headers;

//   const user = fakeBD.find((user) => user.id === id);

//   if(!user) {
//     return res.status(400).json({error: 'Usuário não encontrado'});
//   }

//   req.user = user;

//   return next();
// }

// const excludePassword = (req: Request, res: Response , next: NextFunction) => {
//     const { password, ...user } = req.user
//     const userWithoutPassword = {...user};

//     req.user = userWithoutPassword;

//     return next();
// }


// app.get('/', async(req, res) =>  {

// });

// app.post('/create/user', (req, res) => {
//   const { email, name, password, number } = req.body;


//   const userAlreadyExists = fakeBD.some((account) => account.email === email);

//   if(userAlreadyExists) {
//     return res.status(400).json({error: 'Email já cadastrado'});
//   }

//   fakeBD.push({
//     email,
//     name,
//     password,
//     number,
//     id: uuidv4(),
//     events: []
//   });


  

//   return res.status(201).send();
// })

// app.get('/list/users', (req, res) => {

//    const localBD = fakeBD.map(({password, ...user}) => user);
//   return res.status(200).json(localBD);
// })


// app.use(verifiyUserExist);
// app.use(excludePassword);
// app.get('/list/user', (req, res) => {
//   const { user } = req;

//   return res.status(200).json(user);
// })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
