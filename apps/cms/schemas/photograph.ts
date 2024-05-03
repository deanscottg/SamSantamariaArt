// Photograph schema
// Fields Include
// - name
// - image
// - dimensions
// -- height
// -- width
import { required } from '../utils'
import { defineType } from 'sanity'
import { dimensions } from './dimensions'
export const photograph = defineType({
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
      name: 'images',
      type: 'array',
      title: 'Photograph Image(s)',
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
