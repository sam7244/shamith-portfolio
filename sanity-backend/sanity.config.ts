import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity-backend',

  projectId: '6uwhnivu',
  dataset: 'production',

  plugins: [deskTool(), ],

  schema: {
    types: schemaTypes,
  },
})
