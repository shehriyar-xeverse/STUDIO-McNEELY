/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service } from './types';

// Cinematic/Editorial projects dataset mapping ALL of the user's provided URLs
export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'jeanette',
    title: 'The Jeanette Residence',
    category: 'Full-Home Renovation',
    description: 'A delicate harmony of rich architectural lines, organic wooden textures, and fluid neutral settings. Designed for elevated coastal living, this residence blends open structures with micro-detailed craftsmanship.',
    year: '2024',
    location: 'Pacific Palisades, CA',
    images: [
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1637258368701-RSES8XIYWL6UORK9G674/3018_210625_Jeanette+%281%29.jpg?format=1000w',
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1635194050572-FJ2SXOU2H36RMR8J5Y71/3170_210625_Jeanette.jpg?format=1500w',
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1636054781686-8A1IDAGFQ32R63Q4CPUN/3018_210625_Jeanette.jpg?format=1500w',
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1636053898150-FDE8D22MPGDK2YWSGTQI/JeanetteMcNeely-11.2.20-Edits%284of14%29.jpg?format=500w',
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1635191728388-7L17HMA062HRTQD3L2CF/JeanetteMcNeely-11.5.20%281of9%29.jpg?format=500w'
    ],
    scope: [
      'Complete Space Planning',
      'Custom Millwork Design',
      'Fine Furnishings & Bespoke Curation',
      'Lighting Architecture',
      'Hard Surface Selection'
    ],
    size: '4,200 sq. ft.'
  },
  {
    id: 'oceanfront',
    title: 'Oceanfront Retreat',
    category: 'New Construction',
    description: 'An expansive modern pavilion overlooking the sea, utilizing custom sky-blue interior accents and neutral materials to echo the coastline. Minimal geometric furniture frames the stunning panorama.',
    year: '2025',
    location: 'Malibu, CA',
    images: [
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1710862689118-RWVPPWDEAG1DXIIPUK0O/9431_231010_McNeely.jpg?format=1500w',
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1710862749117-E6M20R4EZL20G9XUBE5V/9549_231010_McNeely.jpg?format=1500w',
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1743701092638-ZEBXY64TRCAK06861XEX/2515_250204_McNeely.jpg?format=300w'
    ],
    scope: [
      'Architectural Integration',
      'Textured Plastering Solutions',
      'Sustainably Sourced Cabinetry',
      'High-Performance Fixtures',
      'Outdoor Room Styling'
    ],
    size: '5,500 sq. ft.'
  },
  {
    id: 'gin-house',
    title: 'The Gin House Loft',
    category: 'Interior Decoration & Styling',
    description: 'An industrial residence turned sanctuary. Characterized by deep walnut timber, tailored soft goods, and custom antique curation that projects sophisticated luxury and comfortable spacing.',
    year: '2023',
    location: 'Portland, OR',
    images: [
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1635192909831-PVE9RMOE3I2ALW497HO4/9284_180530_Gin.jpg?format=1000w',
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1635192895179-91R5B1UO9TJ5X3IKTAEZ/9158_180530_Gin.jpg?format=750w'
    ],
    scope: [
      'Art Advisor & Framing Systems',
      'Color Block Directives',
      'Textile Layering',
      'Mid-Century Antique Sourcing'
    ],
    size: '2,800 sq. ft.'
  },
  {
    id: 'fransen',
    title: 'Fransen Estate',
    category: 'Custom Millwork & Interior Decorating',
    description: 'A classic property thoughtfully restored with custom geometric paneling, custom steel doors, and ambient lighting to cultivate warm luxury and beautiful domestic rhythm.',
    year: '2024',
    location: 'St. Helena, Napa Valley',
    images: [
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1636732112251-L7035T49M5CREAT6PIOF/2018.02%2BcFransen%2Bproject%2B150a-1.jpg?format=1000w',
      'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1635191869865-VVC9QGFU5TVKZLGR2JM4/Entryway+Chest+_+Mirror.jpg?format=500w'
    ],
    scope: [
      'Entrance Integrity Curation',
      'Restoration Layout Design',
      'Bespoke Freadware & Hardware Sourcing',
      'Lighting Curation & Automation'
    ],
    size: '6,400 sq. ft.'
  }
];

