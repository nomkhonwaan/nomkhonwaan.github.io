import mongoose from 'mongoose'

export const publicFields = [
  'title',
  'slug',
  'publishedAt',
  'html',
  'tags',
  'users'
]

export const Model = (mongoose.models.Post
  ? mongoose.model('Post')
  : mongoose.model('Post', new mongoose.Schema({
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: Date,
    publishedAt: Date,
    tags: [ mongoose.Schema.Types.Mixed ],
    users: [ mongoose.Schema.Types.Mixed ],
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      unique: true,
      required: true
    },
    markdown: String,
    html: String
  }, {
    collection: 'posts'
  })
))

export default {

  getIndex: (req, res, next) => {
    try {
      const page = req.query.page || {}
      page.number = parseInt(page.number) || 1
      page.size = parseInt(page.size) || 5

      const conditions = {
        publishedAt: {
          '$exists': true
        }
      }

      
    } catch (err) {

    }
  }

}
