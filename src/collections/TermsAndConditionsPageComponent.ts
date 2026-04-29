import { CollectionConfig } from 'payload'

export const TermsAndConditionsPageComponent: CollectionConfig = {
  slug: 'terms-and-conditions-page-component',
  admin: {
    useAsTitle: 'componentName',
    defaultColumns: ['componentName', 'updatedAt'],
    group: 'Components',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'componentName',
      type: 'text',
      required: true,
      defaultValue: 'Terms & Conditions Page Component',
    },

    // ─── Hero Section ────────────────────────────────────────────────────────────
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
          },
        },
        {
          name: 'backgroundImage',
          type: 'group',
          label: 'Background Image',
          fields: [
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image (≤420px)',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image (≤800px)',
            },
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image (≤1400px)',
            },
            {
              name: 'large',
              type: 'upload',
              relationTo: 'media',
              label: 'Large Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Hero background',
            },
          ],
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: {
            description: 'Extra classes added to the <section> element',
          },
          defaultValue: 'hero',
        },
        {
          name: 'containerClassName',
          type: 'text',
          label: 'Container CSS Classes',
          defaultValue: 'container',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Terms & Conditions',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Heading Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'titleFontSize',
          type: 'text',
          label: 'Heading Font Size',
          admin: {
            description: 'CSS font-size value (e.g., 48px, 3rem)',
          },
        },
        {
          name: 'titleClassName',
          type: 'text',
          label: 'Heading CSS Class',
          defaultValue: 'h-01',
        },
        {
          name: 'animationDataId',
          type: 'text',
          label: 'Webflow Animation Data ID',
          admin: {
            description: 'data-w-id attribute value for Webflow scroll animation',
          },
          defaultValue: '32fb83d1-aea5-3369-75d5-34fdb60b777b',
        },
        {
          name: 'enableAnimation',
          type: 'checkbox',
          label: 'Enable Entry Animation',
          admin: {
            description: 'Fades and slides the heading in on load',
          },
          defaultValue: true,
        },
        {
          name: 'animationTranslateY',
          type: 'text',
          label: 'Animation Translate Y (start)',
          admin: {
            description: 'How far down the element starts before animating in (e.g., 40px)',
          },
          defaultValue: '40px',
        },
        {
          name: 'animationBlur',
          type: 'text',
          label: 'Animation Blur (start)',
          admin: {
            description: 'Starting blur amount (e.g., 10px)',
          },
          defaultValue: '10px',
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Section Padding Top',
          admin: {
            description: 'CSS padding-top value',
          },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Section Padding Bottom',
          admin: {
            description: 'CSS padding-bottom value',
          },
        },
      ],
    },

    // ─── Content Section (section-01) ────────────────────────────────────────────
    {
      name: 'contentSection',
      type: 'group',
      label: 'Content Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: {
            description: 'Extra classes added to the <section> element',
          },
          defaultValue: 'section-01',
        },
        {
          name: 'containerClassName',
          type: 'text',
          label: 'Container CSS Classes',
          defaultValue: 'container',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'Default text color for this section',
          },
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Section Padding Top',
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Section Padding Bottom',
        },
        {
          name: 'rowWrapClassName',
          type: 'text',
          label: 'Row Wrapper CSS Class',
          defaultValue: 'text-row-wrap',
        },
        {
          name: 'rowClassName',
          type: 'text',
          label: 'Individual Row CSS Class',
          defaultValue: 'text-row',
        },
        {
          name: 'subheadingClassName',
          type: 'text',
          label: 'Subheading CSS Class',
          defaultValue: 'h-03',
        },
        {
          name: 'paragraphClassName',
          type: 'text',
          label: 'Paragraph CSS Class',
          defaultValue: 'p-text-02 color-sec-blue',
        },

        // Drag-and-drop ordered text rows
        {
          name: 'textRows',
          type: 'array',
          label: 'Text Rows',
          admin: {
            description: 'Drag to reorder rows. Each row has a subheading and body text.',
          },
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Row',
              defaultValue: true,
            },
            {
              name: 'subheading',
              type: 'text',
              label: 'Subheading',
              required: true,
            },
            {
              name: 'subheadingColor',
              type: 'text',
              label: 'Subheading Color',
              admin: {
                description: 'Override the subheading color for this row',
              },
            },
            {
              name: 'subheadingFontSize',
              type: 'text',
              label: 'Subheading Font Size',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Body Text',
              required: true,
            },
            {
              name: 'contentColor',
              type: 'text',
              label: 'Body Text Color Override',
              admin: {
                description: 'Override the paragraph color for this row',
              },
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Row Background Color',
              admin: {
                description: 'Optional background color for this row',
              },
            },
            {
              name: 'paddingTop',
              type: 'text',
              label: 'Row Padding Top',
            },
            {
              name: 'paddingBottom',
              type: 'text',
              label: 'Row Padding Bottom',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Additional Row CSS Classes',
            },
            {
              name: 'anchorId',
              type: 'text',
              label: 'Anchor ID',
              admin: {
                description: 'Optional id attribute for deep-linking (e.g., introduction)',
              },
            },
            {
              name: 'links',
              type: 'array',
              label: 'Links',
              admin: {
                description: 'Optional links displayed below the body text. Drag to reorder.',
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Link Label',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL',
                  required: true,
                },
                {
                  name: 'openInNewTab',
                  type: 'checkbox',
                  label: 'Open in New Tab',
                  defaultValue: false,
                },
                {
                  name: 'ariaLabel',
                  type: 'text',
                  label: 'ARIA Label',
                },
                {
                  name: 'className',
                  type: 'text',
                  label: 'Link CSS Class',
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Link Color',
                },
              ],
            },
          ],
          defaultValue: [
            {
              show: true,
              subheading: 'Introduction',
              content: null,
              anchorId: 'introduction',
            },
            {
              show: true,
              subheading: 'Medical Disclaimer',
              content: null,
              anchorId: 'medical-disclaimer',
            },
            {
              show: true,
              subheading: 'Appointments & Consultations',
              content: null,
              anchorId: 'appointments-consultations',
            },
            {
              show: true,
              subheading: 'User Responsibilities',
              content: null,
              anchorId: 'user-responsibilities',
            },
            {
              show: true,
              subheading: 'Privacy & Data Protection',
              content: null,
              anchorId: 'privacy-data-protection',
            },
            {
              show: true,
              subheading: 'Third-Party Links',
              content: null,
              anchorId: 'third-party-links',
            },
            {
              show: true,
              subheading: 'Limitation of Liability',
              content: null,
              anchorId: 'limitation-of-liability',
            },
            {
              show: true,
              subheading: 'Changes to Terms',
              content: null,
              anchorId: 'changes-to-terms',
            },
            {
              show: true,
              subheading: 'Contact Us',
              content: null,
              anchorId: 'contact-us',
            },
          ],
        },
      ],
    },

    // ─── Section Order ────────────────────────────────────────────────────────────
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder the page sections',
      },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Hero Section', value: 'hero' },
            { label: 'Content Section', value: 'content' },
          ],
        },
      ],
      defaultValue: [{ section: 'hero' }, { section: 'content' }],
    },

    // ─── Global Styles ────────────────────────────────────────────────────────────
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: {
            description: 'CSS max-width (e.g., 1200px)',
          },
        },
        {
          name: 'containerPadding',
          type: 'text',
          label: 'Container Padding',
          admin: {
            description: 'CSS padding (e.g., 0 20px)',
          },
        },
        {
          name: 'sectionSpacing',
          type: 'text',
          label: 'Section Spacing',
          admin: {
            description: 'Gap between sections (e.g., 60px)',
          },
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
        },
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
        },
      ],
    },

    // ─── Typography Settings ──────────────────────────────────────────────────────
    {
      name: 'typographySettings',
      type: 'group',
      label: 'Typography Settings',
      fields: [
        {
          name: 'h1FontSize',
          type: 'text',
          label: 'H1 Font Size',
        },
        {
          name: 'h1Color',
          type: 'text',
          label: 'H1 Color',
        },
        {
          name: 'h1FontWeight',
          type: 'text',
          label: 'H1 Font Weight',
        },
        {
          name: 'h3FontSize',
          type: 'text',
          label: 'H3 Font Size',
        },
        {
          name: 'h3Color',
          type: 'text',
          label: 'H3 Color',
        },
        {
          name: 'h3FontWeight',
          type: 'text',
          label: 'H3 Font Weight',
        },
        {
          name: 'bodyFontSize',
          type: 'text',
          label: 'Body Font Size',
        },
        {
          name: 'bodyLineHeight',
          type: 'text',
          label: 'Body Line Height',
        },
        {
          name: 'paragraphSpacing',
          type: 'text',
          label: 'Paragraph Spacing',
        },
      ],
    },

    // ─── SEO Settings ─────────────────────────────────────────────────────────────
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          defaultValue: 'Terms & Conditions - Ortho & Spine Physicians Group',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords',
          },
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
        },
        {
          name: 'robots',
          type: 'select',
          label: 'Robots Meta Tag',
          options: [
            { label: 'Index, Follow', value: 'index,follow' },
            { label: 'No Index, Follow', value: 'noindex,follow' },
            { label: 'Index, No Follow', value: 'index,nofollow' },
            { label: 'No Index, No Follow', value: 'noindex,nofollow' },
          ],
          defaultValue: 'index,follow',
        },
      ],
    },

    // ─── Accessibility Settings ───────────────────────────────────────────────────
    {
      name: 'accessibilitySettings',
      type: 'group',
      label: 'Accessibility Settings',
      fields: [
        {
          name: 'skipToContent',
          type: 'checkbox',
          label: 'Include Skip to Content Link',
          defaultValue: true,
        },
        {
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
        },
        {
          name: 'altTextRequired',
          type: 'checkbox',
          label: 'Require Alt Text for Images',
          defaultValue: true,
        },
        {
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Color',
        },
        {
          name: 'contrastMode',
          type: 'select',
          label: 'Contrast Mode',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'High Contrast', value: 'high' },
            { label: 'Very High Contrast', value: 'very-high' },
          ],
          defaultValue: 'normal',
        },
      ],
    },

    // ─── Mobile Settings ──────────────────────────────────────────────────────────
    {
      name: 'mobileSettings',
      type: 'group',
      label: 'Mobile Settings',
      fields: [
        {
          name: 'mobileBreakpoint',
          type: 'text',
          label: 'Mobile Breakpoint',
          defaultValue: '768px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          defaultValue: '1024px',
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          defaultValue: '100%',
        },
        {
          name: 'mobileSpacingAdjustment',
          type: 'text',
          label: 'Mobile Spacing Adjustment',
          defaultValue: '100%',
        },
        {
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections on Mobile',
          defaultValue: true,
        },
      ],
    },

    // ─── Animation Settings ───────────────────────────────────────────────────────
    {
      name: 'animationSettings',
      type: 'group',
      label: 'Animation Settings',
      fields: [
        {
          name: 'enableAnimations',
          type: 'checkbox',
          label: 'Enable Animations',
          defaultValue: true,
        },
        {
          name: 'fadeInDuration',
          type: 'text',
          label: 'Fade In Duration',
          defaultValue: '1s',
        },
        {
          name: 'fadeInDelay',
          type: 'text',
          label: 'Fade In Delay',
          defaultValue: '0s',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          defaultValue: 'ease-in-out',
        },
        {
          name: 'enableWowAnimations',
          type: 'checkbox',
          label: 'Enable WOW.js Animations',
          defaultValue: true,
        },
        {
          name: 'wowOffset',
          type: 'text',
          label: 'WOW Animation Offset (px)',
          defaultValue: '100',
        },
      ],
    },

    // ─── Advanced Settings ────────────────────────────────────────────────────────
    {
      name: 'advancedSettings',
      type: 'group',
      label: 'Advanced Settings',
      fields: [
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Add custom CSS styles for this page',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Add custom JavaScript code for this page',
          },
        },
        {
          name: 'lazyLoadImages',
          type: 'checkbox',
          label: 'Enable Lazy Loading for Images',
          defaultValue: true,
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Page Caching',
          defaultValue: true,
        },
        {
          name: 'preloadImages',
          type: 'checkbox',
          label: 'Preload Critical Images',
          defaultValue: true,
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          admin: {
            description: 'Add custom data attributes to page elements',
          },
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              admin: {
                description: 'e.g., data-tracking-id',
              },
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
            {
              name: 'targetSection',
              type: 'select',
              label: 'Apply To Section',
              options: [
                { label: 'Hero Section', value: 'hero' },
                { label: 'Content Section', value: 'content' },
              ],
            },
          ],
        },
      ],
    },

    // ─── Integration Settings ─────────────────────────────────────────────────────
    {
      name: 'integrationSettings',
      type: 'group',
      label: 'Integration Settings',
      fields: [
        {
          name: 'googleAnalyticsId',
          type: 'text',
          label: 'Google Analytics ID',
        },
        {
          name: 'facebookPixelId',
          type: 'text',
          label: 'Facebook Pixel ID',
        },
        {
          name: 'conversionTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Conversion Tracking',
          defaultValue: false,
        },
      ],
    },

    // ─── Performance Settings ─────────────────────────────────────────────────────
    {
      name: 'performanceSettings',
      type: 'group',
      label: 'Performance Settings',
      fields: [
        {
          name: 'imageOptimization',
          type: 'checkbox',
          label: 'Enable Image Optimization',
          defaultValue: true,
        },
        {
          name: 'imageQuality',
          type: 'text',
          label: 'Image Quality (1-100)',
          defaultValue: '85',
        },
        {
          name: 'imageFormat',
          type: 'select',
          label: 'Preferred Image Format',
          options: [
            { label: 'Auto (WebP with fallback)', value: 'auto' },
            { label: 'WebP', value: 'webp' },
            { label: 'AVIF', value: 'avif' },
            { label: 'JPEG', value: 'jpeg' },
            { label: 'PNG', value: 'png' },
          ],
          defaultValue: 'auto',
        },
        {
          name: 'responsiveImageSizes',
          type: 'text',
          label: 'Responsive Image Sizes',
          admin: {
            description: 'Comma-separated widths (e.g., 420,800,1400)',
          },
          defaultValue: '420,630,800,1200,1400,2100',
        },
        {
          name: 'minifyCSS',
          type: 'checkbox',
          label: 'Minify CSS',
          defaultValue: true,
        },
        {
          name: 'minifyJS',
          type: 'checkbox',
          label: 'Minify JavaScript',
          defaultValue: true,
        },
        {
          name: 'enableCDN',
          type: 'checkbox',
          label: 'Use CDN for Assets',
          defaultValue: true,
        },
        {
          name: 'cdnUrl',
          type: 'text',
          label: 'CDN Base URL',
        },
      ],
    },

    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Toggle to enable/disable this component',
      },
    },
  ],
  timestamps: true,
}
