// import { CollectionConfig } from 'payload'

// export const SpineCareComponentSections: CollectionConfig = {
//   slug: 'spine-care-component-sections',
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
//       defaultValue: 'Spine Care Component Sections',
//     },

//     // ─── Section Order ───────────────────────────────────────────────────────
//     {
//       name: 'sectionOrder',
//       type: 'array',
//       label: 'Section Order',
//       admin: {
//         description: 'Drag to reorder sections on the page',
//       },
//       fields: [
//         {
//           name: 'section',
//           type: 'select',
//           label: 'Section',
//           required: true,
//           options: [
//             { label: 'Conditions We Treat', value: 'conditionsSection' },
//             { label: "Why We're Different", value: 'differenceSection' },
//           ],
//         },
//       ],
//       defaultValue: [{ section: 'conditionsSection' }, { section: 'differenceSection' }],
//     },

//     // ─── Section 1: Conditions We Treat ─────────────────────────────────────
//     {
//       name: 'conditionsSection',
//       type: 'group',
//       label: 'Section 1: Conditions We Treat',
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
//             description: 'e.g., section-03',
//           },
//           defaultValue: 'section-03',
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Section Background Color',
//           admin: {
//             description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
//           },
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Section Text Color',
//           admin: {
//             description: 'CSS color value',
//           },
//         },
//         {
//           name: 'paddingTop',
//           type: 'text',
//           label: 'Padding Top',
//           admin: {
//             description: 'CSS padding value (e.g., 60px, 4rem)',
//           },
//         },
//         {
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom',
//           admin: {
//             description: 'CSS padding value (e.g., 60px, 4rem)',
//           },
//         },

//         // Tag Box
//         {
//           name: 'tagBox',
//           type: 'group',
//           label: 'Tag Box',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Tag Box',
//               defaultValue: true,
//             },
//             {
//               name: 'label',
//               type: 'text',
//               label: 'Tag Label',
//               defaultValue: 'Conditions We Treat',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Tag Background Color',
//               admin: {
//                 description: 'CSS color value (e.g., #015565)',
//               },
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Tag Text Color',
//               admin: {
//                 description: 'CSS color value (e.g., #ffffff)',
//               },
//             },
//             {
//               name: 'variant',
//               type: 'text',
//               label: 'Variant (data-wf--tag-box--variant)',
//               defaultValue: 'base',
//               admin: {
//                 description: 'e.g., base, outlined, filled',
//               },
//             },
//           ],
//         },

//         // Heading
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Section Heading',
//           defaultValue: 'Comprehensive Spine Care for a Wide Range of Conditions',
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//           admin: {
//             description: 'CSS color value',
//           },
//         },
//         {
//           name: 'headingFontSize',
//           type: 'text',
//           label: 'Heading Font Size',
//           admin: {
//             description: 'CSS font-size value (e.g., 48px, 3rem)',
//           },
//         },
//         {
//           name: 'headingMaxWidth',
//           type: 'text',
//           label: 'Heading Wrapper Max Width (px)',
//           defaultValue: '550',
//           admin: {
//             description: 'Numeric px value for max-width on the tag-title wrapper',
//           },
//         },

