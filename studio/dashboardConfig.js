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
                  buildHookId: '5d9caa2ed2bcf58cfff8ee06',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qgz3axf8',
                  apiId: '42e8d66f-85cb-4d4f-af0d-9509c32132d3'
                },
                {
                  buildHookId: '5d9caa2e35537979b55b85a8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qg8eqa7i',
                  apiId: '7dc32913-a454-41a2-870a-89aa73ad22b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IhariR/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qg8eqa7i.netlify.com', category: 'apps'}
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
