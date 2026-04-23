// import { CollectionConfig } from 'payload'

// export const AlleAwardsPageComponent: CollectionConfig = {
//   slug: 'alle-awards-page-component',
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
//       defaultValue: 'Alle Awards Page Component',
//     },

//     // ─────────────────────────────────────────────
//     // HERO SECTION
//     // ─────────────────────────────────────────────
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
//             description: 'e.g., home-hero _03',
//           },
//           defaultValue: 'home-hero _03',
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
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//           admin: {
//             description: 'CSS color value',
//           },
//         },

//         // Title Lines
//         {
//           name: 'titleLine1',
//           type: 'text',
//           label: 'Title Line 1',
//           required: true,
//           defaultValue: 'Trusted Spine Care',
//         },
//         {
//           name: 'titleLine1Color',
//           type: 'text',
//           label: 'Title Line 1 Color',
//           admin: {
//             description: 'CSS color value',
//           },
//         },
//         {
//           name: 'titleLine1FontSize',
//           type: 'text',
//           label: 'Title Line 1 Font Size',
//           admin: {
//             description: 'CSS font-size value (e.g., 64px, 5rem)',
//           },
//         },

//         // Inline image that sits between title lines
//         {
//           name: 'titleInlineImage',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'Inline Title Image (between title lines)',
//         },
//         {
//           name: 'titleInlineImageAlt',
//           type: 'text',
//           label: 'Inline Image Alt Text',
//           defaultValue: 'Team',
//         },

//         {
//           name: 'titleLine2',
//           type: 'text',
//           label: 'Title Line 2',
//           required: true,
//           defaultValue: 'Focused on Your Recovery',
//         },
//         {
//           name: 'titleLine2Color',
//           type: 'text',
//           label: 'Title Line 2 Color',
//           admin: {
//             description: 'CSS color value',
//           },
//         },
//         {
//           name: 'titleLine2FontSize',
//           type: 'text',
//           label: 'Title Line 2 Font Size',
//           admin: {
//             description: 'CSS font-size value',
//           },
//         },

//         // Short description
//         {
//           name: 'shortDescription',
//           type: 'textarea',
//           label: 'Short Description',
//           defaultValue:
//             'At Ortho & Spine Physicians Group, we specialize in advanced, minimally invasive spine care designed to relieve pain, restore mobility, and improve quality of life.',
//         },
//         {
//           name: 'shortDescriptionColor',
//           type: 'text',
//           label: 'Short Description Color',
//           admin: {
//             description: 'CSS color value',
//           },
//         },
//         {
//           name: 'shortDescriptionFontSize',
//           type: 'text',
//           label: 'Short Description Font Size',
//         },

//         // CTA Buttons (drag-and-drop orderable)
//         {
//           name: 'ctaButtons',
//           type: 'array',
//           label: 'CTA Buttons',
//           admin: {
//             description: 'Drag to reorder buttons',
//           },
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Button',
//               defaultValue: true,
//             },
//             {
//               name: 'buttonType',
//               type: 'select',
//               label: 'Button Style',
//               options: [
//                 { label: 'Primary (Filled)', value: 'primary' },
//                 { label: 'Secondary (Ghost / Underline)', value: 'secondary' },
//               ],
//               defaultValue: 'primary',
//             },
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Button Text',
//               required: true,
//             },
//             {
//               name: 'url',
//               type: 'text',
//               label: 'URL / href',
//               required: true,
//             },
//             {
//               name: 'openInNewTab',
//               type: 'checkbox',
//               label: 'Open in New Tab',
//               defaultValue: false,
//             },
//             {
//               name: 'ariaLabel',
//               type: 'text',
//               label: 'ARIA Label',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Background Color',
//               admin: {
//                 description: 'Override button background color',
//               },
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//               admin: {
//                 description: 'Override button text color',
//               },
//             },
//             {
//               name: 'hoverBackgroundColor',
//               type: 'text',
//               label: 'Hover Background Color',
//             },
//             {
//               name: 'hoverTextColor',
//               type: 'text',
//               label: 'Hover Text Color',
//             },
//             {
//               name: 'showArrowIcon',
//               type: 'checkbox',
//               label: 'Show Arrow Icon',
//               defaultValue: true,
//             },
//             {
//               name: 'arrowIconImage',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Arrow Icon Image',
//             },
//           ],
//           defaultValue: [
//             {
//               show: true,
//               buttonType: 'primary',
//               text: 'Book a Consultation',
//               url: '/pricing',
//               openInNewTab: false,
//               ariaLabel: 'Book a consultation with our spine specialists',
//               showArrowIcon: true,
//             },
//             {
//               show: true,
//               buttonType: 'secondary',
//               text: 'View Treatments',
//               url: '/projects',
//               openInNewTab: false,
//               ariaLabel: 'View our available spine treatments',
//               showArrowIcon: true,
//             },
//           ],
//         },

//         // Hero Bottom Bar
//         {
//           name: 'heroBottomBar',
//           type: 'group',
//           label: 'Hero Bottom Bar',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Bottom Bar',
//               defaultValue: true,
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Bottom Bar Background Color',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Bottom Bar Text Color',
//             },
//             // Info Badges (drag-and-drop orderable)
//             {
//               name: 'infoBadges',
//               type: 'array',
//               label: 'Info Badges (drag to reorder)',
//               admin: {
//                 description: 'Small info chips shown in the bottom bar (e.g., location, copyright)',
//               },
//               fields: [
//                 {
//                   name: 'show',
//                   type: 'checkbox',
//                   label: 'Show Badge',
//                   defaultValue: true,
//                 },
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Badge Text',
//                   required: true,
//                 },
//                 {
//                   name: 'showSquareIndicator',
//                   type: 'checkbox',
//                   label: 'Show Square Indicator',
//                   defaultValue: true,
//                 },
//                 {
//                   name: 'squareColor',
//                   type: 'text',
//                   label: 'Square Indicator Color',
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                   label: 'Text Color',
//                 },
//               ],
//               defaultValue: [
//                 { show: true, text: 'London 12:39AM', showSquareIndicator: true },
//                 { show: true, text: '©2025', showSquareIndicator: true },
//               ],
//             },

//             // Scroll Indicator
//             {
//               name: 'scrollIndicator',
//               type: 'group',
//               label: 'Scroll Indicator',
//               fields: [
//                 {
//                   name: 'show',
//                   type: 'checkbox',
//                   label: 'Show Scroll Indicator',
//                   defaultValue: true,
//                 },
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Scroll Text',
//                   defaultValue: 'Scroll Down',
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                   label: 'Text Color',
//                 },
//                 {
//                   name: 'iconImage',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Scroll Icon Image',
//                 },
//                 {
//                   name: 'iconColor',
//                   type: 'text',
//                   label: 'Icon Color',
//                 },
//               ],
//             },
//           ],
//         },

//         // Animation Settings (hero-specific)
//         {
//           name: 'animationEnabled',
//           type: 'checkbox',
//           label: 'Enable Entry Animations',
//           defaultValue: true,
//         },
//         {
//           name: 'animationBlur',
//           type: 'text',
//           label: 'Animation Blur Amount',
//           admin: {
//             description: 'CSS blur value for the enter animation (e.g., 10px)',
//           },
//           defaultValue: '10px',
//         },
//         {
//           name: 'animationTranslateY',
//           type: 'text',
//           label: 'Animation Translate Y',
//           admin: {
//             description: 'CSS translate Y for enter animation (e.g., 40px)',
//           },
//           defaultValue: '40px',
//         },
//       ],
//     },

//     // ─────────────────────────────────────────────
//     // VIDEO / IMAGE SECTION
//     // ─────────────────────────────────────────────
//     {
//       name: 'videoSection',
//       type: 'group',
//       label: 'Video / Image Section',
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
//             description: 'e.g., img-section',
//           },
//           defaultValue: 'img-section',
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'sectionHeight',
//           type: 'text',
//           label: 'Section Height',
//           admin: {
//             description: 'CSS height value (e.g., 600px, 80vh)',
//           },
//         },
//         {
//           name: 'mediaType',
//           type: 'select',
//           label: 'Media Type',
//           options: [
//             { label: 'Background Video', value: 'video' },
//             { label: 'Background Image', value: 'image' },
//           ],
//           defaultValue: 'video',
//         },

//         // Video Settings
//         {
//           name: 'videoSettings',
//           type: 'group',
//           label: 'Video Settings',
//           admin: {
//             condition: (data, siblingData) => siblingData?.mediaType === 'video',
//             description: 'Only used when Media Type is set to "Background Video"',
//           },
//           fields: [
//             {
//               name: 'posterImage',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Poster Image (shown before video loads)',
//             },
//             {
//               name: 'videoFileMp4',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Video File (MP4)',
//             },
//             {
//               name: 'videoFileWebm',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Video File (WebM)',
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
//               label: 'Loop',
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
//           ],
//         },

