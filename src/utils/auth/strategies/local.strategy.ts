import { Strategy } from 'passport-local'
import bcrypt from 'bcrypt'
import boom from '@hapi/boom'

const options = { userNameField: 'email', passwordField: 'password' }

const LocalStrategy = new Strategy(options, async (email, password, next) => {
  try {
    //const user = await service.findByEmail(email)
    //validar contraseña
  } catch (error) {
    next(error, false)
  }
})
