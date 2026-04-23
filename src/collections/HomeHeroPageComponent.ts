// // Payload CMS Collection Config
// // Copy this file into your Payload CMS project and add:
// //   import { CollectionConfig } from 'payload'
// // then register it in your payload.config.ts collections array.

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const HomeHeroPageComponent: any = {
//   slug: 'home-hero-page-component',
//   admin: {
//     useAsTitle: 'componentName',
//     defaultColumns: ['componentName', 'updatedAt'],
//     group: 'Components',
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'componentName',
//       type: 'text',
//       required: true,
//       defaultValue: 'Home Hero Page Component',
//     },

//     // ─── HERO SECTION ───────────────────────────────────────────────────────────
//     {
//       name: 'heroSection',
//       type: 'group',
//       label: 'Hero Section',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional CSS Classes',
//           admin: {
//             description: 'e.g., home-hero',
//           },
//           defaultValue: 'home-hero',
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//           admin: {
//             description: 'CSS color value (e.g., #000000, rgba(0,0,0,0.8))',
//           },
//         },
//         {
//           name: 'containerClassName',
//           type: 'text',
//           label: 'Inner Container CSS Classes',
//           defaultValue: 'black-hero-container',
//         },

//         // Title Lines
//         {
//           name: 'titleLines',
//           type: 'array',
//           label: 'Title Lines',
//           admin: {
//             description: 'Drag to reorder title lines displayed in the hero',
//           },
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Line Text',
//               required: true,
//             },
//             {
//               name: 'showDecorativeLine',
//               type: 'checkbox',
//               label: 'Show Decorative Horizontal Line Before This Text',
//               defaultValue: false,
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//               admin: {
//                 description: 'CSS color value — leave blank to inherit global',
//               },
//             },
//             {
//               name: 'fontSize',
//               type: 'text',
//               label: 'Font Size',
//               admin: {
//                 description: 'CSS font-size value (e.g., 72px, 5rem)',
//               },
//             },
//           ],
//           defaultValue: [
//             {
//               text: 'Care that restores.',
//               showDecorativeLine: false,
//             },
//             {
//               text: 'Results that last.',
//               showDecorativeLine: true,
//             },
//           ],
//         },

//         // CTA Buttons
//         {
//           name: 'buttons',
//           type: 'array',
//           label: 'CTA Buttons',
//           admin: {
//             description: 'Drag to reorder hero CTA buttons',
//           },
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Button Text',
//               required: true,
//             },
//             {
//               name: 'url',
//               type: 'text',
//               label: 'Button URL',
//               required: true,
//             },
//             {
//               name: 'variant',
//               type: 'select',
//               label: 'Button Style Variant',
//               options: [
//                 { label: 'Primary (Filled)', value: 'primary' },
//                 { label: 'Secondary (Ghost / Outline)', value: 'secondary' },
//               ],
//               defaultValue: 'primary',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Background Color',
//               admin: {
//                 description: 'CSS color value — overrides variant default',
//               },
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//             },
//             {
//               name: 'hoverBackgroundColor',
//               type: 'text',
//               label: 'Hover Background Color',
//             },
//             {
//               name: 'borderColor',
//               type: 'text',
//               label: 'Border Color',
//             },
//             {
//               name: 'ariaLabel',
//               type: 'text',
//               label: 'ARIA Label',
//             },
//             {
//               name: 'openNewTab',
//               type: 'checkbox',
//               label: 'Open in New Tab',
//               defaultValue: false,
//             },
//           ],
//           defaultValue: [
//             {
//               text: 'Schedule a Consultation',
//               url: '/pricing',
//               variant: 'primary',
//               backgroundColor: '#012b6f',
//               textColor: '#fff',
//               openNewTab: false,
//             },
//             {
//               text: 'Our Treatments',
//               url: '/projects',
//               variant: 'secondary',
//               openNewTab: false,
//             },
//           ],
//         },

//         // Bottom Left Content
//         {
//           name: 'bottomLeft',
//           type: 'group',
//           label: 'Bottom Left Content',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Bottom Left Block',
//               defaultValue: true,
//             },
//             {
//               name: 'shortText',
//               type: 'textarea',
//               label: 'Short Description Text',
//               defaultValue:
//                 'We specialize in comprehensive medical care for personal injury patients — from pain intervention to minimally invasive procedures — so you can focus on recovery.',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//             },
//             {
//               name: 'showScrollIndicator',
//               type: 'checkbox',
//               label: 'Show Scroll Down Indicator',
//               defaultValue: true,
//             },
//             {
//               name: 'scrollText',
//               type: 'text',
//               label: 'Scroll Indicator Label',
//               defaultValue: 'Scroll Down',
//             },
//             {
//               name: 'scrollIconColor',
//               type: 'text',
//               label: 'Scroll Icon Color',
//             },
//             {
//               name: 'scrollIconImage',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Scroll Icon Image (SVG / PNG)',
//             },
//           ],
//         },

//         // Bottom Right Trust Box
//         {
//           name: 'bottomRight',
//           type: 'group',
//           label: 'Bottom Right Trust Box',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Trust Box',
//               defaultValue: true,
//             },
//             {
//               name: 'trustText',
//               type: 'text',
//               label: 'Trust Statement Text',
//               defaultValue: 'Trusted by patients across Florida for over many years.',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//             },
//             {
//               name: 'boxBackgroundColor',
//               type: 'text',
//               label: 'Box Background Color',
//             },
//             {
//               name: 'partnerLogos',
//               type: 'array',
//               label: 'Partner / Trust Logos',
//               admin: {
//                 description: 'Drag to reorder partner logos displayed in the trust box',
//               },
//               fields: [
//                 {
//                   name: 'logo',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Logo Image',
//                 },
//                 {
//                   name: 'alt',
//                   type: 'text',
//                   label: 'Alt Text',
//                   defaultValue: 'Partner',
//                 },
//                 {
//                   name: 'width',
//                   type: 'text',
//                   label: 'Logo Width',
//                 },
//                 {
//                   name: 'height',
//                   type: 'text',
//                   label: 'Logo Height',
//                 },
//                 {
//                   name: 'backgroundColor',
//                   type: 'text',
//                   label: 'Logo Box Background Color',
//                 },
//               ],
//             },
//           ],
//         },

//         // Background Video
//         {
//           name: 'backgroundVideo',
//           type: 'group',
//           label: 'Background Video',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Background Video',
//               defaultValue: true,
//             },
//             {
//               name: 'videoMp4',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Video File (MP4)',
//             },
//             {
//               name: 'videoWebm',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Video File (WebM)',
//             },
//             {
//               name: 'posterImage',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Video Poster / Fallback Image',
//             },
//             {
//               name: 'autoplay',
//               type: 'checkbox',
//               label: 'Autoplay',
//               defaultValue: true,
//             },
//             {
//               name: 'loop',
//               type: 'checkbox',
//               label: 'Loop Video',
//               defaultValue: true,
//             },
//             {
//               name: 'muted',
//               type: 'checkbox',
//               label: 'Muted',
//               defaultValue: true,
//             },
//             {
//               name: 'objectFit',
//               type: 'select',
//               label: 'Object Fit',
//               options: [
//                 { label: 'Cover', value: 'cover' },
//                 { label: 'Contain', value: 'contain' },
//                 { label: 'Fill', value: 'fill' },
//               ],
//               defaultValue: 'cover',
//             },
//             {
//               name: 'overlayColor',
//               type: 'text',
//               label: 'Video Overlay Color',
//               admin: {
//                 description: 'Semi-transparent overlay on top of the video (e.g., rgba(0,0,0,0.4))',
//               },
//             },
//           ],
//         },
//       ],
//     },

//     // ─── ABOUT SECTION (Section 02) ─────────────────────────────────────────────
//     {
//       name: 'aboutSection',
//       type: 'group',
//       label: 'About Section (Section 02)',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional CSS Classes',
//           defaultValue: 'section-02',
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },

//         // Tag
//         {
//           name: 'tag',
//           type: 'group',
//           label: 'Section Tag',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Tag',
//               defaultValue: true,
//             },
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Tag Text',
//               defaultValue: 'About Us',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Tag Background Color',
//               defaultValue: '#015565',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Tag Text Color',
//               defaultValue: '#fff',
//             },
//             {
//               name: 'url',
//               type: 'text',
//               label: 'Tag Link URL (optional)',
//             },
//           ],
//         },

//         // Heading
//         {
//           name: 'heading',
//           type: 'richText',
//           label: 'Main Heading',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },

//         // CTA Button
//         {
//           name: 'ctaButton',
//           type: 'group',
//           label: 'CTA Button',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Button',
//               defaultValue: true,
//             },
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Button Text',
//               defaultValue: 'About us',
//             },
//             {
//               name: 'url',
//               type: 'text',
//               label: 'Button URL',
//               defaultValue: '/about',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Background Color',
//               defaultValue: '#012b6f',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//               defaultValue: '#fff',
//             },
//             {
//               name: 'hoverBackgroundColor',
//               type: 'text',
//               label: 'Hover Background Color',
//             },
//             {
//               name: 'ariaLabel',
//               type: 'text',
//               label: 'ARIA Label',
//               defaultValue: 'Learn more about us',
//             },
//             {
//               name: 'openNewTab',
//               type: 'checkbox',
//               label: 'Open in New Tab',
//               defaultValue: false,
//             },
//           ],
//         },

