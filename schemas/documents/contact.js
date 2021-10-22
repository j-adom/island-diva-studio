import {format} from 'date-fns'

export default {
  name: 'contact',
  type: 'document',
  title: 'Contact Page',
  fields: [
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'building',
      type: 'string',
      title: 'Building',
      description: '1st line of address (e.g. company name or unit #)'

    },
    {
      name: 'street',
      type: 'string',
      title: 'Street',
      description: '2nd line of address (e.g. street)'
    },
    {
      name: 'city',
      type: 'string',
      title: 'City/State',
      description: '3rd line of address (city, state, zip)'
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
      description: '+1 (555) 555-5555'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email Address',
      description: 'contact email address'
    },
    {
      title: 'Accordions',
      name: 'accordions',
      type: 'array',
      of: [{type: 'accordion'}]
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
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
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  singleInstance: true
}
