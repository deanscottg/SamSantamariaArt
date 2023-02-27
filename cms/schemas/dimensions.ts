export default {
  name: 'dimensions',
  type: 'object',
  title: 'Dimensions',
  fields: [
    {
      name: 'height',
      type: 'number',
      title: 'Height',
      validation: (Rule) =>
        Rule.required()
          .warning('Height cannot be empty')
          .min(1)
          .warning('Height cannot be less than 1 inch'),
    },
    {
      name: 'width',
      type: 'number',
      title: 'Width',
      validation: (Rule) =>
        Rule.required()
          .warning('Width cannot be empty')
          .min(1)
          .warning('Width cannot be less than 1 inch'),
    },
  ],
}
