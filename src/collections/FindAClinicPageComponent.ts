import { CollectionConfig } from 'payload'

export const FindAClinicPageComponent: CollectionConfig = {
  slug: 'find-a-clinic-page-component',
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
      defaultValue: 'Find a Clinic Page Component',
    },

    // ─────────────────────────────────────────
    // Clinic Panel Section (Left)
    // ─────────────────────────────────────────
    {
      name: 'clinicPanelSection',
      type: 'group',
      label: 'Clinic Panel Section (Left)',
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
            description: 'CSS color value (e.g., #ffffff)',
          },
          defaultValue: '#ffffff',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'CSS color value',
          },
          defaultValue: '#1a1a1a',
        },
        {
          name: 'ariaLabel',
          type: 'text',
          label: 'ARIA Label',
          defaultValue: 'Clinic listings',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'clinic-panel',
        },

        // Panel Head
        {
          name: 'panelHead',
          type: 'group',
          label: 'Panel Head',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Panel Title',
              defaultValue: 'Find a Clinic',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
              defaultValue: '#1a1a1a',
            },
            {
              name: 'titleFontSize',
              type: 'text',
              label: 'Title Font Size',
              defaultValue: '28px',
            },
            {
              name: 'titleFontWeight',
              type: 'text',
              label: 'Title Font Weight',
              defaultValue: '700',
            },
            {
              name: 'showBadge',
              type: 'checkbox',
              label: 'Show Clinic Count Badge',
              defaultValue: true,
            },
            {
              name: 'badgeBackgroundColor',
              type: 'text',
              label: 'Badge Background Color',
              defaultValue: '#e8f4f0',
            },
            {
              name: 'badgeTextColor',
              type: 'text',
              label: 'Badge Text Color',
              defaultValue: '#2d6a4f',
            },
          ],
        },

        // Search Box
        {
          name: 'searchBox',
          type: 'group',
          label: 'Search Box',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Search Box',
              defaultValue: true,
            },
            {
              name: 'placeholder',
              type: 'text',
              label: 'Search Placeholder Text',
              defaultValue: 'Search by clinic name or address…',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Search Box Background Color',
              defaultValue: '#f5f5f5',
            },
            {
              name: 'borderColor',
              type: 'text',
              label: 'Search Box Border Color',
              defaultValue: '#e0e0e0',
            },
            {
              name: 'focusBorderColor',
              type: 'text',
              label: 'Focus Border Color',
              defaultValue: '#2d6a4f',
            },
            {
              name: 'iconColor',
              type: 'text',
              label: 'Search Icon Color',
              defaultValue: '#888888',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Input Text Color',
              defaultValue: '#1a1a1a',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Border Radius',
              defaultValue: '8px',
            },
          ],
        },

        // Clinic List Settings
        {
          name: 'clinicListSettings',
          type: 'group',
          label: 'Clinic List Settings',
          fields: [
            {
              name: 'cardBackgroundColor',
              type: 'text',
              label: 'Card Background Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'cardHoverBackgroundColor',
              type: 'text',
              label: 'Card Hover Background Color',
              defaultValue: '#f0faf5',
            },
            {
              name: 'cardActiveBackgroundColor',
              type: 'text',
              label: 'Card Active/Selected Background Color',
              defaultValue: '#e8f4f0',
            },
            {
              name: 'cardBorderColor',
              type: 'text',
              label: 'Card Border Color',
              defaultValue: '#e0e0e0',
            },
            {
              name: 'cardActiveBorderColor',
              type: 'text',
              label: 'Card Active Border Color',
              defaultValue: '#2d6a4f',
            },
            {
              name: 'cardBorderRadius',
              type: 'text',
              label: 'Card Border Radius',
              defaultValue: '10px',
            },
            {
              name: 'cardPadding',
              type: 'text',
              label: 'Card Padding',
              defaultValue: '16px',
            },
            {
              name: 'cardGap',
              type: 'text',
              label: 'Gap Between Cards',
              defaultValue: '12px',
            },
            {
              name: 'clinicNameColor',
              type: 'text',
              label: 'Clinic Name Color',
              defaultValue: '#1a1a1a',
            },
            {
              name: 'clinicNameFontSize',
              type: 'text',
              label: 'Clinic Name Font Size',
              defaultValue: '16px',
            },
            {
              name: 'clinicNameFontWeight',
              type: 'text',
              label: 'Clinic Name Font Weight',
              defaultValue: '600',
            },
            {
              name: 'doctorNameColor',
              type: 'text',
              label: 'Doctor Name Color',
              defaultValue: '#2d6a4f',
            },
            {
              name: 'doctorNameFontSize',
              type: 'text',
              label: 'Doctor Name Font Size',
              defaultValue: '14px',
            },
            {
              name: 'specialtyColor',
              type: 'text',
              label: 'Specialty Tag Color',
              defaultValue: '#555555',
            },
            {
              name: 'specialtyBackgroundColor',
              type: 'text',
              label: 'Specialty Tag Background Color',
              defaultValue: '#f0f0f0',
            },
            {
              name: 'addressColor',
              type: 'text',
              label: 'Address Text Color',
              defaultValue: '#666666',
            },
            {
              name: 'phoneColor',
              type: 'text',
              label: 'Phone Number Color',
              defaultValue: '#2d6a4f',
            },
            {
              name: 'iconColor',
              type: 'text',
              label: 'Info Icon Color',
              defaultValue: '#888888',
            },
          ],
        },

        // Clinics Array
        {
          name: 'clinics',
          type: 'array',
          label: 'Clinic Cards',
          admin: {
            description: 'Drag to reorder clinic cards. Each card is fully editable.',
          },
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show This Clinic',
              defaultValue: true,
            },
            {
              name: 'id',
              type: 'number',
              label: 'Clinic ID',
              required: true,
              admin: {
                description: 'Unique identifier for this clinic',
              },
            },
            {
              name: 'name',
              type: 'text',
              label: 'Clinic Name',
              required: true,
            },
            {
              name: 'doctor',
              type: 'text',
              label: 'Doctor Name',
              required: true,
            },
            {
              name: 'address',
              type: 'text',
              label: 'Full Address',
              required: true,
            },
            {
              name: 'phone',
              type: 'text',
              label: 'Phone Number',
              required: true,
            },
            {
              name: 'specialty',
              type: 'text',
              label: 'Specialty',
              required: true,
            },
            {
              name: 'lat',
              type: 'number',
              label: 'Latitude',
              required: true,
              admin: {
                description: 'GPS latitude coordinate for map pin',
              },
            },
            {
              name: 'lng',
              type: 'number',
              label: 'Longitude',
              required: true,
              admin: {
                description: 'GPS longitude coordinate for map pin',
              },
            },
            {
              name: 'mapQuery',
              type: 'text',
              label: 'Map Query String',
              required: true,
              admin: {
                description: 'URL-encoded address for Google Maps (e.g., 57+W+57th+St+New+York+NY)',
              },
            },
            {
              name: 'cardBackgroundColor',
              type: 'text',
              label: 'Card Background Color (Override)',
              admin: {
                description: 'Leave empty to use global card background color',
              },
            },
            {
              name: 'cardTextColor',
              type: 'text',
              label: 'Card Text Color (Override)',
              admin: {
                description: 'Leave empty to use global card text color',
              },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Clinic Image (Optional)',
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Clinic Image Alt Text',
            },
            {
              name: 'externalLinks',
              type: 'array',
              label: 'Card Links',
              admin: {
                description: 'Drag to reorder links shown on this clinic card',
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
                  name: 'linkColor',
                  type: 'text',
                  label: 'Link Color',
                },
                {
                  name: 'linkBackgroundColor',
                  type: 'text',
                  label: 'Link Button Background Color',
                },
              ],
            },
          ],
          defaultValue: [
            {
              show: true,
              id: 1,
              name: 'Manhattan Primary Care',
              doctor: 'Dr. Sarah Chen',
              address: '57 W 57th St, New York, NY 10019',
              phone: '+1 (212) 555-0101',
              specialty: 'General Practice',
              lat: 40.7648,
              lng: -73.976,
              mapQuery: '57+W+57th+St+New+York+NY',
              externalLinks: [
                { label: 'Book Appointment', url: '/book/manhattan-primary', openInNewTab: false },
                { label: 'View Profile', url: '/clinics/manhattan-primary', openInNewTab: false },
              ],
            },
            {
              show: true,
              id: 2,
              name: 'Brooklyn Wellness Center',
              doctor: 'Dr. James Rivera',
              address: '350 Jay St, Brooklyn, NY 11201',
              phone: '+1 (718) 555-0202',
              specialty: 'Internal Medicine',
              lat: 40.6924,
              lng: -73.9871,
              mapQuery: '350+Jay+St+Brooklyn+NY',
              externalLinks: [
                { label: 'Book Appointment', url: '/book/brooklyn-wellness', openInNewTab: false },
                { label: 'View Profile', url: '/clinics/brooklyn-wellness', openInNewTab: false },
              ],
            },
            {
              show: true,
              id: 3,
              name: 'Midtown Dermatology',
              doctor: 'Dr. Priya Patel',
              address: '200 Park Ave, New York, NY 10166',
              phone: '+1 (212) 555-0303',
              specialty: 'Dermatology',
              lat: 40.7527,
              lng: -73.9772,
              mapQuery: '200+Park+Ave+New+York+NY',
              externalLinks: [
                {
                  label: 'Book Appointment',
                  url: '/book/midtown-dermatology',
                  openInNewTab: false,
                },
                { label: 'View Profile', url: '/clinics/midtown-dermatology', openInNewTab: false },
              ],
            },
            {
              show: true,
              id: 4,
              name: 'Queens Family Health',
              doctor: 'Dr. Michael Torres',
              address: '42-07 Main St, Flushing, NY 11355',
              phone: '+1 (718) 555-0404',
              specialty: 'Family Medicine',
              lat: 40.7576,
              lng: -73.8297,
              mapQuery: '42-07+Main+St+Flushing+NY',
              externalLinks: [
                { label: 'Book Appointment', url: '/book/queens-family', openInNewTab: false },
                { label: 'View Profile', url: '/clinics/queens-family', openInNewTab: false },
              ],
            },
            {
              show: true,
              id: 5,
              name: 'Upper East Side Aesthetics',
              doctor: 'Dr. Lisa Nguyen',
              address: '150 E 77th St, New York, NY 10075',
              phone: '+1 (212) 555-0505',
              specialty: 'Aesthetic Medicine',
              lat: 40.7733,
              lng: -73.9583,
              mapQuery: '150+E+77th+St+New+York+NY',
              externalLinks: [
                { label: 'Book Appointment', url: '/book/ues-aesthetics', openInNewTab: false },
                { label: 'View Profile', url: '/clinics/ues-aesthetics', openInNewTab: false },
              ],
            },
            {
              show: true,
              id: 6,
              name: 'Bronx Community Clinic',
              doctor: 'Dr. Anthony Williams',
              address: '1825 Grand Concourse, Bronx, NY 10453',
              phone: '+1 (718) 555-0606',
              specialty: 'Community Health',
              lat: 40.8487,
              lng: -73.9237,
              mapQuery: '1825+Grand+Concourse+Bronx+NY',
              externalLinks: [
                { label: 'Book Appointment', url: '/book/bronx-community', openInNewTab: false },
                { label: 'View Profile', url: '/clinics/bronx-community', openInNewTab: false },
              ],
            },
            {
              show: true,
              id: 7,
              name: 'Staten Island Medical Group',
              doctor: 'Dr. Emily Zhao',
              address: '256 Mason Ave, Staten Island, NY 10305',
              phone: '+1 (718) 555-0707',
              specialty: 'Orthopedics',
              lat: 40.6133,
              lng: -74.0826,
              mapQuery: '256+Mason+Ave+Staten+Island+NY',
              externalLinks: [
                { label: 'Book Appointment', url: '/book/si-medical', openInNewTab: false },
                { label: 'View Profile', url: '/clinics/si-medical', openInNewTab: false },
              ],
            },
            {
              show: true,
              id: 8,
              name: 'Tribeca Integrative Health',
              doctor: 'Dr. Noah Goldstein',
              address: '7 Harrison St, New York, NY 10013',
              phone: '+1 (212) 555-0808',
              specialty: 'Integrative Medicine',
              lat: 40.7195,
              lng: -74.009,
              mapQuery: '7+Harrison+St+New+York+NY',
              externalLinks: [
                {
                  label: 'Book Appointment',
                  url: '/book/tribeca-integrative',
                  openInNewTab: false,
                },
                { label: 'View Profile', url: '/clinics/tribeca-integrative', openInNewTab: false },
              ],
            },
            {
              show: true,
              id: 9,
              name: 'Harlem Health Institute',
              doctor: 'Dr. Keisha Johnson',
              address: '55 W 125th St, New York, NY 10027',
              phone: '+1 (212) 555-0909',
              specialty: 'Preventive Medicine',
              lat: 40.8079,
              lng: -73.9468,
              mapQuery: '55+W+125th+St+New+York+NY',
              externalLinks: [
                { label: 'Book Appointment', url: '/book/harlem-health', openInNewTab: false },
                { label: 'View Profile', url: '/clinics/harlem-health', openInNewTab: false },
              ],
            },
            {
              show: true,
              id: 10,
              name: 'Astoria Pediatric & Family Care',
              doctor: 'Dr. Sofia Andrade',
              address: '31-10 37th Ave, Astoria, NY 11101',
              phone: '+1 (718) 555-1010',
              specialty: 'Pediatrics',
              lat: 40.7537,
              lng: -73.9302,
              mapQuery: '31-10+37th+Ave+Astoria+NY',
              externalLinks: [
                { label: 'Book Appointment', url: '/book/astoria-pediatric', openInNewTab: false },
                { label: 'View Profile', url: '/clinics/astoria-pediatric', openInNewTab: false },
              ],
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Map Panel Section (Right)
    // ─────────────────────────────────────────
    {
      name: 'mapPanelSection',
      type: 'group',
      label: 'Map Panel Section (Right)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'ariaLabel',
          type: 'text',
          label: 'ARIA Label',
          defaultValue: 'Map view',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'map-panel',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#f5f5f5',
        },

        // Map Settings
        {
          name: 'mapSettings',
          type: 'group',
          label: 'Map Settings',
          fields: [
            {
              name: 'defaultEmbedUrl',
              type: 'text',
              label: 'Default Map Embed URL',
              admin: {
                description: 'Google Maps embed URL shown before any clinic is selected',
              },
              defaultValue:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1714000000000!5m2!1sen!2s',
            },
            {
              name: 'mapTitle',
              type: 'text',
              label: 'Map iframe Title (Accessibility)',
              defaultValue: 'Clinic locations map',
            },
            {
              name: 'allowFullscreen',
              type: 'checkbox',
              label: 'Allow Fullscreen',
              defaultValue: true,
            },
            {
              name: 'lazyLoad',
              type: 'checkbox',
              label: 'Lazy Load Map',
              defaultValue: true,
            },
            {
              name: 'mapHeight',
              type: 'text',
              label: 'Map Height',
              defaultValue: '100%',
            },
            {
              name: 'mapBorderRadius',
              type: 'text',
              label: 'Map Border Radius',
              defaultValue: '12px',
            },
            {
              name: 'mapZoomLevel',
              type: 'text',
              label: 'Default Zoom Level',
              admin: {
                description: 'Google Maps zoom level (1-21, higher = more zoomed in)',
              },
              defaultValue: '12',
            },
          ],
        },

        // Toast Notification
        {
          name: 'toastSettings',
          type: 'group',
          label: 'Map Toast Notification',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Enable Toast Notifications',
              defaultValue: true,
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Toast Background Color',
              defaultValue: '#1a1a1a',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Toast Text Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Toast Border Radius',
              defaultValue: '6px',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Toast Font Size',
              defaultValue: '14px',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Toast Padding',
              defaultValue: '10px 16px',
            },
            {
              name: 'position',
              type: 'select',
              label: 'Toast Position',
              options: [
                { label: 'Top Left', value: 'top-left' },
                { label: 'Top Right', value: 'top-right' },
                { label: 'Bottom Left', value: 'bottom-left' },
                { label: 'Bottom Right', value: 'bottom-right' },
                { label: 'Top Center', value: 'top-center' },
                { label: 'Bottom Center', value: 'bottom-center' },
              ],
              defaultValue: 'bottom-right',
            },
            {
              name: 'autoDismissDuration',
              type: 'number',
              label: 'Auto Dismiss Duration (ms)',
              admin: {
                description: 'Set to 0 to disable auto dismiss',
              },
              defaultValue: 3000,
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Layout Settings
    // ─────────────────────────────────────────
    {
      name: 'layoutSettings',
      type: 'group',
      label: 'Layout Settings',
      fields: [
        {
          name: 'splitRatio',
          type: 'text',
          label: 'Split Panel Ratio',
          admin: {
            description: 'CSS grid-template-columns (e.g., "1fr 1fr", "40% 60%", "380px 1fr")',
          },
          defaultValue: '380px 1fr',
        },
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: {
            description: 'CSS max-width (e.g., 1400px)',
          },
          defaultValue: '1400px',
        },
        {
          name: 'containerMinHeight',
          type: 'text',
          label: 'Container Min Height',
          admin: {
            description: 'CSS min-height (e.g., 100vh, 600px)',
          },
          defaultValue: '100vh',
        },
        {
          name: 'containerBackgroundColor',
          type: 'text',
          label: 'Page Background Color',
          defaultValue: '#f9f9f9',
        },
        {
          name: 'stackOnMobile',
          type: 'checkbox',
          label: 'Stack Panels on Mobile',
          admin: {
            description: 'Stacks clinic list above map on small screens',
          },
          defaultValue: true,
        },
        {
          name: 'mobileMapHeight',
          type: 'text',
          label: 'Map Height on Mobile',
          defaultValue: '320px',
        },
        {
          name: 'mobileClinicListMaxHeight',
          type: 'text',
          label: 'Clinic List Max Height on Mobile',
          admin: {
            description: 'Scrollable list height on mobile',
          },
          defaultValue: '400px',
        },
        {
          name: 'clinicListScrollable',
          type: 'checkbox',
          label: 'Make Clinic List Scrollable',
          defaultValue: true,
        },
        {
          name: 'clinicListMaxHeight',
          type: 'text',
          label: 'Clinic List Max Height (Desktop)',
          defaultValue: 'calc(100vh - 160px)',
        },
      ],
    },

    // ─────────────────────────────────────────
    // Section Order
    // ─────────────────────────────────────────
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder the panels (left panel, right panel)',
      },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Clinic Panel (Left)', value: 'clinicPanel' },
            { label: 'Map Panel (Right)', value: 'mapPanel' },
          ],
        },
      ],
      defaultValue: [{ section: 'clinicPanel' }, { section: 'mapPanel' }],
    },

    // ─────────────────────────────────────────
    // Global Styles
    // ─────────────────────────────────────────
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
          admin: {
            description: 'CSS font-family value',
          },
          defaultValue: "'Inter', sans-serif",
        },
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
          admin: {
            description: 'Used for active states, accents, and CTA elements',
          },
          defaultValue: '#2d6a4f',
        },
        {
          name: 'primaryHoverColor',
          type: 'text',
          label: 'Primary Hover Color',
          defaultValue: '#1b4332',
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color',
          defaultValue: '#52b788',
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color',
          defaultValue: '#95d5b2',
        },
        {
          name: 'successColor',
          type: 'text',
          label: 'Success Color',
          defaultValue: '#40916c',
        },
        {
          name: 'warningColor',
          type: 'text',
          label: 'Warning Color',
          defaultValue: '#f4a261',
        },
        {
          name: 'errorColor',
          type: 'text',
          label: 'Error Color',
          defaultValue: '#e63946',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
          defaultValue: '#1a1a1a',
        },
        {
          name: 'mutedTextColor',
          type: 'text',
          label: 'Muted Text Color',
          defaultValue: '#666666',
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
          defaultValue: '#2d6a4f',
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
          defaultValue: '#1b4332',
        },
        {
          name: 'borderColor',
          type: 'text',
          label: 'Default Border Color',
          defaultValue: '#e0e0e0',
        },
        {
          name: 'shadowColor',
          type: 'text',
          label: 'Box Shadow Color',
          defaultValue: 'rgba(0,0,0,0.08)',
        },
      ],
    },

    // ─────────────────────────────────────────
    // Typography Settings
    // ─────────────────────────────────────────
    {
      name: 'typographySettings',
      type: 'group',
      label: 'Typography Settings',
      fields: [
        {
          name: 'h1FontSize',
          type: 'text',
          label: 'H1 Font Size',
          defaultValue: '28px',
        },
        {
          name: 'h1Color',
          type: 'text',
          label: 'H1 Color',
          defaultValue: '#1a1a1a',
        },
        {
          name: 'h1FontWeight',
          type: 'text',
          label: 'H1 Font Weight',
          defaultValue: '700',
        },
        {
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size',
          defaultValue: '22px',
        },
        {
          name: 'h2Color',
          type: 'text',
          label: 'H2 Color',
          defaultValue: '#1a1a1a',
        },
        {
          name: 'h2FontWeight',
          type: 'text',
          label: 'H2 Font Weight',
          defaultValue: '600',
        },
        {
          name: 'bodyFontSize',
          type: 'text',
          label: 'Body Font Size',
          defaultValue: '14px',
        },
        {
          name: 'bodyLineHeight',
          type: 'text',
          label: 'Body Line Height',
          defaultValue: '1.6',
        },
        {
          name: 'paragraphSpacing',
          type: 'text',
          label: 'Paragraph Spacing',
          defaultValue: '0.75em',
        },
      ],
    },

    // ─────────────────────────────────────────
    // Animation Settings
    // ─────────────────────────────────────────
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
          name: 'cardHoverTransition',
          type: 'text',
          label: 'Card Hover Transition',
          admin: {
            description: 'CSS transition value for card hover',
          },
          defaultValue: 'all 0.2s ease',
        },
        {
          name: 'mapFadeInDuration',
          type: 'text',
          label: 'Map Fade-In Duration',
          defaultValue: '0.4s',
        },
        {
          name: 'toastAnimationDuration',
          type: 'text',
          label: 'Toast Animation Duration',
          defaultValue: '0.3s',
        },
        {
          name: 'searchDebounceMs',
          type: 'number',
          label: 'Search Debounce (ms)',
          admin: {
            description: 'Delay before search filters are applied',
          },
          defaultValue: 300,
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          defaultValue: 'ease-in-out',
        },
      ],
    },

    // ─────────────────────────────────────────
    // SEO Settings
    // ─────────────────────────────────────────
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          defaultValue: 'Find a Clinic Near You',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Search for clinics near you. Browse our network of top-rated doctors and specialists across New York.',
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
            description: 'Comma-separated keywords for SEO',
          },
          defaultValue: 'clinic finder, doctor near me, medical clinic, specialist',
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

    // ─────────────────────────────────────────
    // Accessibility Settings
    // ─────────────────────────────────────────
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
          name: 'clinicListAriaLabel',
          type: 'text',
          label: 'Clinic List ARIA Label',
          defaultValue: 'List of available clinics',
        },
        {
          name: 'mapAriaLiveRegion',
          type: 'checkbox',
          label: 'Enable Map Live Region (aria-live)',
          admin: {
            description: 'Announces map updates to screen readers',
          },
          defaultValue: true,
        },
        {
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Color',
          defaultValue: '#2d6a4f',
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
      ],
    },

    // ─────────────────────────────────────────
    // Mobile Settings
    // ─────────────────────────────────────────
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
          name: 'mobileLayout',
          type: 'select',
          label: 'Mobile Panel Order',
          options: [
            { label: 'List then Map', value: 'list-first' },
            { label: 'Map then List', value: 'map-first' },
          ],
          defaultValue: 'list-first',
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          defaultValue: '100%',
        },
        {
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Panels on Mobile',
          defaultValue: true,
        },
        {
          name: 'showMapOnMobileByDefault',
          type: 'checkbox',
          label: 'Show Map on Mobile by Default',
          admin: {
            description: 'Expand the map section by default on mobile',
          },
          defaultValue: false,
        },
      ],
    },

    // ─────────────────────────────────────────
    // Advanced Settings
    // ─────────────────────────────────────────
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
            description: 'Add custom CSS styles for this component',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Add custom JavaScript for this component',
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
          label: 'Enable Component Caching',
          defaultValue: true,
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          admin: {
            description: 'Add custom data attributes to component elements',
          },
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
                { label: 'Clinic Panel', value: 'clinicPanel' },
                { label: 'Map Panel', value: 'mapPanel' },
                { label: 'Whole Component', value: 'root' },
              ],
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────
    // Integration Settings
    // ─────────────────────────────────────────
    {
      name: 'integrationSettings',
      type: 'group',
      label: 'Integration Settings',
      fields: [
        {
          name: 'googleMapsApiKey',
          type: 'text',
          label: 'Google Maps API Key',
          admin: {
            description: 'API key for Google Maps (used for dynamic map features)',
          },
        },
        {
          name: 'useEmbedMap',
          type: 'checkbox',
          label: 'Use Embed Map (no API key required)',
          admin: {
            description: 'Use Google Maps embed iframes instead of the Maps JS API',
          },
          defaultValue: true,
        },
        {
          name: 'googleAnalyticsId',
          type: 'text',
          label: 'Google Analytics ID',
          admin: {
            description: 'GA tracking ID for this component',
          },
        },
        {
          name: 'trackClinicClicks',
          type: 'checkbox',
          label: 'Track Clinic Card Clicks',
          admin: {
            description: 'Send GA events when users click clinic cards',
          },
          defaultValue: true,
        },
        {
          name: 'trackMapInteractions',
          type: 'checkbox',
          label: 'Track Map Interactions',
          defaultValue: true,
        },
        {
          name: 'trackSearchQueries',
          type: 'checkbox',
          label: 'Track Search Queries',
          defaultValue: true,
        },
      ],
    },

    // ─────────────────────────────────────────
    // Performance Settings
    // ─────────────────────────────────────────
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
          label: 'Image Quality',
          admin: { description: 'Compression quality (1-100)' },
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
          name: 'deferMapLoad',
          type: 'checkbox',
          label: 'Defer Map Load Until Interaction',
          admin: {
            description:
              'Improves initial page load by loading the map iframe only when the user first interacts',
          },
          defaultValue: false,
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
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
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
          admin: {
            description: 'Base URL for CDN (e.g., https://cdn.example.com)',
          },
        },
      ],
    },

    // ─────────────────────────────────────────
    // Content Settings
    // ─────────────────────────────────────────
    {
      name: 'contentSettings',
      type: 'group',
      label: 'Content Settings',
      fields: [
        {
          name: 'noResultsMessage',
          type: 'text',
          label: 'No Results Message',
          admin: {
            description: 'Shown when search returns no clinics',
          },
          defaultValue: 'No clinics found matching your search.',
        },
        {
          name: 'noResultsTextColor',
          type: 'text',
          label: 'No Results Text Color',
          defaultValue: '#888888',
        },
        {
          name: 'loadingMessage',
          type: 'text',
          label: 'Loading Message',
          defaultValue: 'Loading clinics…',
        },
        {
          name: 'phoneNumberFormat',
          type: 'select',
          label: 'Phone Number Display Format',
          options: [
            { label: '+1 (212) 555-0101', value: 'intl' },
            { label: '(212) 555-0101', value: 'formatted' },
            { label: '212-555-0101', value: 'dashed' },
            { label: '212.555.0101', value: 'dotted' },
          ],
          defaultValue: 'intl',
        },
        {
          name: 'externalLinksOpenNewTab',
          type: 'checkbox',
          label: 'Open External Links in New Tab',
          defaultValue: true,
        },
        {
          name: 'showSpecialtyTag',
          type: 'checkbox',
          label: 'Show Specialty Tag on Cards',
          defaultValue: true,
        },
        {
          name: 'showDoctorName',
          type: 'checkbox',
          label: 'Show Doctor Name on Cards',
          defaultValue: true,
        },
        {
          name: 'showPhone',
          type: 'checkbox',
          label: 'Show Phone Number on Cards',
          defaultValue: true,
        },
        {
          name: 'showAddress',
          type: 'checkbox',
          label: 'Show Address on Cards',
          defaultValue: true,
        },
        {
          name: 'showCardLinks',
          type: 'checkbox',
          label: 'Show Links on Cards',
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
