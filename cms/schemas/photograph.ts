export default {
  name: 'photogrpah',
  type: 'document',
  title: 'Photograph',
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
