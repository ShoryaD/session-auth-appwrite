import React from 'react'
import Header from '../components/Header'

export default function protectedLayout({children}) {
  return (
  <>
  <Header />
  {children}
  </>
  )
}