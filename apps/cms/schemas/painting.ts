// Panting schema
// Fields Include
// - name
// - image
// - dimensions
// -- height
// -- width

import { defineType } from 'sanity'
import { required } from '../utils'
export const painting = defineType({
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
      name: 'images',
      type: 'array',
      title: 'Painting Image(s)',
      of: [
        {
          type: 'image',
        },
      ],
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
})
