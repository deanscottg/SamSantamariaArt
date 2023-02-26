// Photograph schema
// Fields Include
// - name
// - image
// - dimensions
// -- height
// -- width

import dimensions from './dimensions'

export default {
  name: 'photogrpah',
  type: 'document',
  title: 'Photograph',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Photograph Image',
    },
    dimensions,
  ],
}
