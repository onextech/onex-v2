import React from 'react'
import { pages as commonPages } from '@onex/common'
import routeConfig from './routeConfig'

export const services = [
  {
    title: 'Applications',
    slug: 'applications',
    items: [
      {
        title: 'Enterprise Applications',
        slug: 'enterprise-applications',
      },
      { title: 'Managed Applications', slug: 'managed-applications' },
      { title: 'Application Modernization', slug: 'application-modernization' },
    ],
  },
  {
    title: 'Engineering',
    slug: 'engineering',
    items: [
      { title: 'Research & Development', slug: 'research-development' },
      { title: 'API Development', slug: 'api-development' },
      { title: 'Microfrontend Development', slug: 'microfrontend-development' },
    ],
  },
  {
    title: 'Infrastructure & Cloud',
    slug: 'infrastructure-cloud',
    items: [
      { title: 'Managed DevOps', slug: 'managed-devops' },
      {
        title: 'Infrastructure Managed Services',
        slug: 'infrastructure-managed-services',
      },
      { title: 'Cloud Strategy & Design', slug: 'cloud-strategy-design' },
    ],
  },
  {
    slug: 'advisory',
    title: 'Advisory',
    items: [
      { title: 'Digital Strategy', slug: 'digital-strategy' },
      { title: 'Transformation & Delivery', slug: 'transformation-delivery' },
      { title: 'Architecture Design', slug: 'architecture-design' },
    ],
  },
  {
    slug: 'modern-workplace',
    title: 'Modern Workplace',
    items: [
      { title: 'Staff Augmentation', slug: 'staff-augmentation' },
      { title: 'Managed Product Teams', slug: 'managed-product-teams' },
      { title: 'Service Automation', slug: 'managed-product-teams' },
    ],
  },
  {
    title: 'Quality Assurance',
    slug: 'quality-assurance',
    items: [
      { title: 'Performance Optimization', slug: 'performance-optimization' },
      { title: 'Production Readiness', slug: 'production-readiness' },
      { title: 'Testing Automation', slug: 'testing-automation' },
    ],
  },
].map((service) => ({
  ...service,
  href: `${routeConfig.SERVICES}/${service.slug}`,
  items: service.items.map((item) => ({
    ...item,
    href: `${routeConfig.SERVICES}/${service.slug}`,
  })),
}))

export const industries = [
  {
    title: 'Financial Services',
    subtitle:
      'Support in cloud adoption and automation for startups and finance institutions.',
    slug: 'financial-services',
  },
  {
    title: 'Government',
    subtitle:
      'Support in cloud adoption and automation for startups and finance institutions.',
    slug: 'government-public-sectors',
  },
  {
    title: 'Maritime',
    subtitle:
      'Work with product experts with the know-how tested in 7+ industries.',
    slug: 'maritime',
  },
  {
    title: 'Real Estate',
    subtitle: 'Let certified engineers kick-start your cloud operations',
    slug: 'real-estate',
  },
].map((industry) => ({
  ...industry,
  href: `${routeConfig.INDUSTRIES}/${industry.slug}`,
}))

export const pages = commonPages