//         // Condition Cards — draggable array, 2 per row
//         {
//           name: 'conditionCards',
//           type: 'array',
//           label: 'Condition Cards',
//           admin: {
//             description:
//               'Drag to reorder. Cards render 2 per row (top-left, top-right, bottom-left, bottom-right).',
//           },
//           fields: [
//             {
//               name: 'cardType',
//               type: 'select',
//               label: 'Card Type',
//               required: true,
//               options: [
//                 { label: 'Media Card (image + background video)', value: 'media-card' },
//                 { label: 'Colored Card (solid background, no media)', value: 'colored-card' },
//                 { label: 'Text Only Card', value: 'text-card' },
//               ],
//               defaultValue: 'text-card',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Card Background Color',
//               admin: {
//                 description:
//                   'CSS color value or Webflow color class (e.g., #eaf7f5, bg-green, bg-blue)',
//               },
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Card Text Color',
//               admin: {
//                 description: 'CSS color value',
//               },
//             },
//             {
//               name: 'extraClassName',
//               type: 'text',
//               label: 'Extra CSS Class',
//               admin: {
//                 description: 'Additional modifier class appended to the card (e.g., _02, _04)',
//               },
//             },
//             {
//               name: 'bodyText',
//               type: 'textarea',
//               label: 'Body / Description Text',
//               admin: {
//                 description: 'Main descriptive paragraph inside the card',
//               },
//             },
//             {
//               name: 'bodyTextColor',
//               type: 'text',
//               label: 'Body Text Color',
//               admin: {
//                 description: 'CSS color value',
//               },
//             },
//             {
//               name: 'conditionTitle',
//               type: 'text',
//               label: 'Condition Title',
//               admin: {
//                 description: 'Bold title at the bottom of the card (e.g., Back & Neck Pain)',
//               },
//             },
//             {
//               name: 'conditionTitleColor',
//               type: 'text',
//               label: 'Condition Title Color',
//             },
//             {
//               name: 'conditionSubtitle',
//               type: 'text',
//               label: 'Condition Subtitle',
//               admin: {
//                 description:
//                   'Secondary label below the title (e.g., Chronic, acute, and injury-related pain)',
//               },
//             },
//             {
//               name: 'conditionSubtitleColor',
//               type: 'text',
//               label: 'Condition Subtitle Color',
//               admin: {
//                 description: 'CSS color value (e.g., #015565)',
//               },
//             },
//             // Media fields — shown conditionally for media-card
//             {
//               name: 'image',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Card Image (fallback / above video)',
//               admin: {
//                 description: 'Displayed when video is unavailable. Used for media-card type.',
//                 condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
//               },
//             },
//             {
//               name: 'imageAlt',
//               type: 'text',
//               label: 'Image Alt Text',
//               admin: {
//                 condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
//               },
//             },
//             {
//               name: 'videoPoster',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Video Poster Image',
//               admin: {
//                 description: 'Poster frame shown before video plays.',
//                 condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
//               },
//             },
//             {
//               name: 'videoMp4',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Background Video (MP4)',
//               admin: {
//                 condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
//               },
//             },
//             {
//               name: 'videoWebm',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Background Video (WebM)',
//               admin: {
//                 condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
//               },
//             },
//             {
//               name: 'videoAutoplay',
//               type: 'checkbox',
//               label: 'Video Autoplay',
//               defaultValue: true,
//               admin: {
//                 condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
//               },
//             },
//             {
//               name: 'videoLoop',
//               type: 'checkbox',
//               label: 'Video Loop',
//               defaultValue: true,
//               admin: {
//                 condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
//               },
//             },
//             {
//               name: 'videoMuted',
//               type: 'checkbox',
//               label: 'Video Muted',
//               defaultValue: true,
//               admin: {
//                 condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
//               },
//             },
//             {
//               name: 'videoObjectFit',
//               type: 'select',
//               label: 'Video Object Fit',
//               options: [
//                 { label: 'Cover', value: 'cover' },
//                 { label: 'Contain', value: 'contain' },
//                 { label: 'Fill', value: 'fill' },
//               ],
//               defaultValue: 'cover',
//               admin: {
//                 condition: (_data, siblingData) => siblingData?.cardType === 'media-card',
//               },
//             },
//           ],
//           defaultValue: [
//             {
//               cardType: 'media-card',
//               backgroundColor: 'bg-green',
//               bodyText:
//                 'Back and neck pain can affect every aspect of your life. Our team specializes in diagnosing and treating the root cause to provide lasting relief.',
//               conditionTitle: 'Back & Neck Pain',
//               conditionSubtitle: 'Chronic, acute, and injury-related pain',
//               imageAlt: 'Client',
//               videoAutoplay: true,
//               videoLoop: true,
//               videoMuted: true,
//               videoObjectFit: 'cover',
//             },
//             {
//               cardType: 'text-card',
//               bodyText:
//                 'Herniated discs and spinal conditions can cause severe discomfort and limit mobility. We offer advanced, minimally invasive solutions to treat these conditions effectively.',
//               conditionTitle: 'Herniated Disc',
//               conditionSubtitle: 'Advanced treatment options available',
//             },
//             {
//               cardType: 'text-card',
//               extraClassName: '_04',
//               bodyText:
//                 'Sciatica and nerve-related pain can travel through the lower back and legs. Our targeted treatments are designed to relieve pressure and restore mobility.',
//               conditionTitle: 'Sciatica & Nerve Pain',
//               conditionSubtitle: 'Nerve compression & radiating pain relief',
//             },
//             {
//               cardType: 'colored-card',
//               backgroundColor: 'bg-blue',
//               extraClassName: '_02',
//               bodyText:
//                 'Degenerative spine conditions can worsen over time. We provide personalized treatment plans to slow progression and improve quality of life.',
//               conditionTitle: 'Degenerative Spine Conditions',
//               conditionSubtitle: 'Long-term care & management solutions',
//             },
//           ],
//         },
//       ],
//     },

