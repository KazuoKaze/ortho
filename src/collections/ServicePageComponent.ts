import { GlobalConfig } from 'payload'
import { formatSlug } from '../utilities/formatSlug'

export const ServicePageComponent: GlobalConfig = {
  slug: 'service-page-component',
  label: 'Service Page Component',
  admin: {
    group: 'Components',
    description: 'Controls all content and styling for the service/treatment detail page layout.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Title',
      admin: {
        description: 'Main title for the service page (used to auto-generate slug)',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'This will be the URL path (e.g., "minimally-invasive-spine-surgery")',
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
      index: true,
    },
    // ─── HERO SECTION ────────────────────────────────────────────────────────────
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      admin: {
        description: 'Full-width hero with background image, heading, and subtext.',
      },
      fields: [
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image',
          admin: {
            description: 'Main hero background image (recommended: 1920x1080px or wider)',
          },
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Fallback Color',
          defaultValue: '#081122',
          admin: {
            description: 'Shown when no background image is set (hex or rgba)',
          },
        },
        {
          name: 'overlayColor',
          type: 'text',
          label: 'Dark Overlay Color',
          defaultValue: 'rgba(0, 0, 0, 0.45)',
          admin: {
            description:
              'Semi-transparent overlay on top of background image (e.g. rgba(0,0,0,0.45))',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading (H1)',
          defaultValue: 'Minimally Invasive Spine Surgery',
          admin: {
            description: 'Primary hero headline',
          },
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'subtext',
          type: 'textarea',
          label: 'Subtext / Description',
          defaultValue:
            'Advanced surgical treatment designed to relieve pain, restore mobility, and help you return to your daily life faster with minimal downtime.',
          admin: {
            description: 'Short paragraph below the main heading',
          },
        },
        {
          name: 'subtextColor',
          type: 'text',
          label: 'Subtext Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'containerBackgroundColor',
          type: 'text',
          label: 'Inner Container Background Color',
          defaultValue: 'transparent',
          admin: {
            description:
              'Background of the text container inside the hero (e.g. rgba(0,0,0,0.3) for a card effect)',
          },
        },
      ],
    },

    // ─── TREATMENT DETAILS SECTION ───────────────────────────────────────────────
    {
      name: 'detailsSection',
      type: 'group',
      label: 'Treatment Details Section',
      admin: {
        description:
          'Short key-value info boxes (Treatment, Approach, Recovery, Benefits). Drag to reorder.',
      },
      fields: [
        {
          name: 'sectionBackgroundColor',
          type: 'text',
          label: 'Section Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'sectionTextColor',
          type: 'text',
          label: 'Section Default Text Color',
          defaultValue: '#081122',
        },
        {
          name: 'details',
          type: 'array',
          label: 'Detail Items',
          minRows: 1,
          maxRows: 12,
          admin: {
            description: 'Drag rows to reorder. Each item has a label and one or more values.',
            initCollapsed: false,
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label (e.g. "Treatment:")',
              required: true,
            },
            {
              name: 'labelColor',
              type: 'text',
              label: 'Label Color',
              defaultValue: '#1a4db3',
              admin: {
                description: 'Color for the label text (e.g. .color-sec-blue)',
              },
            },
            {
              name: 'values',
              type: 'array',
              label: 'Value Items',
              minRows: 1,
              admin: {
                description: 'Add multiple values — they appear side by side.',
              },
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Value Text',
                  required: true,
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Value Text Color',
                  defaultValue: '#081122',
                },
              ],
            },
            {
              name: 'itemBackgroundColor',
              type: 'text',
              label: 'Item Background Color',
              defaultValue: 'transparent',
            },
            {
              name: 'borderColor',
              type: 'text',
              label: 'Item Border Color',
              defaultValue: 'transparent',
            },
          ],
          defaultValue: [
            {
              label: 'Treatment:',
              labelColor: '#1a4db3',
              values: [{ text: 'Invasive Spine Surgery', textColor: '#081122' }],
              itemBackgroundColor: 'transparent',
              borderColor: 'transparent',
            },
            {
              label: 'Approach:',
              labelColor: '#1a4db3',
              values: [
                { text: 'Advanced Imaging .', textColor: '#081122' },
                { text: 'Micro-Surgical', textColor: '#081122' },
              ],
              itemBackgroundColor: 'transparent',
              borderColor: 'transparent',
            },
            {
              label: 'Recovery:',
              labelColor: '#1a4db3',
              values: [{ text: 'Same-Day or Short Stay', textColor: '#081122' }],
              itemBackgroundColor: 'transparent',
              borderColor: 'transparent',
            },
            {
              label: 'Benefits:',
              labelColor: '#1a4db3',
              values: [{ text: 'Less Pain · Faster Healing', textColor: '#081122' }],
              itemBackgroundColor: 'transparent',
              borderColor: 'transparent',
            },
          ],
        },
      ],
    },

    // ─── STATISTICS SECTION ──────────────────────────────────────────────────────
    {
      name: 'statisticsSection',
      type: 'group',
      label: 'Statistics / Stat Cards Section',
      admin: {
        description: 'Animated number stat cards. Drag to reorder.',
      },
      fields: [
        {
          name: 'sectionBackgroundColor',
          type: 'text',
          label: 'Section Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'stats',
          type: 'array',
          label: 'Stat Cards',
          minRows: 1,
          maxRows: 8,
          admin: {
            description: 'Drag to reorder stat cards.',
            initCollapsed: false,
          },
          fields: [
            {
              name: 'number',
              type: 'text',
              label: 'Display Number',
              required: true,
              admin: {
                description: 'The final animated number (e.g. 85, 50, 20)',
              },
            },
            {
              name: 'suffix',
              type: 'text',
              label: 'Number Suffix',
              defaultValue: 'K+',
              admin: {
                description: 'Text after the number (e.g. K+, +, %)',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Stat Label',
              required: true,
              admin: {
                description: 'Text below the number (e.g. "Patients Treated")',
              },
            },
            {
              name: 'tagText',
              type: 'text',
              label: 'Floating Tag Text',
              admin: {
                description: 'Small badge/tag shown on the card (e.g. "Trusted Care")',
              },
            },
            {
              name: 'tagBackgroundColor',
              type: 'text',
              label: 'Tag Background Color',
              defaultValue: '#e8f4fd',
            },
            {
              name: 'tagTextColor',
              type: 'text',
              label: 'Tag Text Color',
              defaultValue: '#081122',
            },
            {
              name: 'cardBackgroundColor',
              type: 'text',
              label: 'Card Background Color',
              defaultValue: '#f5f7fa',
            },
            {
              name: 'cardBorderColor',
              type: 'text',
              label: 'Card Border Color',
              defaultValue: '#e2e8f0',
            },
            {
              name: 'numberColor',
              type: 'text',
              label: 'Number Text Color',
              defaultValue: '#081122',
            },
            {
              name: 'labelColor',
              type: 'text',
              label: 'Label Text Color',
              defaultValue: '#081122',
            },
            {
              name: 'iconColor',
              type: 'text',
              label: 'Circle Icon Stroke Color',
              defaultValue: '#081122',
              admin: {
                description: 'Color of the SVG circle icon next to the label',
              },
            },
          ],
          defaultValue: [
            {
              number: '85',
              suffix: 'K+',
              label: 'Patients Treated',
              tagText: 'Trusted Care',
              tagBackgroundColor: '#e8f4fd',
              tagTextColor: '#081122',
              cardBackgroundColor: '#f5f7fa',
              cardBorderColor: '#e2e8f0',
              numberColor: '#081122',
              labelColor: '#081122',
              iconColor: '#081122',
            },
            {
              number: '50',
              suffix: '+',
              label: 'Procedures Performed',
              tagText: 'Proven Results',
              tagBackgroundColor: '#e8f4fd',
              tagTextColor: '#081122',
              cardBackgroundColor: '#f5f7fa',
              cardBorderColor: '#e2e8f0',
              numberColor: '#081122',
              labelColor: '#081122',
              iconColor: '#081122',
            },
            {
              number: '20',
              suffix: '+',
              label: 'Years of Experience',
              tagText: 'Expert Team',
              tagBackgroundColor: '#e8f4fd',
              tagTextColor: '#081122',
              cardBackgroundColor: '#f5f7fa',
              cardBorderColor: '#e2e8f0',
              numberColor: '#081122',
              labelColor: '#081122',
              iconColor: '#081122',
            },
          ],
        },
      ],
    },

    // ─── CONTENT ROWS SECTION ────────────────────────────────────────────────────
    {
      name: 'contentRowsSection',
      type: 'group',
      label: 'Content Rows Section',
      admin: {
        description: 'Alternating image + text rows. Drag to reorder.',
      },
      fields: [
        {
          name: 'sectionBackgroundColor',
          type: 'text',
          label: 'Section Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'rows',
          type: 'array',
          label: 'Content Rows',
          minRows: 1,
          admin: {
            description:
              'Each row has an image, a section label, heading, and rich text. Drag to reorder.',
            initCollapsed: false,
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Row Image',
              admin: {
                description: 'Full-width image displayed above the text row',
              },
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alt Text',
              defaultValue: '',
            },
            {
              name: 'imageBackgroundColor',
              type: 'text',
              label: 'Image Container Background Color',
              defaultValue: '#f5f7fa',
            },
            {
              name: 'sectionLabel',
              type: 'text',
              label: 'Section Label (left column)',
              defaultValue: 'What We Do',
              admin: {
                description:
                  'Small label on the left side of the row (e.g. "What We Do", "The Result")',
              },
            },
            {
              name: 'sectionLabelColor',
              type: 'text',
              label: 'Section Label Color',
              defaultValue: '#081122',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Row Heading (H2)',
              defaultValue: 'Our Approach to Minimally Invasive Spine Treatment',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
              defaultValue: '#081122',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Rich Text Content',
            },
            {
              name: 'contentColor',
              type: 'text',
              label: 'Content Text Color',
              defaultValue: '#1a4db3',
              admin: {
                description: 'Color applied to the rich text container',
              },
            },
            {
              name: 'rowBackgroundColor',
              type: 'text',
              label: 'Row Background Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'rowBorderColor',
              type: 'text',
              label: 'Row Divider / Border Color',
              defaultValue: 'transparent',
            },
          ],
          defaultValue: [
            {
              imageAlt: 'Minimally invasive spine surgery procedure',
              imageBackgroundColor: '#f5f7fa',
              sectionLabel: 'What We Do',
              sectionLabelColor: '#081122',
              heading: 'Our Approach to Minimally Invasive Spine Treatment',
              headingColor: '#081122',
              contentColor: '#1a4db3',
              rowBackgroundColor: '#ffffff',
              rowBorderColor: 'transparent',
            },
            {
              imageAlt: 'Patient recovery after spine surgery',
              imageBackgroundColor: '#f5f7fa',
              sectionLabel: 'The Result',
              sectionLabelColor: '#081122',
              heading: 'Faster Recovery. Better Outcomes.',
              headingColor: '#081122',
              contentColor: '#1a4db3',
              rowBackgroundColor: '#ffffff',
              rowBorderColor: 'transparent',
            },
          ],
        },
      ],
    },

    // ─── GLOBAL PAGE SETTINGS ────────────────────────────────────────────────────
    {
      name: 'pageSettings',
      type: 'group',
      label: 'Global Page Settings',
      admin: {
        description: 'Page-wide defaults, SEO, and typography overrides.',
      },
      fields: [
        {
          name: 'pageBackgroundColor',
          type: 'text',
          label: 'Page Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'primaryTextColor',
          type: 'text',
          label: 'Primary Text Color',
          defaultValue: '#081122',
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Accent / Link Color',
          defaultValue: '#1a4db3',
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
              defaultValue: 'Minimally Invasive Spine Surgery | Expert Treatment',
              maxLength: 100,
              admin: {
                description: '60 characters recommended',
              },
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Meta Description',
              defaultValue:
                'Advanced minimally invasive spine surgery to relieve pain and restore mobility with faster recovery and minimal downtime.',
              maxLength: 200,
              admin: {
                description: '155–160 characters recommended',
              },
            },
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Social Share Image',
              admin: {
                description: '1200x630px recommended',
              },
            },
            {
              name: 'keywords',
              type: 'text',
              label: 'Focus Keywords',
              defaultValue:
                'minimally invasive spine surgery, back pain treatment, spinal decompression',
              admin: {
                description: 'Comma-separated keywords',
              },
            },
          ],
        },
      ],
    },
  ],
}
