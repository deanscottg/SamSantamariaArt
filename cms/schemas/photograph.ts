// Photograph schema
// Fields Include
// - name
// - image
// - dimensions
// -- height
// -- width

import dimensions from './dimensions'
const required = (Rule) => Rule.required().warning('This field is required to upload a new Photo')
export default {
  name: 'photograph',
  type: 'document',
  title: 'Photograph',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: required,
    },
    {
      name: 'image',
      type: 'image',
      title: 'Photograph Image',
      validation: required,
    },
    dimensions,
  ],
}
