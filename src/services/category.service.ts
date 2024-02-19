import Categories from '../models/category.model'
import { Category, CategoryModel } from '../types/category.type'
import boom from '@hapi/boom'

class CategoryService {
  async create(category: Category) {
    const newCategory = await Categories.create(category).catch((error) => {
      console.log('Could not save category', error)
    })

    return newCategory
  }

  async findAll() {
    const categories = await Categories.find().catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!categories) {
      throw boom.notFound('There are not categories')
    }

    return categories
  }
}

export default CategoryService
