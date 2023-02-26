export default {
  name: 'series',
  type: 'document',
  title: 'Series',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Paintings',
      name: 'paintings',
      type: 'array',
      of: [{type: 'painting'}],
    },
  ],
}
