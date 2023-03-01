import {Request as ExpressRequest } from 'express';

export interface IParticipants {
  id: string,
  name: string,
  email: string,
  number: string
}

export interface IEvents {
  id: string,
  name: string,
  participants: []
}


export interface IUserAccount {
  name: string,
  email: string,
  password?: string,
  number: string,
  id: string,
  events: IEvents[]
}



declare global {
  namespace Express {
      interface Request {
          user: IUserAccount
      }
  }
}