export const jobs = [
  {
    title: 'Business Consultant',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    slug: 'business-consultant',
  },
  {
    title: 'Middle Software Engineer',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    slug: 'middle-software-engineer',
  },
  {
    title: 'Project Manager',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    slug: 'middle-software-engineer',
  },
].map((page) => ({
  ...page,
  href: `/${page.slug}`,
  ctaUrl: 'https://www.linkedin.com/jobs/view/3511238718',
  html:
    '<h4 class="css-v3beis" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">Roles and responsibilities:</span></strong></span></span></h4>\n' +
    '<ol class="css-bcmuw8" data-slate-node="element">\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Manages Client / Account Lifecycle to achieve sales and objectives to optimize returns while strengthening a Service Culture that delivers on the service promise of GoTyme.</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Translating the broad area strategies into specific sales objectives, programs and action plans that fit area/industry/channel opportunities and trends for the implementation of sales activities to contribute to over-all performance.</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Cultivate mutually beneficial strategic and commercially viable partnership with enterprise accounts and other channel intermediaries that expand opportunities for sales and revenue, drive sales, sustainability, and growth, as well as loyalty and repeat business.</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Work with internal groups to deliver GoTyme&rsquo;s service &amp; product promise to improve efficiency, quality and customers satisfaction consistent with GoTyme&rsquo;s Way.</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Ensures best possible planning, execution and management of resources in accordance with business strategies and guidelines (regional budget management, manpower, project execution timelines, and cadence).</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Drive adherence to the consistent application of organizational processes and administrative standards to maintain efficient operations through personal example.</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">&nbsp;Future acquisitions that may include merchants and other industries that will have GoTyme Bank as one of the MOPs.</span></span></span></div>\n' +
    '    </li>\n' +
    '</ol>\n' +
    '<h4 class="css-v3beis" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">What does success look like?</span></strong></span></span></h4>\n' +
    '<ol class="css-bcmuw8" data-slate-node="element">\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Achieve overall Enterprise Sales objectives &amp; targets.&nbsp;</span></span></span></div>\n' +
    '        <ol class="css-bcmuw8" data-slate-node="element">\n' +
    '            <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '                <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">MEU (Monthly Enrolled Users)</span></span></span></div>\n' +
    '            </li>\n' +
    '            <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '                <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">MAU (Monthly Active Users)</span></span></span></div>\n' +
    '            </li>\n' +
    '            <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '                <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">MQU (Monthly Quality Users)</span></span></span></div>\n' +
    '            </li>\n' +
    '        </ol>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">&nbsp;Successful Partnership and Channel Sales Growth:</span></span></span></div>\n' +
    '        <ol class="css-bcmuw8" data-slate-node="element">\n' +
    '            <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '                <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Gokongwei Group (GG)</span></span></span></div>\n' +
    '            </li>\n' +
    '            <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '                <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Third Parties in GG</span></span></span></div>\n' +
    '            </li>\n' +
    '            <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '                <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">GG Suppliers</span></span></span></div>\n' +
    '            </li>\n' +
    '            <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '                <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Non-GG</span></span></span></div>\n' +
    '            </li>\n' +
    '        </ol>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Acceptance of GoTyme&rsquo;s products to Enterprise to achieve acquisition target.</span></span></span></div>\n' +
    '        <ol class="css-bcmuw8" data-slate-node="element">\n' +
    '            <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '                <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Disbursement (Payroll, &nbsp;Allowances, etc.)</span></span></span></div>\n' +
    '            </li>\n' +
    '            <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '                <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Earned Wage Access</span></span></span></div>\n' +
    '            </li>\n' +
    '            <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '                <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Others</span></span></span></div>\n' +
    '            </li>\n' +
    '        </ol>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Execute effective programs &amp; initiatives leading to competitive advantage versus competitors.</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Harmonious working relationship with internal and external clients to widen network, referrals, etc.</span></span></span></div>\n' +
    '    </li>\n' +
    '</ol>\n' +
    '<h4 class="css-v3beis" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Core competencies</span></span></span></h4>\n' +
    '<ul class="css-114byjr" data-slate-node="element">\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Customer First</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Market Driven Innovation</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Collaborative Teamwork</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Decision Making and Accountability</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Results Orientation</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Inspiring Self</span></span></span></div>\n' +
    '    </li>\n' +
    '</ul>\n' +
    '<h4 class="css-v3beis" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">Leadership competencies</span></strong></span></span></h4>\n' +
    '<ul class="css-114byjr" data-slate-node="element">\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Strategic and Business Acumen</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Resourceful Planning and Organizing</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Managing Change with Courage</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Optimal Results through People</span></span></span></div>\n' +
    '    </li>\n' +
    '</ul>\n' +
    '<h4 class="css-v3beis" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">Skills</span></strong></span></span></h4>\n' +
    '<ul class="css-114byjr" data-slate-fragment="JTVCJTdCJTIydHlwZSUyMiUzQSUyMmhlYWRpbmctNCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMlJvbGVzJTIwYW5kJTIwcmVzcG9uc2liaWxpdGllcyUzQSUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJib2xkJTIyJTNBdHJ1ZSU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJvcmRlcmVkLWxpc3QlMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJNYW5hZ2VzJTIwQ2xpZW50JTIwJTJGJTIwQWNjb3VudCUyMExpZmVjeWNsZSUyMHRvJTIwYWNoaWV2ZSUyMHNhbGVzJTIwYW5kJTIwb2JqZWN0aXZlcyUyMHRvJTIwb3B0aW1pemUlMjByZXR1cm5zJTIwd2hpbGUlMjBzdHJlbmd0aGVuaW5nJTIwYSUyMFNlcnZpY2UlMjBDdWx0dXJlJTIwdGhhdCUyMGRlbGl2ZXJzJTIwb24lMjB0aGUlMjBzZXJ2aWNlJTIwcHJvbWlzZSUyMG9mJTIwR29UeW1lLiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyVHJhbnNsYXRpbmclMjB0aGUlMjBicm9hZCUyMGFyZWElMjBzdHJhdGVnaWVzJTIwaW50byUyMHNwZWNpZmljJTIwc2FsZXMlMjBvYmplY3RpdmVzJTJDJTIwcHJvZ3JhbXMlMjBhbmQlMjBhY3Rpb24lMjBwbGFucyUyMHRoYXQlMjBmaXQlMjBhcmVhJTJGaW5kdXN0cnklMkZjaGFubmVsJTIwb3Bwb3J0dW5pdGllcyUyMGFuZCUyMHRyZW5kcyUyMGZvciUyMHRoZSUyMGltcGxlbWVudGF0aW9uJTIwb2YlMjBzYWxlcyUyMGFjdGl2aXRpZXMlMjB0byUyMGNvbnRyaWJ1dGUlMjB0byUyMG92ZXItYWxsJTIwcGVyZm9ybWFuY2UuJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJDdWx0aXZhdGUlMjBtdXR1YWxseSUyMGJlbmVmaWNpYWwlMjBzdHJhdGVnaWMlMjBhbmQlMjBjb21tZXJjaWFsbHklMjB2aWFibGUlMjBwYXJ0bmVyc2hpcCUyMHdpdGglMjBlbnRlcnByaXNlJTIwYWNjb3VudHMlMjBhbmQlMjBvdGhlciUyMGNoYW5uZWwlMjBpbnRlcm1lZGlhcmllcyUyMHRoYXQlMjBleHBhbmQlMjBvcHBvcnR1bml0aWVzJTIwZm9yJTIwc2FsZXMlMjBhbmQlMjByZXZlbnVlJTJDJTIwZHJpdmUlMjBzYWxlcyUyQyUyMHN1c3RhaW5hYmlsaXR5JTJDJTIwYW5kJTIwZ3Jvd3RoJTJDJTIwYXMlMjB3ZWxsJTIwYXMlMjBsb3lhbHR5JTIwYW5kJTIwcmVwZWF0JTIwYnVzaW5lc3MuJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJXb3JrJTIwd2l0aCUyMGludGVybmFsJTIwZ3JvdXBzJTIwdG8lMjBkZWxpdmVyJTIwR29UeW1lJUUyJTgwJTk5cyUyMHNlcnZpY2UlMjAlMjYlMjBwcm9kdWN0JTIwcHJvbWlzZSUyMHRvJTIwaW1wcm92ZSUyMGVmZmljaWVuY3klMkMlMjBxdWFsaXR5JTIwYW5kJTIwY3VzdG9tZXJzJTIwc2F0aXNmYWN0aW9uJTIwY29uc2lzdGVudCUyMHdpdGglMjBHb1R5bWUlRTIlODAlOTlzJTIwV2F5LiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyRW5zdXJlcyUyMGJlc3QlMjBwb3NzaWJsZSUyMHBsYW5uaW5nJTJDJTIwZXhlY3V0aW9uJTIwYW5kJTIwbWFuYWdlbWVudCUyMG9mJTIwcmVzb3VyY2VzJTIwaW4lMjBhY2NvcmRhbmNlJTIwd2l0aCUyMGJ1c2luZXNzJTIwc3RyYXRlZ2llcyUyMGFuZCUyMGd1aWRlbGluZXMlMjAocmVnaW9uYWwlMjBidWRnZXQlMjBtYW5hZ2VtZW50JTJDJTIwbWFucG93ZXIlMkMlMjBwcm9qZWN0JTIwZXhlY3V0aW9uJTIwdGltZWxpbmVzJTJDJTIwYW5kJTIwY2FkZW5jZSkuJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJEcml2ZSUyMGFkaGVyZW5jZSUyMHRvJTIwdGhlJTIwY29uc2lzdGVudCUyMGFwcGxpY2F0aW9uJTIwb2YlMjBvcmdhbml6YXRpb25hbCUyMHByb2Nlc3NlcyUyMGFuZCUyMGFkbWluaXN0cmF0aXZlJTIwc3RhbmRhcmRzJTIwdG8lMjBtYWludGFpbiUyMGVmZmljaWVudCUyMG9wZXJhdGlvbnMlMjB0aHJvdWdoJTIwcGVyc29uYWwlMjBleGFtcGxlLiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyJUMyJUEwRnV0dXJlJTIwYWNxdWlzaXRpb25zJTIwdGhhdCUyMG1heSUyMGluY2x1ZGUlMjBtZXJjaGFudHMlMjBhbmQlMjBvdGhlciUyMGluZHVzdHJpZXMlMjB0aGF0JTIwd2lsbCUyMGhhdmUlMjBHb1R5bWUlMjBCYW5rJTIwYXMlMjBvbmUlMjBvZiUyMHRoZSUyME1PUHMuJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJoZWFkaW5nLTQlMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJXaGF0JTIwZG9lcyUyMHN1Y2Nlc3MlMjBsb29rJTIwbGlrZSUzRiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJib2xkJTIyJTNBdHJ1ZSU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJvcmRlcmVkLWxpc3QlMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJBY2hpZXZlJTIwb3ZlcmFsbCUyMEVudGVycHJpc2UlMjBTYWxlcyUyMG9iamVjdGl2ZXMlMjAlMjYlMjB0YXJnZXRzLiUyMCUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIyb3JkZXJlZC1saXN0JTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyTUVVJTIwKE1vbnRobHklMjBFbnJvbGxlZCUyMFVzZXJzKSUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyTUFVJTIwKE1vbnRobHklMjBBY3RpdmUlMjBVc2VycyklMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMk1RVSUyMChNb250aGx5JTIwUXVhbGl0eSUyMFVzZXJzKSUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyJUMyJUEwU3VjY2Vzc2Z1bCUyMFBhcnRuZXJzaGlwJTIwYW5kJTIwQ2hhbm5lbCUyMFNhbGVzJTIwR3Jvd3RoJTNBJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJvcmRlcmVkLWxpc3QlMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJHb2tvbmd3ZWklMjBHcm91cCUyMChHRyklMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMlRoaXJkJTIwUGFydGllcyUyMGluJTIwR0clMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMkdHJTIwU3VwcGxpZXJzJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJOb24tR0clMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMkFjY2VwdGFuY2UlMjBvZiUyMEdvVHltZSVFMiU4MCU5OXMlMjBwcm9kdWN0cyUyMHRvJTIwRW50ZXJwcmlzZSUyMHRvJTIwYWNoaWV2ZSUyMGFjcXVpc2l0aW9uJTIwdGFyZ2V0LiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIyb3JkZXJlZC1saXN0JTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyRGlzYnVyc2VtZW50JTIwKFBheXJvbGwlMkMlMjAlQzIlQTBBbGxvd2FuY2VzJTJDJTIwZXRjLiklMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMkVhcm5lZCUyMFdhZ2UlMjBBY2Nlc3MlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMk90aGVycyUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyRXhlY3V0ZSUyMGVmZmVjdGl2ZSUyMHByb2dyYW1zJTIwJTI2JTIwaW5pdGlhdGl2ZXMlMjBsZWFkaW5nJTIwdG8lMjBjb21wZXRpdGl2ZSUyMGFkdmFudGFnZSUyMHZlcnN1cyUyMGNvbXBldGl0b3JzLiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIySGFybW9uaW91cyUyMHdvcmtpbmclMjByZWxhdGlvbnNoaXAlMjB3aXRoJTIwaW50ZXJuYWwlMjBhbmQlMjBleHRlcm5hbCUyMGNsaWVudHMlMjB0byUyMHdpZGVuJTIwbmV0d29yayUyQyUyMHJlZmVycmFscyUyQyUyMGV0Yy4lMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmhlYWRpbmctNCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMkNvcmUlMjBjb21wZXRlbmNpZXMlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMnVub3JkZXJlZC1saXN0JTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyQ3VzdG9tZXIlMjBGaXJzdCUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyTWFya2V0JTIwRHJpdmVuJTIwSW5ub3ZhdGlvbiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyQ29sbGFib3JhdGl2ZSUyMFRlYW13b3JrJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJEZWNpc2lvbiUyME1ha2luZyUyMGFuZCUyMEFjY291bnRhYmlsaXR5JTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJSZXN1bHRzJTIwT3JpZW50YXRpb24lMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMkluc3BpcmluZyUyMFNlbGYlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmhlYWRpbmctNCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMkxlYWRlcnNoaXAlMjBjb21wZXRlbmNpZXMlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTJDJTIyYm9sZCUyMiUzQXRydWUlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIydW5vcmRlcmVkLWxpc3QlMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJTdHJhdGVnaWMlMjBhbmQlMjBCdXNpbmVzcyUyMEFjdW1lbiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyUmVzb3VyY2VmdWwlMjBQbGFubmluZyUyMGFuZCUyME9yZ2FuaXppbmclMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMk1hbmFnaW5nJTIwQ2hhbmdlJTIwd2l0aCUyMENvdXJhZ2UlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMk9wdGltYWwlMjBSZXN1bHRzJTIwdGhyb3VnaCUyMFBlb3BsZSUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIyaGVhZGluZy00JTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyU2tpbGxzJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCUyQyUyMmJvbGQlMjIlM0F0cnVlJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMnVub3JkZXJlZC1saXN0JTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyQnVzaW5lc3MlMjBEZXZlbG9wbWVudCUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIySW50ZXJwZXJzb25hbCUyMCUyNiUyMFBlb3BsZSUyMFNraWxscyUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyTmVnb3RpYXRpb25zJTIwJTI2JTIwSW5mbHVlbmNpbmclMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMlBhcnRuZXIlMjBNYW5hZ2VtZW50JTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJQcm9qZWN0JTIwJTI2JTIwUmVzb3VyY2UlMjBNZ210LiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyUHJlc2VudGF0aW9uJTIwJTI2JTIwUGVyZm9ybWFuY2UlMjBNYW5hZ2VtZW50JTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJsaXN0LWl0ZW0lMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJDb21wdXRlciUyMFByb2ZpY2llbmN5JTIwd2l0aCUyME1TJTIwUHJvZ3JhbXMlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMkFjY3VyYWN5JTIwYW5kJTIwQXR0ZW50aW9uJTIwdG8lMjBEZXRhaWwlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmxpc3QtaXRlbSUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMkZsZXhpYmlsaXR5JTIwJTI2JTIwQ3JlYXRpdml0eSUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RA==" data-slate-node="element">\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Business Development</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Interpersonal &amp; People Skills</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Negotiations &amp; Influencing</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Partner Management</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Project &amp; Resource Mgmt.</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Presentation &amp; Performance Management</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Computer Proficiency with MS Programs</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Accuracy and Attention to Detail</span></span></span></div>\n' +
    '    </li>\n' +
    '    <li class="css-1eg5fk0" data-slate-node="element">\n' +
    '        <div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">Flexibility &amp; Creativity</span></span></span></div>\n' +
    '    </li>\n' +
    '</ul>\n' +
    '<div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-length="0" data-slate-zero-width="n"></span></span></span><br></div>',
}))
