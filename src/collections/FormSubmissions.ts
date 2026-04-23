import { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  labels: {
    singular: 'Form Submission',
    plural: 'Form Submissions',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'phone', 'status', 'createdAt'],
    description: 'Contact form submissions from the website',
    group: 'Forms',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'formType',
      type: 'select',
      label: 'Form Type',
      options: [
        { label: 'Contact Form', value: 'contact' },
        { label: 'Quote Request', value: 'quote' },
        { label: 'Support Request', value: 'support' },
        { label: 'General Inquiry', value: 'general' },
      ],
      defaultValue: 'contact',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company Name',
    },
    {
      name: 'goals',
      type: 'textarea',
      label: 'Goals/Message',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
    },
    {
      name: 'serviceInterest',
      type: 'select',
      label: 'Service Interest',
      options: [
        { label: 'Liposuction', value: 'Liposuction' },
        { label: 'BOTOX', value: 'BOTOX' },
        { label: 'Plastic Surgery', value: 'Plastic Surgery' },
        { label: 'Micro-channeling', value: 'Micro-channeling' },
        { label: 'Med Spa', value: 'Med Spa' },
        { label: 'Skin Care', value: 'Skin Care' },
        { label: 'Dermal Fillers', value: 'Dermal Fillers' },
        { label: 'Face Lift', value: 'Face Lift' },
        { label: 'Weight Loss Injections', value: 'Weight Loss Injections' },
        { label: 'I Have a Question', value: 'I Have a Question' },
      ],
    },
    {
      name: 'comments',
      type: 'textarea',
      label: 'Comments/Questions',
    },
    {
      name: 'optInSMS',
      type: 'checkbox',
      label: 'Opted in for SMS',
      defaultValue: false,
    },
    {
      name: 'permissionToFollowUp',
      type: 'checkbox',
      label: 'Permission to Follow Up',
      defaultValue: false,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Completed', value: 'completed' },
        { label: 'Archived', value: 'archived' },
      ],
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'priority',
      type: 'select',
      label: 'Priority',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
        { label: 'Urgent', value: 'urgent' },
      ],
      defaultValue: 'medium',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'assignedTo',
      type: 'text',
      label: 'Assigned To',
      admin: {
        position: 'sidebar',
        description: 'Staff member responsible for this submission',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal Notes',
      admin: {
        description: 'Add any notes about this submission',
      },
    },
    {
      name: 'followUpDate',
      type: 'date',
      label: 'Follow-up Date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      label: 'IP Address',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'userAgent',
      type: 'text',
      label: 'User Agent',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'referrer',
      type: 'text',
      label: 'Referrer URL',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'utmSource',
      type: 'text',
      label: 'UTM Source',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'utmMedium',
      type: 'text',
      label: 'UTM Medium',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'utmCampaign',
      type: 'text',
      label: 'UTM Campaign',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      label: 'Submission Date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        readOnly: true,
        position: 'sidebar',
      },
      defaultValue: () => new Date().toISOString(),
    },
  ],
  timestamps: true,
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create') {
          data.submittedAt = new Date().toISOString()
        }
        return data
      },
    ],
  },
}
