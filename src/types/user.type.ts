import type { Model } from 'mongoose'

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

export type UserModel = Model<User>
