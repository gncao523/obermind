import React from 'react'
import type { ComponentProps } from '../types'

interface LayoutProps extends ComponentProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen ${className}`}>
      {children}
    </div>
  )
}

export default Layout

