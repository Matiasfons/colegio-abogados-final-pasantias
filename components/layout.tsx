'use client'
import React from 'react'
import FooterComponent from './footer'
import NavbarComponent from './navbar'

export default function LayoutComponent({children}:{children:React.ReactNode}) {
  return (
    <div className='h-svh w-full overflow-scroll overscroll-contain' >
        <NavbarComponent/>
        {children}
        <FooterComponent/>

    </div>
  )
}
