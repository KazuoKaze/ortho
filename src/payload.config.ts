import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { HomeHeroPageComponent } from './collections/HomeHeroPageComponent'
import { NavbarComponent } from './collections/NavbarComponent'
import { FaqFooterComponent } from './collections/FaqFooterComponent'
import { AlleAwardsFullPageComponent } from './collections/AlleAwardsPageComponent'
import { ServicePageComponent } from './collections/ServicePageComponent'
import { ContactPage } from './collections/ContactPage'
import { FormSubmissions } from './collections/FormSubmissions'
import { FindAClinicPageComponent } from './collections/FindAClinicPageComponent'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    HomeHeroPageComponent,
    NavbarComponent,
    FaqFooterComponent,
    AlleAwardsFullPageComponent,
    ServicePageComponent,

    ContactPage,
    FormSubmissions,

    FindAClinicPageComponent,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  upload: {
    limits: {
      fileSize: 100_000_000, // 100MB
    },
  },
  cors: [
    'http://localhost:3000',
    'https://goldfingersaesthetics-zeta.vercel.app',
    'https://www.goldfingersaesthetics.com',
    'https://goldfingersaesthetics.com',
    'https://lastgoldfingersaesthetics.vercel.app',
    'https://frontend-self-gamma-99.vercel.app',
    'http://127.0.0.1:5500',
    'https://ortho-delta.vercel.app',
    'https://ortho-fl.web.app',
  ],
  plugins: [],
})
