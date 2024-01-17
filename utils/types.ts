import * as z from 'zod'
import { Control } from 'react-hook-form'

export type NavLink = {
  href: string
  label: string
  icon: React.ReactNode
}

export type JobType = {
  id: string
  createdAt: Date
  updatedAt: Date
  clerkId: string
  position: string
  company: string
  location: string
  status: string
  mode: string
}

export enum JobStatus {
  Pending = 'pending',
  Interview = 'interview',
  Declined = 'declined'
}

export enum JobMode {
  FullTime = 'full-time',
  PartTime = 'part-time',
  Internship = 'internship'
}

export type CustomSelectProps = {
  name: string
  control: Control<any>
  items: string[]
  labelText?: string
}

export type CustomInputProps = {
  name: string
  control: Control<any>
}

export const createAndEditJobSchema = z.object({
  position: z.string().min(2, {
    message: 'position must be at least two characters'
  }),
  company: z.string().min(2, {
    message: 'company must be at least two characters'
  }),
  location: z.string().min(2, {
    message: 'location must be at lease two characters'
  }),
  status: z.nativeEnum(JobStatus),
  mode: z.nativeEnum(JobMode)
})

export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>
