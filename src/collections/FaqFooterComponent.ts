import { CollectionConfig } from 'payload'

export const FaqFooterComponent: CollectionConfig = {
  slug: 'faq-footer-component',
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
      defaultValue: 'FAQ & Footer Component',
    },

    // ─── FAQ SECTION ───────────────────────────────────────────────────────────
    {
      name: 'faqSection',
      type: 'group',
      label: 'FAQ Section',
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
            description: 'e.g., section-03',
          },
          defaultValue: 'section-03',
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
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'Default text color for the section',
          },
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
          admin: {
            description: 'CSS padding value (e.g., 80px, 5rem)',
          },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: {
            description: 'CSS padding value (e.g., 80px, 5rem)',
          },
        },

        // Tag Box
        {
          name: 'tagBox',
          type: 'group',
          label: 'Tag Box',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Tag',
              defaultValue: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Tag Text',
              defaultValue: 'Quick Support',
            },
            {
              name: 'variant',
              type: 'text',
              label: 'Tag Variant (data attribute)',
              admin: {
                description: 'e.g., base',
              },
              defaultValue: 'base',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Tag Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Tag Text Color',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Tag Border Radius',
            },
          ],
        },

        // Heading
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
          required: true,
          defaultValue: 'Answers to Your Most Common Questions',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingFontSize',
          type: 'text',
          label: 'Heading Font Size',
          admin: {
            description: 'CSS font-size value (e.g., 48px, 3rem)',
          },
        },
        {
          name: 'headingMaxWidthClass',
          type: 'text',
          label: 'Heading Container Max Width Class',
          admin: {
            description: 'e.g., max-550',
          },
          defaultValue: 'max-550',
        },

        // Icon Styles
        {
          name: 'iconStyles',
          type: 'group',
          label: 'FAQ Icon Styles',
          fields: [
            {
              name: 'iconColor',
              type: 'text',
              label: 'Icon Stroke Color',
              admin: {
                description: 'Color for the +/- SVG icon (e.g., #081122)',
              },
              defaultValue: '#081122',
            },
            {
              name: 'iconBackgroundColor',
              type: 'text',
              label: 'Icon Circle Fill Color',
              admin: {
                description: 'Fill color for the circle background (e.g., #081122)',
              },
              defaultValue: '#081122',
            },
            {
              name: 'iconBackgroundOpacity',
              type: 'text',
              label: 'Icon Circle Fill Opacity',
              admin: {
                description: 'Opacity for the circle fill (e.g., 0.2)',
              },
              defaultValue: '0.2',
            },
            {
              name: 'iconSize',
              type: 'text',
              label: 'Icon Size',
              admin: {
                description: 'Width/height of the icon (e.g., 22px)',
              },
              defaultValue: '22px',
            },
          ],
        },

        // FAQ Items
        {
          name: 'faqItems',
          type: 'array',
          label: 'FAQ Items',
          admin: {
            description: 'Drag to reorder FAQ items',
          },
          fields: [
            {
              name: 'question',
              type: 'text',
              label: 'Question',
              required: true,
            },
            {
              name: 'answer',
              type: 'richText',
              label: 'Answer',
              required: true,
            },
            {
              name: 'variant',
              type: 'text',
              label: 'Item Variant (data attribute)',
              defaultValue: 'base',
            },
            {
              name: 'questionColor',
              type: 'text',
              label: 'Question Text Color',
            },
            {
              name: 'answerColor',
              type: 'text',
              label: 'Answer Text Color',
            },
            {
              name: 'borderColor',
              type: 'text',
              label: 'Item Border Color',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Item Background Color',
            },
            {
              name: 'openBackgroundColor',
              type: 'text',
              label: 'Item Background Color (when open)',
            },
            {
              name: 'defaultOpen',
              type: 'checkbox',
              label: 'Open by Default',
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              question: 'Will I feel better after treatment?',
              variant: 'base',
              defaultOpen: false,
            },
            {
              question: 'How long is the recovery process?',
              variant: 'base',
              defaultOpen: false,
            },
            {
              question: 'Is surgery always required?',
              variant: 'base',
              defaultOpen: false,
            },
            {
              question: 'Are your treatments covered by insurance?',
              variant: 'base',
              defaultOpen: false,
            },
            {
              question: 'What makes your approach different?',
              variant: 'base',
              defaultOpen: false,
            },
            {
              question: 'What should I do next?',
              variant: 'base',
              defaultOpen: false,
            },
          ],
        },
      ],
    },

    // ─── FOOTER SECTION ────────────────────────────────────────────────────────
    {
      name: 'footerSection',
      type: 'group',
      label: 'Footer Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Footer',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'footer',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Footer Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Footer Text Color',
        },

        // CTA Section
        {
          name: 'ctaSection',
          type: 'group',
          label: 'CTA Section (above footer)',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show CTA Section',
              admin: {
                description: 'Enable the CTA block above the main footer',
              },
              defaultValue: false,
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'CTA Background Color',
            },

            // CTA Image / Video
            {
              name: 'mediaImage',
              type: 'upload',
              relationTo: 'media',
              label: 'CTA Background Image',
            },
            {
              name: 'mediaImageAlt',
              type: 'text',
              label: 'CTA Image Alt Text',
              defaultValue: 'Service',
            },
            {
              name: 'videoMp4Url',
              type: 'text',
              label: 'Background Video URL (MP4)',
              admin: {
                description: 'Full URL to the .mp4 video file',
              },
            },
            {
              name: 'videoWebmUrl',
              type: 'text',
              label: 'Background Video URL (WebM)',
              admin: {
                description: 'Full URL to the .webm video file',
              },
            },
            {
              name: 'videoPosterUrl',
              type: 'text',
              label: 'Video Poster Image URL',
              admin: {
                description: 'Thumbnail shown before the video loads',
              },
            },
            {
              name: 'videoAutoplay',
              type: 'checkbox',
              label: 'Autoplay Video',
              defaultValue: true,
            },
            {
              name: 'videoLoop',
              type: 'checkbox',
              label: 'Loop Video',
              defaultValue: true,
            },
            {
              name: 'videoMuted',
              type: 'checkbox',
              label: 'Mute Video',
              defaultValue: true,
            },

            // CTA Tag
            {
              name: 'tagText',
              type: 'text',
              label: 'Tag Text',
              defaultValue: 'Free Consultation',
            },
            {
              name: 'tagBackgroundColor',
              type: 'text',
              label: 'Tag Background Color',
            },
            {
              name: 'tagTextColor',
              type: 'text',
              label: 'Tag Text Color',
            },

            // CTA Heading
            {
              name: 'heading',
              type: 'text',
              label: 'CTA Heading',
              defaultValue: 'Get the Legal Help You Deserve — Start Your Case Today',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'CTA Heading Color',
            },
            {
              name: 'headingFontSize',
              type: 'text',
              label: 'CTA Heading Font Size',
            },

            // CTA Button
            {
              name: 'buttonText',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Contact Us Now',
            },
            {
              name: 'buttonUrl',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/pricing',
            },
            {
              name: 'buttonOpenInNewTab',
              type: 'checkbox',
              label: 'Open Button Link in New Tab',
              defaultValue: false,
            },
            {
              name: 'buttonBackgroundColor',
              type: 'text',
              label: 'Button Background Color',
            },
            {
              name: 'buttonTextColor',
              type: 'text',
              label: 'Button Text Color',
            },
            {
              name: 'buttonHoverBackgroundColor',
              type: 'text',
              label: 'Button Hover Background Color',
            },
            {
              name: 'buttonIconImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Button Arrow Icon',
            },
          ],
        },

        // Divider
        {
          name: 'showDivider',
          type: 'checkbox',
          label: 'Show Footer Divider',
          defaultValue: false,
        },
        {
          name: 'dividerColor',
          type: 'text',
          label: 'Divider Color',
        },

        // Footer Left Column
        {
          name: 'footerLeft',
          type: 'group',
          label: 'Footer Left Column',
          fields: [
            {
              name: 'brandLogoImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Brand Logo',
            },
            {
              name: 'brandLogoAlt',
              type: 'text',
              label: 'Brand Logo Alt Text',
              defaultValue: 'Brand Logo',
            },
            {
              name: 'brandLogoWidth',
              type: 'text',
              label: 'Logo Width',
              admin: {
                description: 'CSS width value (e.g., 120px)',
              },
            },
            {
              name: 'brandLogoHeight',
              type: 'text',
              label: 'Logo Height',
            },
            {
              name: 'brandUrl',
              type: 'text',
              label: 'Logo Link URL',
              defaultValue: '/',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Brand Description',
              defaultValue:
                'Specializing in advanced minimally invasive spine care, our team is dedicated to helping patients find lasting relief from pain with proven treatments, expert guidance, and personalized care.',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Text Color',
            },
            {
              name: 'descriptionFontSize',
              type: 'text',
              label: 'Description Font Size',
            },

            // Desktop bottom row inside footer-left
            {
              name: 'desktopBottomRow',
              type: 'group',
              label: 'Desktop Bottom Row (inside left column)',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Desktop Bottom Row',
                  defaultValue: true,
                },
                {
                  name: 'copyrightText',
                  type: 'text',
                  label: 'Copyright Text',
                  defaultValue: '© 2026 Ortho and spine. All rights reserved.',
                },
                {
                  name: 'copyrightColor',
                  type: 'text',
                  label: 'Copyright Text Color',
                  defaultValue: 'color-sec-white',
                },
                {
                  name: 'links',
                  type: 'array',
                  label: 'Bottom Links',
                  admin: {
                    description: 'Drag to reorder privacy/terms links',
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
                      label: 'Link URL',
                      required: true,
                    },
                    {
                      name: 'openInNewTab',
                      type: 'checkbox',
                      label: 'Open in New Tab',
                      defaultValue: false,
                    },
                    {
                      name: 'color',
                      type: 'text',
                      label: 'Link Color',
                    },
                    {
                      name: 'hoverColor',
                      type: 'text',
                      label: 'Link Hover Color',
                    },
                  ],
                  defaultValue: [
                    { label: 'Privacy Policy', url: '/privacy-policy', openInNewTab: false },
                    { label: 'Terms of Conditions', url: '/terms-condition', openInNewTab: false },
                  ],
                },
              ],
            },
          ],
        },

        // Footer Link Columns (drag-to-reorder columns, each with drag-to-reorder links)
        {
          name: 'footerColumns',
          type: 'array',
          label: 'Footer Link Columns',
          admin: {
            description: 'Drag to reorder columns. Add as many columns as needed.',
          },
          fields: [
            {
              name: 'columnTitle',
              type: 'text',
              label: 'Column Title',
              required: true,
            },
            {
              name: 'columnTitleColor',
              type: 'text',
              label: 'Column Title Color',
            },
            {
              name: 'columnTitleFontSize',
              type: 'text',
              label: 'Column Title Font Size',
            },
            {
              name: 'links',
              type: 'array',
              label: 'Links',
              admin: {
                description: 'Drag to reorder links within this column',
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
                  label: 'Link URL',
                  required: true,
                },
                {
                  name: 'openInNewTab',
                  type: 'checkbox',
                  label: 'Open in New Tab',
                  defaultValue: false,
                },
                {
                  name: 'isActive',
                  type: 'checkbox',
                  label: 'Mark as Active / Current Page',
                  defaultValue: false,
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Link Color',
                },
                {
                  name: 'hoverColor',
                  type: 'text',
                  label: 'Link Hover Color',
                },
                {
                  name: 'fontSize',
                  type: 'text',
                  label: 'Link Font Size',
                },
              ],
            },
          ],
          defaultValue: [
            {
              columnTitle: 'Pages',
              links: [
                { label: 'Home', url: '/', openInNewTab: false, isActive: true },
                { label: 'About Us', url: '/about', openInNewTab: false, isActive: false },
                { label: 'Services', url: '/projects', openInNewTab: false, isActive: false },
                { label: 'Locations', url: '/pricing', openInNewTab: false, isActive: false },
                { label: 'Contact us', url: '/blogs', openInNewTab: false, isActive: false },
              ],
            },
            {
              columnTitle: 'Legal',
              links: [
                {
                  label: 'Privacy Policy',
                  url: '/privacy-policy',
                  openInNewTab: false,
                  isActive: false,
                },
                { label: 'T&C', url: '/terms-condition', openInNewTab: false, isActive: false },
              ],
            },
            {
              columnTitle: 'Social',
              links: [
                {
                  label: 'Facebook',
                  url: 'https://www.facebook.com/webflow',
                  openInNewTab: true,
                  isActive: false,
                },
                {
                  label: 'Instagram',
                  url: 'https://www.instagram.com/webflow',
                  openInNewTab: true,
                  isActive: false,
                },
                {
                  label: 'LinkedIn',
                  url: 'https://www.linkedin.com/company/webflow-inc-',
                  openInNewTab: true,
                  isActive: false,
                },
              ],
            },
          ],
        },

        // Mobile Footer Bottom Row
        {
          name: 'mobileFooterBottom',
          type: 'group',
          label: 'Mobile Footer Bottom Row',
          admin: {
            description: 'Shown only on mobile (footer-bottom _02 class)',
          },
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Mobile Bottom Row',
              defaultValue: true,
            },
            {
              name: 'copyrightText',
              type: 'text',
              label: 'Copyright Text',
              defaultValue: '© 2026 Your Law Firm. All rights reserved.',
            },
            {
              name: 'copyrightColor',
              type: 'text',
              label: 'Copyright Text Color',
            },
            {
              name: 'links',
              type: 'array',
              label: 'Bottom Links',
              admin: {
                description: 'Drag to reorder links',
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
                  label: 'Link URL',
                  required: true,
                },
                {
                  name: 'openInNewTab',
                  type: 'checkbox',
                  label: 'Open in New Tab',
                  defaultValue: false,
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Link Color',
                },
              ],
              defaultValue: [
                { label: 'Privacy Policy', url: '/privacy-policy', openInNewTab: false },
                { label: 'Terms of Conditions', url: '/terms-condition', openInNewTab: false },
              ],
            },
          ],
        },
      ],
    },

    // ─── SECTION ORDER ─────────────────────────────────────────────────────────
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder sections on the page',
      },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'FAQ Section', value: 'faq' },
            { label: 'Footer Section', value: 'footer' },
          ],
        },
      ],
      defaultValue: [{ section: 'faq' }, { section: 'footer' }],
    },

    // ─── GLOBAL STYLES ─────────────────────────────────────────────────────────
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
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
        },
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Brand Color',
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Brand Color',
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Default Link Color',
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Default Link Hover Color',
        },
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Scoped CSS for this component',
          },
        },
      ],
    },

    // ─── TYPOGRAPHY SETTINGS ───────────────────────────────────────────────────
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
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size',
        },
        {
          name: 'h2Color',
          type: 'text',
          label: 'H2 Color',
        },
        {
          name: 'h2FontWeight',
          type: 'text',
          label: 'H2 Font Weight',
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

    // ─── ANIMATION SETTINGS ────────────────────────────────────────────────────
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
          name: 'faqToggleDuration',
          type: 'text',
          label: 'FAQ Toggle Duration',
          admin: {
            description: 'Duration for open/close animation (e.g., 0.3s)',
          },
          defaultValue: '0.3s',
        },
        {
          name: 'faqToggleEasing',
          type: 'text',
          label: 'FAQ Toggle Easing',
          admin: {
            description: 'CSS easing function (e.g., ease-in-out)',
          },
          defaultValue: 'ease-in-out',
        },
        {
          name: 'enableWowAnimations',
          type: 'checkbox',
          label: 'Enable WOW.js Scroll Animations',
          defaultValue: true,
        },
        {
          name: 'wowOffset',
          type: 'text',
          label: 'WOW Animation Offset (px)',
          defaultValue: '100',
        },
        {
          name: 'fadeInDuration',
          type: 'text',
          label: 'Fade In Duration',
          defaultValue: '1s',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'General Animation Easing',
          defaultValue: 'ease-in-out',
        },
      ],
    },

    // ─── MOBILE SETTINGS ───────────────────────────────────────────────────────
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
          name: 'mobileStackFooterColumns',
          type: 'checkbox',
          label: 'Stack Footer Columns on Mobile',
          defaultValue: true,
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          defaultValue: '100%',
        },
      ],
    },

    // ─── ACCESSIBILITY SETTINGS ────────────────────────────────────────────────
    {
      name: 'accessibilitySettings',
      type: 'group',
      label: 'Accessibility Settings',
      fields: [
        {
          name: 'faqAriaLabel',
          type: 'text',
          label: 'FAQ Section ARIA Label',
          defaultValue: 'Frequently asked questions',
        },
        {
          name: 'footerAriaLabel',
          type: 'text',
          label: 'Footer ARIA Label',
          defaultValue: 'Site footer',
        },
        {
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Outline Color',
          admin: {
            description: 'Color for keyboard focus outlines',
          },
        },
        {
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
        },
        {
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
        },
      ],
    },

    // ─── SEO SETTINGS ──────────────────────────────────────────────────────────
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
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
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: {
            description: 'Schema.org structured data in JSON-LD format',
          },
        },
      ],
    },

    // ─── ADVANCED SETTINGS ─────────────────────────────────────────────────────
    {
      name: 'advancedSettings',
      type: 'group',
      label: 'Advanced Settings',
      fields: [
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
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Custom JS injected for this component',
          },
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          admin: {
            description: 'Add custom data-* attributes to component elements',
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
                { label: 'FAQ Section', value: 'faq' },
                { label: 'Footer Section', value: 'footer' },
                { label: 'CTA Section', value: 'cta' },
              ],
            },
          ],
        },
      ],
    },

    // ─── ACTIVE TOGGLE ─────────────────────────────────────────────────────────
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
