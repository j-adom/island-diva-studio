import {format} from 'date-fns'

export default {
  name: 'publication',
  type: 'document',
  title: 'Web Publication',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the web publication'
      
    },
    {
      name: 'authorURL',
      type: 'string',
      title: 'Author URL',
      description: 'Full link to list of articles by Danielle on publication site'
      
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage'
    },
  }
}