//         // Statistics Cards
//         {
//           name: 'statisticsCards',
//           type: 'array',
//           label: 'Statistics Cards',
//           admin: {
//             description: 'Drag to reorder statistics cards',
//           },
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Card',
//               defaultValue: true,
//             },
//             {
//               name: 'number',
//               type: 'text',
//               label: 'Statistic Number',
//               required: true,
//             },
//             {
//               name: 'suffix',
//               type: 'text',
//               label: 'Number Suffix',
//               admin: {
//                 description: 'e.g., +, %, k',
//               },
//               defaultValue: '+',
//             },
//             {
//               name: 'enableCounterAnimation',
//               type: 'checkbox',
//               label: 'Enable Scroll Counter Animation',
//               defaultValue: true,
//             },
//             {
//               name: 'label',
//               type: 'text',
//               label: 'Statistic Label',
//               required: true,
//             },
//             {
//               name: 'tag',
//               type: 'group',
//               label: 'Card Floating Tag',
//               fields: [
//                 {
//                   name: 'show',
//                   type: 'checkbox',
//                   label: 'Show Tag',
//                   defaultValue: true,
//                 },
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Tag Text',
//                 },
//                 {
//                   name: 'backgroundColor',
//                   type: 'text',
//                   label: 'Tag Background Color',
//                   defaultValue: '#015565',
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                   label: 'Tag Text Color',
//                   defaultValue: '#fff',
//                 },
//               ],
//             },
//             {
//               name: 'cardBackgroundColor',
//               type: 'text',
//               label: 'Card Background Color',
//             },
//             {
//               name: 'numberColor',
//               type: 'text',
//               label: 'Number Color',
//             },
//             {
//               name: 'labelColor',
//               type: 'text',
//               label: 'Label Color',
//             },
//             {
//               name: 'borderColor',
//               type: 'text',
//               label: 'Card Border Color',
//             },
//           ],
//           defaultValue: [
//             {
//               show: true,
//               number: '15',
//               suffix: '+',
//               enableCounterAnimation: true,
//               label: 'Years of Combined Medical Experience',
//               tag: {
//                 show: true,
//                 text: 'Experienced Team',
//                 backgroundColor: '#015565',
//                 textColor: '#fff',
//               },
//             },
//             {
//               show: true,
//               number: '10',
//               suffix: '+',
//               enableCounterAnimation: true,
//               label: 'Insurance Plans Accepted',
//               tag: {
//                 show: true,
//                 text: 'In-Network Coverage',
//                 backgroundColor: '#015565',
//                 textColor: '#fff',
//               },
//             },
//             {
//               show: true,
//               number: '5',
//               suffix: '+',
//               enableCounterAnimation: true,
//               label: 'Clinic Locations Across Florida',
//               tag: {
//                 show: true,
//                 text: 'Serving Your Area',
//                 backgroundColor: '#015565',
//                 textColor: '#fff',
//               },
//             },
//           ],
//         },
//       ],
//     },

//     // ─── SERVICES SECTION (Section 03) ──────────────────────────────────────────
//     {
//       name: 'servicesSection',
//       type: 'group',
//       label: 'Services Section (Section 03)',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional CSS Classes',
//           defaultValue: 'section-03',
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },

//         // Tag
//         {
//           name: 'tag',
//           type: 'group',
//           label: 'Section Tag',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Tag',
//               defaultValue: true,
//             },
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Tag Text',
//               defaultValue: 'Our Expertise',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Tag Background Color',
//               defaultValue: '#015565',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Tag Text Color',
//               defaultValue: '#fff',
//             },
//           ],
//         },

//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Section Heading',
//           defaultValue: 'Comprehensive care for personal injury patients',
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'headingFontSize',
//           type: 'text',
//           label: 'Heading Font Size',
//           admin: {
//             description: 'CSS font-size value (e.g., 48px, 3rem)',
//           },
//         },

//         // Service Cards
//         {
//           name: 'serviceCards',
//           type: 'array',
//           label: 'Service Cards',
//           admin: {
//             description: 'Drag to reorder service cards displayed in this section',
//           },
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Card',
//               defaultValue: true,
//             },
//             {
//               name: 'title',
//               type: 'text',
//               label: 'Service Title',
//               required: true,
//             },
//             {
//               name: 'titleColor',
//               type: 'text',
//               label: 'Title Color',
//             },
//             {
//               name: 'description',
//               type: 'textarea',
//               label: 'Service Description',
//             },
//             {
//               name: 'descriptionColor',
//               type: 'text',
//               label: 'Description Color',
//             },
//             {
//               name: 'iconBackgroundVariant',
//               type: 'select',
//               label: 'Icon Background Preset',
//               options: [
//                 { label: 'Yellow', value: 'bg-yellow' },
//                 { label: 'Green', value: 'bg-green' },
//                 { label: 'Blue', value: 'bg-blue' },
//                 { label: 'Red', value: 'bg-red' },
//                 { label: 'Custom Color', value: 'custom' },
//               ],
//               defaultValue: 'bg-yellow',
//             },
//             {
//               name: 'iconBackgroundColorCustom',
//               type: 'text',
//               label: 'Custom Icon Background Color',
//               admin: {
//                 description: 'Used only when "Custom Color" preset is selected above',
//               },
//             },
//             {
//               name: 'iconSvg',
//               type: 'textarea',
//               label: 'Icon SVG Code',
//               admin: {
//                 description: 'Paste raw SVG markup for the service icon',
//               },
//             },
//             {
//               name: 'iconImage',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Icon Image (Alternative to SVG)',
//             },
//             {
//               name: 'cardBackgroundColor',
//               type: 'text',
//               label: 'Card Background Color',
//             },
//             {
//               name: 'cardBorderColor',
//               type: 'text',
//               label: 'Card Border Color',
//             },
//             {
//               name: 'linkUrl',
//               type: 'text',
//               label: 'Card Link URL (optional)',
//             },
//             {
//               name: 'linkAriaLabel',
//               type: 'text',
//               label: 'Link ARIA Label',
//             },
//             {
//               name: 'openNewTab',
//               type: 'checkbox',
//               label: 'Open Link in New Tab',
//               defaultValue: false,
//             },
//           ],
//           defaultValue: [
//             {
//               show: true,
//               title: 'Pain Management & Intervention',
//               description:
//                 'Targeted, non-surgical pain relief treatments designed to reduce discomfort and restore your quality of life.',
//               iconBackgroundVariant: 'bg-yellow',
//             },
//             {
//               show: true,
//               title: 'Orthopedic & Spine Care',
//               description:
//                 'Expert diagnosis and treatment of spine, neck, and joint injuries caused by accidents or trauma.',
//               iconBackgroundVariant: 'bg-green',
//             },
//             {
//               show: true,
//               title: 'Regenerative Medicine',
//               description:
//                 'Advanced regenerative therapies that promote natural healing, reduce inflammation, and accelerate recovery.',
//               iconBackgroundVariant: 'bg-yellow',
//             },
//             {
//               show: true,
//               title: 'Minimally Invasive Surgery',
//               description:
//                 'World-class surgical procedures through tiny incisions — less scarring, faster recovery, and better outcomes.',
//               iconBackgroundVariant: 'bg-blue',
//             },
//             {
//               show: true,
//               title: 'Physical Rehabilitation',
//               description:
//                 'Personalized rehabilitation programs to rebuild strength, restore mobility, and get you back to daily life.',
//               iconBackgroundVariant: 'bg-green',
//             },
//           ],
//         },
//       ],
//     },

//     // ─── SECTION ORDER ───────────────────────────────────────────────────────────
//     {
//       name: 'sectionOrder',
//       type: 'array',
//       label: 'Section Order',
//       admin: {
//         description: 'Drag to reorder the sections displayed on the page',
//       },
//       fields: [
//         {
//           name: 'section',
//           type: 'select',
//           label: 'Section',
//           required: true,
//           options: [
//             { label: 'Hero Section', value: 'hero' },
//             { label: 'About Section (Section 02)', value: 'about' },
//             { label: 'Services Section (Section 03)', value: 'services' },
//           ],
//         },
//       ],
//       defaultValue: [{ section: 'hero' }, { section: 'about' }, { section: 'services' }],
//     },

//     // ─── GLOBAL STYLES ───────────────────────────────────────────────────────────
//     {
//       name: 'globalStyles',
//       type: 'group',
//       label: 'Global Styles',
//       fields: [
//         {
//           name: 'containerMaxWidth',
//           type: 'text',
//           label: 'Container Max Width',
//           admin: {
//             description: 'CSS max-width (e.g., 1200px, 100%)',
//           },
//         },
//         {
//           name: 'containerPadding',
//           type: 'text',
//           label: 'Container Padding',
//           admin: {
//             description: 'CSS padding (e.g., 0 20px)',
//           },
//         },
//         {
//           name: 'sectionSpacing',
//           type: 'text',
//           label: 'Section Spacing',
//           admin: {
//             description: 'Vertical spacing between sections (e.g., 60px, 4rem)',
//           },
//         },
//         {
//           name: 'fontFamily',
//           type: 'text',
//           label: 'Font Family',
//           admin: {
//             description: 'CSS font-family value',
//           },
//         },
//         {
//           name: 'primaryColor',
//           type: 'text',
//           label: 'Primary Color',
//           defaultValue: '#012b6f',
//         },
//         {
//           name: 'secondaryColor',
//           type: 'text',
//           label: 'Secondary Color',
//           defaultValue: '#015565',
//         },
//         {
//           name: 'accentColor',
//           type: 'text',
//           label: 'Accent Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Default Text Color',
//           defaultValue: '#081122',
//         },
//         {
//           name: 'linkColor',
//           type: 'text',
//           label: 'Link Color',
//         },
//         {
//           name: 'linkHoverColor',
//           type: 'text',
//           label: 'Link Hover Color',
//         },
//       ],
//     },

//     // ─── TYPOGRAPHY SETTINGS ─────────────────────────────────────────────────────
//     {
//       name: 'typographySettings',
//       type: 'group',
//       label: 'Typography Settings',
//       fields: [
//         {
//           name: 'h1FontSize',
//           type: 'text',
//           label: 'H1 Font Size',
//         },
//         {
//           name: 'h1Color',
//           type: 'text',
//           label: 'H1 Color',
//         },
//         {
//           name: 'h1FontWeight',
//           type: 'text',
//           label: 'H1 Font Weight',
//         },
//         {
//           name: 'h2FontSize',
//           type: 'text',
//           label: 'H2 Font Size',
//         },
//         {
//           name: 'h2Color',
//           type: 'text',
//           label: 'H2 Color',
//         },
//         {
//           name: 'h2FontWeight',
//           type: 'text',
//           label: 'H2 Font Weight',
//         },
//         {
//           name: 'bodyFontSize',
//           type: 'text',
//           label: 'Body Font Size',
//         },
//         {
//           name: 'bodyLineHeight',
//           type: 'text',
//           label: 'Body Line Height',
//         },
//         {
//           name: 'paragraphSpacing',
//           type: 'text',
//           label: 'Paragraph Spacing',
//         },
//       ],
//     },

