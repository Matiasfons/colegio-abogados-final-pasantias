'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Twitter, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react'

export default function FooterComponent() {
  const footerNavs = [
    {
      title: 'Products',
      items: [
        { href: '/search', name: 'Search' },
        { href: '/maps', name: 'Maps' },
        { href: '/photos', name: 'Photos' },
      ],
    },
    {
      title: 'Company',
      items: [
        { href: '/about', name: 'About' },
        { href: '/careers', name: 'Careers' },
        { href: '/press', name: 'Press' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { href: '/developers', name: 'Developers' },
        { href: '/advertising', name: 'Advertising' },
        { href: '/business', name: 'For Business' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { href: '/privacy', name: 'Privacy' },
        { href: '/terms', name: 'Terms' },
        { href: '/settings', name: 'Settings' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/yourcompany' },
    { icon: Facebook, href: 'https://facebook.com/yourcompany' },
    { icon: Linkedin, href: 'https://linkedin.com/company/yourcompany' },
    { icon: Youtube, href: 'https://youtube.com/yourcompany' },
    { icon: Instagram, href: 'https://instagram.com/yourcompany' },
  ]

  return (
    <footer className="bg-gray-50 text-xs text-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {footerNavs.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.items.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Company Logo" className="h-6 w-auto" />
              <span className="text-sm font-semibold text-gray-900">YourCompany</span>
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{link.icon.name}</span>
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get started
              <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
          <div className="mt-4 text-center text-gray-500">
            <p>© {new Date().getFullYear()} YourCompany, Inc. All rights reserved.</p>
            <p className="mt-1">
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>{' '}
              &bull;{' '}
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}