export const SERVICE_LIST: Service[] = [
  {
    id: 'construction',
    title: 'New Construction',
    description: 'Collaborating directly with leading architects and premium builders from primary design lines to finalize a structural vision with cohesive interior layers.',
    details: [
      'Initial Floor Plan Integration & Schematics',
      'Spatially Aware Lighting Maps & Outlets',
      'Sourcing Integrity Core Surfaces & Materials',
      'Fittings & Hardware Specifications',
      'Site Inspections & Architectural Continuity'
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation & Adaptive Reuse',
    description: 'Reimagining old spaces, honoring original building soul while enhancing daily living flow and visual elegance through contemporary architecture.',
    details: [
      'Structural Floor Plan & Space Optimizations',
      'Detailed Kitchen & Principal Bath Millwork Plans',
      'Sourcing Sustainable Resilient Claddings',
      'Subcontractor Briefings & Layout Guidance'
    ]
  },
  {
    id: 'furniture',
    title: 'Custom Furniture & Cabinetry',
    description: 'Designing bespoke, signature timber works, storage systems, and premium couches scaled perfectly to match the architecture.',
    details: [
      'CAD Sketching & Detailed Orthogonal Previews',
      'Textile Sourcing & High-Resilience Cushion Styling',
      'Working with Fine Local Carpenters & Artisans',
      'Custom Timber Treatment Selection'
    ]
  },
  {
    id: 'decorating',
    title: 'Interior Decorating & Curation',
    description: 'Providing the final atmospheric layer—fine art selection, luxury custom-woven fabrics, lighting, and beautiful, functional accessories.',
    details: [
      'Complete Living Spaces Textile Layout Plans',
      'Curation from High-End Global Antiques Brands',
      'Original Painting/Sculpture Sourcing',
      'Seasonal In-Home Restyling Options'
    ]
  },
  {
    id: 'project-management',
    title: 'Full-Scale Project Management',
    description: 'A seamless, hands-off concierge service taking care of ordering, tracking, storage, delivery, and full design-day installation.',
    details: [
      'Consolidated Order Tracking & Auditing',
      'Third-Party Secure Fine Art Warehousing',
      'Collaborator Coordination & Scheduled Deliveries',
      'Perfect One-Day Styling and Setup Reveal'
    ]
  }
];

// High-end biography content
export const BIO_CONTENT = {
  headline: 'We believe that luxury lies in quiet restraint, meticulous detail, and an absolute alignment with nature.',
  portraitUrl: 'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/4d3dd9e6-1553-4edf-8018-53f43b240e3f/Jeanette+-+Website+Photo.jpg?format=750w',
  paragraphs: [
    'Founded by Jeanette McNeely, STUDIO McNEELY is a high-end interior architecture and styling collective based in Southern California. The studio’s signature aesthetic is characterized by calm slate tones, soft sky-blue highlights, and pure tactile materials that reflect the quiet coastal atmosphere.',
    'Over the last decade, our team has built a reputation for designing sanctuaries—spaces that do not scream for attention but slowly reveal their quality through warm negative space, natural wood grain, pristine hand-plastered walls, and ambient light. We reject standard fast layouts, seeing every room as a custom portrait of how its owners breathe, work, and host.',
    'Whether managing a complex ground-up estate build or curating vintage collectibles for an architectural residence, we enforce a seamless execution model. Our meticulous planning and deep relationships with artisans ensure that the design phase is as refreshing, inspiring, and elegant as the finished home.'
  ],
  credentials: [
    { label: 'Founded', value: '2015' },
    { label: 'HQ Location', value: 'Pacific Palisades, California' },
    { label: 'Published In', value: 'Architectural Digest, Elle Decor, Luxe' },
    { label: 'Design Core', value: 'Editorial Restraint & Coastal Organicism' }
  ]
};

// Contact details and images
export const CONTACT_INFO = {
  imageUrl: 'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1635192895179-91R5B1UO9TJ5X3IKTAEZ/9158_180530_Gin.jpg?format=750w',
  address: '1528 Chautauqua Blvd, Pacific Palisades, CA 90272',
  phone: '+1 (310) 459-0021',
  email: 'hello@studiomcneely.com',
  workingHours: 'Mon - Fri, 9:00 AM - 6:00 PM PST',
  instagram: '@studiomcneely'
};