//     // ─── ANIMATION SETTINGS ──────────────────────────────────────────────────────
//     {
//       name: 'animationSettings',
//       type: 'group',
//       label: 'Animation Settings',
//       fields: [
//         {
//           name: 'enableAnimations',
//           type: 'checkbox',
//           label: 'Enable Animations',
//           defaultValue: true,
//         },
//         {
//           name: 'fadeInDuration',
//           type: 'text',
//           label: 'Fade In Duration',
//           admin: {
//             description: 'CSS duration (e.g., 1s, 800ms)',
//           },
//           defaultValue: '1s',
//         },
//         {
//           name: 'fadeInDelay',
//           type: 'text',
//           label: 'Fade In Delay',
//           defaultValue: '0s',
//         },
//         {
//           name: 'translateDistance',
//           type: 'text',
//           label: 'Translate Y Distance',
//           admin: {
//             description: 'Initial vertical offset for slide-in animation (e.g., 40px)',
//           },
//           defaultValue: '40px',
//         },
//         {
//           name: 'blurAmount',
//           type: 'text',
//           label: 'Initial Blur Amount',
//           admin: {
//             description: 'Initial blur applied before animation plays (e.g., 10px)',
//           },
//           defaultValue: '10px',
//         },
//         {
//           name: 'animationEasing',
//           type: 'text',
//           label: 'Animation Easing',
//           admin: {
//             description: 'CSS easing function (e.g., ease-in-out)',
//           },
//           defaultValue: 'ease-in-out',
//         },
//         {
//           name: 'enableScrollAnimations',
//           type: 'checkbox',
//           label: 'Enable Scroll-Triggered Animations',
//           defaultValue: true,
//         },
//         {
//           name: 'enableCounterAnimations',
//           type: 'checkbox',
//           label: 'Enable Statistics Counter Animations',
//           defaultValue: true,
//         },
//         {
//           name: 'counterDuration',
//           type: 'text',
//           label: 'Counter Animation Duration',
//           admin: {
//             description: 'How long the number count-up takes (e.g., 2s)',
//           },
//           defaultValue: '2s',
//         },
//         {
//           name: 'enableHeroLineAnimation',
//           type: 'checkbox',
//           label: 'Enable Hero Decorative Line Expand Animation',
//           defaultValue: true,
//         },
//       ],
//     },

//     // ─── MOBILE SETTINGS ─────────────────────────────────────────────────────────
//     {
//       name: 'mobileSettings',
//       type: 'group',
//       label: 'Mobile Settings',
//       fields: [
//         {
//           name: 'mobileBreakpoint',
//           type: 'text',
//           label: 'Mobile Breakpoint',
//           defaultValue: '768px',
//         },
//         {
//           name: 'tabletBreakpoint',
//           type: 'text',
//           label: 'Tablet Breakpoint',
//           defaultValue: '1024px',
//         },
//         {
//           name: 'mobileStackSections',
//           type: 'checkbox',
//           label: 'Stack Content Vertically on Mobile',
//           defaultValue: true,
//         },
//         {
//           name: 'disableVideoOnMobile',
//           type: 'checkbox',
//           label: 'Disable Background Video on Mobile',
//           admin: {
//             description: 'Show poster image instead of video on small screens',
//           },
//           defaultValue: true,
//         },
//         {
//           name: 'mobileHideElements',
//           type: 'text',
//           label: 'Mobile Hidden Elements',
//           admin: {
//             description: 'Comma-separated CSS class names to hide on mobile',
//           },
//         },
//         {
//           name: 'mobileFontSizeAdjustment',
//           type: 'text',
//           label: 'Mobile Font Size Scale',
//           admin: {
//             description: 'Percentage scale for fonts on mobile (e.g., 80%)',
//           },
//           defaultValue: '100%',
//         },
//       ],
//     },

//     // ─── SEO SETTINGS ────────────────────────────────────────────────────────────
//     {
//       name: 'seoSettings',
//       type: 'group',
//       label: 'SEO Settings',
//       fields: [
//         {
//           name: 'metaTitle',
//           type: 'text',
//           label: 'Meta Title',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//           label: 'Meta Description',
//         },
//         {
//           name: 'ogImage',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'OG / Social Share Image',
//         },
//         {
//           name: 'keywords',
//           type: 'text',
//           label: 'Keywords',
//           admin: {
//             description: 'Comma-separated keywords',
//           },
//         },
//         {
//           name: 'canonicalUrl',
//           type: 'text',
//           label: 'Canonical URL',
//         },
//         {
//           name: 'robots',
//           type: 'select',
//           label: 'Robots Meta Tag',
//           options: [
//             { label: 'Index, Follow', value: 'index,follow' },
//             { label: 'No Index, Follow', value: 'noindex,follow' },
//             { label: 'Index, No Follow', value: 'index,nofollow' },
//             { label: 'No Index, No Follow', value: 'noindex,nofollow' },
//           ],
//           defaultValue: 'index,follow',
//         },
//         {
//           name: 'structuredData',
//           type: 'textarea',
//           label: 'Structured Data (JSON-LD)',
//           admin: {
//             description: 'Add schema.org structured data in JSON-LD format',
//           },
//         },
//       ],
//     },

//     // ─── ACCESSIBILITY SETTINGS ──────────────────────────────────────────────────
//     {
//       name: 'accessibilitySettings',
//       type: 'group',
//       label: 'Accessibility Settings',
//       fields: [
//         {
//           name: 'skipToContent',
//           type: 'checkbox',
//           label: 'Include Skip to Content Link',
//           defaultValue: true,
//         },
//         {
//           name: 'ariaLabelsEnabled',
//           type: 'checkbox',
//           label: 'Enable ARIA Labels',
//           defaultValue: true,
//         },
//         {
//           name: 'altTextRequired',
//           type: 'checkbox',
//           label: 'Require Alt Text for Images',
//           defaultValue: true,
//         },
//         {
//           name: 'focusVisibleColor',
//           type: 'text',
//           label: 'Focus Ring Color',
//           admin: {
//             description: 'Color for keyboard focus outlines',
//           },
//         },
//         {
//           name: 'keyboardNavigationEnabled',
//           type: 'checkbox',
//           label: 'Enhanced Keyboard Navigation',
//           defaultValue: true,
//         },
//         {
//           name: 'reducedMotionRespected',
//           type: 'checkbox',
//           label: 'Respect prefers-reduced-motion',
//           admin: {
//             description: 'Disable animations for users who prefer reduced motion',
//           },
//           defaultValue: true,
//         },
//       ],
//     },

//     // ─── ADVANCED SETTINGS ───────────────────────────────────────────────────────
//     {
//       name: 'advancedSettings',
//       type: 'group',
//       label: 'Advanced Settings',
//       fields: [
//         {
//           name: 'customCSS',
//           type: 'textarea',
//           label: 'Custom CSS',
//           admin: {
//             description: 'Additional CSS applied only to this component',
//           },
//         },
//         {
//           name: 'customJS',
//           type: 'textarea',
//           label: 'Custom JavaScript',
//           admin: {
//             description: 'Custom JS injected for this component',
//           },
//         },
//         {
//           name: 'lazyLoadImages',
//           type: 'checkbox',
//           label: 'Lazy Load Images',
//           defaultValue: true,
//         },
//         {
//           name: 'enableCaching',
//           type: 'checkbox',
//           label: 'Enable Component Caching',
//           defaultValue: true,
//         },
//         {
//           name: 'preloadCriticalAssets',
//           type: 'checkbox',
//           label: 'Preload Critical Assets',
//           defaultValue: true,
//         },
//         {
//           name: 'dataAttributes',
//           type: 'array',
//           label: 'Custom Data Attributes',
//           admin: {
//             description: 'Add data-* attributes to specific sections',
//           },
//           fields: [
//             {
//               name: 'attribute',
//               type: 'text',
//               label: 'Attribute Name',
//               admin: {
//                 description: 'e.g., data-tracking-id',
//               },
//             },
//             {
//               name: 'value',
//               type: 'text',
//               label: 'Attribute Value',
//             },
//             {
//               name: 'targetSection',
//               type: 'select',
//               label: 'Apply To Section',
//               options: [
//                 { label: 'Hero Section', value: 'hero' },
//                 { label: 'About Section', value: 'about' },
//                 { label: 'Services Section', value: 'services' },
//               ],
//             },
//           ],
//         },
//       ],
//     },

//     // ─── INTEGRATION SETTINGS ────────────────────────────────────────────────────
//     {
//       name: 'integrationSettings',
//       type: 'group',
//       label: 'Integration Settings',
//       fields: [
//         {
//           name: 'googleAnalyticsId',
//           type: 'text',
//           label: 'Google Analytics ID',
//         },
//         {
//           name: 'facebookPixelId',
//           type: 'text',
//           label: 'Facebook Pixel ID',
//         },
//         {
//           name: 'conversionTrackingEnabled',
//           type: 'checkbox',
//           label: 'Enable Conversion Tracking',
//           defaultValue: false,
//         },
//         {
//           name: 'marketingTags',
//           type: 'array',
//           label: 'Marketing Automation Tags',
//           fields: [
//             {
//               name: 'platform',
//               type: 'select',
//               label: 'Platform',
//               options: [
//                 { label: 'HubSpot', value: 'hubspot' },
//                 { label: 'Marketo', value: 'marketo' },
//                 { label: 'ActiveCampaign', value: 'activecampaign' },
//                 { label: 'Other', value: 'other' },
//               ],
//             },
//             {
//               name: 'tagCode',
//               type: 'textarea',
//               label: 'Tag Code',
//             },
//           ],
//         },
//       ],
//     },

//     {
//       name: 'isActive',
//       type: 'checkbox',
//       label: 'Active',
//       defaultValue: true,
//       admin: {
//         description: 'Toggle to enable/disable this component',
//       },
//     },
//   ],
//   timestamps: true,
// }









import { CollectionConfig } from 'payload'

