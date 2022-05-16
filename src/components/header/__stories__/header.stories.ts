import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_IDS } from '../../../global/defs/iconIds';
import '../header';

export default {
  title: 'Web Components/Header',
  component: `${PREFIX_TAG}-header`,
};

const Template = args => {
  const navItems  =  {
    mainNavItems: [
      {
        label: 'Investors',
        href: ''
      }
    ],
  
    primaryNavItems: [
      {
        label: 'Services',
        href: '',
        description: 'Kyndryl has a comprehensive set of Technology Services around hybrid cloud solutions, business resiliency and network services for your IT transformations.',
        subMenuItems:
        {
          group1: [
            {
              label: 'Applications',
              href: ''
            },
            {
              label: 'Core Enterprise and zCloud',
              href: ''
            },
            {
              label: 'Digital Workplace',
              href: ''
            },
            {
              label: 'Security and Resiliency',
              href: ''
            }
          ],
          group2: [
            {
              label: 'Cloud Services',
              href: ''
            },
            {
              label: 'Data and AI',
              href: ''
            },
            {
              label: 'Network and Edge',
              href: ''
            }
          ],
          extraDetails: {
            label: 'Advisory & Implementation Services',
            description: 'Strategize, design, and adopt technology solutions to unlock the full potential of digital transformation.'
          }
        },
      }, {
        label: 'Industries',
        href: '',
        description: 'Kyndryl’s industry experts help modernize, digitize and secure your IT to provide outstanding customer experiences.',
        subMenuItems: {
          group1: [
            {
              label: 'Banking and Financial Markets',
              href: ''
            },
            {
              label: 'Healthcare',
              href: ''
            },
            {
              label: 'Manufacturing',
              href: ''
            }
          ],
          group2: [
            {
              label: 'Government',
              href: ''
            },
            {
              label: 'Insurance',
              href: ''
            },
            {
              label: 'Communications and Media',
              href: ''
            }
          ],
          extraDetails: {
            label: 'US Public Sector Grants Program',
            description: 'Kyndryl can help you identify and secure state and federal funding to support your critical technology projects.'
          }
        },
      },
      {
        label: 'About Us',
        href: '',
        description: 'Empowering progress while modernizing and managing the world’s mission-critical systems and services.',
        subMenuItems: {
          group1: [
            {
              label: 'Leadership',
              href: ''
            },
            {
              label: 'Contact Us',
              href: ''
            },
            {
              label: 'Investors',
              href: ''
            }
          ],
          group2: [
            {
              label: 'Alliances',
              href: ''
            },
            {
              label: 'Locations',
              href: ''
            },
            {
              label: 'Careers',
              href: ''
            }
          ],
          extraDetails: {
            label: 'Sustainability Spotlight',
            description: 'Our focus is on mitigating the impacts of climate change by achieving net zero and reducing our environmental footprint.'
          }
        }
      },
      {
        label: 'News and Insights',
        href: '',
      },
      {
        label: 'Customer Stories',
        href: '',
      },
      {
        label: 'Careers',
        href: '',
      }
      
    ]
  };
  return html`
      <kd-header .navItems="${navItems}"></kd-header>
    `;
};

export const header = Template.bind({});