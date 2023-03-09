const required = (Rule) => Rule.required().warning('This field is required')

export default {
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
      type: 'reference',
      to: [{ type: 'painting' }],
      validation: required,
    },
  ],
}