export const HomeHeroPageComponent: CollectionConfig = {
  slug: 'home-hero-page-component',
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
      defaultValue: 'Home Hero Page Component',
    },

    // ─── HERO SECTION ────────────────────────────────────────────────────────
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
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: { description: 'e.g., home-hero' },
          defaultValue: 'home-hero',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: { description: 'CSS color value (e.g., #000000, rgba(0,0,0,0.8))' },
        },
        {
          name: 'containerClassName',
          type: 'text',
          label: 'Inner Container CSS Classes',
          defaultValue: 'black-hero-container',
        },
        {
          name: 'titleLines',
          type: 'array',
          label: 'Title Lines',
          admin: { description: 'Drag to reorder title lines displayed in the hero' },
          fields: [
            { name: 'text', type: 'text', label: 'Line Text', required: true },
            {
              name: 'showDecorativeLine',
              type: 'checkbox',
              label: 'Show Decorative Horizontal Line Before This Text',
              defaultValue: false,
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              admin: { description: 'CSS color value — leave blank to inherit global' },
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Font Size',
              admin: { description: 'CSS font-size value (e.g., 72px, 5rem)' },
            },
          ],
          defaultValue: [
            { text: 'Care that restores.', showDecorativeLine: false },
            { text: 'Results that last.', showDecorativeLine: true },
          ],
        },
        {
          name: 'buttons',
          type: 'array',
          label: 'CTA Buttons',
          admin: { description: 'Drag to reorder hero CTA buttons' },
          fields: [
            { name: 'text', type: 'text', label: 'Button Text', required: true },
            { name: 'url', type: 'text', label: 'Button URL', required: true },
            {
              name: 'variant',
              type: 'select',
              label: 'Button Style Variant',
              options: [
                { label: 'Primary (Filled)', value: 'primary' },
                { label: 'Secondary (Ghost / Outline)', value: 'secondary' },
              ],
              defaultValue: 'primary',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              admin: { description: 'CSS color value — overrides variant default' },
            },
            { name: 'textColor', type: 'text', label: 'Text Color' },
            { name: 'hoverBackgroundColor', type: 'text', label: 'Hover Background Color' },
            { name: 'borderColor', type: 'text', label: 'Border Color' },
            { name: 'ariaLabel', type: 'text', label: 'ARIA Label' },
            {
              name: 'openNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              text: 'Schedule a Consultation',
              url: '/pricing',
              variant: 'primary',
              backgroundColor: '#012b6f',
              textColor: '#fff',
              openNewTab: false,
            },
            { text: 'Our Treatments', url: '/projects', variant: 'secondary', openNewTab: false },
          ],
        },
        {
          name: 'bottomLeft',
          type: 'group',
          label: 'Bottom Left Content',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Bottom Left Block',
              defaultValue: true,
            },
            {
              name: 'shortText',
              type: 'textarea',
              label: 'Short Description Text',
              defaultValue:
                'We specialize in comprehensive medical care for personal injury patients — from pain intervention to minimally invasive procedures — so you can focus on recovery.',
            },
            { name: 'textColor', type: 'text', label: 'Text Color' },
            {
              name: 'showScrollIndicator',
              type: 'checkbox',
              label: 'Show Scroll Down Indicator',
              defaultValue: true,
            },
            {
              name: 'scrollText',
              type: 'text',
              label: 'Scroll Indicator Label',
              defaultValue: 'Scroll Down',
            },
            { name: 'scrollIconColor', type: 'text', label: 'Scroll Icon Color' },
            {
              name: 'scrollIconImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Scroll Icon Image (SVG / PNG)',
            },
          ],
        },
        {
          name: 'bottomRight',
          type: 'group',
          label: 'Bottom Right Trust Box',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Trust Box',
              defaultValue: true,
            },
            {
              name: 'trustText',
              type: 'text',
              label: 'Trust Statement Text',
              defaultValue: 'Trusted by patients across Florida for over many years.',
            },
            { name: 'textColor', type: 'text', label: 'Text Color' },
            { name: 'boxBackgroundColor', type: 'text', label: 'Box Background Color' },
            {
              name: 'partnerLogos',
              type: 'array',
              label: 'Partner / Trust Logos',
              admin: {
                description: 'Drag to reorder partner logos displayed in the trust box',
              },
              fields: [
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Logo Image',
                },
                { name: 'alt', type: 'text', label: 'Alt Text', defaultValue: 'Partner' },
                { name: 'width', type: 'text', label: 'Logo Width' },
                { name: 'height', type: 'text', label: 'Logo Height' },
                { name: 'backgroundColor', type: 'text', label: 'Logo Box Background Color' },
              ],
            },
          ],
        },
        {
          name: 'backgroundVideo',
          type: 'group',
          label: 'Background Video',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Background Video',
              defaultValue: true,
            },
            {
              name: 'videoMp4',
              type: 'upload',
              relationTo: 'media',
              label: 'Video File (MP4)',
            },
            {
              name: 'videoWebm',
              type: 'upload',
              relationTo: 'media',
              label: 'Video File (WebM)',
            },
            {
              name: 'posterImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Video Poster / Fallback Image',
            },
            { name: 'autoplay', type: 'checkbox', label: 'Autoplay', defaultValue: true },
            { name: 'loop', type: 'checkbox', label: 'Loop Video', defaultValue: true },
            { name: 'muted', type: 'checkbox', label: 'Muted', defaultValue: true },
            {
              name: 'objectFit',
              type: 'select',
              label: 'Object Fit',
              options: [
                { label: 'Cover', value: 'cover' },
                { label: 'Contain', value: 'contain' },
                { label: 'Fill', value: 'fill' },
              ],
              defaultValue: 'cover',
            },
            {
              name: 'overlayColor',
              type: 'text',
              label: 'Video Overlay Color',
              admin: {
                description: 'Semi-transparent overlay on top of the video (e.g., rgba(0,0,0,0.4))',
              },
            },
          ],
        },
      ],
    },

    // ─── ABOUT SECTION (Section 02) ──────────────────────────────────────────
    {
      name: 'aboutSection',
      type: 'group',
      label: 'About Section (Section 02)',
      fields: [
        { name: 'show', type: 'checkbox', label: 'Show Section', defaultValue: true },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'section-02',
        },
        { name: 'backgroundColor', type: 'text', label: 'Background Color' },
        { name: 'textColor', type: 'text', label: 'Text Color' },
        {
          name: 'tag',
          type: 'group',
          label: 'Section Tag',
          fields: [
            { name: 'show', type: 'checkbox', label: 'Show Tag', defaultValue: true },
            { name: 'text', type: 'text', label: 'Tag Text', defaultValue: 'About Us' },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Tag Background Color',
              defaultValue: '#015565',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Tag Text Color',
              defaultValue: '#fff',
            },
            { name: 'url', type: 'text', label: 'Tag Link URL (optional)' },
          ],
        },
        { name: 'heading', type: 'richText', label: 'Main Heading', required: true },
        { name: 'headingColor', type: 'text', label: 'Heading Color' },
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
            { name: 'show', type: 'checkbox', label: 'Show Button', defaultValue: true },
            { name: 'text', type: 'text', label: 'Button Text', defaultValue: 'About us' },
            { name: 'url', type: 'text', label: 'Button URL', defaultValue: '/about' },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#012b6f',
            },
            { name: 'textColor', type: 'text', label: 'Text Color', defaultValue: '#fff' },
            { name: 'hoverBackgroundColor', type: 'text', label: 'Hover Background Color' },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
              defaultValue: 'Learn more about us',
            },
            {
              name: 'openNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'statisticsCards',
          type: 'array',
          label: 'Statistics Cards',
          admin: { description: 'Drag to reorder statistics cards' },
          fields: [
            { name: 'show', type: 'checkbox', label: 'Show Card', defaultValue: true },
            { name: 'number', type: 'text', label: 'Statistic Number', required: true },
            {
              name: 'suffix',
              type: 'text',
              label: 'Number Suffix',
              admin: { description: 'e.g., +, %, k' },
              defaultValue: '+',
            },
            {
              name: 'enableCounterAnimation',
              type: 'checkbox',
              label: 'Enable Scroll Counter Animation',
              defaultValue: true,
            },
            { name: 'label', type: 'text', label: 'Statistic Label', required: true },
            {
              name: 'tag',
              type: 'group',
              label: 'Card Floating Tag',
              fields: [
                { name: 'show', type: 'checkbox', label: 'Show Tag', defaultValue: true },
                { name: 'text', type: 'text', label: 'Tag Text' },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Tag Background Color',
                  defaultValue: '#015565',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Tag Text Color',
                  defaultValue: '#fff',
                },
              ],
            },
            { name: 'cardBackgroundColor', type: 'text', label: 'Card Background Color' },
            { name: 'numberColor', type: 'text', label: 'Number Color' },
            { name: 'labelColor', type: 'text', label: 'Label Color' },
            { name: 'borderColor', type: 'text', label: 'Card Border Color' },
          ],
          defaultValue: [
            {
              show: true,
              number: '15',
              suffix: '+',
              enableCounterAnimation: true,
              label: 'Years of Combined Medical Experience',
              tag: {
                show: true,
                text: 'Experienced Team',
                backgroundColor: '#015565',
                textColor: '#fff',
              },
            },
            {
              show: true,
              number: '10',
              suffix: '+',
              enableCounterAnimation: true,
              label: 'Insurance Plans Accepted',
              tag: {
                show: true,
                text: 'In-Network Coverage',
                backgroundColor: '#015565',
                textColor: '#fff',
              },
            },
            {
              show: true,
              number: '5',
              suffix: '+',
              enableCounterAnimation: true,
              label: 'Clinic Locations Across Florida',
              tag: {
                show: true,
                text: 'Serving Your Area',
                backgroundColor: '#015565',
                textColor: '#fff',
              },
            },
          ],
        },
      ],
    },

    // ─── SERVICES SECTION (Section 03) ───────────────────────────────────────
    {
      name: 'servicesSection',
      type: 'group',
      label: 'Services Section (Section 03)',
      fields: [
        { name: 'show', type: 'checkbox', label: 'Show Section', defaultValue: true },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'section-03',
        },
        { name: 'backgroundColor', type: 'text', label: 'Background Color' },
        { name: 'textColor', type: 'text', label: 'Text Color' },
        {
          name: 'tag',
          type: 'group',
          label: 'Section Tag',
          fields: [
            { name: 'show', type: 'checkbox', label: 'Show Tag', defaultValue: true },
            { name: 'text', type: 'text', label: 'Tag Text', defaultValue: 'Our Expertise' },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Tag Background Color',
              defaultValue: '#015565',
            },
            { name: 'textColor', type: 'text', label: 'Tag Text Color', defaultValue: '#fff' },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'Comprehensive care for personal injury patients',
        },
        { name: 'headingColor', type: 'text', label: 'Heading Color' },
        {
          name: 'headingFontSize',
          type: 'text',
          label: 'Heading Font Size',
          admin: { description: 'CSS font-size value (e.g., 48px, 3rem)' },
        },
        {
          name: 'serviceCards',
          type: 'array',
          label: 'Service Cards',
          admin: {
            description: 'Drag to reorder service cards displayed in this section',
          },
          fields: [
            { name: 'show', type: 'checkbox', label: 'Show Card', defaultValue: true },
            { name: 'title', type: 'text', label: 'Service Title', required: true },
            { name: 'titleColor', type: 'text', label: 'Title Color' },
            { name: 'description', type: 'textarea', label: 'Service Description' },
            { name: 'descriptionColor', type: 'text', label: 'Description Color' },
            {
              name: 'iconBackgroundVariant',
              type: 'select',
              label: 'Icon Background Preset',
              options: [
                { label: 'Yellow', value: 'bg-yellow' },
                { label: 'Green', value: 'bg-green' },
                { label: 'Blue', value: 'bg-blue' },
                { label: 'Red', value: 'bg-red' },
                { label: 'Custom Color', value: 'custom' },
              ],
              defaultValue: 'bg-yellow',
            },
            {
              name: 'iconBackgroundColorCustom',
              type: 'text',
              label: 'Custom Icon Background Color',
              admin: { description: 'Used only when "Custom Color" preset is selected above' },
            },
            {
              name: 'iconSvg',
              type: 'textarea',
              label: 'Icon SVG Code',
              admin: { description: 'Paste raw SVG markup for the service icon' },
            },
            {
              name: 'iconImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Icon Image (Alternative to SVG)',
            },
            { name: 'cardBackgroundColor', type: 'text', label: 'Card Background Color' },
            { name: 'cardBorderColor', type: 'text', label: 'Card Border Color' },
            { name: 'linkUrl', type: 'text', label: 'Card Link URL (optional)' },
            { name: 'linkAriaLabel', type: 'text', label: 'Link ARIA Label' },
            {
              name: 'openNewTab',
              type: 'checkbox',
              label: 'Open Link in New Tab',
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              show: true,
              title: 'Pain Management & Intervention',
              description:
                'Targeted, non-surgical pain relief treatments designed to reduce discomfort and restore your quality of life.',
              iconBackgroundVariant: 'bg-yellow',
            },
            {
              show: true,
              title: 'Orthopedic & Spine Care',
              description:
                'Expert diagnosis and treatment of spine, neck, and joint injuries caused by accidents or trauma.',
              iconBackgroundVariant: 'bg-green',
            },
            {
              show: true,
              title: 'Regenerative Medicine',
              description:
                'Advanced regenerative therapies that promote natural healing, reduce inflammation, and accelerate recovery.',
              iconBackgroundVariant: 'bg-yellow',
            },
            {
              show: true,
              title: 'Minimally Invasive Surgery',
              description:
                'World-class surgical procedures through tiny incisions — less scarring, faster recovery, and better outcomes.',
              iconBackgroundVariant: 'bg-blue',
            },
            {
              show: true,
              title: 'Physical Rehabilitation',
              description:
                'Personalized rehabilitation programs to rebuild strength, restore mobility, and get you back to daily life.',
              iconBackgroundVariant: 'bg-green',
            },
          ],
        },
      ],
    },

    // ─── TESTIMONIAL SECTION (from AlleAwardsPageComponent) ──────────────────
    {
      name: 'testimonialSection',
      type: 'group',
      label: 'Testimonial Section',
      fields: [
        { name: 'show', type: 'checkbox', label: 'Show Section', defaultValue: true },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: { description: 'e.g., testimonial dark' },
          defaultValue: 'testimonial',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: { description: 'CSS color value — overrides background image if set' },
        },
        {
          name: 'backgroundImageUpload',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image (Upload)',
        },
        {
          name: 'backgroundImageUrl',
          type: 'text',
          label: 'Background Image URL (External)',
          admin: { description: 'Used when no upload is provided' },
          defaultValue:
            'https://images.unsplash.com/photo-1640876777012-bdb00a6323e2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          label: 'Background Image Alt Text',
          defaultValue: 'Testimonial background',
        },
        {
          name: 'minHeight',
          type: 'text',
          label: 'Section Min Height',
          admin: { description: 'CSS min-height value (e.g., 500px, 60vh)' },
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
          admin: { description: 'CSS padding-top value' },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: { description: 'CSS padding-bottom value' },
        },
        {
          name: 'tagBox',
          type: 'group',
          label: 'Tag Box ("Our Promise")',
          fields: [
            { name: 'show', type: 'checkbox', label: 'Show Tag Box', defaultValue: true },
            { name: 'label', type: 'text', label: 'Tag Label', defaultValue: 'Our Promise' },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Tag Background Color',
              admin: { description: 'CSS color value (e.g., #015565)' },
              defaultValue: '#015565',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Tag Text Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Border Radius',
              admin: { description: 'CSS border-radius value (e.g., 4px, 50px)' },
            },
            { name: 'fontSize', type: 'text', label: 'Font Size' },
          ],
        },
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote Text',
          defaultValue:
            '"We built this practice with one goal in mind — to give every personal injury patient access to expert care, real answers, and a recovery plan they can trust from day one."',
        },
        { name: 'quoteColor', type: 'text', label: 'Quote Text Color' },
        {
          name: 'quoteFontSize',
          type: 'text',
          label: 'Quote Font Size',
          admin: { description: 'CSS font-size value' },
        },
        { name: 'quoteFontWeight', type: 'text', label: 'Quote Font Weight' },
        { name: 'quoteClassName', type: 'text', label: 'Quote CSS Class', defaultValue: 'h-03' },
        {
          name: 'author',
          type: 'group',
          label: 'Author',
          fields: [
            { name: 'name', type: 'text', label: 'Author Name', defaultValue: 'Someone' },
            { name: 'nameColor', type: 'text', label: 'Name Color' },
            { name: 'nameFontSize', type: 'text', label: 'Name Font Size' },
            {
              name: 'nameClassName',
              type: 'text',
              label: 'Name CSS Class',
              defaultValue: 'h-05',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Author Title / Role',
              defaultValue: 'Founder & Lead Physician',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
              defaultValue: '#ffffff',
            },
            { name: 'titleFontSize', type: 'text', label: 'Title Font Size' },
          ],
        },
        {
          name: 'testimonialAnimationSettings',
          type: 'group',
          label: 'Testimonial Animation Settings',
          fields: [
            {
              name: 'enableAnimation',
              type: 'checkbox',
              label: 'Enable Scroll Animations',
              defaultValue: true,
            },
            {
              name: 'initialTranslateY',
              type: 'text',
              label: 'Initial Translate Y',
              admin: { description: 'Starting vertical offset (e.g., 40px)' },
              defaultValue: '40px',
            },
            {
              name: 'initialBlur',
              type: 'text',
              label: 'Initial Blur',
              admin: { description: 'Starting blur filter (e.g., 10px)' },
              defaultValue: '10px',
            },
            {
              name: 'initialOpacity',
              type: 'text',
              label: 'Initial Opacity',
              admin: { description: 'Starting opacity 0–1' },
              defaultValue: '0',
            },
          ],
        },
      ],
    },

    // ─── SERVICES SECTION 05 (from AlleAwardsPageComponent) ──────────────────
    {
      name: 'servicesSection05',
      type: 'group',
      label: 'Services Section (Section-05)',
      fields: [
        { name: 'show', type: 'checkbox', label: 'Show Section', defaultValue: true },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'section-05',
        },
        { name: 'backgroundColor', type: 'text', label: 'Background Color' },
        { name: 'textColor', type: 'text', label: 'Text Color' },
        { name: 'paddingTop', type: 'text', label: 'Padding Top' },
        { name: 'paddingBottom', type: 'text', label: 'Padding Bottom' },
        {
          name: 'header',
          type: 'group',
          label: 'Section Header',
          fields: [
            {
              name: 'tagBox',
              type: 'group',
              label: 'Tag Box ("Our Services")',
              fields: [
                { name: 'show', type: 'checkbox', label: 'Show Tag Box', defaultValue: true },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Tag Label',
                  defaultValue: 'Our Services',
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Tag Background Color',
                  defaultValue: '#015565',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Tag Text Color',
                  defaultValue: '#ffffff',
                },
                { name: 'borderRadius', type: 'text', label: 'Border Radius' },
              ],
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Section Heading',
              defaultValue: 'Advanced Spine Care & Treatment Options',
            },
            { name: 'headingColor', type: 'text', label: 'Heading Color' },
            { name: 'headingFontSize', type: 'text', label: 'Heading Font Size' },
            {
              name: 'headingMaxWidth',
              type: 'text',
              label: 'Heading Max Width',
              admin: { description: 'e.g., 538px' },
              defaultValue: '538px',
            },
            {
              name: 'headingClassName',
              type: 'text',
              label: 'Heading CSS Class',
              defaultValue: 'h-02',
            },
            {
              name: 'ctaButton',
              type: 'group',
              label: 'Header CTA Button',
              fields: [
                { name: 'show', type: 'checkbox', label: 'Show CTA Button', defaultValue: true },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'View All Services',
                },
                { name: 'url', type: 'text', label: 'Button URL', defaultValue: '/projects' },
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
                  defaultValue: '#012b6f',
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
                  label: 'Button Hover Background Color',
                },
                { name: 'hoverTextColor', type: 'text', label: 'Button Hover Text Color' },
                { name: 'borderRadius', type: 'text', label: 'Button Border Radius' },
                {
                  name: 'arrowIconUpload',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Arrow Icon (Upload)',
                },
                {
                  name: 'arrowIconUrl',
                  type: 'text',
                  label: 'Arrow Icon URL (External)',
                  defaultValue:
                    'https://cdn.prod.website-files.com/68becb4858a3e743d2ec5a6d/68febf6e45a50554ad211cf1_Frame%202147230510.svg',
                },
                {
                  name: 'arrowIconAlt',
                  type: 'text',
                  label: 'Arrow Icon Alt Text',
                  defaultValue: 'Arrow Icon',
                },
              ],
            },
          ],
        },
        {
          name: 'serviceCards05',
          type: 'array',
          label: 'Service Cards (Section-05)',
          admin: {
            description: 'Drag to reorder cards. Each card maps to a project-card on the page.',
          },
          fields: [
            { name: 'show', type: 'checkbox', label: 'Show Card', defaultValue: true },
            {
              name: 'cardVariant',
              type: 'select',
              label: 'Card Layout Variant',
              options: [
                { label: 'Standard (single column)', value: 'standard' },
                { label: 'Wide (double column)', value: 'wide' },
              ],
              defaultValue: 'standard',
              admin: { description: 'Wide variant uses the _02 wrapper class' },
            },
            { name: 'cardBackgroundColor', type: 'text', label: 'Card Background Color' },
            { name: 'linkUrl', type: 'text', label: 'Card Link URL', required: true },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open Card Link in New Tab',
              defaultValue: false,
            },
            { name: 'title', type: 'text', label: 'Card Title', required: true },
            { name: 'titleColor', type: 'text', label: 'Title Color' },
            { name: 'titleFontSize', type: 'text', label: 'Title Font Size' },
            {
              name: 'titleClassName',
              type: 'text',
              label: 'Title CSS Class',
              defaultValue: 'h-04',
            },
            { name: 'description', type: 'textarea', label: 'Card Description', required: true },
            { name: 'descriptionColor', type: 'text', label: 'Description Color' },
            {
              name: 'condition',
              type: 'group',
              label: 'Condition Info',
              fields: [
                { name: 'show', type: 'checkbox', label: 'Show Condition Row', defaultValue: true },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Condition Label',
                  defaultValue: 'Condition:',
                },
                { name: 'labelColor', type: 'text', label: 'Label Color' },
                { name: 'value', type: 'text', label: 'Condition Value', required: true },
                { name: 'valueColor', type: 'text', label: 'Value Color' },
              ],
            },
            {
              name: 'treatmentLabel',
              type: 'text',
              label: 'Treatment Row Label',
              defaultValue: 'Treatment:',
            },
            { name: 'treatmentLabelColor', type: 'text', label: 'Treatment Label Color' },
            {
              name: 'treatments',
              type: 'array',
              label: 'Treatment Tags',
              admin: { description: 'Drag to reorder treatment tags within this card' },
              fields: [
                { name: 'label', type: 'text', label: 'Treatment Name', required: true },
                { name: 'textColor', type: 'text', label: 'Tag Text Color' },
                { name: 'backgroundColor', type: 'text', label: 'Tag Background Color' },
              ],
            },
            {
              name: 'learnMoreText',
              type: 'text',
              label: '"Learn More" Button Text',
              defaultValue: 'Learn More',
            },
            { name: 'learnMoreColor', type: 'text', label: '"Learn More" Text Color' },
            { name: 'image', type: 'upload', relationTo: 'media', label: 'Card Image' },
            { name: 'imageAlt', type: 'text', label: 'Image Alt Text' },
            {
              name: 'imageObjectFit',
              type: 'select',
              label: 'Image Object Fit',
              options: [
                { label: 'Cover', value: 'cover' },
                { label: 'Contain', value: 'contain' },
                { label: 'Fill', value: 'fill' },
              ],
              defaultValue: 'cover',
            },
          ],
          defaultValue: [
            {
              show: true,
              cardVariant: 'standard',
              linkUrl: '/project/buuls-spoon-nigmt',
              openInNewTab: false,
              title: 'Pain Management & Intervention',
              titleClassName: 'h-04',
              description:
                'Non-surgical, targeted pain relief treatments designed to reduce discomfort, manage chronic pain, and restore your quality of life after injury.',
              condition: { show: true, label: 'Condition:', value: 'Chronic & Acute Pain' },
              treatmentLabel: 'Treatment:',
              treatments: [{ label: 'Injections' }, { label: 'Non-Surgical' }],
              learnMoreText: 'Learn More',
              imageAlt: '',
              imageObjectFit: 'cover',
            },
            {
              show: true,
              cardVariant: 'wide',
              linkUrl: '/project/poon-3d-product-design',
              openInNewTab: false,
              title: 'Minimally Invasive Surgery',
              titleClassName: 'h-04',
              description:
                'World-class surgical procedures performed through tiny incisions — less scarring, minimal blood loss, shorter anesthesia time, and recovery in as little as 3 days.',
              condition: { show: true, label: 'Condition:', value: 'Spine & Joint Injuries' },
              treatmentLabel: 'Treatment:',
              treatments: [{ label: 'Micro-Surgery' }, { label: 'Same-Day Discharge' }],
              learnMoreText: 'Learn More',
              imageAlt: '',
              imageObjectFit: 'cover',
            },
            {
              show: true,
              cardVariant: 'standard',
              linkUrl: '/project/splind-brand-website-design',
              openInNewTab: false,
              title: 'Physical Rehabilitation',
              titleClassName: 'h-04',
              description:
                'Personalized rehabilitation programs to rebuild strength, restore mobility, and get you safely back to work and daily life after injury.',
              condition: { show: true, label: 'Condition:', value: 'Muscle & Mobility Loss' },
              treatmentLabel: 'Treatment:',
              treatments: [{ label: 'Physiotherapy' }, { label: 'Custom Recovery Plan' }],
              learnMoreText: 'Learn More',
              imageAlt: '',
              imageObjectFit: 'cover',
            },
          ],
        },
        {
          name: 'cardsGap',
          type: 'text',
          label: 'Gap Between Cards',
          admin: { description: 'CSS gap value (e.g., 20px, 1.5rem)' },
        },
        {
          name: 'cardsWrapperBackgroundColor',
          type: 'text',
          label: 'Cards Wrapper Background Color',
        },
      ],
    },

    // ─── CONDITIONS WE TREAT SECTION (from SpineCareComponentSections) ────────
    {
      name: 'conditionsSection',
      type: 'group',
      label: 'Section: Conditions We Treat',
      fields: [
        { name: 'show', type: 'checkbox', label: 'Show Section', defaultValue: true },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: { description: 'e.g., section-03' },
          defaultValue: 'section-03',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Section Background Color',
          admin: { description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))' },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Section Text Color',
          admin: { description: 'CSS color value' },
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
          admin: { description: 'CSS padding value (e.g., 60px, 4rem)' },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: { description: 'CSS padding value (e.g., 60px, 4rem)' },
        },
        {
          name: 'conditionsTagBox',
          type: 'group',
          label: 'Tag Box',
          fields: [
            { name: 'show', type: 'checkbox', label: 'Show Tag Box', defaultValue: true },
            {
              name: 'label',
              type: 'text',
              label: 'Tag Label',
              defaultValue: 'Conditions We Treat',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Tag Background Color',
              admin: { description: 'CSS color value (e.g., #015565)' },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Tag Text Color',
              admin: { description: 'CSS color value (e.g., #ffffff)' },
            },
            {
              name: 'variant',
              type: 'text',
              label: 'Variant (data-wf--tag-box--variant)',
              defaultValue: 'base',
              admin: { description: 'e.g., base, outlined, filled' },
            },
          ],
        },
        {
          name: 'conditionsHeading',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'Comprehensive Spine Care for a Wide Range of Conditions',
        },
        {
          name: 'conditionsHeadingColor',
          type: 'text',
          label: 'Heading Color',
          admin: { description: 'CSS color value' },
        },
        {
          name: 'conditionsHeadingFontSize',
          type: 'text',
          label: 'Heading Font Size',
          admin: { description: 'CSS font-size value (e.g., 48px, 3rem)' },
        },
        {
          name: 'conditionsHeadingMaxWidth',
          type: 'text',
          label: 'Heading Wrapper Max Width (px)',
          defaultValue: '550',
          admin: { description: 'Numeric px value for max-width on the tag-title wrapper' },
        },
        {
          name: 'conditionCards',
          type: 'array',
          label: 'Condition Cards',
          admin: {
            description:
              'Drag to reorder. Cards render 2 per row (top-left, top-right, bottom-left, bottom-right).',
          },
          fields: [
            {
              name: 'cardType',
              type: 'select',
              label: 'Card Type',
              required: true,
              options: [
                { label: 'Media Card (image + background video)', value: 'media-card' },
                { label: 'Colored Card (solid background, no media)', value: 'colored-card' },
                { label: 'Text Only Card', value: 'text-card' },
              ],
              defaultValue: 'text-card',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Card Background Color',
              admin: {
                description:
                  'CSS color value or Webflow color class (e.g., #eaf7f5, bg-green, bg-blue)',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Card Text Color',
              admin: { description: 'CSS color value' },
            },
            {
              name: 'extraClassName',
              type: 'text',
              label: 'Extra CSS Class',
              admin: {
                description: 'Additional modifier class appended to the card (e.g., _02, _04)',
              },
            },
            {
              name: 'bodyText',
              type: 'textarea',
              label: 'Body / Description Text',
              admin: { description: 'Main descriptive paragraph inside the card' },
            },
            {
              name: 'bodyTextColor',
              type: 'text',
              label: 'Body Text Color',
              admin: { description: 'CSS color value' },
            },
            {
              name: 'conditionTitle',
              type: 'text',
              label: 'Condition Title',
              admin: {
                description: 'Bold title at the bottom of the card (e.g., Back & Neck Pain)',
              },
            },
            { name: 'conditionTitleColor', type: 'text', label: 'Condition Title Color' },
            {
              name: 'conditionSubtitle',
              type: 'text',
              label: 'Condition Subtitle',
              admin: {
                description:
                  'Secondary label below the title (e.g., Chronic, acute, and injury-related pain)',
              },
            },
            {
              name: 'conditionSubtitleColor',
              type: 'text',
              label: 'Condition Subtitle Color',
              admin: { description: 'CSS color value (e.g., #015565)' },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Card Image (fallback / above video)',
              admin: {
                description: 'Displayed when video is unavailable. Used for media-card type.',
                condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
              },
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alt Text',
              admin: { condition: (_data, siblingData) => siblingData?.cardType === 'media-card' },
            },
            {
              name: 'videoPoster',
              type: 'upload',
              relationTo: 'media',
              label: 'Video Poster Image',
              admin: {
                description: 'Poster frame shown before video plays.',
                condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
              },
            },
            {
              name: 'videoMp4',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Video (MP4)',
              admin: { condition: (_data, siblingData) => siblingData?.cardType === 'media-card' },
            },
            {
              name: 'videoWebm',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Video (WebM)',
              admin: { condition: (_data, siblingData) => siblingData?.cardType === 'media-card' },
            },
            {
              name: 'videoAutoplay',
              type: 'checkbox',
              label: 'Video Autoplay',
              defaultValue: true,
              admin: { condition: (_data, siblingData) => siblingData?.cardType === 'media-card' },
            },
            {
              name: 'videoLoop',
              type: 'checkbox',
              label: 'Video Loop',
              defaultValue: true,
              admin: { condition: (_data, siblingData) => siblingData?.cardType === 'media-card' },
            },
            {
              name: 'videoMuted',
              type: 'checkbox',
              label: 'Video Muted',
              defaultValue: true,
              admin: { condition: (_data, siblingData) => siblingData?.cardType === 'media-card' },
            },
            {
              name: 'videoObjectFit',
              type: 'select',
              label: 'Video Object Fit',
              options: [
                { label: 'Cover', value: 'cover' },
                { label: 'Contain', value: 'contain' },
                { label: 'Fill', value: 'fill' },
              ],
              defaultValue: 'cover',
              admin: { condition: (_data, siblingData) => siblingData?.cardType === 'media-card' },
            },
          ],
          defaultValue: [
            {
              cardType: 'media-card',
              backgroundColor: 'bg-green',
              bodyText:
                'Back and neck pain can affect every aspect of your life. Our team specializes in diagnosing and treating the root cause to provide lasting relief.',
              conditionTitle: 'Back & Neck Pain',
              conditionSubtitle: 'Chronic, acute, and injury-related pain',
              imageAlt: 'Client',
              videoAutoplay: true,
              videoLoop: true,
              videoMuted: true,
              videoObjectFit: 'cover',
            },
            {
              cardType: 'text-card',
              bodyText:
                'Herniated discs and spinal conditions can cause severe discomfort and limit mobility. We offer advanced, minimally invasive solutions to treat these conditions effectively.',
              conditionTitle: 'Herniated Disc',
              conditionSubtitle: 'Advanced treatment options available',
            },
            {
              cardType: 'text-card',
              extraClassName: '_04',
              bodyText:
                'Sciatica and nerve-related pain can travel through the lower back and legs. Our targeted treatments are designed to relieve pressure and restore mobility.',
              conditionTitle: 'Sciatica & Nerve Pain',
              conditionSubtitle: 'Nerve compression & radiating pain relief',
            },
            {
              cardType: 'colored-card',
              backgroundColor: 'bg-blue',
              extraClassName: '_02',
              bodyText:
                'Degenerative spine conditions can worsen over time. We provide personalized treatment plans to slow progression and improve quality of life.',
              conditionTitle: 'Degenerative Spine Conditions',
              conditionSubtitle: 'Long-term care & management solutions',
            },
          ],
        },
      ],
    },

    // ─── WHY WE'RE DIFFERENT SECTION (from SpineCareComponentSections) ─────────
    {
      name: 'differenceSection',
      type: 'group',
      label: "Section: Why We're Different",
      fields: [
        { name: 'show', type: 'checkbox', label: 'Show Section', defaultValue: true },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: { description: 'e.g., section-03' },
          defaultValue: 'section-03',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Section Background Color',
          admin: { description: 'CSS color value' },
        },
        { name: 'textColor', type: 'text', label: 'Section Text Color' },
        { name: 'paddingTop', type: 'text', label: 'Padding Top' },
        { name: 'paddingBottom', type: 'text', label: 'Padding Bottom' },
        {
          name: 'differenceTagBox',
          type: 'group',
          label: 'Tag Box',
          fields: [
            { name: 'show', type: 'checkbox', label: 'Show Tag Box', defaultValue: true },
            {
              name: 'label',
              type: 'text',
              label: 'Tag Label',
              defaultValue: "Why We're Different",
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Tag Background Color',
              defaultValue: '#015565',
            },
            { name: 'textColor', type: 'text', label: 'Tag Text Color', defaultValue: '#fff' },
            {
              name: 'variant',
              type: 'text',
              label: 'Variant (data-wf--tag-box--variant)',
              defaultValue: 'base',
            },
          ],
        },
        {
          name: 'differenceHeading',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'What Sets Our Spine Care Apart',
        },
        { name: 'differenceHeadingColor', type: 'text', label: 'Heading Color' },
        { name: 'differenceHeadingFontSize', type: 'text', label: 'Heading Font Size' },
        {
          name: 'differenceHeadingMaxWidth',
          type: 'text',
          label: 'Heading Wrapper Max Width (px)',
          defaultValue: '550',
        },
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column (Traditional Treatment)',
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Column Heading',
              defaultValue: 'Traditional Treatment Options',
            },
            { name: 'headingColor', type: 'text', label: 'Heading Color' },
            { name: 'headingFontSize', type: 'text', label: 'Heading Font Size' },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Column Background Color',
              admin: { description: 'CSS color value (e.g., #f5f5f5)' },
            },
            { name: 'textColor', type: 'text', label: 'Column Text Color' },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Border Radius',
              admin: { description: 'CSS border-radius (e.g., 12px)' },
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Column Padding',
              admin: { description: 'CSS padding value' },
            },
            {
              name: 'iconType',
              type: 'select',
              label: 'Icon Type',
              options: [
                { label: 'X / Cross (negative)', value: 'x' },
                { label: 'Arrow (positive)', value: 'arrow' },
                { label: 'Checkmark', value: 'check' },
              ],
              defaultValue: 'x',
            },
            {
              name: 'iconColor',
              type: 'text',
              label: 'Icon Color',
              defaultValue: '#081122',
              admin: { description: 'CSS color value for the SVG fill' },
            },
            { name: 'itemTextColor', type: 'text', label: 'Default Item Text Color' },
            {
              name: 'items',
              type: 'array',
              label: 'List Items',
              admin: { description: 'Drag to reorder items in this column' },
              fields: [
                { name: 'text', type: 'text', label: 'Item Text', required: true },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Item Text Color Override',
                  admin: { description: 'Leave blank to use the column default' },
                },
                {
                  name: 'iconColor',
                  type: 'text',
                  label: 'Item Icon Color Override',
                  admin: { description: 'Leave blank to use the column default' },
                },
                {
                  name: 'isLast',
                  type: 'checkbox',
                  label: 'Mark as Last Item (appends "last" CSS class)',
                  defaultValue: false,
                },
              ],
              defaultValue: [
                { text: 'Focus on surgery as the first option', isLast: false },
                { text: 'Larger incisions with more tissue disruption', isLast: false },
                { text: 'Longer recovery times and hospital stays', isLast: false },
                { text: 'Higher risk of complications and discomfort', isLast: false },
                { text: 'Limited focus on non-surgical solutions', isLast: false },
                { text: 'Less personalized treatment approach', isLast: false },
                { text: 'Higher overall treatment costs in hospital settings', isLast: false },
                { text: 'Limited use of advanced minimally invasive techniques', isLast: false },
                { text: 'Slower return to daily activities', isLast: true },
              ],
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column (Our Approach)',
          fields: [
            {
              name: 'showLogo',
              type: 'checkbox',
              label: 'Show Logo / Brand Mark',
              defaultValue: true,
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Column Logo / Brand Mark Image',
            },
            { name: 'logoAlt', type: 'text', label: 'Logo Alt Text', defaultValue: 'Mouly' },
            {
              name: 'logoWidth',
              type: 'text',
              label: 'Logo Width',
              admin: { description: 'CSS width value (e.g., 120px, auto)' },
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Column Background Color',
              defaultValue: '#20cff3',
            },
            { name: 'textColor', type: 'text', label: 'Column Text Color', defaultValue: '#fff' },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Border Radius',
              admin: { description: 'CSS border-radius (e.g., 12px)' },
            },
            { name: 'padding', type: 'text', label: 'Column Padding' },
            {
              name: 'iconType',
              type: 'select',
              label: 'Icon Type',
              options: [
                { label: 'X / Cross (negative)', value: 'x' },
                { label: 'Arrow (positive)', value: 'arrow' },
                { label: 'Checkmark', value: 'check' },
              ],
              defaultValue: 'arrow',
            },
            { name: 'iconColor', type: 'text', label: 'Icon Color', defaultValue: '#081122' },
            { name: 'itemTextColor', type: 'text', label: 'Default Item Text Color' },
            {
              name: 'items',
              type: 'array',
              label: 'List Items',
              admin: { description: 'Drag to reorder items in this column' },
              fields: [
                { name: 'text', type: 'text', label: 'Item Text', required: true },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Item Text Color Override',
                  admin: { description: 'Leave blank to use the column default' },
                },
                {
                  name: 'iconColor',
                  type: 'text',
                  label: 'Item Icon Color Override',
                  admin: { description: 'Leave blank to use the column default' },
                },
                {
                  name: 'isLast',
                  type: 'checkbox',
                  label: 'Mark as Last Item (appends "last" CSS class)',
                  defaultValue: false,
                },
              ],
              defaultValue: [
                { text: 'Conservative, non-surgical treatments always come first', isLast: false },
                { text: 'Minimally invasive procedures with small incisions', isLast: false },
                { text: 'Faster recovery and same-day discharge for many patients', isLast: false },
                { text: 'Reduced pain, minimal scarring, and lower risk', isLast: false },
                { text: 'Focus on identifying and treating the root cause of pain', isLast: false },
                { text: "Personalized care tailored to each patient's condition", isLast: false },
                { text: 'Cost-effective treatment compared to hospital procedures', isLast: false },
                { text: 'Advanced, cutting-edge minimally invasive technology', isLast: false },
                { text: 'Return to normal activities in as little as a few days', isLast: true },
              ],
            },
          ],
        },
      ],
    },

    // ─── SECTION ORDER ───────────────────────────────────────────────────────
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: { description: 'Drag to reorder the sections displayed on the page' },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Hero Section', value: 'hero' },
            { label: 'About Section (Section 02)', value: 'about' },
            { label: 'Services Section (Section 03)', value: 'services' },
            { label: 'Testimonial Section', value: 'testimonial' },
            { label: 'Services Section (Section 05)', value: 'services05' },
            { label: 'Conditions We Treat', value: 'conditionsSection' },
            { label: "Why We're Different", value: 'differenceSection' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'about' },
        { section: 'services' },
        { section: 'testimonial' },
        { section: 'services05' },
        { section: 'conditionsSection' },
        { section: 'differenceSection' },
      ],
    },

    // ─── GLOBAL STYLES ───────────────────────────────────────────────────────
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: { description: 'CSS max-width (e.g., 1200px, 100%)' },
        },
        {
          name: 'containerPadding',
          type: 'text',
          label: 'Container Padding',
          admin: { description: 'CSS padding (e.g., 0 20px)' },
        },
        {
          name: 'sectionSpacing',
          type: 'text',
          label: 'Section Spacing',
          admin: { description: 'Vertical spacing between sections (e.g., 60px, 4rem)' },
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
          admin: { description: 'CSS font-family value' },
        },
        { name: 'primaryColor', type: 'text', label: 'Primary Color', defaultValue: '#012b6f' },
        { name: 'secondaryColor', type: 'text', label: 'Secondary Color', defaultValue: '#015565' },
        { name: 'accentColor', type: 'text', label: 'Accent Color' },
        { name: 'textColor', type: 'text', label: 'Default Text Color', defaultValue: '#081122' },
        { name: 'linkColor', type: 'text', label: 'Link Color' },
        { name: 'linkHoverColor', type: 'text', label: 'Link Hover Color' },
        {
          name: 'iconColor',
          type: 'text',
          label: 'Icon / SVG Color',
          admin: { description: 'Stroke color for the circle SVG icons on cards' },
          defaultValue: '#081122',
        },
        {
          name: 'borderRadius',
          type: 'text',
          label: 'Global Border Radius',
          admin: { description: 'Default border-radius for cards (e.g., 12px)' },
        },
        {
          name: 'cardGap',
          type: 'text',
          label: 'Card / Column Gap',
          admin: { description: 'Gap between cards in a row (e.g., 24px)' },
        },
      ],
    },

    // ─── TYPOGRAPHY SETTINGS ─────────────────────────────────────────────────
    {
      name: 'typographySettings',
      type: 'group',
      label: 'Typography Settings',
      fields: [
        { name: 'h1FontSize', type: 'text', label: 'H1 Font Size' },
        { name: 'h1Color', type: 'text', label: 'H1 Color' },
        { name: 'h1FontWeight', type: 'text', label: 'H1 Font Weight' },
        { name: 'h2FontSize', type: 'text', label: 'H2 Font Size' },
        { name: 'h2Color', type: 'text', label: 'H2 Color' },
        { name: 'h2FontWeight', type: 'text', label: 'H2 Font Weight' },
        { name: 'h3FontSize', type: 'text', label: 'H3 / Quote (h-03) Font Size' },
        { name: 'h3Color', type: 'text', label: 'H3 / Quote (h-03) Color' },
        { name: 'h3FontWeight', type: 'text', label: 'H3 / Quote (h-03) Font Weight' },
        { name: 'h4FontSize', type: 'text', label: 'Card Title (h-04) Font Size' },
        { name: 'h4Color', type: 'text', label: 'Card Title (h-04) Color' },
        { name: 'h5FontSize', type: 'text', label: 'Author Name (h-05) Font Size' },
        { name: 'h5Color', type: 'text', label: 'Author Name (h-05) Color' },
        { name: 'h5FontWeight', type: 'text', label: 'H5 Font Weight' },
        { name: 'bodyFontSize', type: 'text', label: 'Body Font Size' },
        { name: 'bodyLineHeight', type: 'text', label: 'Body Line Height' },
        { name: 'paragraphSpacing', type: 'text', label: 'Paragraph Spacing' },
        { name: 'subtitleFontSize', type: 'text', label: 'Subtitle Font Size (p-text-02)' },
        {
          name: 'subtitleColor',
          type: 'text',
          label: 'Subtitle Color (p-text-02 default)',
          defaultValue: '#015565',
          admin: { description: 'Default color for condition subtitles (color-sec-blue class)' },
        },
      ],
    },

    // ─── ANIMATION SETTINGS ──────────────────────────────────────────────────
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
          admin: { description: 'CSS duration (e.g., 1s, 800ms)' },
          defaultValue: '1s',
        },
        { name: 'fadeInDelay', type: 'text', label: 'Fade In Delay', defaultValue: '0s' },
        {
          name: 'translateDistance',
          type: 'text',
          label: 'Translate Y Distance',
          admin: { description: 'Initial vertical offset for slide-in animation (e.g., 40px)' },
          defaultValue: '40px',
        },
        {
          name: 'blurAmount',
          type: 'text',
          label: 'Initial Blur Amount',
          admin: { description: 'Initial blur applied before animation plays (e.g., 10px)' },
          defaultValue: '10px',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          admin: { description: 'CSS easing function (e.g., ease-in-out)' },
          defaultValue: 'ease-in-out',
        },
        {
          name: 'enableScrollAnimations',
          type: 'checkbox',
          label: 'Enable Scroll-Triggered Animations',
          defaultValue: true,
        },
        {
          name: 'enableCounterAnimations',
          type: 'checkbox',
          label: 'Enable Statistics Counter Animations',
          defaultValue: true,
        },
        {
          name: 'counterDuration',
          type: 'text',
          label: 'Counter Animation Duration',
          admin: { description: 'How long the number count-up takes (e.g., 2s)' },
          defaultValue: '2s',
        },
        {
          name: 'enableHeroLineAnimation',
          type: 'checkbox',
          label: 'Enable Hero Decorative Line Expand Animation',
          defaultValue: true,
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
      ],
    },

    // ─── LAYOUT SETTINGS ─────────────────────────────────────────────────────
    {
      name: 'layoutSettings',
      type: 'group',
      label: 'Layout Settings',
      fields: [
        {
          name: 'cardsPerRow',
          type: 'select',
          label: 'Condition Cards Per Row',
          options: [
            { label: '2 per row', value: '2' },
            { label: '3 per row', value: '3' },
            { label: '4 per row', value: '4' },
          ],
          defaultValue: '2',
        },
        {
          name: 'comparisonLayout',
          type: 'select',
          label: 'Comparison Columns Layout',
          options: [
            { label: 'Side by Side (50/50)', value: 'half' },
            { label: 'Left Heavy (60/40)', value: 'left-heavy' },
            { label: 'Right Heavy (40/60)', value: 'right-heavy' },
          ],
          defaultValue: 'half',
        },
        {
          name: 'imageObjectFit',
          type: 'select',
          label: 'Image Object Fit',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Fill', value: 'fill' },
          ],
          defaultValue: 'cover',
        },
        {
          name: 'mobileStackCards',
          type: 'checkbox',
          label: 'Stack Cards Vertically on Mobile',
          defaultValue: true,
        },
        {
          name: 'mobileStackColumns',
          type: 'checkbox',
          label: 'Stack Comparison Columns on Mobile',
          defaultValue: true,
        },
      ],
    },

    // ─── MOBILE SETTINGS ─────────────────────────────────────────────────────
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
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Content Vertically on Mobile',
          defaultValue: true,
        },
        {
          name: 'disableVideoOnMobile',
          type: 'checkbox',
          label: 'Disable Background Video on Mobile',
          admin: { description: 'Show poster image instead of video on small screens' },
          defaultValue: true,
        },
        {
          name: 'mobileHideElements',
          type: 'text',
          label: 'Mobile Hidden Elements',
          admin: { description: 'Comma-separated CSS class names to hide on mobile' },
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Scale',
          admin: { description: 'Percentage scale for fonts on mobile (e.g., 80%)' },
          defaultValue: '100%',
        },
        {
          name: 'mobileSpacingAdjustment',
          type: 'text',
          label: 'Mobile Spacing Adjustment',
          defaultValue: '100%',
        },
        {
          name: 'mobileCardImageHeight',
          type: 'text',
          label: 'Mobile Card Image/Video Max Height',
          admin: { description: 'Max height for media cards on mobile (e.g., 280px)' },
        },
      ],
    },

    // ─── SEO SETTINGS ────────────────────────────────────────────────────────
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        { name: 'metaTitle', type: 'text', label: 'Meta Title' },
        { name: 'metaDescription', type: 'textarea', label: 'Meta Description' },
        { name: 'ogImage', type: 'upload', relationTo: 'media', label: 'OG / Social Share Image' },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: { description: 'Comma-separated keywords' },
        },
        { name: 'canonicalUrl', type: 'text', label: 'Canonical URL' },
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
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: { description: 'Add schema.org structured data in JSON-LD format' },
        },
      ],
    },

    // ─── ACCESSIBILITY SETTINGS ──────────────────────────────────────────────
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
          label: 'Focus Ring Color',
          admin: { description: 'Color for keyboard focus outlines' },
        },
        {
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
        },
        {
          name: 'reducedMotionRespected',
          type: 'checkbox',
          label: 'Respect prefers-reduced-motion',
          admin: { description: 'Disable animations for users who prefer reduced motion' },
          defaultValue: true,
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

    // ─── ADVANCED SETTINGS ───────────────────────────────────────────────────
    {
      name: 'advancedSettings',
      type: 'group',
      label: 'Advanced Settings',
      fields: [
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: { description: 'Additional CSS applied only to this component' },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: { description: 'Custom JS injected for this component' },
        },
        { name: 'lazyLoadImages', type: 'checkbox', label: 'Lazy Load Images', defaultValue: true },
        {
          name: 'lazyLoadVideos',
          type: 'checkbox',
          label: 'Enable Lazy Loading for Videos',
          defaultValue: false,
          admin: { description: 'Autoplay videos typically should not be lazy-loaded' },
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Component Caching',
          defaultValue: true,
        },
        {
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
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
          admin: { description: 'Add data-* attributes to specific sections' },
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              admin: { description: 'e.g., data-tracking-id' },
            },
            { name: 'value', type: 'text', label: 'Attribute Value' },
            {
              name: 'targetSection',
              type: 'select',
              label: 'Apply To Section',
              options: [
                { label: 'Hero Section', value: 'hero' },
                { label: 'About Section', value: 'about' },
                { label: 'Services Section (03)', value: 'services' },
                { label: 'Testimonial Section', value: 'testimonial' },
                { label: 'Services Section (05)', value: 'services05' },
                { label: 'Conditions We Treat', value: 'conditionsSection' },
                { label: "Why We're Different", value: 'differenceSection' },
              ],
            },
          ],
        },
      ],
    },

    // ─── PERFORMANCE SETTINGS ────────────────────────────────────────────────
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
        { name: 'imageQuality', type: 'text', label: 'Image Quality (1–100)', defaultValue: '85' },
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
          defaultValue: '420,630,800,1200,1400,2100',
          admin: { description: 'Comma-separated widths for srcset (px)' },
        },
        { name: 'minifyCSS', type: 'checkbox', label: 'Minify CSS', defaultValue: true },
        { name: 'minifyJS', type: 'checkbox', label: 'Minify JavaScript', defaultValue: true },
        { name: 'enableCDN', type: 'checkbox', label: 'Use CDN for Assets', defaultValue: true },
        {
          name: 'cdnUrl',
          type: 'text',
          label: 'CDN Base URL',
          admin: { description: 'Base URL for your CDN (e.g., https://cdn.example.com)' },
        },
      ],
    },

    // ─── INTEGRATION SETTINGS ────────────────────────────────────────────────
    {
      name: 'integrationSettings',
      type: 'group',
      label: 'Integration Settings',
      fields: [
        { name: 'googleAnalyticsId', type: 'text', label: 'Google Analytics ID' },
        { name: 'facebookPixelId', type: 'text', label: 'Facebook Pixel ID' },
        {
          name: 'conversionTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Conversion Tracking',
          defaultValue: false,
        },
        {
          name: 'marketingTags',
          type: 'array',
          label: 'Marketing Automation Tags',
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              options: [
                { label: 'HubSpot', value: 'hubspot' },
                { label: 'Marketo', value: 'marketo' },
                { label: 'ActiveCampaign', value: 'activecampaign' },
                { label: 'Other', value: 'other' },
              ],
            },
            { name: 'tagCode', type: 'textarea', label: 'Tag Code' },
          ],
        },
      ],
    },

    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: { description: 'Toggle to enable/disable this component' },
    },
  ],
  timestamps: true,
}
