import { CollectionConfig } from 'payload'

export const NavbarComponent: CollectionConfig = {
  slug: 'navbar-component',
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
      defaultValue: 'Navbar Component',
    },

    // ─── Navbar Section ────────────────────────────────────────────────────────
    {
      name: 'navbarSection',
      type: 'group',
      label: 'Navbar Section',
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
            description: 'CSS color value (e.g., #ffffff, transparent)',
          },
          defaultValue: '#ffffff',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'Default text color for nav items',
          },
          defaultValue: '#081122',
        },
        {
          name: 'borderBottom',
          type: 'text',
          label: 'Border Bottom',
          admin: {
            description: 'CSS border value (e.g., 1px solid #e5e7eb)',
          },
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'nav-contact',
        },
        {
          name: 'variantAttr',
          type: 'text',
          label: 'Webflow Variant Attribute',
          admin: {
            description: 'data-wf--navbar--variant value',
          },
          defaultValue: 'base',
        },
        {
          name: 'stickyOnScroll',
          type: 'checkbox',
          label: 'Sticky on Scroll',
          defaultValue: true,
        },
        {
          name: 'collapseBreakpoint',
          type: 'select',
          label: 'Mobile Collapse Breakpoint',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
          defaultValue: 'medium',
        },
      ],
    },

    // ─── Brand / Logo ──────────────────────────────────────────────────────────
    {
      name: 'brandSection',
      type: 'group',
      label: 'Brand / Logo',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Brand',
          defaultValue: true,
        },
        {
          name: 'logoLink',
          type: 'text',
          label: 'Logo Link URL',
          defaultValue: '/',
        },
        {
          name: 'logoAriaLabel',
          type: 'text',
          label: 'Logo Link ARIA Label',
          defaultValue: 'Go to homepage',
        },
        {
          name: 'primaryLogo',
          type: 'group',
          label: 'Primary Logo (Light Mode / Default)',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Primary Logo Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Primary Logo URL (if not using upload)',
              defaultValue:
                'https://cdn.prod.website-files.com/68becb4858a3e743d2ec5a6d/68beda7aae9f68ff469aa1e0_Frame%20(1).svg',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Mouly',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Width',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Height',
            },
            {
              name: 'className',
              type: 'text',
              label: 'CSS Classes',
              defaultValue: 'nav-brand-logo _01',
            },
          ],
        },
        {
          name: 'secondaryLogo',
          type: 'group',
          label: 'Secondary Logo (Dark Mode / Scroll)',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Secondary Logo Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Secondary Logo URL (if not using upload)',
              defaultValue:
                'https://cdn.prod.website-files.com/68becb4858a3e743d2ec5a6d/68bfdc4176adbbc176b6eea6_Frame.svg',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Marke',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Width',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Height',
            },
            {
              name: 'className',
              type: 'text',
              label: 'CSS Classes',
              defaultValue: 'nav-brand-logo _02',
            },
          ],
        },
      ],
    },

    // ─── Nav Links ─────────────────────────────────────────────────────────────
    {
      name: 'navLinks',
      type: 'array',
      label: 'Navigation Links',
      admin: {
        description: 'Drag to reorder navigation links',
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
          name: 'isActive',
          type: 'checkbox',
          label: 'Mark as Active',
          defaultValue: false,
        },
        {
          name: 'isCTAButton',
          type: 'checkbox',
          label: 'Style as CTA Button',
          admin: {
            description: 'Renders this link as a button instead of a plain link',
          },
          defaultValue: false,
        },
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Link',
          defaultValue: true,
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Link Text Color',
          admin: {
            description: 'Override default nav link color for this item',
          },
        },
        {
          name: 'hoverColor',
          type: 'text',
          label: 'Link Hover Color',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'nav-list-item',
        },
      ],
      defaultValue: [
        {
          label: 'Home',
          url: '/',
          openInNewTab: false,
          isCTAButton: false,
          isActive: false,
          show: true,
          className: 'nav-list-item',
        },
        {
          label: 'About Us',
          url: '/about.html',
          openInNewTab: false,
          isCTAButton: false,
          isActive: false,
          show: true,
          className: 'nav-list-item',
        },
        {
          label: 'Services',
          url: '/services.html',
          openInNewTab: false,
          isCTAButton: false,
          isActive: false,
          show: true,
          className: 'nav-list-item',
        },
        {
          label: 'Locations',
          url: '/',
          openInNewTab: false,
          isCTAButton: false,
          isActive: false,
          show: true,
          className: 'nav-list-item',
        },
        {
          label: 'Contact Us',
          url: '/contact.html',
          openInNewTab: false,
          isCTAButton: true,
          isActive: false,
          show: true,
          className: 'nav-list-item _02',
        },
      ],
    },

    // ─── CTA Button (Desktop Right) ────────────────────────────────────────────
    {
      name: 'ctaButton',
      type: 'group',
      label: 'CTA Button (Desktop Right)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show CTA Button',
          defaultValue: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Button Label',
          defaultValue: 'Contact Us',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          defaultValue: '/contact.html',
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          label: 'Open in New Tab',
          defaultValue: false,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Button Background Color',
          admin: {
            description: 'CSS color value',
          },
          defaultValue: '#081122',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Button Text Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'hoverBackgroundColor',
          type: 'text',
          label: 'Hover Background Color',
        },
        {
          name: 'hoverTextColor',
          type: 'text',
          label: 'Hover Text Color',
        },
        {
          name: 'borderRadius',
          type: 'text',
          label: 'Border Radius',
          admin: {
            description: 'CSS border-radius value (e.g., 4px, 9999px)',
          },
        },
        {
          name: 'padding',
          type: 'text',
          label: 'Padding',
          admin: {
            description: 'CSS padding value (e.g., 10px 20px)',
          },
        },
        {
          name: 'variantAttr',
          type: 'text',
          label: 'Webflow Variant Attribute',
          admin: {
            description: 'data-wf--black-btn--variant value',
          },
          defaultValue: 'base',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'btn-01-link w-inline-block',
        },
      ],
    },

    // ─── Mobile Hamburger Menu ─────────────────────────────────────────────────
    {
      name: 'mobileMenu',
      type: 'group',
      label: 'Mobile Hamburger Menu',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Mobile Menu Button',
          defaultValue: true,
        },
        {
          name: 'iconType',
          type: 'select',
          label: 'Icon Type',
          options: [
            { label: 'Lottie Animation', value: 'lottie' },
            { label: 'Static Image', value: 'image' },
            { label: 'CSS / HTML Icon', value: 'css' },
          ],
          defaultValue: 'lottie',
        },
        {
          name: 'lottieAnimationUrl',
          type: 'text',
          label: 'Lottie Animation URL',
          defaultValue:
            'https://cdn.prod.website-files.com/67b88a75c7088a0fbb003891/67b88a75c7088a0fbb00393f_lottieflow-menu-nav-06-000000-easey.json',
        },
        {
          name: 'lottieLoop',
          type: 'checkbox',
          label: 'Loop Lottie Animation',
          defaultValue: false,
        },
        {
          name: 'lottieDuration',
          type: 'text',
          label: 'Lottie Duration (seconds)',
          defaultValue: '2.36',
        },
        {
          name: 'iconImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon Image (if Static Image type)',
        },
        {
          name: 'iconColor',
          type: 'text',
          label: 'Icon Color',
          defaultValue: '#081122',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'menu-button-2 w-nav-button',
        },
      ],
    },

    // ─── Contact Panel ─────────────────────────────────────────────────────────
    {
      name: 'contactPanel',
      type: 'group',
      label: 'Contact Panel (Slide-in / Overlay)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Contact Panel',
          defaultValue: false,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Panel Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Panel Text Color',
          defaultValue: '#081122',
        },
        {
          name: 'overlayColor',
          type: 'text',
          label: 'Overlay Backdrop Color',
          admin: {
            description: 'Background behind the panel (e.g., rgba(0,0,0,0.4))',
          },
          defaultValue: 'rgba(0,0,0,0.4)',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Panel Heading',
          defaultValue: 'Get in Touch',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
          defaultValue: '#081122',
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Subheading Text',
          defaultValue:
            "Reach out today and start growing your brand successfully with Marke's expert guidance.",
        },
        {
          name: 'subheadingColor',
          type: 'text',
          label: 'Subheading Color',
          defaultValue: '#3a6fa0',
        },

        // Contact Form
        {
          name: 'contactForm',
          type: 'group',
          label: 'Contact Form',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Contact Form',
              defaultValue: true,
            },
            {
              name: 'formId',
              type: 'text',
              label: 'Form ID',
              defaultValue: 'wf-form-Contact-Form',
            },
            {
              name: 'successMessage',
              type: 'text',
              label: 'Success Message',
              defaultValue: 'Thank you! Your submission has been received!',
            },
            {
              name: 'errorMessage',
              type: 'text',
              label: 'Error Message',
              defaultValue: 'Oops! Something went wrong while submitting the form.',
            },
            {
              name: 'submitButtonLabel',
              type: 'text',
              label: 'Submit Button Label',
              defaultValue: 'Submit Now',
            },
            {
              name: 'submitButtonBackgroundColor',
              type: 'text',
              label: 'Submit Button Background Color',
              defaultValue: '#081122',
            },
            {
              name: 'submitButtonTextColor',
              type: 'text',
              label: 'Submit Button Text Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'submitButtonArrowIcon',
              type: 'upload',
              relationTo: 'media',
              label: 'Submit Button Arrow Icon',
            },
            {
              name: 'submitButtonArrowIconUrl',
              type: 'text',
              label: 'Submit Button Arrow Icon URL (fallback)',
              defaultValue:
                'https://cdn.prod.website-files.com/68becb4858a3e743d2ec5a6d/68febf6e45a50554ad211cf1_Frame%202147230510.svg',
            },
            {
              name: 'turnstileSiteKey',
              type: 'text',
              label: 'Cloudflare Turnstile Site Key',
              defaultValue: '0x4AAAAAAAQTptj2So4dx43e',
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
                  required: true,
                  options: [
                    { label: 'Text', value: 'text' },
                    { label: 'Email', value: 'email' },
                    { label: 'Telephone', value: 'tel' },
                    { label: 'Textarea', value: 'textarea' },
                    { label: 'Select / Dropdown', value: 'select' },
                  ],
                  defaultValue: 'text',
                },
                {
                  name: 'name',
                  type: 'text',
                  label: 'Field Name (HTML name attribute)',
                  required: true,
                },
                {
                  name: 'placeholder',
                  type: 'text',
                  label: 'Placeholder Text',
                },
                {
                  name: 'required',
                  type: 'checkbox',
                  label: 'Required',
                  defaultValue: false,
                },
                {
                  name: 'maxLength',
                  type: 'text',
                  label: 'Max Length',
                  defaultValue: '256',
                },
                {
                  name: 'selectOptions',
                  type: 'array',
                  label: 'Select Options (for dropdown fields)',
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Option Label',
                      required: true,
                    },
                    {
                      name: 'value',
                      type: 'text',
                      label: 'Option Value',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Field',
                  defaultValue: true,
                },
                {
                  name: 'className',
                  type: 'text',
                  label: 'Additional CSS Classes',
                  defaultValue: 'text-field w-input',
                },
              ],
              defaultValue: [
                {
                  fieldType: 'text',
                  name: 'name',
                  placeholder: 'Name',
                  required: false,
                  maxLength: '256',
                  show: true,
                  className: 'text-field w-input',
                },
                {
                  fieldType: 'email',
                  name: 'email',
                  placeholder: 'Email',
                  required: true,
                  maxLength: '256',
                  show: true,
                  className: 'text-field w-input',
                },
                {
                  fieldType: 'text',
                  name: 'Company',
                  placeholder: 'Company',
                  required: true,
                  maxLength: '256',
                  show: true,
                  className: 'text-field w-input',
                },
                {
                  fieldType: 'select',
                  name: 'Budget',
                  placeholder: 'Budget',
                  required: true,
                  show: true,
                  className: 'text-field select w-select',
                  selectOptions: [
                    { label: '1-10', value: '1-10' },
                    { label: '10-100', value: '10-100' },
                    { label: '100-1000', value: '100-1000' },
                  ],
                },
                {
                  fieldType: 'textarea',
                  name: 'Your-Goals',
                  placeholder: 'Your Goals',
                  required: true,
                  maxLength: '5000',
                  show: true,
                  className: 'text-field textarea w-input',
                },
              ],
            },
          ],
        },

        // Contact Info Items
        {
          name: 'contactInfoItems',
          type: 'array',
          label: 'Contact Info Items',
          admin: {
            description: 'Drag to reorder contact info items (email, phone, address, etc.)',
          },
          fields: [
            {
              name: 'type',
              type: 'select',
              label: 'Item Type',
              options: [
                { label: 'Email', value: 'email' },
                { label: 'Phone', value: 'phone' },
                { label: 'Address', value: 'address' },
                { label: 'Social Link', value: 'social' },
                { label: 'Custom', value: 'custom' },
              ],
              defaultValue: 'email',
            },
            {
              name: 'value',
              type: 'text',
              label: 'Display Text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Link URL (optional)',
              admin: {
                description: 'e.g., mailto:hello@example.com or tel:+16041234567',
              },
            },
            {
              name: 'iconSvg',
              type: 'textarea',
              label: 'Icon SVG Markup',
              admin: {
                description: 'Paste inline SVG code for the icon',
              },
            },
            {
              name: 'iconImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Icon Image (alternative to SVG)',
            },
            {
              name: 'iconColor',
              type: 'text',
              label: 'Icon Color',
              defaultValue: '#081122',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#081122',
            },
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Item',
              defaultValue: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'Additional CSS Classes',
              defaultValue: 'contact-item',
            },
          ],
          defaultValue: [
            {
              type: 'email',
              value: 'hello@markestudio.com',
              url: 'mailto:hello@markestudio.com',
              iconColor: '#081122',
              textColor: '#081122',
              show: true,
              className: 'contact-item',
            },
            {
              type: 'phone',
              value: '+1 (604) 123-4567',
              url: 'tel:+16041234567',
              iconColor: '#081122',
              textColor: '#081122',
              show: true,
              className: 'contact-item',
            },
          ],
        },

        // Office Image
        {
          name: 'officeImage',
          type: 'group',
          label: 'Office / Panel Image',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Office Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL (fallback)',
              defaultValue:
                'https://cdn.prod.website-files.com/68becb4858a3e743d2ec5a6d/68c29787f8f1f9d4eaadbba6_Rectangle%201000001838.avif',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Office',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Width',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Height',
            },
            {
              name: 'objectFit',
              type: 'select',
              label: 'Object Fit',
              options: [
                { label: 'Cover', value: 'cover' },
                { label: 'Contain', value: 'contain' },
                { label: 'Fill', value: 'fill' },
                { label: 'None', value: 'none' },
              ],
              defaultValue: 'cover',
            },
          ],
        },

        // Close Button
        {
          name: 'closeButton',
          type: 'group',
          label: 'Close Button',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Close Button',
              defaultValue: true,
            },
            {
              name: 'iconColor',
              type: 'text',
              label: 'Icon Color',
              defaultValue: '#081122',
            },
            {
              name: 'iconBackgroundColor',
              type: 'text',
              label: 'Icon Background Color',
              defaultValue: 'rgba(8,17,34,0.2)',
            },
            {
              name: 'iconSize',
              type: 'text',
              label: 'Icon Size',
              defaultValue: '32',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Additional CSS Classes',
              defaultValue: 'close-btn',
            },
          ],
        },
      ],
    },

    // ─── Section Order ─────────────────────────────────────────────────────────
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder the visible sections within the navbar',
      },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Brand / Logo', value: 'brand' },
            { label: 'Navigation Links', value: 'navLinks' },
            { label: 'CTA Button (Desktop Right)', value: 'ctaButton' },
            { label: 'Mobile Menu Button', value: 'mobileMenu' },
            { label: 'Contact Panel', value: 'contactPanel' },
          ],
        },
      ],
      defaultValue: [
        { section: 'brand' },
        { section: 'navLinks' },
        { section: 'ctaButton' },
        { section: 'mobileMenu' },
        { section: 'contactPanel' },
      ],
    },

    // ─── Global Styles ─────────────────────────────────────────────────────────
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'navbarHeight',
          type: 'text',
          label: 'Navbar Height',
          admin: {
            description: 'CSS height value (e.g., 72px)',
          },
          defaultValue: '72px',
        },
        {
          name: 'navbarPadding',
          type: 'text',
          label: 'Navbar Padding',
          admin: {
            description: 'CSS padding value (e.g., 0 24px)',
          },
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
        },
        {
          name: 'linkFontSize',
          type: 'text',
          label: 'Nav Link Font Size',
          defaultValue: '14px',
        },
        {
          name: 'linkFontWeight',
          type: 'text',
          label: 'Nav Link Font Weight',
          defaultValue: '500',
        },
        {
          name: 'linkLetterSpacing',
          type: 'text',
          label: 'Nav Link Letter Spacing',
        },
        {
          name: 'linkTextTransform',
          type: 'select',
          label: 'Nav Link Text Transform',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Uppercase', value: 'uppercase' },
            { label: 'Lowercase', value: 'lowercase' },
            { label: 'Capitalize', value: 'capitalize' },
          ],
          defaultValue: 'none',
        },
        {
          name: 'linkSpacing',
          type: 'text',
          label: 'Gap Between Nav Links',
          admin: {
            description: 'CSS gap value (e.g., 24px, 2rem)',
          },
        },
        {
          name: 'transitionDuration',
          type: 'text',
          label: 'Transition Duration',
          defaultValue: '300ms',
        },
        {
          name: 'transitionEasing',
          type: 'text',
          label: 'Transition Easing',
          defaultValue: 'ease',
        },
        {
          name: 'zIndex',
          type: 'text',
          label: 'Z-Index',
          defaultValue: '1000',
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Box Shadow',
          admin: {
            description: 'CSS box-shadow value when scrolled/sticky',
          },
        },
      ],
    },

    // ─── Mobile Settings ───────────────────────────────────────────────────────
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
          name: 'mobileBackgroundColor',
          type: 'text',
          label: 'Mobile Menu Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'mobileLinkColor',
          type: 'text',
          label: 'Mobile Link Color',
          defaultValue: '#081122',
        },
        {
          name: 'mobileLinkFontSize',
          type: 'text',
          label: 'Mobile Link Font Size',
          defaultValue: '18px',
        },
        {
          name: 'mobileMenuPadding',
          type: 'text',
          label: 'Mobile Menu Padding',
          defaultValue: '24px',
        },
        {
          name: 'mobileShowCTA',
          type: 'checkbox',
          label: 'Show CTA in Mobile Menu',
          defaultValue: true,
        },
        {
          name: 'mobileLogoScale',
          type: 'text',
          label: 'Mobile Logo Scale',
          admin: {
            description: 'Scale factor for logo on mobile (e.g., 0.8)',
          },
          defaultValue: '1',
        },
      ],
    },

    // ─── Animation Settings ────────────────────────────────────────────────────
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
          name: 'navLinkHoverAnimation',
          type: 'select',
          label: 'Nav Link Hover Animation',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Slide Up (Dual Text)', value: 'slide-up' },
            { label: 'Underline', value: 'underline' },
            { label: 'Fade', value: 'fade' },
          ],
          defaultValue: 'slide-up',
          admin: {
            description:
              'The dual text slide-up effect replicates the original Webflow component behaviour',
          },
        },
        {
          name: 'menuOpenDuration',
          type: 'text',
          label: 'Mobile Menu Open Duration',
          defaultValue: '300ms',
        },
        {
          name: 'contactPanelOpenDuration',
          type: 'text',
          label: 'Contact Panel Open Duration',
          defaultValue: '400ms',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          defaultValue: 'ease-in-out',
        },
      ],
    },

    // ─── Accessibility Settings ────────────────────────────────────────────────
    {
      name: 'accessibilitySettings',
      type: 'group',
      label: 'Accessibility Settings',
      fields: [
        {
          name: 'navAriaLabel',
          type: 'text',
          label: 'Navigation ARIA Label',
          defaultValue: 'Main navigation',
        },
        {
          name: 'skipToContentLink',
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
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Outline Color',
          admin: {
            description: 'CSS color for keyboard focus outlines',
          },
          defaultValue: '#3a6fa0',
        },
        {
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
        },
      ],
    },

    // ─── Advanced Settings ─────────────────────────────────────────────────────
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
            description: 'Add custom CSS styles for the navbar',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Add custom JS for this navbar',
          },
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          admin: {
            description: 'Attach custom data attributes to navbar elements',
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
                { label: 'Navbar Wrapper', value: 'navbar' },
                { label: 'Brand / Logo', value: 'brand' },
                { label: 'Nav Links', value: 'navLinks' },
                { label: 'CTA Button', value: 'ctaButton' },
                { label: 'Mobile Menu', value: 'mobileMenu' },
                { label: 'Contact Panel', value: 'contactPanel' },
              ],
            },
          ],
        },
        {
          name: 'lazyLoadImages',
          type: 'checkbox',
          label: 'Lazy Load Images',
          defaultValue: true,
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Caching',
          defaultValue: true,
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
