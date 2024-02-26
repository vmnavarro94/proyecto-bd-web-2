import type { Model } from 'mongoose'
import type { Request } from 'express'

export type User = {
  id?: string
  name: string
  email: string
  password: string
  address: string
  phoneNumber: string
  createdAt?: Date
  lastModified?: Date
}

export type UserRequestType = Request & {
  user: User
}

export type UserModel = Model<User>
