import {defineArrayMember, defineField, defineType} from 'sanity'
import {FolderIcon} from '@sanity/icons'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'headerImage',
      type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.max(160).warning('Description should be 160 characters or less'),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({type: 'code'}),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'tag'}],
        }),
      ],
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Project URL',
    }),
    defineField({
      name: 'techStack',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
})
