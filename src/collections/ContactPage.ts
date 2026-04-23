import { CollectionConfig } from 'payload'

export const ContactPage: CollectionConfig = {
  slug: 'contact-page',
  labels: {
    singular: 'Contact Page',
    plural: 'Contact Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Contact Page',
    },
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      admin: {
        description: 'Main hero section at the top of the contact page',
      },
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#f5f5f5',
          admin: {
            description: 'CSS color value (hex, rgb, etc.)',
          },
        },
        {
          name: 'lines',
          type: 'array',
          label: 'Hero Title Lines',
          admin: {
            description: 'Drag to reorder title lines',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#000000',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Font Size',
              defaultValue: 'clamp(2rem, 5vw, 4rem)',
            },
            {
              name: 'fontWeight',
              type: 'select',
              label: 'Font Weight',
              options: [
                { label: 'Light', value: '300' },
                { label: 'Normal', value: '400' },
                { label: 'Medium', value: '500' },
                { label: 'Semi Bold', value: '600' },
                { label: 'Bold', value: '700' },
              ],
              defaultValue: '400',
            },
            {
              name: 'showLine',
              type: 'checkbox',
              label: 'Show Decorative Line',
              defaultValue: false,
            },
            {
              name: 'lineColor',
              type: 'text',
              label: 'Line Color',
              defaultValue: '#000000',
              admin: {
                condition: (data, siblingData) => siblingData?.showLine === true,
              },
            },
          ],
          defaultValue: [
            { text: 'Start Your Journey,', textColor: '#000000', fontWeight: '400' },
            {
              text: 'to a Pain-Free Life',
              textColor: '#000000',
              fontWeight: '400',
              showLine: true,
              lineColor: '#000000',
            },
            { text: 'together with us.', textColor: '#000000', fontWeight: '400' },
          ],
        },
        {
          name: 'description',
          type: 'group',
          label: 'Description',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Description Text',
              defaultValue:
                'Relief begins with the right care. Our team is here to understand your condition, guide you through your options, and create a personalized treatment plan to help you move better and live without pain.',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#4a5568',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Font Size',
              defaultValue: '1.125rem',
            },
          ],
        },
        {
          name: 'padding',
          type: 'group',
          label: 'Section Padding',
          fields: [
            {
              name: 'top',
              type: 'text',
              label: 'Top Padding',
              defaultValue: '5vw',
            },
            {
              name: 'bottom',
              type: 'text',
              label: 'Bottom Padding',
              defaultValue: '5vw',
            },
          ],
        },
      ],
    },
    {
      name: 'contactSection',
      type: 'group',
      label: 'Contact Form Section',
      admin: {
        description: 'Main contact form section',
      },
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: '7vw',
        },
        {
          name: 'heading',
          type: 'group',
          label: 'Section Heading',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Heading Text',
              defaultValue: 'Get in Touch',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Heading Color',
              defaultValue: '#000000',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Font Size',
              defaultValue: 'clamp(1.5rem, 3vw, 2.5rem)',
            },
          ],
        },
        {
          name: 'subheading',
          type: 'group',
          label: 'Section Subheading',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Subheading Text',
              defaultValue:
                "Reach out today and start growing your brand successfully with Marke's expert guidance.",
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#4a5568',
            },
          ],
        },
        {
          name: 'formContainer',
          type: 'group',
          label: 'Form Container',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Form Background Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Border Radius',
              defaultValue: '12px',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Form Padding',
              defaultValue: '2rem',
            },
            {
              name: 'boxShadow',
              type: 'text',
              label: 'Box Shadow',
              defaultValue: '0 4px 6px rgba(0, 0, 0, 0.1)',
            },
          ],
        },
        {
          name: 'formFields',
          type: 'array',
          label: 'Form Fields',
          admin: {
            description: 'Drag to reorder form fields',
          },
          fields: [
            {
              name: 'fieldType',
              type: 'select',
              label: 'Field Type',
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Tel', value: 'tel' },
                { label: 'Textarea', value: 'textarea' },
                { label: 'Select', value: 'select' },
                { label: 'Checkbox', value: 'checkbox' },
                { label: 'Hidden', value: 'hidden' },
              ],
              required: true,
            },
            {
              name: 'name',
              type: 'text',
              label: 'Field Name',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              label: 'Field Label',
            },
            {
              name: 'placeholder',
              type: 'text',
              label: 'Placeholder',
            },
            {
              name: 'required',
              type: 'checkbox',
              label: 'Required',
              defaultValue: false,
            },
            {
              name: 'width',
              type: 'select',
              label: 'Field Width',
              options: [
                { label: 'Full Width', value: '100%' },
                { label: 'Half Width', value: '50%' },
              ],
              defaultValue: '100%',
            },
            {
              name: 'options',
              type: 'array',
              label: 'Options (for select fields)',
              admin: {
                condition: (data, siblingData) => siblingData?.fieldType === 'select',
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'defaultValue',
              type: 'text',
              label: 'Default Value',
            },
            {
              name: 'rows',
              type: 'number',
              label: 'Rows (for textarea)',
              admin: {
                condition: (data, siblingData) => siblingData?.fieldType === 'textarea',
              },
            },
            {
              name: 'cols',
              type: 'number',
              label: 'Columns (for textarea)',
              admin: {
                condition: (data, siblingData) => siblingData?.fieldType === 'textarea',
              },
            },
            {
              name: 'styling',
              type: 'group',
              label: 'Field Styling',
              fields: [
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  defaultValue: '#f9f9f9',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#000000',
                },
                {
                  name: 'borderColor',
                  type: 'text',
                  label: 'Border Color',
                  defaultValue: '#e2e8f0',
                },
                {
                  name: 'borderRadius',
                  type: 'text',
                  label: 'Border Radius',
                  defaultValue: '8px',
                },
                {
                  name: 'padding',
                  type: 'text',
                  label: 'Padding',
                  defaultValue: '12px 16px',
                },
              ],
            },
          ],
          defaultValue: [
            {
              fieldType: 'text',
              name: 'name',
              label: 'Name',
              placeholder: 'Name',
              required: false,
              width: '100%',
              styling: {
                backgroundColor: '#f9f9f9',
                textColor: '#000000',
                borderColor: '#e2e8f0',
                borderRadius: '8px',
                padding: '12px 16px',
              },
            },
            {
              fieldType: 'email',
              name: 'email',
              label: 'Email',
              placeholder: 'Email',
              required: true,
              width: '100%',
              styling: {
                backgroundColor: '#f9f9f9',
                textColor: '#000000',
                borderColor: '#e2e8f0',
                borderRadius: '8px',
                padding: '12px 16px',
              },
            },
            {
              fieldType: 'text',
              name: 'company',
              label: 'Company Name',
              placeholder: 'Company Name',
              required: true,
              width: '50%',
              styling: {
                backgroundColor: '#f9f9f9',
                textColor: '#000000',
                borderColor: '#e2e8f0',
                borderRadius: '8px',
                padding: '12px 16px',
              },
            },
            {
              fieldType: 'tel',
              name: 'phone',
              label: 'Phone Number',
              placeholder: 'Phone number',
              required: true,
              width: '50%',
              styling: {
                backgroundColor: '#f9f9f9',
                textColor: '#000000',
                borderColor: '#e2e8f0',
                borderRadius: '8px',
                padding: '12px 16px',
              },
            },
            {
              fieldType: 'textarea',
              name: 'goals',
              label: 'Your Goals',
              placeholder: 'Your Goals',
              required: true,
              width: '100%',
              rows: 5,
              styling: {
                backgroundColor: '#f9f9f9',
                textColor: '#000000',
                borderColor: '#e2e8f0',
                borderRadius: '8px',
                padding: '12px 16px',
              },
            },
          ],
        },
        {
          name: 'submitButton',
          type: 'group',
          label: 'Submit Button',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Submit',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#000000',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Hover Background Color',
              defaultValue: '#333333',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Border Radius',
              defaultValue: '8px',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Padding',
              defaultValue: '14px 32px',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Font Size',
              defaultValue: '1rem',
            },
            {
              name: 'fontWeight',
              type: 'select',
              label: 'Font Weight',
              options: [
                { label: 'Normal', value: '400' },
                { label: 'Medium', value: '500' },
                { label: 'Semi Bold', value: '600' },
                { label: 'Bold', value: '700' },
              ],
              defaultValue: '600',
            },
          ],
        },
        {
          name: 'successMessage',
          type: 'group',
          label: 'Success Message',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Success Message',
              defaultValue: 'Thank you! Your submission has been received!',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#48bb78',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#f0fff4',
            },
          ],
        },
        {
          name: 'errorMessage',
          type: 'group',
          label: 'Error Message',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Error Message',
              defaultValue: 'Oops! Something went wrong while submitting the form.',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#e53e3e',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#fff5f5',
            },
          ],
        },
        {
          name: 'redirectUrl',
          type: 'text',
          label: 'Success Redirect URL',
          defaultValue: '/contact/thank-you/',
        },
        {
          name: 'subject',
          type: 'text',
          label: 'Form Subject',
          defaultValue: 'Contact Form Submission',
        },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Additional Sections',
      admin: {
        description: 'Add and reorder additional sections on the contact page',
      },
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          label: 'Section Type',
          options: [
            { label: 'Info Section', value: 'info' },
            { label: 'Map Section', value: 'map' },
            { label: 'Locations Banner', value: 'locations' },
            { label: 'Custom Content', value: 'custom' },
          ],
          required: true,
        },
        {
          name: 'sectionName',
          type: 'text',
          label: 'Section Name',
          required: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'padding',
          type: 'group',
          label: 'Section Padding',
          fields: [
            {
              name: 'top',
              type: 'text',
              label: 'Top Padding',
              defaultValue: '4vw',
            },
            {
              name: 'bottom',
              type: 'text',
              label: 'Bottom Padding',
              defaultValue: '4vw',
            },
          ],
        },
        {
          name: 'infoContent',
          type: 'group',
          label: 'Info Content',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'info',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'Contact Us',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
              defaultValue: '#000000',
            },
            {
              name: 'phoneNumber',
              type: 'text',
              label: 'Phone Number',
              defaultValue: '(407) 333-4300',
            },
            {
              name: 'phoneColor',
              type: 'text',
              label: 'Phone Color',
              defaultValue: '#000000',
            },
            {
              name: 'button',
              type: 'group',
              label: 'Button',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  defaultValue: 'Specials',
                },
                {
                  name: 'url',
                  type: 'text',
                  defaultValue: '/specials-and-rewards/specials/',
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  defaultValue: '#000000',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  defaultValue: '#ffffff',
                },
              ],
            },
          ],
        },
        {
          name: 'locationsContent',
          type: 'group',
          label: 'Locations Content',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'locations',
          },
          fields: [
            {
              name: 'heading',
              type: 'group',
              fields: [
                {
                  name: 'smallText',
                  type: 'text',
                  defaultValue: 'Our Locations',
                },
                {
                  name: 'mainText',
                  type: 'text',
                  defaultValue: 'Find the Goldfingers Aesthetics Location Closest to You',
                },
                {
                  name: 'color',
                  type: 'text',
                  defaultValue: '#000000',
                },
              ],
            },
            {
              name: 'locations',
              type: 'array',
              label: 'Locations',
              admin: {
                description: 'Drag to reorder locations',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'address',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'phone',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'slug',
                  type: 'text',
                  label: 'URL Slug',
                  required: true,
                },
                {
                  name: 'mapPosition',
                  type: 'group',
                  label: 'Map Pin Position',
                  fields: [
                    {
                      name: 'left',
                      type: 'text',
                      label: 'Left Position (%)',
                    },
                    {
                      name: 'top',
                      type: 'text',
                      label: 'Top Position (%)',
                    },
                  ],
                },
              ],
              defaultValue: [
                {
                  name: 'Clearwater',
                  address: '2745 Fl-580 Suite 101, Clearwater, FL 33761',
                  phone: '(727) 378-9338',
                  slug: '/clearwater/',
                  mapPosition: { left: '53%', top: '45%' },
                },
                {
                  name: 'Clermont',
                  address: '861 Oakley Seaver Dr., Suite B, Clermont, FL 34711',
                  phone: '(407) 461-8193',
                  slug: '/clermont/',
                  mapPosition: { left: '83%', top: '32%' },
                },
                {
                  name: 'Daytona Beach',
                  address: '244 Seabreeze Blvd, Daytona Beach, FL 32118',
                  phone: '(407) 756-9062',
                  slug: '/daytona-beach/',
                  mapPosition: { left: '99%', top: '17%' },
                },
                {
                  name: 'Lady Lake / The Villages',
                  address: '8550 N. East 138th Lane, Bldg 600, Lady Lake, FL 32159',
                  phone: '(352) 707-0707',
                  slug: '/the-villages/',
                  mapPosition: { left: '75%', top: '24%' },
                },
                {
                  name: 'Lake Mary',
                  address: '115 International Pkwy Lake Mary, FL 32746',
                  phone: '(407) 405-3388',
                  slug: '/lake-mary/',
                  mapPosition: { left: '93%', top: '28%' },
                },
                {
                  name: 'Lake Nona',
                  address: '6982 Lake Nona Blvd, Suite 110, Orlando FL 32827',
                  phone: '(407) 590-6274',
                  slug: '/lake-nona/',
                  mapPosition: {},
                },
                {
                  name: 'Longwood',
                  address: '165 Wekiva Springs Road, Suite C-135, Longwood, FL 32779',
                  phone: '(407) 492-3169',
                  slug: '/longwood/',
                  mapPosition: { left: '90%', top: '31%' },
                },
                {
                  name: 'Mount Dora',
                  address: '18770 US-441, Mount Dora, FL 32757',
                  phone: '(352) 707-0707',
                  slug: '/mount-dora/',
                  mapPosition: { left: '84%', top: '27%' },
                },
                {
                  name: 'New Smyrna Beach',
                  address: 'State Rd. 44 Unit 1976, New Smyrna Beach, FL 32168',
                  phone: '(407) 547-5891',
                  slug: '/new-smyrna-beach/',
                  mapPosition: { left: '105%', top: '29%' },
                },
                {
                  name: 'Ocala',
                  address: '303 SE 17 Street, Unit 309, Ocala FL 34471',
                  phone: '(352) 707-0707',
                  slug: '/ocala/',
                  mapPosition: { left: '72%', top: '19%' },
                },
                {
                  name: 'Orlando / Dr. Phillips',
                  address: '7653 Turkey Lake Rd., Orlando, FL 32819',
                  phone: '(407) 821-4983',
                  slug: '/orlando/',
                  mapPosition: { left: '89%', top: '34%' },
                },
                {
                  name: 'Port Orange',
                  address: '851 Dunlawton Ave Suite 103, Port Orange, FL 32127',
                  phone: '(386) 801-0024',
                  slug: '/port-orange/',
                  mapPosition: { left: '103%', top: '22%' },
                },
                {
                  name: 'Sarasota',
                  address: '1407 First St Sarasota, FL 34236',
                  phone: '941-599-2392',
                  slug: '/sarasota/',
                  mapPosition: { left: '62.3363%', top: '72.5422%' },
                },
                {
                  name: 'Downtown Tampa',
                  address: '105 E Jackson St, Tampa, FL 33602',
                  phone: '(813) 435-3474',
                  slug: '/downtown-tampa/',
                  mapPosition: { left: '61%', top: '43%' },
                },
                {
                  name: 'St Petersburg',
                  address: '1701 Central Ave N Ste 1739, St. Petersburg, FL 33713',
                  phone: '(727) 310-5120',
                  slug: '/st-petersburg/',
                  mapPosition: { left: '52.6608%', top: '48.7713%' },
                },
                {
                  name: 'Tampa (Northdale)',
                  address: '3861 Northdale Blvd., Tampa, FL 33624',
                  phone: '(813) 435-1585',
                  slug: '/tampa/',
                  mapPosition: { left: '61%', top: '43%' },
                },
                {
                  name: 'Downtown Orlando',
                  address: '101 Lake Avenue. Suite 1. Orlando 32801',
                  phone: '(407) 505-4901',
                  slug: '/downtown-orlando/',
                  mapPosition: {},
                },
                {
                  name: 'Wesley Chapel',
                  address: '27440 Cashford Cir Ste 102 Wesley Chapel, FL 33544',
                  phone: '(813) 230-3778',
                  slug: '/wesley-chapel/',
                  mapPosition: {},
                },
                {
                  name: 'Winter Garden',
                  address: '1101 S Park Ave #500 Winter Garden, FL 34787',
                  phone: '407-403-1232',
                  slug: '/winter-garden/',
                  mapPosition: {},
                },
                {
                  name: 'Winter Park',
                  address: '400 W Fairbanks Ave, Winter Park, FL 32789',
                  phone: '(407) 462-4405',
                  slug: '/winter-park/',
                  mapPosition: { left: '87%', top: '29%' },
                },
              ],
            },
            {
              name: 'mapImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Map Background Image',
            },
          ],
        },
        {
          name: 'customContent',
          type: 'group',
          label: 'Custom Content',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'custom',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Section Heading',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
              defaultValue: '#000000',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
            },
          ],
        },
      ],
      defaultValue: [
        {
          sectionType: 'info',
          sectionName: 'Contact Info',
          backgroundColor: '#ffffff',
          infoContent: {
            heading: 'Contact Us',
            headingColor: '#000000',
            phoneNumber: '(407) 333-4300',
            phoneColor: '#000000',
            button: {
              text: 'Specials',
              url: '/specials-and-rewards/specials/',
              backgroundColor: '#000000',
              textColor: '#ffffff',
            },
          },
        },
      ],
    },
    {
      name: 'backgroundImages',
      type: 'group',
      label: 'Background Images',
      fields: [
        {
          name: 'desktopImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Desktop Background Image',
        },
        {
          name: 'mobileImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Mobile Background Image',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          defaultValue: 'Contact Us - Get in Touch',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            "Reach out to us today. We're here to help you start your journey to a better life.",
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
        },
      ],
    },
  ],
  timestamps: true,
}