//         // Background Image Settings
//         {
//           name: 'backgroundImageSettings',
//           type: 'group',
//           label: 'Background Image Settings',
//           admin: {
//             condition: (data, siblingData) => siblingData?.mediaType === 'image',
//             description: 'Only used when Media Type is set to "Background Image"',
//           },
//           fields: [
//             {
//               name: 'mobile',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Mobile Image (≤420px)',
//             },
//             {
//               name: 'tablet',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Tablet Image (≤800px)',
//             },
//             {
//               name: 'desktop',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Desktop Image (≤1400px)',
//             },
//             {
//               name: 'large',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Large Desktop Image',
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               defaultValue: 'Section background',
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
//           ],
//         },

//         // Overlay
//         {
//           name: 'overlay',
//           type: 'group',
//           label: 'Overlay',
//           fields: [
//             {
//               name: 'showOverlay',
//               type: 'checkbox',
//               label: 'Show Overlay',
//               defaultValue: false,
//             },
//             {
//               name: 'overlayColor',
//               type: 'text',
//               label: 'Overlay Color',
//               admin: {
//                 description: 'CSS color / rgba value (e.g., rgba(0,0,0,0.4))',
//               },
//             },
//           ],
//         },
//       ],
//     },

//     // ─────────────────────────────────────────────
//     // ABOUT SECTION (section-05)
//     // ─────────────────────────────────────────────
//     {
//       name: 'aboutSection',
//       type: 'group',
//       label: 'About Section',
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
//             description: 'e.g., section-05',
//           },
//           defaultValue: 'section-05',
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Default Text Color',
//         },
//         {
//           name: 'containerMaxWidth',
//           type: 'text',
//           label: 'Container Max Width',
//           admin: {
//             description: 'CSS max-width (e.g., 1200px)',
//           },
//         },
//         {
//           name: 'paddingTop',
//           type: 'text',
//           label: 'Padding Top',
//           admin: {
//             description: 'CSS padding-top value (e.g., 80px)',
//           },
//         },
//         {
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom',
//           admin: {
//             description: 'CSS padding-bottom value (e.g., 80px)',
//           },
//         },

//         // Tag / Eyebrow
//         {
//           name: 'tagText',
//           type: 'text',
//           label: 'Tag / Eyebrow Text',
//           admin: {
//             description: 'Small label above the heading',
//           },
//         },
//         {
//           name: 'tagTextColor',
//           type: 'text',
//           label: 'Tag Text Color',
//         },
//         {
//           name: 'tagBackgroundColor',
//           type: 'text',
//           label: 'Tag Background Color',
//         },

//         // Heading
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//           defaultValue: 'About Ortho & Spine Physicians Group',
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
//             description: 'CSS font-size value',
//           },
//         },
//         {
//           name: 'headingFontWeight',
//           type: 'text',
//           label: 'Heading Font Weight',
//         },

//         // Description
//         {
//           name: 'description',
//           type: 'textarea',
//           label: 'Description',
//           defaultValue:
//             'We specialize in advanced minimally invasive spine care, focusing exclusively on treating back and spine conditions. Our physicians have dedicated their careers to mastering spine treatments, helping thousands of patients find lasting relief and regain their quality of life.',
//         },
//         {
//           name: 'descriptionColor',
//           type: 'text',
//           label: 'Description Color',
//           admin: {
//             description: 'CSS color value (e.g., color-sec-blue equivalent)',
//           },
//         },
//         {
//           name: 'descriptionFontSize',
//           type: 'text',
//           label: 'Description Font Size',
//         },

//         // Service / Feature Cards (drag-and-drop orderable)
//         {
//           name: 'cards',
//           type: 'array',
//           label: 'Cards (drag to reorder)',
//           admin: {
//             description:
//               'Add service cards, CEO/quote cards, or custom cards. Drag to change display order.',
//           },
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Card',
//               defaultValue: true,
//             },
//             {
//               name: 'cardType',
//               type: 'select',
//               label: 'Card Type',
//               required: true,
//               options: [
//                 { label: 'Service Card (icon + text)', value: 'service' },
//                 { label: 'Quote / CEO Card (image + quote)', value: 'quote' },
//               ],
//               defaultValue: 'service',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Card Background Color',
//               admin: {
//                 description: 'e.g., #ffffff or bg-white equivalent',
//               },
//               defaultValue: '#ffffff',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Card Text Color',
//             },
//             {
//               name: 'borderColor',
//               type: 'text',
//               label: 'Card Border Color',
//             },
//             {
//               name: 'borderRadius',
//               type: 'text',
//               label: 'Card Border Radius',
//               admin: {
//                 description: 'CSS border-radius (e.g., 12px, 1rem)',
//               },
//             },
//             {
//               name: 'padding',
//               type: 'text',
//               label: 'Card Padding',
//             },

//             // ── SERVICE CARD FIELDS ──
//             {
//               name: 'iconBackgroundColor',
//               type: 'text',
//               label: 'Icon Box Background Color',
//               admin: {
//                 description:
//                   'Color of the icon container (e.g., #e8f5e9 for green, #fff9c4 for yellow, #e3f2fd for blue)',
//                 condition: (data, siblingData) => siblingData?.cardType === 'service',
//               },
//             },
//             {
//               name: 'iconBackgroundColorClass',
//               type: 'select',
//               label: 'Icon Box Color Preset',
//               admin: {
//                 description: 'Choose a preset icon background color',
//                 condition: (data, siblingData) => siblingData?.cardType === 'service',
//               },
//               options: [
//                 { label: 'Green', value: 'bg-green' },
//                 { label: 'Yellow', value: 'bg-yellow' },
//                 { label: 'Blue', value: 'bg-blue' },
//                 { label: 'Red', value: 'bg-red' },
//                 { label: 'Custom (use color field above)', value: 'custom' },
//               ],
//               defaultValue: 'bg-green',
//             },
//             {
//               name: 'iconSvgCode',
//               type: 'textarea',
//               label: 'Icon SVG Code',
//               admin: {
//                 description:
//                   'Paste raw SVG markup for the icon. Leave empty to use uploaded icon image instead.',
//                 condition: (data, siblingData) => siblingData?.cardType === 'service',
//               },
//             },
//             {
//               name: 'iconImage',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Icon Image (alternative to SVG)',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'service',
//               },
//             },
//             {
//               name: 'iconImageAlt',
//               type: 'text',
//               label: 'Icon Image Alt Text',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'service',
//               },
//             },
//             {
//               name: 'iconSize',
//               type: 'text',
//               label: 'Icon Box Size',
//               admin: {
//                 description: 'CSS width/height for the icon box (e.g., 56px)',
//                 condition: (data, siblingData) => siblingData?.cardType === 'service',
//               },
//               defaultValue: '56px',
//             },
//             {
//               name: 'title',
//               type: 'text',
//               label: 'Card Title',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'service',
//               },
//             },
//             {
//               name: 'titleColor',
//               type: 'text',
//               label: 'Title Color',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'service',
//               },
//             },
//             {
//               name: 'titleFontSize',
//               type: 'text',
//               label: 'Title Font Size',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'service',
//               },
//             },
//             {
//               name: 'description',
//               type: 'richText',
//               label: 'Card Description',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'service',
//               },
//             },

//             // ── QUOTE / CEO CARD FIELDS ──
//             {
//               name: 'quoteImage',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Quote Card Image',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'quote',
//               },
//             },
//             {
//               name: 'quoteImageAlt',
//               type: 'text',
//               label: 'Quote Image Alt Text',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'quote',
//               },
//               defaultValue: 'Team Member',
//             },
//             {
//               name: 'quoteTagText',
//               type: 'text',
//               label: 'Quote Tag Text',
//               admin: {
//                 description: 'Small tag/badge overlaid on the image (e.g., "Our Experience")',
//                 condition: (data, siblingData) => siblingData?.cardType === 'quote',
//               },
//               defaultValue: 'Our Experience',
//             },
//             {
//               name: 'quoteTagBackgroundColor',
//               type: 'text',
//               label: 'Quote Tag Background Color',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'quote',
//               },
//             },
//             {
//               name: 'quoteTagTextColor',
//               type: 'text',
//               label: 'Quote Tag Text Color',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'quote',
//               },
//             },
//             {
//               name: 'quoteText',
//               type: 'textarea',
//               label: 'Quote Text',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'quote',
//               },
//               defaultValue:
//                 '"Our team has helped thousands of patients overcome chronic spine conditions through advanced techniques and personalized care."',
//             },
//             {
//               name: 'quoteTextColor',
//               type: 'text',
//               label: 'Quote Text Color',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'quote',
//               },
//             },
//             {
//               name: 'quoteFontSize',
//               type: 'text',
//               label: 'Quote Font Size',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.cardType === 'quote',
//               },
//             },
//             {
//               name: 'quoteFloatDecoratorColor',
//               type: 'text',
//               label: 'Float Decorator Color',
//               admin: {
//                 description: 'Color for the floating decorative element on the card',
//                 condition: (data, siblingData) => siblingData?.cardType === 'quote',
//               },
//             },

