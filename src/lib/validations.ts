import { z } from 'zod'

export const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().max(30).optional().or(z.literal('')),
  company: z.string().max(200).optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  honeypot: z.string().max(0).optional(),
})

export const demoSchema = contactSchema.extend({
  interest: z.enum([
    'smart-platform',
    'safenest-car',
    'defensenest-k9',
    'enterprise',
    'partnership',
    'other',
  ]),
})

export const articleSchema = z.object({
  title: z.string().min(1, 'Title is required').max(500),
  category: z.enum(['Case Study', 'Platform Update', 'AI Safety', 'News']),
  excerpt: z.string().min(1, 'Excerpt is required').max(150, 'Excerpt must be 150 characters or fewer'),
  content: z.string().min(1, 'Content is required'),
  authorName: z.string().min(1, 'Author name is required').max(200),
  coverImage: z.string().url('Must be a valid URL').max(2048).optional().or(z.literal('')),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type DemoFormData = z.infer<typeof demoSchema>
export type ArticleFormData = z.infer<typeof articleSchema>
