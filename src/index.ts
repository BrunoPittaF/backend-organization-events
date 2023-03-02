import express, { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4} from 'uuid';
import { IUserAccount } from './types/interface';
import { telegramService } from './api/telegram';

const app = express()
app.use(express.json());


const port = process.env.PORT || 8080;
const fakeBD: IUserAccount[] = [];
let lastUpdate: any = [];
let userAccount = '';

Array.length

// middleware 
const verifiyUserExist = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.headers;

  const user = fakeBD.find((user) => user.id === id);

  if(!user) {
    return res.status(400).json({error: 'Usuário não encontrado'});
  }

  req.user = user;

  return next();
}

const excludePassword = (req: Request, res: Response , next: NextFunction) => {
    const { password, ...user } = req.user
    const userWithoutPassword = {...user};

    req.user = userWithoutPassword;

    return next();
}


app.get('/', async(req, res) =>  {
  const teste = await telegramService.getUpdates();
  
  if(teste.result.length === 0) return res.status(400).json({error: 'Sem mensagens'})

  if(lastUpdate != teste.result) {
    lastUpdate = teste.result;
    
    userAccount = teste.result[teste.result.length - 1].message.chat.id;
    const resposta = await telegramService.sendMessage(userAccount);
    
  }

  return res.status(201).json(teste);


});

app.post('/create/user', (req, res) => {
  const { email, name, password, number } = req.body;


  const userAlreadyExists = fakeBD.some((account) => account.email === email);

  if(userAlreadyExists) {
    return res.status(400).json({error: 'Email já cadastrado'});
  }

  fakeBD.push({
    email,
    name,
    password,
    number,
    id: uuidv4(),
    events: []
  });


  

  return res.status(201).send();
})

app.get('/list/users', (req, res) => {

   const localBD = fakeBD.map(({password, ...user}) => user);
  return res.status(200).json(localBD);
})


app.use(verifiyUserExist);
app.use(excludePassword);
app.get('/list/user', (req, res) => {
  const { user } = req;

  return res.status(200).json(user);
})


app



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