//     // ─── Section 2: Why We're Different ─────────────────────────────────────
//     {
//       name: 'differenceSection',
//       type: 'group',
//       label: "Section 2: Why We're Different",
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
//             description: 'e.g., section-03',
//           },
//           defaultValue: 'section-03',
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Section Background Color',
//           admin: {
//             description: 'CSS color value',
//           },
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Section Text Color',
//         },
//         {
//           name: 'paddingTop',
//           type: 'text',
//           label: 'Padding Top',
//         },
//         {
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom',
//         },

//         // Tag Box
//         {
//           name: 'tagBox',
//           type: 'group',
//           label: 'Tag Box',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Tag Box',
//               defaultValue: true,
//             },
//             {
//               name: 'label',
//               type: 'text',
//               label: 'Tag Label',
//               defaultValue: "Why We're Different",
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
//               name: 'variant',
//               type: 'text',
//               label: 'Variant (data-wf--tag-box--variant)',
//               defaultValue: 'base',
//             },
//           ],
//         },

//         // Section Heading
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Section Heading',
//           defaultValue: 'What Sets Our Spine Care Apart',
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
//         },
//         {
//           name: 'headingMaxWidth',
//           type: 'text',
//           label: 'Heading Wrapper Max Width (px)',
//           defaultValue: '550',
//         },

