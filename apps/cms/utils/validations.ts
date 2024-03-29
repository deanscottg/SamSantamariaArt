import { Rule } from 'Sanity'
export const required = (Rule: Rule) => Rule.required().warning('This field is required')
