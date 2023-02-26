// Panting schema
// Fields Include
// - name
// - image
// - dimensions
// -- height
// -- width

import dimensions from './dimensions'

export default {
  name: 'painting',
  type: 'document',
  title: 'Painting',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Painting Image',
    },
    dimensions,
  ],
}