//         // Left Column — Traditional Treatment
//         {
//           name: 'leftColumn',
//           type: 'group',
//           label: 'Left Column (Traditional Treatment)',
//           fields: [
//             {
//               name: 'heading',
//               type: 'text',
//               label: 'Column Heading',
//               defaultValue: 'Traditional Treatment Options',
//             },
//             {
//               name: 'headingColor',
//               type: 'text',
//               label: 'Heading Color',
//             },
//             {
//               name: 'headingFontSize',
//               type: 'text',
//               label: 'Heading Font Size',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Column Background Color',
//               admin: {
//                 description: 'CSS color value (e.g., #f5f5f5)',
//               },
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Column Text Color',
//             },
//             {
//               name: 'borderRadius',
//               type: 'text',
//               label: 'Border Radius',
//               admin: {
//                 description: 'CSS border-radius (e.g., 12px)',
//               },
//             },
//             {
//               name: 'padding',
//               type: 'text',
//               label: 'Column Padding',
//               admin: {
//                 description: 'CSS padding value',
//               },
//             },
//             {
//               name: 'iconType',
//               type: 'select',
//               label: 'Icon Type',
//               options: [
//                 { label: 'X / Cross (negative)', value: 'x' },
//                 { label: 'Arrow (positive)', value: 'arrow' },
//                 { label: 'Checkmark', value: 'check' },
//               ],
//               defaultValue: 'x',
//             },
//             {
//               name: 'iconColor',
//               type: 'text',
//               label: 'Icon Color',
//               defaultValue: '#081122',
//               admin: {
//                 description: 'CSS color value for the SVG fill',
//               },
//             },
//             {
//               name: 'itemTextColor',
//               type: 'text',
//               label: 'Default Item Text Color',
//             },
//             {
//               name: 'items',
//               type: 'array',
//               label: 'List Items',
//               admin: {
//                 description: 'Drag to reorder items in this column',
//               },
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Item Text',
//                   required: true,
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                   label: 'Item Text Color Override',
//                   admin: {
//                     description: 'Leave blank to use the column default',
//                   },
//                 },
//                 {
//                   name: 'iconColor',
//                   type: 'text',
//                   label: 'Item Icon Color Override',
//                   admin: {
//                     description: 'Leave blank to use the column default',
//                   },
//                 },
//                 {
//                   name: 'isLast',
//                   type: 'checkbox',
//                   label: 'Mark as Last Item (appends "last" CSS class)',
//                   defaultValue: false,
//                 },
//               ],
//               defaultValue: [
//                 { text: 'Focus on surgery as the first option', isLast: false },
//                 { text: 'Larger incisions with more tissue disruption', isLast: false },
//                 { text: 'Longer recovery times and hospital stays', isLast: false },
//                 { text: 'Higher risk of complications and discomfort', isLast: false },
//                 { text: 'Limited focus on non-surgical solutions', isLast: false },
//                 { text: 'Less personalized treatment approach', isLast: false },
//                 { text: 'Higher overall treatment costs in hospital settings', isLast: false },
//                 { text: 'Limited use of advanced minimally invasive techniques', isLast: false },
//                 { text: 'Slower return to daily activities', isLast: true },
//               ],
//             },
//           ],
//         },

//         // Right Column — Our Approach
//         {
//           name: 'rightColumn',
//           type: 'group',
//           label: 'Right Column (Our Approach)',
//           fields: [
//             {
//               name: 'showLogo',
//               type: 'checkbox',
//               label: 'Show Logo / Brand Mark',
//               defaultValue: true,
//             },
//             {
//               name: 'logo',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Column Logo / Brand Mark Image',
//             },
//             {
//               name: 'logoAlt',
//               type: 'text',
//               label: 'Logo Alt Text',
//               defaultValue: 'Mouly',
//             },
//             {
//               name: 'logoWidth',
//               type: 'text',
//               label: 'Logo Width',
//               admin: {
//                 description: 'CSS width value (e.g., 120px, auto)',
//               },
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Column Background Color',
//               defaultValue: '#20cff3',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Column Text Color',
//               defaultValue: '#fff',
//             },
//             {
//               name: 'borderRadius',
//               type: 'text',
//               label: 'Border Radius',
//               admin: {
//                 description: 'CSS border-radius (e.g., 12px)',
//               },
//             },
//             {
//               name: 'padding',
//               type: 'text',
//               label: 'Column Padding',
//             },
//             {
//               name: 'iconType',
//               type: 'select',
//               label: 'Icon Type',
//               options: [
//                 { label: 'X / Cross (negative)', value: 'x' },
//                 { label: 'Arrow (positive)', value: 'arrow' },
//                 { label: 'Checkmark', value: 'check' },
//               ],
//               defaultValue: 'arrow',
//             },
//             {
//               name: 'iconColor',
//               type: 'text',
//               label: 'Icon Color',
//               defaultValue: '#081122',
//             },
//             {
//               name: 'itemTextColor',
//               type: 'text',
//               label: 'Default Item Text Color',
//             },
//             {
//               name: 'items',
//               type: 'array',
//               label: 'List Items',
//               admin: {
//                 description: 'Drag to reorder items in this column',
//               },
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Item Text',
//                   required: true,
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                   label: 'Item Text Color Override',
//                   admin: {
//                     description: 'Leave blank to use the column default',
//                   },
//                 },
//                 {
//                   name: 'iconColor',
//                   type: 'text',
//                   label: 'Item Icon Color Override',
//                   admin: {
//                     description: 'Leave blank to use the column default',
//                   },
//                 },
//                 {
//                   name: 'isLast',
//                   type: 'checkbox',
//                   label: 'Mark as Last Item (appends "last" CSS class)',
//                   defaultValue: false,
//                 },
//               ],
//               defaultValue: [
//                 {
//                   text: 'Conservative, non-surgical treatments always come first',
//                   isLast: false,
//                 },
//                 { text: 'Minimally invasive procedures with small incisions', isLast: false },
//                 {
//                   text: 'Faster recovery and same-day discharge for many patients',
//                   isLast: false,
//                 },
//                 { text: 'Reduced pain, minimal scarring, and lower risk', isLast: false },
//                 {
//                   text: 'Focus on identifying and treating the root cause of pain',
//                   isLast: false,
//                 },
//                 { text: "Personalized care tailored to each patient's condition", isLast: false },
//                 {
//                   text: 'Cost-effective treatment compared to hospital procedures',
//                   isLast: false,
//                 },
//                 { text: 'Advanced, cutting-edge minimally invasive technology', isLast: false },
//                 {
//                   text: 'Return to normal activities in as little as a few days',
//                   isLast: true,
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },

//     // ─── Global Styles ───────────────────────────────────────────────────────
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
//             description: 'CSS max-width value (e.g., 1200px, 100%)',
//           },
//         },
//         {
//           name: 'containerPadding',
//           type: 'text',
//           label: 'Container Padding',
//           admin: {
//             description: 'CSS padding value (e.g., 0 20px)',
//           },
//         },
//         {
//           name: 'sectionSpacing',
//           type: 'text',
//           label: 'Section Spacing',
//           admin: {
//             description: 'Vertical gap between sections (e.g., 60px)',
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
//           defaultValue: '#015565',
//         },
//         {
//           name: 'secondaryColor',
//           type: 'text',
//           label: 'Secondary Color',
//           defaultValue: '#20cff3',
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
//         {
//           name: 'borderRadius',
//           type: 'text',
//           label: 'Global Border Radius',
//           admin: {
//             description: 'Default border-radius for cards (e.g., 12px)',
//           },
//         },
//         {
//           name: 'cardGap',
//           type: 'text',
//           label: 'Card / Column Gap',
//           admin: {
//             description: 'Gap between cards in a row (e.g., 24px)',
//           },
//         },
//       ],
//     },

//     // ─── Typography Settings ─────────────────────────────────────────────────
//     {
//       name: 'typographySettings',
//       type: 'group',
//       label: 'Typography Settings',
//       fields: [
//         { name: 'h1FontSize', type: 'text', label: 'H1 Font Size' },
//         { name: 'h1Color', type: 'text', label: 'H1 Color' },
//         { name: 'h1FontWeight', type: 'text', label: 'H1 Font Weight' },
//         { name: 'h2FontSize', type: 'text', label: 'H2 Font Size (h-02)' },
//         { name: 'h2Color', type: 'text', label: 'H2 Color' },
//         { name: 'h4FontSize', type: 'text', label: 'H4 Font Size (h-04)' },
//         { name: 'h4Color', type: 'text', label: 'H4 Color' },
//         { name: 'h5FontSize', type: 'text', label: 'H5 Font Size (h-05 body text in cards)' },
//         { name: 'h5Color', type: 'text', label: 'H5 Color' },
//         { name: 'h5FontWeight', type: 'text', label: 'H5 Font Weight' },
//         {
//           name: 'bodyFontSize',
//           type: 'text',
//           label: 'Body Font Size (p-text-01-m)',
//           admin: {
//             description: 'Font size for list item text',
//           },
//         },
//         { name: 'bodyLineHeight', type: 'text', label: 'Body Line Height' },
//         {
//           name: 'subtitleFontSize',
//           type: 'text',
//           label: 'Subtitle Font Size (p-text-02)',
//         },
//         {
//           name: 'subtitleColor',
//           type: 'text',
//           label: 'Subtitle Color (p-text-02 default)',
//           defaultValue: '#015565',
//           admin: {
//             description: 'Default color for condition subtitles (color-sec-blue class)',
//           },
//         },
//       ],
//     },

