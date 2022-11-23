'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'


const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const segment = useSelectedLayoutSegment();
  // console.log({ href, segment })

  // const isActive = href === `/${segment}` ; // without home route
  const isActive = href === `/${segment}` || (href == '/' && segment == null); // with home route
  return (
    <Link href={href} className={isActive ? 'active-link' : 'link'}>{children}</Link>
  )
}

export default NavLink