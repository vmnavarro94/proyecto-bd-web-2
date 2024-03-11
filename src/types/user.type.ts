import type { Model } from 'mongoose'
import type { Request } from 'express'
import { ObjectId } from 'mongoose'

export type User = ToClientUser & {
  password: string
  createdAt?: Date
  lastModified?: Date
}

//TODO: Hay 2 tipos de user request
//La de la autenticacion local (email y contraseña)
//Falta definir el tipo para la autenticacion con jwt
export type UserRequestType = Request & {
  user: User
}

export type JwtRequestType = Request & {
  user: {
    sub: ObjectId
  }
}

export type ToClientUser = {
  id?: string
  name: string
  email: string
  address: string
  phoneNumber: string
}

export type UserMethods = {
  toClient: () => ToClientUser
}

export type UserModel = Model<User, {}, UserMethods>
