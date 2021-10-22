export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    },
    {
      type: "array",
      "name": "links",
      "title": "Social Links",
      "description": "A list of social links displayed in the header.",
      "validation": null,
      "of": [
          {
              "type": "object",
              "fields": [
                  {
                      "type": "string",
                      "name": "type",
                      "title": "Type",
                      "hidden": true,
                      "validation": null
                  },
                  {
                      "type": "string",
                      "name": "title",
                      "title": "Title",
                      "validation": null
                  },
                  {
                      "type": "string",
                      "name": "icon",
                      "title": "Icon",
                      "description": "Font Awesome icon class name.",
                      "validation": Rule => Rule.required()
                  },
                  {
                      "type": "string",
                      "name": "url",
                      "title": "URL",
                      "validation": null
                  }
              ],
              "preview": {
                  "select": {
                      "title": "title"
                  }
              }
          }
      ]
    },
    {
      type: "object",
      name: "header",
      title: "Header Configuration",
      validation: null,
      fields: [
          {
              type: "image",
              name: "logo_img",
              title: "Logo",
              description: "The logo image displayed on the left side.",
              validation: null
          },
          {
              type: "image",
              name: "bg_img",
              title: "Background Image",
              description: "The background image displayed on the left side.",
              validation: null
          }
          
        ]
      
    },
  {
    type: "object",
    name: "footer",
    title: "Footer Configuration",
    validation: null,
    fields: [
        {
            type: "string",
            name: "content",
            title: "Footer Content",
            description: "The copyright text displayed in the footer.",
            validation: null
        },
       
    ]
  }
  ]
}
