'use client'

import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navigation = [
    { 
      title: "Products", 
      path: "javascript:void(0)",
      submenu: [
        { title: "Analytics", path: "javascript:void(0)" },
        { title: "Marketing", path: "javascript:void(0)" },
        { title: "Commerce", path: "javascript:void(0)" },
      ]
    },
    { 
      title: "Solutions", 
      path: "javascript:void(0)",
      submenu: [
        { title: "Small Business", path: "javascript:void(0)" },
        { title: "Enterprise", path: "javascript:void(0)" },
      ]
    },
    { title: "Pricing", path: "javascript:void(0)" },
    { title: "Contact", path: "/contact" },
  ]

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="javascript:void(0)" className="flex items-center space-x-3">
            <img
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-semibold">YourBrand</span>
          </a>
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                {item.submenu && openDropdown === item.title && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-500" />
            ) : (
              <Menu className="h-6 w-6 text-gray-500" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            {navigation.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                  )}
                </button>
                {item.submenu && openDropdown === item.title && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}