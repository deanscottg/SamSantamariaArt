export default {
  name: 'painting',
  type: 'document',
  title: 'Painting',
  fields: [
    {
      name: 'name',
      image: 'image',
      type: 'string',
      dimensions: 'object',

      fields: [
        {name: 'height', type: 'integer', title: 'Height'},
        {name: 'width', type: 'integer', title: 'Width'},
      ],
      title: 'Painting',
    },
  ],
}
