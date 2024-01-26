import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Karlos's Contact",
  description: 'Esta es la pagina de contacto de nuestra web',
  keywords: ['Contact Page', 'FerHerrera', 'KarlosVillegas', 'Next14']
}


export default  function ContactPage() {
  return (
   <>
     <div className='text-7xl'>Contact Page</div>
   </>
  )
}
