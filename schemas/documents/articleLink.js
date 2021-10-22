import {format} from 'date-fns'

export default {
  name: 'articleLink',
  type: 'document',
  title: 'Article Link',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of Article'
      
    },
    {
      name: 'articleUrl',
      type: 'string',
      title: 'Article URL',
      description: 'Full link to the article'
      
    },
    {
      name: 'publishedDate',
      type: 'datetime',
      title: 'Publication Date',
      description: 'When was the article first published'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      description: 'These have to be created first under Categories, may not be in use',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedDate',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedDate',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedDate: 'publishedDate',
      media: 'mainImage'
    },
  }
}
