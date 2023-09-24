import { defineType } from 'sanity'
import { required } from '../utils'

export const series = defineType({
  name: 'series',
  type: 'document',
  title: 'Series',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: required,
    },
    {
      title: 'Paintings',
      name: 'paintings',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'painting',
            },
          ],
        },
      ],
      validation: required,
    },
  ],
})
