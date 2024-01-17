'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  JobStatus,
  JobMode,
  CreateAndEditJobType,
  createAndEditJobSchema
} from '@/utils/types'
import { Button } from './ui/button'
import { Form } from './ui/form'
import CustomInput from './form-Input'
import CustomSelect from './form-select'

export default function CreateJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: '',
      company: '',
      location: '',
      status: JobStatus.Pending,
      mode: JobMode.FullTime
    }
  })

  function onSubmit(values: CreateAndEditJobType) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-4 rounded-lg"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          {/* position */}
          <CustomInput name="position" control={form.control} />
          {/* company */}
          <CustomInput name="company" control={form.control} />
          {/* location */}
          <CustomInput name="location" control={form.control} />
          {/* job status */}
          <CustomSelect
            name="status"
            control={form.control}
            labelText="job status"
            items={Object.values(JobStatus)}
          />
          {/* job mode */}
          <CustomSelect
            name="mode"
            control={form.control}
            labelText="job mode"
            items={Object.values(JobMode)}
          />
          <Button type="submit" className="self-end capitalize">
            Add job
          </Button>
        </div>
      </form>
    </Form>
  )
}
