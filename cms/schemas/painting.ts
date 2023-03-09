// Panting schema
// Fields Include
// - name
// - image
// - dimensions
// -- height
// -- width

import dimensions from './dimensions'
const required = (Rule) => Rule.required().warning('This field is required')
export default {
  name: 'painting',
  type: 'document',
  title: 'Painting',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      // validation: (Rule) => Rule.required().warning('Every painting requires a name'),
      validation: required,
    },
    {
      name: 'image',
      type: 'image',
      title: 'Painting Image',
      validation: required,
    },

    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'array',
      of: [
        {
          type: 'dimensions',
        },
      ],
    },
  ],
}
