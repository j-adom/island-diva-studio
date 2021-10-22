export default {
  name: 'blogHome',
  type: 'document',
  title: 'Blog Home',
  fields: [
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'section1',
      type: 'object',
      title: 'Section 1',
      fields: [
        {
          name: 'introHeader',
          type: 'excerptPortableText',
          title: 'Intro Header',
          description:
              'Introductory sentence headlining the blog landing page'
        },
        {
          name: 'introText',
          type: 'excerptPortableText',
          title: 'Intro Text',
          description:
            'Introductory text to the blog... about 100 words'
        },
      ]
    },

    {
      type: "object",
      name: "section2",
      title: "Section 2",
      validation: null,
      fields: [
        {
          name: 'sectionTitle',
          type: 'string',
          title: 'Section Title',
          description:
            'Title for the 2nd section'
        },
        {
          name: 'lead1',
          type: 'string',
          title: 'Lead line 1',
          description:
            'First half of section blurb'
        },
        {
          name: 'lead2',
          type: 'string',
          title: 'Lead line 2',
          description:
            'Second half of section blurb'
        },
        {
          name: 'section2body',
          type: 'bodyPortableText',
          title: 'Section 2 Body',
          description:
            'Text like blog mission statement... about 100 words'
        },
        {
          name: 'section2images',
          title: 'Section 2 Images',
          type: 'object',
          fields: [
            {
              type: "mainImage",
              name: "smallImage",
              title: "Samll Image",
              description: "The image displayed on the left side.",
              validation: null
            },
            {
              type: "mainImage",
              name: "largeImage",
              title: "Large Image",
              description: "The image displayed on the right side.",
              validation: null
            }
          ]
        },
      ]
    },
    {
      type: "object",
      name: "section3",
      title: "Section 3",
      validation: null,
      fields: [
        {
          name: 'action1lead1',
          type: 'string',
          title: 'Action 1 line 1',
          description:
            'First half of action header'
        },
        {
          name: 'action1lead2',
          type: 'string',
          title: 'Action 1 line 2',
          description:
            'Second half of action header'
        },
        {
          name: 'action1',
          type: 'excerptPortableText',
          title: 'Action 1 Body',
          description:
            'Blog action statement'
        },
        {
          name: 'action2lead1',
          type: 'string',
          title: 'Action 2 line 1',
          description:
            'First half of action header'
        },
        {
          name: 'action2lead2',
          type: 'string',
          title: 'Action 2 line 2',
          description:
            'Second half of action header'
        },
        {
          name: 'action2',
          type: 'excerptPortableText',
          title: 'Action 2 Body',
          description:
            'Blog action statement'
        },
        {
          name: 'action3lead1',
          type: 'string',
          title: 'Action 3 line 1',
          description:
            'First half of action header'
        },
        {
          name: 'action3lead2',
          type: 'string',
          title: 'Action 3 line 2',
          description:
            'Second half of action header'
        },
        {
          name: 'action3',
          type: 'excerptPortableText',
          title: 'Action 3 Body',
          description:
            'Blog action statement'
        },
      ]
    }
  ],
  "singleInstance": true
}
  