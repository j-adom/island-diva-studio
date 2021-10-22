// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import contact from './documents/contact'
import post from './documents/post'
import blogHome from './documents/blogHome'
import siteSettings from './documents/siteSettings'
import socialLinks from './documents/socialLinks'
import home from './documents/home'
import articleLink from './documents/articleLink'
import imageGallery from './documents/imageGallery'
import publication from './documents/publication'




// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import accordion from './objects/accordion'
import authorReference from './objects/authorReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    home,
    post,
    category,
    author,
    contact,
    accordion,
    socialLinks,
    blogHome,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    articleLink,
    publication,
    imageGallery

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
