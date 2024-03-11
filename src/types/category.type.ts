import type { Model } from 'mongoose'
import { User } from './user.type'

export type Category = {
  id?: string
  name: string
  description?: string
  user: User
}

export type CategoryModel = Model<Category>