//     // ─── Animation Settings ──────────────────────────────────────────────────
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
//           defaultValue: '1s',
//           admin: {
//             description: 'CSS transition duration (e.g., 1s, 500ms)',
//           },
//         },
//         {
//           name: 'fadeInDelay',
//           type: 'text',
//           label: 'Fade In Delay',
//           defaultValue: '0s',
//         },
//         {
//           name: 'animationEasing',
//           type: 'text',
//           label: 'Animation Easing',
//           defaultValue: 'ease-in-out',
//           admin: {
//             description: 'CSS easing function',
//           },
//         },
//         {
//           name: 'enableWowAnimations',
//           type: 'checkbox',
//           label: 'Enable WOW.js / Scroll Animations',
//           defaultValue: true,
//         },
//         {
//           name: 'wowOffset',
//           type: 'text',
//           label: 'WOW Animation Offset (px)',
//           defaultValue: '100',
//           admin: {
//             description: 'Distance from viewport bottom to trigger animation',
//           },
//         },
//       ],
//     },

//     // ─── Layout Settings ─────────────────────────────────────────────────────
//     {
//       name: 'layoutSettings',
//       type: 'group',
//       label: 'Layout Settings',
//       fields: [
//         {
//           name: 'cardsPerRow',
//           type: 'select',
//           label: 'Condition Cards Per Row',
//           options: [
//             { label: '2 per row', value: '2' },
//             { label: '3 per row', value: '3' },
//             { label: '4 per row', value: '4' },
//           ],
//           defaultValue: '2',
//         },
//         {
//           name: 'comparisonLayout',
//           type: 'select',
//           label: 'Comparison Columns Layout',
//           options: [
//             { label: 'Side by Side (50/50)', value: 'half' },
//             { label: 'Left Heavy (60/40)', value: 'left-heavy' },
//             { label: 'Right Heavy (40/60)', value: 'right-heavy' },
//           ],
//           defaultValue: 'half',
//         },
//         {
//           name: 'imageObjectFit',
//           type: 'select',
//           label: 'Image Object Fit',
//           options: [
//             { label: 'Cover', value: 'cover' },
//             { label: 'Contain', value: 'contain' },
//             { label: 'Fill', value: 'fill' },
//           ],
//           defaultValue: 'cover',
//         },
//         {
//           name: 'mobileStackCards',
//           type: 'checkbox',
//           label: 'Stack Cards Vertically on Mobile',
//           defaultValue: true,
//         },
//         {
//           name: 'mobileStackColumns',
//           type: 'checkbox',
//           label: 'Stack Comparison Columns on Mobile',
//           defaultValue: true,
//         },
//       ],
//     },

//     // ─── Mobile Settings ─────────────────────────────────────────────────────
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
//           name: 'mobileFontSizeAdjustment',
//           type: 'text',
//           label: 'Mobile Font Size Adjustment',
//           defaultValue: '100%',
//           admin: {
//             description: 'Percentage scale for fonts on mobile',
//           },
//         },
//         {
//           name: 'mobileSpacingAdjustment',
//           type: 'text',
//           label: 'Mobile Spacing Adjustment',
//           defaultValue: '100%',
//         },
//         {
//           name: 'mobileCardImageHeight',
//           type: 'text',
//           label: 'Mobile Card Image/Video Max Height',
//           admin: {
//             description: 'Max height for media cards on mobile (e.g., 280px)',
//           },
//         },
//       ],
//     },

//     // ─── SEO Settings ────────────────────────────────────────────────────────
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
//           label: 'OG Image',
//         },
//         {
//           name: 'keywords',
//           type: 'text',
//           label: 'Keywords',
//           admin: {
//             description: 'Comma-separated SEO keywords',
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
//             description: 'Schema.org structured data in JSON-LD format',
//           },
//         },
//       ],
//     },