//             // Animation
//             {
//               name: 'animationEnabled',
//               type: 'checkbox',
//               label: 'Enable Entry Animation',
//               defaultValue: true,
//             },
//           ],
//           defaultValue: [
//             {
//               show: true,
//               cardType: 'service',
//               backgroundColor: '#ffffff',
//               iconBackgroundColorClass: 'bg-green',
//               iconSize: '56px',
//               title: 'Specialized Spine Expertise',
//               animationEnabled: true,
//             },
//             {
//               show: true,
//               cardType: 'quote',
//               backgroundColor: '#ffffff',
//               quoteImageAlt: 'Team Member',
//               quoteTagText: 'Our Experience',
//               quoteText:
//                 '"Our team has helped thousands of patients overcome chronic spine conditions through advanced techniques and personalized care."',
//               animationEnabled: true,
//             },
//             {
//               show: true,
//               cardType: 'service',
//               backgroundColor: '#ffffff',
//               iconBackgroundColorClass: 'bg-yellow',
//               iconSize: '56px',
//               title: 'Minimally Invasive Approach',
//               animationEnabled: true,
//             },
//             {
//               show: true,
//               cardType: 'service',
//               backgroundColor: '#ffffff',
//               iconBackgroundColorClass: 'bg-blue',
//               iconSize: '56px',
//               title: 'Proven Patient Outcomes',
//               animationEnabled: true,
//             },
//             {
//               show: true,
//               cardType: 'service',
//               backgroundColor: '#ffffff',
//               iconBackgroundColorClass: 'bg-green',
//               iconSize: '56px',
//               title: 'Leaders in Spine Innovation',
//               animationEnabled: true,
//             },
//           ],
//         },

//         // Cards grid layout
//         {
//           name: 'cardsGridColumns',
//           type: 'select',
//           label: 'Cards Grid Columns',
//           options: [
//             { label: '1 Column', value: '1' },
//             { label: '2 Columns', value: '2' },
//             { label: '3 Columns', value: '3' },
//             { label: '4 Columns', value: '4' },
//           ],
//           defaultValue: '2',
//         },
//         {
//           name: 'cardsGap',
//           type: 'text',
//           label: 'Cards Gap',
//           admin: {
//             description: 'Gap between cards (e.g., 24px, 1.5rem)',
//           },
//           defaultValue: '24px',
//         },
//       ],
//     },

//     // ─────────────────────────────────────────────
//     // SECTION ORDER (drag-and-drop)
//     // ─────────────────────────────────────────────
//     {
//       name: 'sectionOrder',
//       type: 'array',
//       label: 'Section Order',
//       admin: {
//         description: 'Drag to reorder which sections appear and in what order on the page',
//       },
//       fields: [
//         {
//           name: 'section',
//           type: 'select',
//           label: 'Section',
//           required: true,
//           options: [
//             { label: 'Hero Section', value: 'hero' },
//             { label: 'Video / Image Section', value: 'video' },
//             { label: 'About Section', value: 'about' },
//           ],
//         },
//       ],
//       defaultValue: [{ section: 'hero' }, { section: 'video' }, { section: 'about' }],
//     },

//     // ─────────────────────────────────────────────
//     // GLOBAL STYLES
//     // ─────────────────────────────────────────────
//     {
//       name: 'globalStyles',
//       type: 'group',
//       label: 'Global Styles',
//       fields: [
//         {
//           name: 'pageBackgroundColor',
//           type: 'text',
//           label: 'Page Background Color',
//           admin: {
//             description: 'Background color for the whole page',
//           },
//           defaultValue: '#ffffff',
//         },
//         {
//           name: 'fontFamily',
//           type: 'text',
//           label: 'Font Family',
//         },
//         {
//           name: 'primaryColor',
//           type: 'text',
//           label: 'Primary Color',
//           admin: {
//             description: 'Main brand/accent color used across sections',
//           },
//         },
//         {
//           name: 'secondaryColor',
//           type: 'text',
//           label: 'Secondary Color',
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
//           name: 'secondaryTextColor',
//           type: 'text',
//           label: 'Secondary Text Color',
//           admin: {
//             description: 'Used for muted/secondary text (color-sec-blue equivalent)',
//           },
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
//         {
//           name: 'containerMaxWidth',
//           type: 'text',
//           label: 'Container Max Width',
//           admin: {
//             description: 'CSS max-width for page container (e.g., 1200px)',
//           },
//         },
//         {
//           name: 'containerPadding',
//           type: 'text',
//           label: 'Container Horizontal Padding',
//           admin: {
//             description: 'CSS padding value (e.g., 0 20px)',
//           },
//         },
//         {
//           name: 'sectionSpacing',
//           type: 'text',
//           label: 'Spacing Between Sections',
//           admin: {
//             description: 'CSS margin/padding value between sections',
//           },
//         },
//       ],
//     },

//     // ─────────────────────────────────────────────
//     // TYPOGRAPHY SETTINGS
//     // ─────────────────────────────────────────────
//     {
//       name: 'typographySettings',
//       type: 'group',
//       label: 'Typography Settings',
//       fields: [
//         { name: 'h1FontSize', type: 'text', label: 'H1 Font Size' },
//         { name: 'h1Color', type: 'text', label: 'H1 Color' },
//         { name: 'h1FontWeight', type: 'text', label: 'H1 Font Weight' },
//         { name: 'h1LineHeight', type: 'text', label: 'H1 Line Height' },
//         { name: 'h2FontSize', type: 'text', label: 'H2 Font Size' },
//         { name: 'h2Color', type: 'text', label: 'H2 Color' },
//         { name: 'h2FontWeight', type: 'text', label: 'H2 Font Weight' },
//         { name: 'h2LineHeight', type: 'text', label: 'H2 Line Height' },
//         { name: 'h5FontSize', type: 'text', label: 'H5 Font Size' },
//         { name: 'h5Color', type: 'text', label: 'H5 Color' },
//         { name: 'h5FontWeight', type: 'text', label: 'H5 Font Weight' },
//         { name: 'bodyFontSize', type: 'text', label: 'Body Font Size' },
//         { name: 'bodyLineHeight', type: 'text', label: 'Body Line Height' },
//         { name: 'bodyColor', type: 'text', label: 'Body Text Color' },
//         {
//           name: 'smallTextFontSize',
//           type: 'text',
//           label: 'Small / Caption Font Size',
//         },
//       ],
//     },

//     // ─────────────────────────────────────────────
//     // ANIMATION SETTINGS
//     // ─────────────────────────────────────────────
//     {
//       name: 'animationSettings',
//       type: 'group',
//       label: 'Animation Settings',
//       fields: [
//         {
//           name: 'enableAnimations',
//           type: 'checkbox',
//           label: 'Enable All Animations',
//           defaultValue: true,
//         },
//         {
//           name: 'defaultTranslateY',
//           type: 'text',
//           label: 'Default Translate Y (entry)',
//           admin: {
//             description: 'CSS translate Y for scroll-in animations (e.g., 40px)',
//           },
//           defaultValue: '40px',
//         },
//         {
//           name: 'defaultBlur',
//           type: 'text',
//           label: 'Default Blur Amount (entry)',
//           admin: {
//             description: 'CSS blur for entry animations (e.g., 10px)',
//           },
//           defaultValue: '10px',
//         },
//         {
//           name: 'defaultDuration',
//           type: 'text',
//           label: 'Default Animation Duration',
//           admin: {
//             description: 'CSS transition/animation duration (e.g., 0.8s)',
//           },
//           defaultValue: '0.8s',
//         },
//         {
//           name: 'defaultEasing',
//           type: 'text',
//           label: 'Default Easing',
//           admin: {
//             description: 'CSS easing function',
//           },
//           defaultValue: 'ease-in-out',
//         },
//         {
//           name: 'staggerDelay',
//           type: 'text',
//           label: 'Stagger Delay Between Items',
//           admin: {
//             description: 'Delay between staggered elements (e.g., 0.1s)',
//           },
//           defaultValue: '0.1s',
//         },
//       ],
//     },

//     // ─────────────────────────────────────────────
//     // MOBILE SETTINGS
//     // ─────────────────────────────────────────────
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
//           label: 'Stack Sections on Mobile',
//           defaultValue: true,
//         },
//         {
//           name: 'mobileFontSizeScale',
//           type: 'text',
//           label: 'Mobile Font Scale',
//           admin: {
//             description: 'Multiplier for fonts on mobile (e.g., 0.85)',
//           },
//           defaultValue: '1',
//         },
//         {
//           name: 'mobileVideoFallbackToImage',
//           type: 'checkbox',
//           label: 'Fallback to Image on Mobile (for video section)',
//           defaultValue: false,
//         },
//         {
//           name: 'mobileSingleColumnCards',
//           type: 'checkbox',
//           label: 'Force Single Column Cards on Mobile',
//           defaultValue: true,
//         },
//       ],
//     },

//     // ─────────────────────────────────────────────
//     // SEO SETTINGS
//     // ─────────────────────────────────────────────
//     {
//       name: 'seoSettings',
//       type: 'group',
//       label: 'SEO Settings',
//       fields: [
//         {
//           name: 'metaTitle',
//           type: 'text',
//           label: 'Meta Title',
//           defaultValue: 'Ortho & Spine Physicians Group',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//           label: 'Meta Description',
//           defaultValue:
//             'Advanced, minimally invasive spine care designed to relieve pain, restore mobility, and improve quality of life.',
//         },
//         {
//           name: 'ogImage',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'OG Image',
//         },
//         {
//           name: 'keywords',
//           type: 'text',
//           label: 'Keywords',
//           admin: {
//             description: 'Comma-separated keywords',
//           },
//           defaultValue: 'spine care, minimally invasive, back pain, spine surgery, ortho',
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
//       ],
//     },

