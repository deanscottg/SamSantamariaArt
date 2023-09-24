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
      name: 'image',
      type: 'image',
      title: 'Photograph Image',
      validation: required,
    },
    dimensions,
  ],
})