//     // ─── Accessibility Settings ──────────────────────────────────────────────
//     {
//       name: 'accessibilitySettings',
//       type: 'group',
//       label: 'Accessibility Settings',
//       fields: [
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
//           label: 'Focus Visible Outline Color',
//           admin: {
//             description: 'Color for keyboard focus outlines',
//           },
//         },
//         {
//           name: 'contrastMode',
//           type: 'select',
//           label: 'Contrast Mode',
//           options: [
//             { label: 'Normal', value: 'normal' },
//             { label: 'High Contrast', value: 'high' },
//             { label: 'Very High Contrast', value: 'very-high' },
//           ],
//           defaultValue: 'normal',
//         },
//         {
//           name: 'keyboardNavigationEnabled',
//           type: 'checkbox',
//           label: 'Enhanced Keyboard Navigation',
//           defaultValue: true,
//         },
//         {
//           name: 'reduceMotion',
//           type: 'checkbox',
//           label: 'Respect prefers-reduced-motion',
//           defaultValue: true,
//           admin: {
//             description: 'Disable animations for users who prefer reduced motion',
//           },
//         },
//       ],
//     },

//     // ─── Advanced Settings ───────────────────────────────────────────────────
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
//             description: 'Add custom CSS scoped to this component',
//           },
//         },
//         {
//           name: 'customJS',
//           type: 'textarea',
//           label: 'Custom JavaScript',
//           admin: {
//             description: 'Add custom JS executed after component mounts',
//           },
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
//                 { label: 'Conditions We Treat', value: 'conditionsSection' },
//                 { label: "Why We're Different", value: 'differenceSection' },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'lazyLoadImages',
//           type: 'checkbox',
//           label: 'Enable Lazy Loading for Images',
//           defaultValue: true,
//         },
//         {
//           name: 'lazyLoadVideos',
//           type: 'checkbox',
//           label: 'Enable Lazy Loading for Videos',
//           defaultValue: false,
//           admin: {
//             description: 'Autoplay videos typically should not be lazy-loaded',
//           },
//         },
//         {
//           name: 'enableCaching',
//           type: 'checkbox',
//           label: 'Enable Page Caching',
//           defaultValue: true,
//         },
//         {
//           name: 'preloadImages',
//           type: 'checkbox',
//           label: 'Preload Critical Images',
//           defaultValue: true,
//         },
//       ],
//     },

//     // ─── Performance Settings ────────────────────────────────────────────────
//     {
//       name: 'performanceSettings',
//       type: 'group',
//       label: 'Performance Settings',
//       fields: [
//         {
//           name: 'imageOptimization',
//           type: 'checkbox',
//           label: 'Enable Image Optimization',
//           defaultValue: true,
//         },
//         {
//           name: 'imageQuality',
//           type: 'text',
//           label: 'Image Quality (1–100)',
//           defaultValue: '85',
//         },
//         {
//           name: 'imageFormat',
//           type: 'select',
//           label: 'Preferred Image Format',
//           options: [
//             { label: 'Auto (WebP with fallback)', value: 'auto' },
//             { label: 'WebP', value: 'webp' },
//             { label: 'AVIF', value: 'avif' },
//             { label: 'JPEG', value: 'jpeg' },
//             { label: 'PNG', value: 'png' },
//           ],
//           defaultValue: 'auto',
//         },
//         {
//           name: 'responsiveImageSizes',
//           type: 'text',
//           label: 'Responsive Image Sizes',
//           defaultValue: '420,630,800,1200,1400,2100',
//           admin: {
//             description: 'Comma-separated widths for srcset (px)',
//           },
//         },
//         {
//           name: 'minifyCSS',
//           type: 'checkbox',
//           label: 'Minify CSS',
//           defaultValue: true,
//         },
//         {
//           name: 'minifyJS',
//           type: 'checkbox',
//           label: 'Minify JavaScript',
//           defaultValue: true,
//         },
//         {
//           name: 'enableCDN',
//           type: 'checkbox',
//           label: 'Use CDN for Assets',
//           defaultValue: true,
//         },
//         {
//           name: 'cdnUrl',
//           type: 'text',
//           label: 'CDN Base URL',
//           admin: {
//             description: 'Base URL for your CDN (e.g., https://cdn.example.com)',
//           },
//         },
//       ],
//     },

