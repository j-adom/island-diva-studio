export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ede9cb4853f6d01dba94ab2',
                  title: 'Sanity Studio',
                  name: 'island-diva-sapper-studio',
                  apiId: '65c390fc-3119-4159-8786-d62762a67bda'
                },
                {
                  buildHookId: '5ede9cb4f711380255353183',
                  title: 'Blog Website',
                  name: 'island-diva-sapper',
                  apiId: '40ab6bf3-1228-4dde-aa87-3c351d876e40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/j-adom/island-diva-sapper',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://island-diva-sapper.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