//     // ─────────────────────────────────────────────
//     // ADVANCED SETTINGS
//     // ─────────────────────────────────────────────
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
//             description: 'Additional CSS scoped to this page component',
//           },
//         },
//         {
//           name: 'customJS',
//           type: 'textarea',
//           label: 'Custom JavaScript',
//           admin: {
//             description: 'Additional JS executed on this page component',
//           },
//         },
//         {
//           name: 'lazyLoadImages',
//           type: 'checkbox',
//           label: 'Lazy Load Images',
//           defaultValue: true,
//         },
//         {
//           name: 'preloadHeroImage',
//           type: 'checkbox',
//           label: 'Preload Hero Image',
//           defaultValue: true,
//         },
//         {
//           name: 'enableCaching',
//           type: 'checkbox',
//           label: 'Enable Page Caching',
//           defaultValue: true,
//         },
//       ],
//     },

//     // ─────────────────────────────────────────────
//     // ACTIVE FLAG
//     // ─────────────────────────────────────────────
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

export const AlleAwardsFullPageComponent: CollectionConfig = {
  slug: 'alle-awards-full-page-component',
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
      defaultValue: 'Alle Awards Full Page Component',
    },

    // ─────────────────────────────────────────────
    // HERO SECTION
    // ─────────────────────────────────────────────
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
          admin: {
            description: 'e.g., home-hero _03',
          },
          defaultValue: 'home-hero _03',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., #000000, rgba(0,0,0,0.8))',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'titleLine1',
          type: 'text',
          label: 'Title Line 1',
          required: true,
          defaultValue: 'Trusted Spine Care',
        },
        {
          name: 'titleLine1Color',
          type: 'text',
          label: 'Title Line 1 Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'titleLine1FontSize',
          type: 'text',
          label: 'Title Line 1 Font Size',
          admin: {
            description: 'CSS font-size value (e.g., 64px, 5rem)',
          },
        },
        {
          name: 'titleInlineImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Inline Title Image (between title lines)',
        },
        {
          name: 'titleInlineImageAlt',
          type: 'text',
          label: 'Inline Image Alt Text',
          defaultValue: 'Team',
        },
        {
          name: 'titleLine2',
          type: 'text',
          label: 'Title Line 2',
          required: true,
          defaultValue: 'Focused on Your Recovery',
        },
        {
          name: 'titleLine2Color',
          type: 'text',
          label: 'Title Line 2 Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'titleLine2FontSize',
          type: 'text',
          label: 'Title Line 2 Font Size',
          admin: {
            description: 'CSS font-size value',
          },
        },
        {
          name: 'shortDescription',
          type: 'textarea',
          label: 'Short Description',
          defaultValue:
            'At Ortho & Spine Physicians Group, we specialize in advanced, minimally invasive spine care designed to relieve pain, restore mobility, and improve quality of life.',
        },
        {
          name: 'shortDescriptionColor',
          type: 'text',
          label: 'Short Description Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'shortDescriptionFontSize',
          type: 'text',
          label: 'Short Description Font Size',
        },
        {
          name: 'ctaButtons',
          type: 'array',
          label: 'CTA Buttons',
          admin: {
            description: 'Drag to reorder buttons',
          },
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Button',
              defaultValue: true,
            },
            {
              name: 'buttonType',
              type: 'select',
              label: 'Button Style',
              options: [
                { label: 'Primary (Filled)', value: 'primary' },
                { label: 'Secondary (Ghost / Underline)', value: 'secondary' },
              ],
              defaultValue: 'primary',
            },
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL / href',
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
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              admin: {
                description: 'Override button background color',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              admin: {
                description: 'Override button text color',
              },
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
              name: 'showArrowIcon',
              type: 'checkbox',
              label: 'Show Arrow Icon',
              defaultValue: true,
            },
            {
              name: 'arrowIconImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Arrow Icon Image',
            },
          ],
          defaultValue: [
            {
              show: true,
              buttonType: 'primary',
              text: 'Book a Consultation',
              url: '/pricing',
              openInNewTab: false,
              ariaLabel: 'Book a consultation with our spine specialists',
              showArrowIcon: true,
            },
            {
              show: true,
              buttonType: 'secondary',
              text: 'View Treatments',
              url: '/projects',
              openInNewTab: false,
              ariaLabel: 'View our available spine treatments',
              showArrowIcon: true,
            },
          ],
        },
        {
          name: 'heroBottomBar',
          type: 'group',
          label: 'Hero Bottom Bar',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Bottom Bar',
              defaultValue: true,
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Bottom Bar Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Bottom Bar Text Color',
            },
            {
              name: 'infoBadges',
              type: 'array',
              label: 'Info Badges (drag to reorder)',
              admin: {
                description: 'Small info chips shown in the bottom bar (e.g., location, copyright)',
              },
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Badge',
                  defaultValue: true,
                },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Badge Text',
                  required: true,
                },
                {
                  name: 'showSquareIndicator',
                  type: 'checkbox',
                  label: 'Show Square Indicator',
                  defaultValue: true,
                },
                {
                  name: 'squareColor',
                  type: 'text',
                  label: 'Square Indicator Color',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Text Color',
                },
              ],
              defaultValue: [
                { show: true, text: 'London 12:39AM', showSquareIndicator: true },
                { show: true, text: '©2025', showSquareIndicator: true },
              ],
            },
            {
              name: 'scrollIndicator',
              type: 'group',
              label: 'Scroll Indicator',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Scroll Indicator',
                  defaultValue: true,
                },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Scroll Text',
                  defaultValue: 'Scroll Down',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Text Color',
                },
                {
                  name: 'iconImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Scroll Icon Image',
                },
                {
                  name: 'iconColor',
                  type: 'text',
                  label: 'Icon Color',
                },
              ],
            },
          ],
        },
        {
          name: 'animationEnabled',
          type: 'checkbox',
          label: 'Enable Entry Animations',
          defaultValue: true,
        },
        {
          name: 'animationBlur',
          type: 'text',
          label: 'Animation Blur Amount',
          admin: {
            description: 'CSS blur value for the enter animation (e.g., 10px)',
          },
          defaultValue: '10px',
        },
        {
          name: 'animationTranslateY',
          type: 'text',
          label: 'Animation Translate Y',
          admin: {
            description: 'CSS translate Y for enter animation (e.g., 40px)',
          },
          defaultValue: '40px',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // VIDEO / IMAGE SECTION
    // ─────────────────────────────────────────────
    {
      name: 'videoSection',
      type: 'group',
      label: 'Video / Image Section',
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
            description: 'e.g., img-section',
          },
          defaultValue: 'img-section',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'sectionHeight',
          type: 'text',
          label: 'Section Height',
          admin: {
            description: 'CSS height value (e.g., 600px, 80vh)',
          },
        },
        {
          name: 'mediaType',
          type: 'select',
          label: 'Media Type',
          options: [
            { label: 'Background Video', value: 'video' },
            { label: 'Background Image', value: 'image' },
          ],
          defaultValue: 'video',
        },
        {
          name: 'videoSettings',
          type: 'group',
          label: 'Video Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.mediaType === 'video',
            description: 'Only used when Media Type is set to "Background Video"',
          },
          fields: [
            {
              name: 'posterImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Poster Image (shown before video loads)',
            },
            {
              name: 'videoFileMp4',
              type: 'upload',
              relationTo: 'media',
              label: 'Video File (MP4)',
            },
            {
              name: 'videoFileWebm',
              type: 'upload',
              relationTo: 'media',
              label: 'Video File (WebM)',
            },
            {
              name: 'autoplay',
              type: 'checkbox',
              label: 'Autoplay',
              defaultValue: true,
            },
            {
              name: 'loop',
              type: 'checkbox',
              label: 'Loop',
              defaultValue: true,
            },
            {
              name: 'muted',
              type: 'checkbox',
              label: 'Muted',
              defaultValue: true,
            },
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
          ],
        },
        {
          name: 'backgroundImageSettings',
          type: 'group',
          label: 'Background Image Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.mediaType === 'image',
            description: 'Only used when Media Type is set to "Background Image"',
          },
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
              defaultValue: 'Section background',
            },
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
          ],
        },
        {
          name: 'overlay',
          type: 'group',
          label: 'Overlay',
          fields: [
            {
              name: 'showOverlay',
              type: 'checkbox',
              label: 'Show Overlay',
              defaultValue: false,
            },
            {
              name: 'overlayColor',
              type: 'text',
              label: 'Overlay Color',
              admin: {
                description: 'CSS color / rgba value (e.g., rgba(0,0,0,0.4))',
              },
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // ABOUT SECTION
    // ─────────────────────────────────────────────
    {
      name: 'aboutSection',
      type: 'group',
      label: 'About Section',
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
            description: 'e.g., section-05',
          },
          defaultValue: 'section-05',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
        },
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: {
            description: 'CSS max-width (e.g., 1200px)',
          },
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
          admin: {
            description: 'CSS padding-top value (e.g., 80px)',
          },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: {
            description: 'CSS padding-bottom value (e.g., 80px)',
          },
        },
        {
          name: 'tagText',
          type: 'text',
          label: 'Tag / Eyebrow Text',
          admin: {
            description: 'Small label above the heading',
          },
        },
        {
          name: 'tagTextColor',
          type: 'text',
          label: 'Tag Text Color',
        },
        {
          name: 'tagBackgroundColor',
          type: 'text',
          label: 'Tag Background Color',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'About Ortho & Spine Physicians Group',
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
            description: 'CSS font-size value',
          },
        },
        {
          name: 'headingFontWeight',
          type: 'text',
          label: 'Heading Font Weight',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue:
            'We specialize in advanced minimally invasive spine care, focusing exclusively on treating back and spine conditions. Our physicians have dedicated their careers to mastering spine treatments, helping thousands of patients find lasting relief and regain their quality of life.',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
          admin: {
            description: 'CSS color value (e.g., color-sec-blue equivalent)',
          },
        },
        {
          name: 'descriptionFontSize',
          type: 'text',
          label: 'Description Font Size',
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Cards (drag to reorder)',
          admin: {
            description:
              'Add service cards, CEO/quote cards, or custom cards. Drag to change display order.',
          },
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Card',
              defaultValue: true,
            },
            {
              name: 'cardType',
              type: 'select',
              label: 'Card Type',
              required: true,
              options: [
                { label: 'Service Card (icon + text)', value: 'service' },
                { label: 'Quote / CEO Card (image + quote)', value: 'quote' },
              ],
              defaultValue: 'service',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Card Background Color',
              admin: {
                description: 'e.g., #ffffff or bg-white equivalent',
              },
              defaultValue: '#ffffff',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Card Text Color',
            },
            {
              name: 'borderColor',
              type: 'text',
              label: 'Card Border Color',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Card Border Radius',
              admin: {
                description: 'CSS border-radius (e.g., 12px, 1rem)',
              },
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Card Padding',
            },
            {
              name: 'iconBackgroundColor',
              type: 'text',
              label: 'Icon Box Background Color',
              admin: {
                description:
                  'Color of the icon container (e.g., #e8f5e9 for green, #fff9c4 for yellow, #e3f2fd for blue)',
                condition: (data, siblingData) => siblingData?.cardType === 'service',
              },
            },
            {
              name: 'iconBackgroundColorClass',
              type: 'select',
              label: 'Icon Box Color Preset',
              admin: {
                description: 'Choose a preset icon background color',
                condition: (data, siblingData) => siblingData?.cardType === 'service',
              },
              options: [
                { label: 'Green', value: 'bg-green' },
                { label: 'Yellow', value: 'bg-yellow' },
                { label: 'Blue', value: 'bg-blue' },
                { label: 'Red', value: 'bg-red' },
                { label: 'Custom (use color field above)', value: 'custom' },
              ],
              defaultValue: 'bg-green',
            },
            {
              name: 'iconSvgCode',
              type: 'textarea',
              label: 'Icon SVG Code',
              admin: {
                description:
                  'Paste raw SVG markup for the icon. Leave empty to use uploaded icon image instead.',
                condition: (data, siblingData) => siblingData?.cardType === 'service',
              },
            },
            {
              name: 'iconImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Icon Image (alternative to SVG)',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'service',
              },
            },
            {
              name: 'iconImageAlt',
              type: 'text',
              label: 'Icon Image Alt Text',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'service',
              },
            },
            {
              name: 'iconSize',
              type: 'text',
              label: 'Icon Box Size',
              admin: {
                description: 'CSS width/height for the icon box (e.g., 56px)',
                condition: (data, siblingData) => siblingData?.cardType === 'service',
              },
              defaultValue: '56px',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Card Title',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'service',
              },
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'service',
              },
            },
            {
              name: 'titleFontSize',
              type: 'text',
              label: 'Title Font Size',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'service',
              },
            },
            {
              name: 'description',
              type: 'richText',
              label: 'Card Description',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'service',
              },
            },
            {
              name: 'quoteImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Quote Card Image',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'quote',
              },
            },
            {
              name: 'quoteImageAlt',
              type: 'text',
              label: 'Quote Image Alt Text',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'quote',
              },
              defaultValue: 'Team Member',
            },
            {
              name: 'quoteTagText',
              type: 'text',
              label: 'Quote Tag Text',
              admin: {
                description: 'Small tag/badge overlaid on the image (e.g., "Our Experience")',
                condition: (data, siblingData) => siblingData?.cardType === 'quote',
              },
              defaultValue: 'Our Experience',
            },
            {
              name: 'quoteTagBackgroundColor',
              type: 'text',
              label: 'Quote Tag Background Color',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'quote',
              },
            },
            {
              name: 'quoteTagTextColor',
              type: 'text',
              label: 'Quote Tag Text Color',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'quote',
              },
            },
            {
              name: 'quoteText',
              type: 'textarea',
              label: 'Quote Text',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'quote',
              },
              defaultValue:
                '"Our team has helped thousands of patients overcome chronic spine conditions through advanced techniques and personalized care."',
            },
            {
              name: 'quoteTextColor',
              type: 'text',
              label: 'Quote Text Color',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'quote',
              },
            },
            {
              name: 'quoteFontSize',
              type: 'text',
              label: 'Quote Font Size',
              admin: {
                condition: (data, siblingData) => siblingData?.cardType === 'quote',
              },
            },
            {
              name: 'quoteFloatDecoratorColor',
              type: 'text',
              label: 'Float Decorator Color',
              admin: {
                description: 'Color for the floating decorative element on the card',
                condition: (data, siblingData) => siblingData?.cardType === 'quote',
              },
            },
            {
              name: 'animationEnabled',
              type: 'checkbox',
              label: 'Enable Entry Animation',
              defaultValue: true,
            },
          ],
          defaultValue: [
            {
              show: true,
              cardType: 'service',
              backgroundColor: '#ffffff',
              iconBackgroundColorClass: 'bg-green',
              iconSize: '56px',
              title: 'Specialized Spine Expertise',
              animationEnabled: true,
            },
            {
              show: true,
              cardType: 'quote',
              backgroundColor: '#ffffff',
              quoteImageAlt: 'Team Member',
              quoteTagText: 'Our Experience',
              quoteText:
                '"Our team has helped thousands of patients overcome chronic spine conditions through advanced techniques and personalized care."',
              animationEnabled: true,
            },
            {
              show: true,
              cardType: 'service',
              backgroundColor: '#ffffff',
              iconBackgroundColorClass: 'bg-yellow',
              iconSize: '56px',
              title: 'Minimally Invasive Approach',
              animationEnabled: true,
            },
            {
              show: true,
              cardType: 'service',
              backgroundColor: '#ffffff',
              iconBackgroundColorClass: 'bg-blue',
              iconSize: '56px',
              title: 'Proven Patient Outcomes',
              animationEnabled: true,
            },
            {
              show: true,
              cardType: 'service',
              backgroundColor: '#ffffff',
              iconBackgroundColorClass: 'bg-green',
              iconSize: '56px',
              title: 'Leaders in Spine Innovation',
              animationEnabled: true,
            },
          ],
        },
        {
          name: 'cardsGridColumns',
          type: 'select',
          label: 'Cards Grid Columns',
          options: [
            { label: '1 Column', value: '1' },
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' },
          ],
          defaultValue: '2',
        },
        {
          name: 'cardsGap',
          type: 'text',
          label: 'Cards Gap',
          admin: {
            description: 'Gap between cards (e.g., 24px, 1.5rem)',
          },
          defaultValue: '24px',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // STATS SECTION
    // ─────────────────────────────────────────────
    {
      name: 'statsSection',
      type: 'group',
      label: 'Stats Section (Section 03)',
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
          admin: { description: 'e.g., section-03' },
          defaultValue: 'section-03',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: { description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))' },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: { description: 'CSS color value' },
        },
        {
          name: 'containerPadding',
          type: 'text',
          label: 'Container Padding',
          admin: { description: 'CSS padding (e.g., 60px 20px)' },
        },
        {
          name: 'header',
          type: 'group',
          label: 'Header',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
              defaultValue:
                'Trusted by thousands of patients for advanced spine care, minimally invasive treatments, and long-lasting results.',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
              admin: { description: 'CSS color value' },
            },
            {
              name: 'titleFontSize',
              type: 'text',
              label: 'Title Font Size',
              admin: { description: 'CSS font-size value (e.g., 48px, 3rem)' },
            },
            {
              name: 'titleClassName',
              type: 'text',
              label: 'Title CSS Class',
              defaultValue: 'h-03',
            },
            {
              name: 'ctaButton',
              type: 'group',
              label: 'CTA Button',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Button',
                  defaultValue: true,
                },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'Book Consultation',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
                  defaultValue: '/contact',
                },
                {
                  name: 'variant',
                  type: 'select',
                  label: 'Button Variant',
                  options: [
                    { label: 'Black', value: 'black' },
                    { label: 'White', value: 'white' },
                    { label: 'Outline', value: 'outline' },
                  ],
                  defaultValue: 'black',
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Button Background Color',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Button Text Color',
                },
                {
                  name: 'hoverBackgroundColor',
                  type: 'text',
                  label: 'Button Hover Background Color',
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
                  name: 'showIcon',
                  type: 'checkbox',
                  label: 'Show Arrow Icon',
                  defaultValue: true,
                },
                {
                  name: 'iconUrl',
                  type: 'text',
                  label: 'Icon URL',
                  defaultValue:
                    'https://cdn.prod.website-files.com/68becb4858a3e743d2ec5a6d/68febf6e45a50554ad211cf1_Frame%202147230510.svg',
                },
              ],
            },
          ],
        },
        {
          name: 'stateWrapperVariant',
          type: 'select',
          label: 'Stats Wrapper Style Variant',
          options: [
            { label: 'White', value: 'white' },
            { label: 'Dark', value: 'dark' },
            { label: 'Light', value: 'light' },
          ],
          defaultValue: 'white',
        },
        {
          name: 'stateWrapperBackgroundColor',
          type: 'text',
          label: 'Stats Wrapper Background Color',
          admin: { description: 'Overrides the variant color if set' },
        },
        {
          name: 'stateWrapperPadding',
          type: 'text',
          label: 'Stats Wrapper Padding',
          admin: { description: 'CSS padding value' },
        },
        {
          name: 'stateWrapperGap',
          type: 'text',
          label: 'Gap Between Stat Cards',
          admin: { description: 'CSS gap value (e.g., 20px, 1.5rem)' },
        },
        {
          name: 'statCards',
          type: 'array',
          label: 'Stat Cards',
          admin: { description: 'Drag to reorder stat cards' },
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Card',
              defaultValue: true,
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Card Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Card Text Color',
            },
            {
              name: 'cardVariant',
              type: 'text',
              label: 'Card CSS Variant Class',
              admin: { description: 'e.g., w-variant-f362ad84-a9ee-3844-9ace-75312c40f51a' },
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Card Border Radius',
            },
            {
              name: 'boxShadow',
              type: 'text',
              label: 'Card Box Shadow',
            },
            {
              name: 'value',
              type: 'text',
              label: 'Stat Value',
              required: true,
              admin: { description: 'The main number (e.g., 850, 500, 20)' },
            },
            {
              name: 'suffix',
              type: 'text',
              label: 'Value Suffix',
              admin: { description: 'Displayed after the number (e.g., K+, +)' },
            },
            {
              name: 'valueColor',
              type: 'text',
              label: 'Value Color',
            },
            {
              name: 'valueFontSize',
              type: 'text',
              label: 'Value Font Size',
            },
            {
              name: 'label',
              type: 'text',
              label: 'Stat Label',
              required: true,
              admin: { description: 'Text shown below the number (e.g., Patients Treated)' },
            },
            {
              name: 'labelColor',
              type: 'text',
              label: 'Label Color',
            },
            {
              name: 'labelClassName',
              type: 'text',
              label: 'Label CSS Class',
              defaultValue: 'p-text-02-m',
            },
            {
              name: 'iconCircleColor',
              type: 'text',
              label: 'Icon Circle Stroke Color',
              admin: { description: 'Color of the small decorative circle icon' },
              defaultValue: '#081122',
            },
            {
              name: 'tag',
              type: 'group',
              label: 'Tag / Badge',
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
                },
                {
                  name: 'variant',
                  type: 'select',
                  label: 'Tag Color Variant',
                  options: [
                    { label: 'Blue', value: 'blue' },
                    { label: 'Base (Default)', value: 'base' },
                    { label: 'Yellow', value: 'yellow' },
                    { label: 'Green', value: 'green' },
                    { label: 'Red', value: 'red' },
                  ],
                  defaultValue: 'blue',
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Tag Background Color',
                  admin: { description: 'Overrides the variant color if set' },
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
            {
              name: 'counterAnimation',
              type: 'group',
              label: 'Counter Roll Animation',
              fields: [
                {
                  name: 'enabled',
                  type: 'checkbox',
                  label: 'Enable Counter Animation',
                  defaultValue: true,
                },
                {
                  name: 'startValue',
                  type: 'text',
                  label: 'Animation Start Value',
                  admin: { description: 'Number to count up from' },
                  defaultValue: '0',
                },
                {
                  name: 'duration',
                  type: 'text',
                  label: 'Animation Duration',
                  defaultValue: '1s',
                },
                {
                  name: 'delay',
                  type: 'text',
                  label: 'Animation Delay',
                  defaultValue: '0s',
                },
                {
                  name: 'easing',
                  type: 'text',
                  label: 'Animation Easing',
                  defaultValue: 'ease-in-out',
                },
              ],
            },
          ],
          defaultValue: [
            {
              show: true,
              value: '850',
              suffix: 'K+',
              label: 'Patients Treated',
              labelClassName: 'p-text-02-m',
              iconCircleColor: '#081122',
              tag: { show: true, text: 'Trusted Care', variant: 'blue' },
              counterAnimation: {
                enabled: true,
                startValue: '0',
                duration: '1s',
                delay: '0s',
                easing: 'ease-in-out',
              },
            },
            {
              show: true,
              value: '500',
              suffix: '+',
              label: 'Procedures Performed',
              labelClassName: 'p-text-02-m',
              iconCircleColor: '#081122',
              tag: { show: true, text: 'Proven Results', variant: 'base' },
              counterAnimation: {
                enabled: true,
                startValue: '0',
                duration: '1s',
                delay: '0.2s',
                easing: 'ease-in-out',
              },
            },
            {
              show: true,
              value: '20',
              suffix: '+',
              label: 'Years of Experience',
              labelClassName: 'p-text-02-m',
              iconCircleColor: '#081122',
              tag: { show: true, text: 'Expert Team', variant: 'yellow' },
              counterAnimation: {
                enabled: true,
                startValue: '0',
                duration: '1s',
                delay: '0.4s',
                easing: 'ease-in-out',
              },
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // DOCTORS SECTION
    // ─────────────────────────────────────────────
    {
      name: 'doctorsSection',
      type: 'group',
      label: 'Doctors Section (Section 05)',
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
          admin: { description: 'e.g., section-05' },
          defaultValue: 'section-05',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'header',
          type: 'group',
          label: 'Header',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Section Title',
              required: true,
              defaultValue: 'Meet Our Spine Specialists',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'titleFontSize',
              type: 'text',
              label: 'Title Font Size',
            },
            {
              name: 'titleClassName',
              type: 'text',
              label: 'Title CSS Class',
              defaultValue: 'h-02',
            },
            {
              name: 'titleMaxWidth',
              type: 'text',
              label: 'Title Max Width',
              admin: { description: 'CSS max-width (e.g., 538px)' },
              defaultValue: '538px',
            },
            {
              name: 'ctaButton',
              type: 'group',
              label: 'CTA Button',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Button',
                  defaultValue: true,
                },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'Book Consultation',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
                  defaultValue: '/contact',
                },
                {
                  name: 'variant',
                  type: 'select',
                  label: 'Button Variant',
                  options: [
                    { label: 'Black', value: 'black' },
                    { label: 'White', value: 'white' },
                    { label: 'Outline', value: 'outline' },
                  ],
                  defaultValue: 'black',
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Button Background Color',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Button Text Color',
                },
                {
                  name: 'hoverBackgroundColor',
                  type: 'text',
                  label: 'Button Hover Background Color',
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
                  name: 'showIcon',
                  type: 'checkbox',
                  label: 'Show Arrow Icon',
                  defaultValue: true,
                },
                {
                  name: 'iconUrl',
                  type: 'text',
                  label: 'Icon URL',
                  defaultValue:
                    'https://cdn.prod.website-files.com/68becb4858a3e743d2ec5a6d/68febf6e45a50554ad211cf1_Frame%202147230510.svg',
                },
              ],
            },
          ],
        },
        {
          name: 'layoutType',
          type: 'select',
          label: 'Layout Type',
          options: [
            { label: 'Horizontal Scroll (Sticky)', value: 'sticky-scroll' },
            { label: 'Grid', value: 'grid' },
            { label: 'Flex Row', value: 'flex-row' },
          ],
          defaultValue: 'sticky-scroll',
        },
        {
          name: 'fixedHeight',
          type: 'text',
          label: 'Fixed Height (Sticky Scroll)',
          admin: { description: 'CSS height for the sticky scroll container (e.g., 600px)' },
        },
        {
          name: 'gridColumns',
          type: 'select',
          label: 'Columns (Grid Layout)',
          options: [
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
          ],
          defaultValue: '3',
        },
        {
          name: 'cardGap',
          type: 'text',
          label: 'Gap Between Cards',
          admin: { description: 'CSS gap value (e.g., 20px, 1.5rem)' },
        },
        {
          name: 'cardImageAspectRatio',
          type: 'text',
          label: 'Card Image Aspect Ratio',
          admin: { description: 'CSS aspect-ratio (e.g., 3/4, 1/1, 4/3)' },
          defaultValue: '3/4',
        },
        {
          name: 'doctorCards',
          type: 'array',
          label: 'Doctor Cards',
          admin: { description: 'Drag to reorder doctor cards' },
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Card',
              defaultValue: true,
            },
            {
              name: 'name',
              type: 'text',
              label: 'Doctor Name',
              required: true,
            },
            {
              name: 'nameColor',
              type: 'text',
              label: 'Name Text Color',
            },
            {
              name: 'nameClassName',
              type: 'text',
              label: 'Name CSS Class',
              defaultValue: 'p-text-01-m',
            },
            {
              name: 'profileUrl',
              type: 'text',
              label: 'Profile URL',
              defaultValue: '#',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open Profile in New Tab',
              defaultValue: false,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Doctor Photo',
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alt Text',
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
              name: 'cardBackgroundColor',
              type: 'text',
              label: 'Card Background Color',
            },
            {
              name: 'cardTextColor',
              type: 'text',
              label: 'Card Text Color',
            },
            {
              name: 'cardBorderRadius',
              type: 'text',
              label: 'Card Border Radius',
            },
            {
              name: 'cardBoxShadow',
              type: 'text',
              label: 'Card Box Shadow',
            },
            {
              name: 'viewButton',
              type: 'group',
              label: 'View Profile Button (Hover Overlay)',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'View Profile',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Button Text Color',
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Button Background Color',
                },
                {
                  name: 'overlayBackgroundColor',
                  type: 'text',
                  label: 'Overlay Background Color',
                  admin: {
                    description: 'Semi-transparent overlay on card image hover',
                  },
                },
              ],
            },
            {
              name: 'specialties',
              type: 'array',
              label: 'Specialty Tags',
              admin: { description: 'Drag to reorder specialty tags' },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Specialty',
                  required: true,
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
                {
                  name: 'className',
                  type: 'text',
                  label: 'Tag CSS Class',
                  defaultValue: 'p-text-02-m',
                },
              ],
            },
          ],
          defaultValue: [
            {
              show: true,
              name: 'Dr. Michael Carter',
              nameClassName: 'p-text-01-m',
              profileUrl: '#',
              openInNewTab: false,
              imageObjectFit: 'cover',
              viewButton: { text: 'View Profile' },
              specialties: [
                { label: 'Spine Surgeon', className: 'p-text-02-m' },
                { label: 'Minimally Invasive', className: 'p-text-02-m' },
              ],
            },
            {
              show: true,
              name: 'Dr. Sarah Mitchell',
              nameClassName: 'p-text-01-m',
              profileUrl: '#',
              openInNewTab: false,
              imageObjectFit: 'cover',
              viewButton: { text: 'View Profile' },
              specialties: [
                { label: 'Orthopedic Specialist', className: 'p-text-02-m' },
                { label: 'Pain Management', className: 'p-text-02-m' },
              ],
            },
            {
              show: true,
              name: 'Dr. Emily Johnson',
              nameClassName: 'p-text-01-m',
              profileUrl: '#',
              openInNewTab: false,
              imageObjectFit: 'cover',
              viewButton: { text: 'View Profile' },
              specialties: [
                { label: 'Neurology', className: 'p-text-02-m' },
                { label: 'Spine Care', className: 'p-text-02-m' },
              ],
            },
            {
              show: true,
              name: 'Dr. David Reynolds',
              nameClassName: 'p-text-01-m',
              profileUrl: '#',
              openInNewTab: false,
              imageObjectFit: 'cover',
              viewButton: { text: 'View Profile' },
              specialties: [
                { label: 'Spine Specialist', className: 'p-text-02-m' },
                { label: 'Rehabilitation', className: 'p-text-02-m' },
              ],
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // SECTION ORDER
    // ─────────────────────────────────────────────
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder which sections appear and in what order on the page',
      },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Hero Section', value: 'hero' },
            { label: 'Video / Image Section', value: 'video' },
            { label: 'About Section', value: 'about' },
            { label: 'Stats Section (Section 03)', value: 'statsSection' },
            { label: 'Doctors Section (Section 05)', value: 'doctorsSection' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'video' },
        { section: 'about' },
        { section: 'statsSection' },
        { section: 'doctorsSection' },
      ],
    },

    // ─────────────────────────────────────────────
    // GLOBAL STYLES
    // ─────────────────────────────────────────────
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'pageBackgroundColor',
          type: 'text',
          label: 'Page Background Color',
          admin: {
            description: 'Background color for the whole page',
          },
          defaultValue: '#ffffff',
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
          admin: {
            description: 'CSS font-family value',
          },
        },
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
          admin: {
            description: 'Main brand/accent color used across sections',
          },
          defaultValue: '#081122',
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color',
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
          defaultValue: '#081122',
        },
        {
          name: 'secondaryTextColor',
          type: 'text',
          label: 'Secondary Text Color',
          admin: {
            description: 'Used for muted/secondary text (color-sec-blue equivalent)',
          },
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Default Heading Color',
          defaultValue: '#081122',
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
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: {
            description: 'CSS max-width for page container (e.g., 1200px)',
          },
        },
        {
          name: 'containerPadding',
          type: 'text',
          label: 'Container Horizontal Padding',
          admin: {
            description: 'CSS padding value (e.g., 0 20px)',
          },
        },
        {
          name: 'sectionSpacing',
          type: 'text',
          label: 'Spacing Between Sections',
          admin: {
            description: 'CSS margin/padding value between sections',
          },
        },
      ],
    },

    // ─────────────────────────────────────────────
    // TYPOGRAPHY SETTINGS
    // ─────────────────────────────────────────────
    {
      name: 'typographySettings',
      type: 'group',
      label: 'Typography Settings',
      fields: [
        { name: 'h1FontSize', type: 'text', label: 'H1 Font Size' },
        { name: 'h1Color', type: 'text', label: 'H1 Color' },
        { name: 'h1FontWeight', type: 'text', label: 'H1 Font Weight' },
        { name: 'h1LineHeight', type: 'text', label: 'H1 Line Height' },
        { name: 'h2FontSize', type: 'text', label: 'H2 Font Size' },
        { name: 'h2Color', type: 'text', label: 'H2 Color' },
        { name: 'h2FontWeight', type: 'text', label: 'H2 Font Weight' },
        { name: 'h2LineHeight', type: 'text', label: 'H2 Line Height' },
        { name: 'h3FontSize', type: 'text', label: 'H3 Font Size' },
        { name: 'h3Color', type: 'text', label: 'H3 Color' },
        { name: 'h5FontSize', type: 'text', label: 'H5 Font Size' },
        { name: 'h5Color', type: 'text', label: 'H5 Color' },
        { name: 'h5FontWeight', type: 'text', label: 'H5 Font Weight' },
        { name: 'bodyFontSize', type: 'text', label: 'Body Font Size' },
        { name: 'bodyLineHeight', type: 'text', label: 'Body Line Height' },
        { name: 'bodyColor', type: 'text', label: 'Body Text Color' },
        { name: 'smallTextFontSize', type: 'text', label: 'Small / Caption Font Size' },
        { name: 'paragraphSpacing', type: 'text', label: 'Paragraph Spacing' },
      ],
    },

    // ─────────────────────────────────────────────
    // BUTTON STYLES (GLOBAL)
    // ─────────────────────────────────────────────
    {
      name: 'buttonStyles',
      type: 'group',
      label: 'Button Styles (Global)',
      admin: { description: 'Default button appearance — overridden per-section where set' },
      fields: [
        {
          name: 'defaultVariant',
          type: 'select',
          label: 'Default Variant',
          options: [
            { label: 'Black', value: 'black' },
            { label: 'White', value: 'white' },
            { label: 'Outline', value: 'outline' },
          ],
          defaultValue: 'black',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
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
          admin: { description: 'CSS border-radius (e.g., 4px, 50px, 0.5rem)' },
        },
        {
          name: 'padding',
          type: 'text',
          label: 'Padding',
          admin: { description: 'CSS padding (e.g., 12px 24px)' },
        },
        {
          name: 'fontSize',
          type: 'text',
          label: 'Font Size',
        },
        {
          name: 'fontWeight',
          type: 'text',
          label: 'Font Weight',
        },
        {
          name: 'transitionDuration',
          type: 'text',
          label: 'Hover Transition Duration',
          defaultValue: '0.3s',
        },
        {
          name: 'showArrowIcon',
          type: 'checkbox',
          label: 'Show Arrow Icon by Default',
          defaultValue: true,
        },
        {
          name: 'arrowIconUrl',
          type: 'text',
          label: 'Arrow Icon URL',
          defaultValue:
            'https://cdn.prod.website-files.com/68becb4858a3e743d2ec5a6d/68febf6e45a50554ad211cf1_Frame%202147230510.svg',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // TAG / BADGE STYLES (GLOBAL)
    // ─────────────────────────────────────────────
    {
      name: 'tagStyles',
      type: 'group',
      label: 'Tag / Badge Styles (Global)',
      admin: { description: 'Default appearance for all tags — overridden per-card where set' },
      fields: [
        {
          name: 'blueBackgroundColor',
          type: 'text',
          label: 'Blue Variant Background',
        },
        {
          name: 'blueTextColor',
          type: 'text',
          label: 'Blue Variant Text Color',
        },
        {
          name: 'baseBackgroundColor',
          type: 'text',
          label: 'Base Variant Background',
        },
        {
          name: 'baseTextColor',
          type: 'text',
          label: 'Base Variant Text Color',
        },
        {
          name: 'yellowBackgroundColor',
          type: 'text',
          label: 'Yellow Variant Background',
        },
        {
          name: 'yellowTextColor',
          type: 'text',
          label: 'Yellow Variant Text Color',
        },
        {
          name: 'borderRadius',
          type: 'text',
          label: 'Tag Border Radius',
          admin: { description: 'CSS border-radius for all tags' },
        },
        {
          name: 'padding',
          type: 'text',
          label: 'Tag Padding',
        },
        {
          name: 'fontSize',
          type: 'text',
          label: 'Tag Font Size',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // ANIMATION SETTINGS
    // ─────────────────────────────────────────────
    {
      name: 'animationSettings',
      type: 'group',
      label: 'Animation Settings',
      fields: [
        {
          name: 'enableAnimations',
          type: 'checkbox',
          label: 'Enable All Animations',
          defaultValue: true,
        },
        {
          name: 'defaultTranslateY',
          type: 'text',
          label: 'Default Translate Y (entry)',
          admin: {
            description: 'CSS translate Y for scroll-in animations (e.g., 40px)',
          },
          defaultValue: '40px',
        },
        {
          name: 'defaultBlur',
          type: 'text',
          label: 'Default Blur Amount (entry)',
          admin: {
            description: 'CSS blur for entry animations (e.g., 10px)',
          },
          defaultValue: '10px',
        },
        {
          name: 'defaultDuration',
          type: 'text',
          label: 'Default Animation Duration',
          admin: {
            description: 'CSS transition/animation duration (e.g., 0.8s)',
          },
          defaultValue: '0.8s',
        },
        {
          name: 'defaultEasing',
          type: 'text',
          label: 'Default Easing',
          admin: {
            description: 'CSS easing function',
          },
          defaultValue: 'ease-in-out',
        },
        {
          name: 'staggerDelay',
          type: 'text',
          label: 'Stagger Delay Between Items',
          admin: {
            description: 'Delay between staggered elements (e.g., 0.1s)',
          },
          defaultValue: '0.1s',
        },
        {
          name: 'enableCounterAnimation',
          type: 'checkbox',
          label: 'Enable Counter Roll Animation',
          admin: { description: 'Animated number-slot rolling effect on stat cards' },
          defaultValue: true,
        },
        {
          name: 'counterAnimationDuration',
          type: 'text',
          label: 'Counter Animation Duration',
          defaultValue: '1s',
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
          name: 'enableScrollTrigger',
          type: 'checkbox',
          label: 'Enable Scroll-Triggered Animations',
          defaultValue: true,
        },
        {
          name: 'scrollOffset',
          type: 'text',
          label: 'Scroll Trigger Offset (px)',
          admin: { description: 'Distance from viewport edge to trigger animations' },
          defaultValue: '100',
        },
        {
          name: 'enableCardHoverEffects',
          type: 'checkbox',
          label: 'Enable Card Hover Effects',
          defaultValue: true,
        },
        {
          name: 'cardHoverScale',
          type: 'text',
          label: 'Card Hover Scale',
          admin: { description: 'Transform scale on card hover (e.g., 1.02)' },
          defaultValue: '1.02',
        },
        {
          name: 'cardHoverTransitionDuration',
          type: 'text',
          label: 'Card Hover Transition Duration',
          defaultValue: '0.3s',
        },
      ],
    },

    // ─────────────────────────────────────────────
    // MOBILE SETTINGS
    // ─────────────────────────────────────────────
    {
      name: 'mobileSettings',
      type: 'group',
      label: 'Mobile Settings',
      fields: [
        {
          name: 'mobileBreakpoint',
          type: 'text',
          label: 'Mobile Breakpoint',
          admin: { description: 'Screen width threshold for mobile (e.g., 768px)' },
          defaultValue: '768px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          admin: { description: 'Screen width threshold for tablet (e.g., 1024px)' },
          defaultValue: '1024px',
        },
        {
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections Vertically on Mobile',
          defaultValue: true,
        },
        {
          name: 'mobileFontSizeScale',
          type: 'text',
          label: 'Mobile Font Scale',
          admin: {
            description: 'Multiplier for fonts on mobile (e.g., 0.85)',
          },
          defaultValue: '1',
        },
        {
          name: 'mobileVideoFallbackToImage',
          type: 'checkbox',
          label: 'Fallback to Image on Mobile (for video section)',
          defaultValue: false,
        },
        {
          name: 'mobileSingleColumnCards',
          type: 'checkbox',
          label: 'Force Single Column Cards on Mobile',
          defaultValue: true,
        },
        {
          name: 'mobileCardsPerRow',
          type: 'select',
          label: 'Doctor Cards Per Row (Mobile)',
          options: [
            { label: '1', value: '1' },
            { label: '2', value: '2' },
          ],
          defaultValue: '1',
        },
        {
          name: 'mobileStatCardsLayout',
          type: 'select',
          label: 'Stat Cards Layout (Mobile)',
          options: [
            { label: 'Stack Vertically', value: 'stack' },
            { label: 'Horizontal Scroll', value: 'scroll' },
          ],
          defaultValue: 'stack',
        },
        {
          name: 'mobileDisableStickyScroll',
          type: 'checkbox',
          label: 'Disable Sticky Scroll on Mobile',
          defaultValue: true,
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          admin: { description: 'Percentage adjustment (e.g., 90%, 100%)' },
          defaultValue: '100%',
        },
        {
          name: 'mobileSpacingAdjustment',
          type: 'text',
          label: 'Mobile Spacing Adjustment',
          admin: { description: 'Percentage adjustment for spacing on mobile' },
          defaultValue: '100%',
        },
        {
          name: 'mobileImageHeight',
          type: 'text',
          label: 'Mobile Doctor Image Max Height',
          admin: { description: 'CSS max-height for doctor images on mobile (e.g., 300px)' },
        },
      ],
    },

    // ─────────────────────────────────────────────
    // ACCESSIBILITY SETTINGS
    // ─────────────────────────────────────────────
    {
      name: 'accessibilitySettings',
      type: 'group',
      label: 'Accessibility Settings',
      fields: [
        {
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
        },
        {
          name: 'altTextRequired',
          type: 'checkbox',
          label: 'Require Alt Text for Doctor Images',
          defaultValue: true,
        },
        {
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Color',
          admin: { description: 'Color for keyboard focus outlines (accessibility)' },
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
        {
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
        },
        {
          name: 'reduceMotion',
          type: 'checkbox',
          label: 'Respect Reduced Motion Preference',
          admin: {
            description: 'Disable animations for users who have prefers-reduced-motion enabled',
          },
          defaultValue: true,
        },
      ],
    },

    // ─────────────────────────────────────────────
    // SEO SETTINGS
    // ─────────────────────────────────────────────
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          defaultValue: 'Ortho & Spine Physicians Group',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Advanced, minimally invasive spine care designed to relieve pain, restore mobility, and improve quality of life.',
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
          defaultValue: 'spine care, minimally invasive, back pain, spine surgery, ortho',
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
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: { description: 'Add schema.org structured data in JSON-LD format' },
        },
      ],
    },

    // ─────────────────────────────────────────────
    // PERFORMANCE SETTINGS
    // ─────────────────────────────────────────────
    {
      name: 'performanceSettings',
      type: 'group',
      label: 'Performance Settings',
      fields: [
        {
          name: 'lazyLoadImages',
          type: 'checkbox',
          label: 'Enable Lazy Loading for Images',
          defaultValue: true,
        },
        {
          name: 'imageOptimization',
          type: 'checkbox',
          label: 'Enable Image Optimization',
          defaultValue: true,
        },
        {
          name: 'imageQuality',
          type: 'text',
          label: 'Image Quality',
          admin: { description: 'Compression quality 1–100' },
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
          name: 'preloadCriticalImages',
          type: 'checkbox',
          label: 'Preload Critical Images',
          defaultValue: true,
        },
        {
          name: 'preloadHeroImage',
          type: 'checkbox',
          label: 'Preload Hero Image',
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
          admin: { description: 'Base URL for CDN (e.g., https://cdn.example.com)' },
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
      ],
    },

    // ─────────────────────────────────────────────
    // INTEGRATION SETTINGS
    // ─────────────────────────────────────────────
    {
      name: 'integrationSettings',
      type: 'group',
      label: 'Integration Settings',
      fields: [
        {
          name: 'googleAnalyticsId',
          type: 'text',
          label: 'Google Analytics ID',
          admin: { description: 'GA tracking ID (e.g., G-XXXXXXXXXX)' },
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
        {
          name: 'ctaTrackingLabel',
          type: 'text',
          label: 'CTA Tracking Label',
          admin: { description: 'Event label used when tracking CTA button clicks' },
          defaultValue: 'Book Consultation CTA',
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
            {
              name: 'tagCode',
              type: 'textarea',
              label: 'Tag Code',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // ADVANCED SETTINGS
    // ─────────────────────────────────────────────
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
            description: 'Additional CSS scoped to this page component',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Additional JS executed on this page component',
          },
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Page Caching',
          defaultValue: true,
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          admin: { description: 'Attach custom data-* attributes to specific sections' },
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              admin: { description: 'e.g., data-tracking-id' },
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
                { label: 'Video / Image Section', value: 'video' },
                { label: 'About Section', value: 'about' },
                { label: 'Stats Section', value: 'statsSection' },
                { label: 'Doctors Section', value: 'doctorsSection' },
              ],
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // ACTIVE FLAG
    // ─────────────────────────────────────────────
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