//     // ─── Active Toggle ───────────────────────────────────────────────────────
//     {
//       name: 'isActive',
//       type: 'checkbox',
//       label: 'Active',
//       defaultValue: true,
//       admin: {
//         description: 'Toggle to enable/disable this component globally',
//       },
//     },
//   ],
//   timestamps: true,
// }





import { CollectionConfig } from 'payload'

export const SpineStatsDoctorsComponent: CollectionConfig = {
  slug: 'spine-stats-doctors-component',
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
      defaultValue: 'Spine Stats & Doctors Component',
    },

    // ─── SECTION 03 – STATS ───────────────────────────────────────────────────
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

        // Header ───────────────────────────────────────────────
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

        // Stats Wrapper ────────────────────────────────────────
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

        // Stat Cards ───────────────────────────────────────────
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
            // Tag / Badge
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
            // Counter Animation
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
              tag: {
                show: true,
                text: 'Trusted Care',
                variant: 'blue',
              },
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
              tag: {
                show: true,
                text: 'Proven Results',
                variant: 'base',
              },
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
              tag: {
                show: true,
                text: 'Expert Team',
                variant: 'yellow',
              },
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

    // ─── SECTION 05 – DOCTORS ─────────────────────────────────────────────────
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

        // Header ───────────────────────────────────────────────
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

        // Layout ───────────────────────────────────────────────
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

        // Doctor Cards ─────────────────────────────────────────
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
            // View Profile Overlay
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
            // Specialty Tags
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

    // ─── SECTION ORDER ────────────────────────────────────────────────────────
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: { description: 'Drag to reorder the sections on the page' },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Stats Section (Section 03)', value: 'statsSection' },
            { label: 'Doctors Section (Section 05)', value: 'doctorsSection' },
          ],
        },
      ],
      defaultValue: [{ section: 'statsSection' }, { section: 'doctorsSection' }],
    },

    // ─── GLOBAL STYLES ────────────────────────────────────────────────────────
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: { description: 'CSS max-width value (e.g., 1200px, 100%)' },
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
          admin: { description: 'Spacing between sections (e.g., 80px, 5rem)' },
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
          admin: { description: 'CSS font-family value' },
        },
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
          admin: { description: 'Primary brand color' },
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
          name: 'defaultTextColor',
          type: 'text',
          label: 'Default Text Color',
          defaultValue: '#081122',
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
          name: 'pageBackgroundColor',
          type: 'text',
          label: 'Page Background Color',
        },
      ],
    },

    // ─── TYPOGRAPHY ───────────────────────────────────────────────────────────
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

    // ─── BUTTON STYLES (GLOBAL) ───────────────────────────────────────────────
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

    // ─── TAG / BADGE STYLES (GLOBAL) ─────────────────────────────────────────
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

    // ─── ANIMATION SETTINGS ───────────────────────────────────────────────────
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
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          defaultValue: 'ease-in-out',
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
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections Vertically on Mobile',
          defaultValue: true,
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

    // ─── ACCESSIBILITY SETTINGS ───────────────────────────────────────────────
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

    // ─── SEO SETTINGS ────────────────────────────────────────────────────────
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
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: { description: 'Comma-separated keywords for SEO' },
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

    // ─── PERFORMANCE SETTINGS ─────────────────────────────────────────────────
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

    // ─── INTEGRATION SETTINGS ────────────────────────────────────────────────
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

    // ─── ADVANCED SETTINGS ────────────────────────────────────────────────────
    {
      name: 'advancedSettings',
      type: 'group',
      label: 'Advanced Settings',
      fields: [
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: { description: 'Scoped CSS applied only to this component' },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: { description: 'Custom JS executed on this component' },
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Component Caching',
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
                { label: 'Stats Section', value: 'statsSection' },
                { label: 'Doctors Section', value: 'doctorsSection' },
              ],
            },
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
